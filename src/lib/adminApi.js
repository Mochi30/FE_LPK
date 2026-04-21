import { clearAdminSession, getAdminSession } from "./adminSession";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api").replace(/\/$/, "");

async function request(path, options = {}) {
  const isAdminRequest = path.startsWith("/admin") && path !== "/admin/login";
  const token = getAdminSession()?.token;
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...(isAdminRequest && token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    if (response.status === 401 && isAdminRequest) {
      clearAdminSession();
    }

    const text = await response.text();
    throw new Error(text || `Request failed: ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export const adminApi = {
  login: (payload) =>
    request("/admin/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  getSession: () => request("/admin/session"),
  logout: () =>
    request("/admin/logout", {
      method: "POST",
    }),

  getDashboard: () => request("/admin/dashboard"),

  getLspPartners: () => request("/admin/lsp-partners?include_archived=1"),
  createLspPartner: (payload) =>
    request("/admin/lsp-partners", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  updateLspPartner: (id, payload) =>
    request(`/admin/lsp-partners/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
  archiveLspPartner: (id) =>
    request(`/admin/lsp-partners/${id}`, {
      method: "DELETE",
    }),
  restoreLspPartner: (id) =>
    request(`/admin/lsp-partners/${id}/restore`, {
      method: "POST",
    }),

  getRegistrations: () => request("/admin/registrations"),
  createRegistration: (payload) =>
    request("/admin/registrations", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  updateRegistrationStatus: (id, payload) =>
    request(`/admin/registrations/${id}/status`, {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  resendRegistrationConfirmation: (id) =>
    request(`/admin/registrations/${id}/resend-confirmation`, {
      method: "POST",
    }),
  downloadRegistrationsExport: async () => {
    const token = getAdminSession()?.token;
    const response = await fetch(`${API_BASE}/admin/registrations/export`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    if (!response.ok) {
      throw new Error("Gagal mengunduh export pendaftaran.");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "registrations-export.csv";
    anchor.click();
    window.URL.revokeObjectURL(url);
  },

  getCertificates: () => request("/admin/certificates"),
  issueCertificate: (registrationId, payload) =>
    request(`/admin/registrations/${registrationId}/issue-certificate`, {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  resendCertificate: (certificateId) =>
    request(`/admin/certificates/${certificateId}/resend`, {
      method: "POST",
    }),
  markCertificateOpened: (certificateId) =>
    request(`/admin/certificates/${certificateId}/mark-opened`, {
      method: "POST",
    }),

  getArticles: () => request("/admin/articles?published_only=0"),
  createArticle: (payload) =>
    request("/admin/articles", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  updateArticle: (id, payload) =>
    request(`/admin/articles/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),

  getFaqs: () => request("/admin/faqs?active_only=0"),
  createFaq: (payload) =>
    request("/admin/faqs", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  updateFaq: (id, payload) =>
    request(`/admin/faqs/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
};

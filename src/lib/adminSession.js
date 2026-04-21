const STORAGE_KEY = "wirapindo_admin_session";

export function getAdminSession() {
  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function isAdminAuthenticated() {
  const session = getAdminSession();
  return Boolean(session?.token);
}

export function saveAdminSession(session) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  return session;
}

export function clearAdminSession() {
  window.localStorage.removeItem(STORAGE_KEY);
}

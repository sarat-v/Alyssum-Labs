"use client";

export function ManageCookiesButton() {
  return (
    <button
      type="button"
      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
    >
      Manage Cookies
    </button>
  );
}

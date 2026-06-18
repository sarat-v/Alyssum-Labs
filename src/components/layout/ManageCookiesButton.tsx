"use client";

export function ManageCookiesButton() {
  return (
    <button
      type="button"
      className="text-sm text-dark-text-secondary transition-colors hover:text-off-white"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
    >
      Manage Cookies
    </button>
  );
}

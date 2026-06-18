"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_KEY,
  defaultCookieConsent,
  parseCookieConsent,
  type CookieConsent,
} from "@/lib/cookieConsent";

function persistConsent(consent: CookieConsent) {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event("cookie-consent-updated"));
}

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = parseCookieConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
    if (!existing) {
      setIsVisible(true);
      return;
    }
    setAnalytics(existing.analytics);
    setMarketing(existing.marketing);
  }, []);

  useEffect(() => {
    const openSettings = () => {
      setShowManage(true);
      setIsVisible(true);
    };
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  const saveConsent = (next: Pick<CookieConsent, "analytics" | "marketing">) => {
    persistConsent({
      essential: true,
      analytics: next.analytics,
      marketing: next.marketing,
      updatedAt: new Date().toISOString(),
    });
    setAnalytics(next.analytics);
    setMarketing(next.marketing);
    setIsVisible(false);
    setShowManage(false);
  };

  if (!isVisible) {
    return (
      <button
        type="button"
        className="fixed bottom-4 right-4 z-70 rounded-full border border-border-subtle bg-off-white/95 px-4 py-2 text-xs text-text-secondary shadow-md backdrop-blur-xl"
        onClick={() => {
          setIsVisible(true);
          setShowManage(true);
        }}
      >
        Cookie settings
      </button>
    );
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-70 mx-auto max-w-3xl rounded-2xl border border-border-subtle bg-off-white/95 p-5 shadow-xl backdrop-blur-xl lg:bottom-6">
      <p className="font-serif text-xl text-text-primary">Cookie preferences</p>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        We use essential cookies for site functionality and optional cookies for analytics. You
        can change preferences at any time in this banner.
      </p>
      <p className="mt-1 text-xs text-text-secondary">
        Read our{" "}
        <Link href="/cookie-policy" className="underline-offset-4 hover:underline">
          Cookie Policy
        </Link>
        .
      </p>

      {showManage ? (
        <div className="mt-4 space-y-3 rounded-xl border border-border-subtle/70 p-4">
          <PreferenceRow
            title="Essential"
            description="Required for core site functionality."
            enabled
            locked
            onChange={() => {}}
          />
          <PreferenceRow
            title="Analytics"
            description="Helps us understand site usage and improve performance."
            enabled={analytics}
            onChange={() => setAnalytics((v) => !v)}
          />
          <PreferenceRow
            title="Marketing"
            description="Reserved for future campaign and ad measurement tools."
            enabled={marketing}
            onChange={() => setMarketing((v) => !v)}
          />
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-full border border-border-subtle px-4 py-2 text-sm text-text-primary"
          onClick={() => saveConsent({ analytics: false, marketing: false })}
        >
          Reject non-essential
        </button>
        <button
          type="button"
          className="rounded-full border border-border-subtle px-4 py-2 text-sm text-text-primary"
          onClick={() => setShowManage((v) => !v)}
        >
          {showManage ? "Hide settings" : "Manage settings"}
        </button>
        <button
          type="button"
          className="rounded-full bg-accent-core px-4 py-2 text-sm font-medium text-off-white"
          onClick={() =>
            saveConsent({
              analytics: showManage ? analytics : true,
              marketing: showManage ? marketing : true,
            })
          }
        >
          {showManage ? "Save preferences" : "Accept all"}
        </button>
      </div>
    </div>
  );
}

function PreferenceRow({
  title,
  description,
  enabled,
  locked,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-text-primary">{title}</p>
        <p className="text-xs text-text-secondary">{description}</p>
      </div>
      <button
        type="button"
        onClick={onChange}
        disabled={locked}
        className="min-w-16 rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {enabled ? "On" : "Off"}
      </button>
    </div>
  );
}

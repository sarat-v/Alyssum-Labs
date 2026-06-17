"use client";

import { useEffect, useRef } from "react";
import { COOKIE_CONSENT_KEY, parseCookieConsent } from "@/lib/cookieConsent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_SCRIPT_ID = "alyssum-ga-script";
const GA_BOOTSTRAP_ID = "alyssum-ga-bootstrap";

export function AnalyticsLoader() {
  const initialized = useRef(false);

  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!measurementId) return;

    const maybeInitialize = () => {
      const consent = parseCookieConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
      if (!consent?.analytics || initialized.current) return;

      if (!document.getElementById(GA_SCRIPT_ID)) {
        const script = document.createElement("script");
        script.id = GA_SCRIPT_ID;
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script);
      }

      if (!document.getElementById(GA_BOOTSTRAP_ID)) {
        const inline = document.createElement("script");
        inline.id = GA_BOOTSTRAP_ID;
        inline.text = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `;
        document.head.appendChild(inline);
      }

      initialized.current = true;
    };

    maybeInitialize();
    window.addEventListener("cookie-consent-updated", maybeInitialize);
    return () => window.removeEventListener("cookie-consent-updated", maybeInitialize);
  }, []);

  return null;
}

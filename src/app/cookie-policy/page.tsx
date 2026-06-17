import type { Metadata } from "next";
import {
  LegalDocument,
  LegalEmail,
  LegalLink,
  LegalSection,
} from "@/components/legal/LegalDocument";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Alyssum Labs uses cookies and similar technologies on alyssumlabs.com, and how to manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <LegalDocument title="Cookie Policy">
      <LegalSection title="3.1 About this Policy">
        <p>
          This Cookie Policy explains how <strong>{site.legalName}</strong> (&quot;Alyssum
          Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar
          tracking technologies on the website located at <strong>www.alyssumlabs.com</strong> (the
          &quot;Site&quot;). It should be read together with our{" "}
          <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>.
        </p>
        <p>This Policy applies to all visitors to the Site.</p>
      </LegalSection>

      <LegalSection title="3.2 What Are Cookies?">
        <p>
          Cookies are small text files placed on your device (computer, tablet, mobile phone) when
          you visit a website. They allow the website to recognise your device, remember your
          preferences, and improve your browsing experience.
        </p>
        <p>Cookies may be:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Session cookies</strong> — temporary, deleted when you close your browser
          </li>
          <li>
            <strong>Persistent cookies</strong> — stored on your device until they expire or you
            delete them
          </li>
          <li>
            <strong>First-party cookies</strong> — set by the website you are visiting
          </li>
          <li>
            <strong>Third-party cookies</strong> — set by external services used by the website
            (e.g. analytics providers)
          </li>
        </ul>
        <p>
          We also use similar technologies — including pixels, web beacons, and local storage —
          which function comparably to cookies. References to &quot;cookies&quot; in this Policy
          include these similar technologies.
        </p>
      </LegalSection>

      <LegalSection title="3.3 Categories of Cookies We Use">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="py-2 pr-4 font-medium text-text-primary">Category</th>
                <th className="py-2 pr-4 font-medium text-text-primary">Purpose</th>
                <th className="py-2 pr-4 font-medium text-text-primary">Examples</th>
                <th className="py-2 font-medium text-text-primary">Legal Basis</th>
              </tr>
            </thead>
            <tbody className="[&_td]:py-2 [&_td]:align-top">
              <tr className="border-b border-border-subtle/70">
                <td className="pr-4 font-medium text-text-primary">Strictly Necessary</td>
                <td className="pr-4">
                  Required for the Site to function properly. These cannot be disabled.
                </td>
                <td className="pr-4">Session management, security, load balancing</td>
                <td>Legitimate interest / Performance of services</td>
              </tr>
              <tr className="border-b border-border-subtle/70">
                <td className="pr-4 font-medium text-text-primary">Analytics</td>
                <td className="pr-4">
                  Help us understand how visitors interact with the Site, so we can improve content
                  and performance.
                </td>
                <td className="pr-4">Google Analytics (GA4)</td>
                <td>Consent</td>
              </tr>
              <tr>
                <td className="pr-4 font-medium text-text-primary">Functional</td>
                <td className="pr-4">
                  Remember choices you make to provide enhanced functionality.
                </td>
                <td className="pr-4">Cookie preference storage</td>
                <td>Consent</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We do not use cookies for advertising, profiling, or behavioural targeting purposes.
        </p>
      </LegalSection>

      <LegalSection title="3.4 Specific Cookies Used">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="py-2 pr-3 font-medium text-text-primary">Name</th>
                <th className="py-2 pr-3 font-medium text-text-primary">Provider</th>
                <th className="py-2 pr-3 font-medium text-text-primary">Purpose</th>
                <th className="py-2 pr-3 font-medium text-text-primary">Type</th>
                <th className="py-2 font-medium text-text-primary">Duration</th>
              </tr>
            </thead>
            <tbody className="[&_td]:py-2 [&_td]:align-top">
              <tr className="border-b border-border-subtle/70">
                <td className="pr-3 font-mono text-xs">alyssum_cookie_consent_v1</td>
                <td className="pr-3">{site.legalName}</td>
                <td className="pr-3">Stores your cookie consent preferences</td>
                <td className="pr-3">Functional (local storage)</td>
                <td>Until cleared or updated</td>
              </tr>
              <tr className="border-b border-border-subtle/70">
                <td className="pr-3 font-mono text-xs">_ga</td>
                <td className="pr-3">Google</td>
                <td className="pr-3">Distinguishes users for analytics (GA4)</td>
                <td className="pr-3">Analytics (third-party cookie)</td>
                <td>Up to 2 years</td>
              </tr>
              <tr>
                <td className="pr-3 font-mono text-xs">_ga_*</td>
                <td className="pr-3">Google</td>
                <td className="pr-3">Maintains session state for GA4</td>
                <td className="pr-3">Analytics (third-party cookie)</td>
                <td>Up to 2 years</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Analytics cookies are set only if you accept analytics cookies through the consent banner.
          Marketing cookies are not currently in use on the Site.
        </p>
      </LegalSection>

      <LegalSection title="3.5 Your Choices">
        <p>You have the right to choose whether to accept non-essential cookies on the Site.</p>
        <p>
          <strong>Cookie Consent Banner.</strong> On your first visit to the Site, you will be
          presented with a cookie consent banner allowing you to accept or decline non-essential
          cookies, and to manage your preferences by category.
        </p>
        <p>
          <strong>Managing Preferences.</strong> You may revisit and change your cookie preferences
          at any time by clicking the <strong>&quot;Manage Cookies&quot;</strong> link in the footer
          of any page of the Site.
        </p>
        <p>
          <strong>Browser Controls.</strong> You may also control or delete cookies through your
          browser settings. Note that disabling cookies may affect the functionality of the Site.
          Information on managing cookies in common browsers is available at:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Chrome:{" "}
            <a
              href="https://support.google.com/chrome/answer/95647"
              className="text-accent-core underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              support.google.com/chrome
            </a>
          </li>
          <li>
            Firefox:{" "}
            <a
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
              className="text-accent-core underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              support.mozilla.org
            </a>
          </li>
          <li>
            Safari:{" "}
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              className="text-accent-core underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              support.apple.com
            </a>
          </li>
          <li>
            Edge:{" "}
            <a
              href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              className="text-accent-core underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              support.microsoft.com
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3.6 Third-Party Cookies">
        <p>
          Some cookies on the Site are set by third-party services we use (such as analytics
          providers). These third parties may collect information about your use of the Site in
          accordance with their own privacy and cookie policies. We do not control these
          third-party cookies and recommend you review the relevant policies of any third-party
          service.
        </p>
      </LegalSection>

      <LegalSection title="3.7 Changes to this Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our practices,
          the cookies we use, or applicable law. The &quot;Last updated&quot; date at the top of
          this Policy will reflect the most recent revision.
        </p>
      </LegalSection>

      <LegalSection title="3.8 Contact">
        <p>For any questions about this Cookie Policy or our use of cookies, please contact:</p>
        <p>
          <strong>{site.legalName}</strong>
          <br />
          {site.registeredOfficeAddress[0]}
          <br />
          Email: <LegalEmail email={site.email} />
        </p>
      </LegalSection>
    </LegalDocument>
  );
}

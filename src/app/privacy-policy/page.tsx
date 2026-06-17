import type { Metadata } from "next";
import {
  LegalDocument,
  LegalEmail,
  LegalLink,
  LegalSection,
} from "@/components/legal/LegalDocument";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Alyssum Labs collects, uses, discloses, and protects personal data in connection with alyssumlabs.com.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument title="Privacy Policy">
      <LegalSection title="1.1 About this Policy">
        <p>
          This Privacy Policy describes how <strong>{site.legalName}</strong> (&quot;Alyssum
          Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses,
          and protects personal data in connection with the website located at{" "}
          <strong>www.alyssumlabs.com</strong> (the &quot;Site&quot;).
        </p>
        <p>
          We are committed to handling personal data with care, transparency, and in accordance with
          applicable data protection laws — including the{" "}
          <strong>Singapore Personal Data Protection Act 2012</strong> (PDPA), the{" "}
          <strong>EU General Data Protection Regulation</strong> (GDPR), the{" "}
          <strong>UK Data Protection Act 2018</strong> and <strong>UK GDPR</strong>, and the{" "}
          <strong>California Consumer Privacy Act</strong> as amended by the California Privacy
          Rights Act (CCPA/CPRA), where applicable.
        </p>
        <p>
          By accessing or using the Site, you acknowledge that you have read and understood the
          practices described in this Policy.
        </p>
      </LegalSection>

      <LegalSection title="1.2 Who We Are">
        <p>{site.legalName} is a private limited company incorporated in Singapore.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>UEN:</strong> {site.uen}
          </li>
          <li>
            <strong>Registered office:</strong> {site.registeredOfficeAddress[0]}
          </li>
          <li>
            <strong>Contact for data protection matters:</strong>{" "}
            <LegalEmail email={site.email} />
          </li>
        </ul>
        <p>
          For the purposes of GDPR, {site.legalName} is the <strong>data controller</strong> of
          personal data collected via the Site.
        </p>
      </LegalSection>

      <LegalSection title="1.3 Personal Data We Collect">
        <p>We collect personal data only when it is provided to us directly through the Site.</p>
        <p>
          <strong>Enquiry form submissions:</strong>
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Name</li>
          <li>Organisation name</li>
          <li>Email address</li>
          <li>Area of interest (Life Sciences / Private Capital / Other)</li>
          <li>Message content</li>
        </ul>
        <p>
          <strong>Automatically collected information:</strong> We may collect limited technical
          information when you visit the Site — including IP address, browser type, device type,
          operating system, referring URL, and pages visited. This information is collected for
          security, analytics, and Site performance purposes. See our{" "}
          <LegalLink href="/cookie-policy">Cookie Policy</LegalLink> for further detail.
        </p>
        <p>
          We do not knowingly collect any special categories of personal data through this Site.
          Visitors are asked not to submit such information through the enquiry form.
        </p>
      </LegalSection>

      <LegalSection title="1.4 How We Use Personal Data">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="py-2 pr-4 font-medium text-text-primary">Purpose</th>
                <th className="py-2 font-medium text-text-primary">Legal Basis (GDPR)</th>
              </tr>
            </thead>
            <tbody className="[&_td]:py-2 [&_td]:align-top">
              <tr className="border-b border-border-subtle/70">
                <td className="pr-4">To respond to enquiries submitted through the Site</td>
                <td>Performance of pre-contractual steps at your request / Consent</td>
              </tr>
              <tr className="border-b border-border-subtle/70">
                <td className="pr-4">To communicate with you in connection with your enquiry</td>
                <td>Legitimate interest in conducting our business</td>
              </tr>
              <tr className="border-b border-border-subtle/70">
                <td className="pr-4">
                  To improve the Site, its content, and its user experience
                </td>
                <td>Legitimate interest in maintaining and improving our services</td>
              </tr>
              <tr className="border-b border-border-subtle/70">
                <td className="pr-4">To comply with legal and regulatory obligations</td>
                <td>Legal obligation</td>
              </tr>
              <tr>
                <td className="pr-4">To protect the security and integrity of the Site</td>
                <td>Legitimate interest in security</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Under PDPA, we rely on consent for the collection, use, and disclosure of personal data
          for the purposes set out above. Under CCPA/CPRA, the purposes above constitute
          &quot;business purposes&quot; as defined in the legislation.
        </p>
      </LegalSection>

      <LegalSection title="1.5 Disclosure of Personal Data">
        <p>We do not sell personal data. We do not share personal data for advertising or marketing purposes.</p>
        <p>We may disclose personal data only to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Service providers</strong> acting on our behalf — including website hosting
            providers, email service providers, and analytics service providers
          </li>
          <li>
            <strong>Professional advisers</strong> — including legal, accounting, and audit
            advisers, where reasonably necessary
          </li>
          <li>
            <strong>Regulatory authorities or law enforcement</strong> — where required by law
          </li>
          <li>
            <strong>Successors in interest</strong> — in connection with a merger, acquisition,
            restructuring, or sale of assets
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="1.6 International Data Transfers">
        <p>
          Alyssum Labs is based in Singapore. Personal data collected through the Site may be
          transferred to and stored in jurisdictions outside your country of residence, including
          Singapore and other countries where our service providers operate.
        </p>
        <p>
          Where personal data is transferred outside the EU/UK, we ensure appropriate safeguards are
          in place — including the use of EU Standard Contractual Clauses or equivalent mechanisms.
        </p>
        <p>
          Under PDPA, we ensure that any personal data transferred outside Singapore is subject to a
          standard of protection comparable to the PDPA.
        </p>
      </LegalSection>

      <LegalSection title="1.7 Data Retention">
        <p>
          We retain personal data only for as long as is necessary for the purposes for which it was
          collected, or as required by applicable law.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Enquiry form submissions</strong> are retained for <strong>24 months</strong>{" "}
            from the date of last interaction, unless the enquiry results in an ongoing commercial
            relationship
          </li>
          <li>
            <strong>Technical and analytics data</strong> is retained for the periods set out in
            our Cookie Policy
          </li>
        </ul>
        <p>When personal data is no longer required, it is securely deleted or anonymised.</p>
      </LegalSection>

      <LegalSection title="1.8 Your Rights">
        <p>The rights available to you depend on the jurisdiction in which you reside.</p>
        <p>
          <strong>Rights under PDPA (Singapore):</strong> access, correction, and withdrawal of
          consent (subject to legal or contractual restrictions).
        </p>
        <p>
          <strong>Rights under GDPR (EU/UK):</strong> access, rectification, erasure, restriction,
          portability, objection, withdrawal of consent, and the right to lodge a complaint with a
          supervisory authority.
        </p>
        <p>
          <strong>Rights under CCPA/CPRA (California):</strong> right to know, delete, correct, opt
          out of sale or sharing (we do not sell or share personal information as defined under
          CCPA/CPRA), and right to non-discrimination.
        </p>
        <p>
          To exercise any of these rights, please contact us at <LegalEmail email={site.email} />.
          We may need to verify your identity before responding. We will respond within the
          timeframes required by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="1.9 Security">
        <p>
          We implement reasonable technical and organisational measures to protect personal data
          against unauthorised access, alteration, disclosure, or destruction. These measures
          include access controls, encryption in transit, and secure infrastructure. While we take
          security seriously, no method of transmission over the internet is entirely secure.
        </p>
      </LegalSection>

      <LegalSection title="1.10 Children's Data">
        <p>
          The Site is intended for use by individuals aged 18 and over. We do not knowingly collect
          personal data from individuals under the age of 18. If you believe we have collected such
          data, please contact us at <LegalEmail email={site.email} />.
        </p>
      </LegalSection>

      <LegalSection title="1.11 Cookies">
        <p>
          The Site uses cookies and similar technologies. Please refer to our{" "}
          <LegalLink href="/cookie-policy">Cookie Policy</LegalLink> for full details.
        </p>
      </LegalSection>

      <LegalSection title="1.12 Third-Party Links">
        <p>
          The Site may contain links to third-party websites. We are not responsible for the privacy
          practices of those websites, and we encourage you to review their privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="1.13 Changes to this Policy">
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we
          will update the &quot;Last updated&quot; date at the top of this Policy and, where
          appropriate, provide additional notice through the Site.
        </p>
      </LegalSection>

      <LegalSection title="1.14 Contact">
        <p>For questions, requests, or concerns regarding this Privacy Policy, please contact:</p>
        <p>
          <strong>{site.legalName}</strong>
          <br />
          Attn: Data Protection Officer
          <br />
          {site.registeredOfficeAddress[0]}
          <br />
          Email: <LegalEmail email={site.email} />
        </p>
        <p>
          If you are in the EU or UK and are not satisfied with our response, you may lodge a
          complaint with your local supervisory authority. If you are in Singapore, you may contact
          the Personal Data Protection Commission of Singapore at{" "}
          <a
            href="https://www.pdpc.gov.sg"
            className="text-accent-core underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            www.pdpc.gov.sg
          </a>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}

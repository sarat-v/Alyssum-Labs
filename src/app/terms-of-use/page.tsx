import type { Metadata } from "next";
import {
  LegalDocument,
  LegalEmail,
  LegalLink,
  LegalSection,
} from "@/components/legal/LegalDocument";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing access to and use of the Alyssum Labs website at alyssumlabs.com.",
};

export default function TermsOfUsePage() {
  return (
    <LegalDocument title="Terms of Use">
      <LegalSection title="2.1 Acceptance of Terms">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern access to and use of the website located at{" "}
          <strong>www.alyssumlabs.com</strong> (the &quot;Site&quot;), operated by{" "}
          <strong>
            {site.legalName} (UEN: {site.uen})
          </strong>{" "}
          (&quot;Alyssum Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        </p>
        <p>
          By accessing or using the Site, you agree to be bound by these Terms. If you do not
          agree, you must not access or use the Site.
        </p>
      </LegalSection>

      <LegalSection title="2.2 About Alyssum Labs">
        <p>
          Alyssum Labs is a Singapore-registered technology intelligence company. The Site is
          provided for informational purposes — to introduce Alyssum Labs, describe its activities,
          and enable interested parties to make contact.
        </p>
        <p>Nothing on this Site constitutes:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            An offer to sell, or a solicitation of an offer to buy, any product, service, security,
            or financial instrument
          </li>
          <li>Investment, legal, tax, accounting, medical, or any other form of professional advice</li>
          <li>A binding commitment to enter into a commercial relationship of any kind</li>
        </ul>
        <p>
          Engagements with Alyssum Labs are entered into only through separate, signed written
          agreements.
        </p>
      </LegalSection>

      <LegalSection title="2.3 Permitted Use">
        <p>
          You may access and use the Site for lawful, personal, or internal business purposes
          consistent with these Terms. You may not:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Use the Site in any manner that violates applicable law or regulation</li>
          <li>Use the Site in any manner that infringes the rights of any third party</li>
          <li>
            Access or attempt to access the Site through automated means (including scraping,
            crawling, or scripted access) without our prior written consent
          </li>
          <li>
            Interfere with, disrupt, or attempt to gain unauthorised access to the Site, its
            servers, or its underlying infrastructure
          </li>
          <li>
            Reproduce, modify, distribute, or republish content from the Site beyond what is
            permitted under applicable law or with our prior written consent
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2.4 Intellectual Property">
        <p>
          All content on the Site — including text, graphics, logos, images, videos, and software —
          is the property of Alyssum Labs or its licensors, and is protected by copyright,
          trademark, and other intellectual property laws.
        </p>
        <p>
          The &quot;Alyssum Labs&quot; name and logo are trademarks of {site.legalName}. No right or
          licence to use any such trademark is granted by these Terms or by access to the Site.
        </p>
        <p>
          Limited personal, non-commercial viewing of the Site is permitted. Any other use —
          including reproduction, distribution, modification, public display, or creation of
          derivative works — requires our prior written consent.
        </p>
      </LegalSection>

      <LegalSection title="2.5 Submissions">
        <p>
          If you submit information through the Site — including through the enquiry form — you
          confirm that the information is accurate, that you have the right to provide it, and that
          the submission does not violate any applicable law or the rights of any third party.
          Personal data submitted through the Site is handled in accordance with our{" "}
          <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="2.6 Third-Party Links">
        <p>
          The Site may contain links to third-party websites. We provide such links for convenience
          only. We do not endorse, control, or assume responsibility for the content, accuracy, or
          practices of any third-party website. Your access to and use of any linked website is at
          your own risk and subject to the terms and policies of that website.
        </p>
      </LegalSection>

      <LegalSection title="2.7 Disclaimers">
        <p>
          The Site and its content are provided on an <strong>&quot;as is&quot;</strong> and{" "}
          <strong>&quot;as available&quot;</strong> basis, without warranties of any kind, whether
          express or implied. To the maximum extent permitted by applicable law, Alyssum Labs
          disclaims all warranties — including warranties of merchantability, fitness for a
          particular purpose, accuracy, completeness, non-infringement, and uninterrupted or
          error-free operation.
        </p>
        <p>
          We do not warrant that the Site will be free from viruses, defects, or other harmful
          components, and we recommend that visitors take appropriate precautions, including the use
          of up-to-date security software.
        </p>
      </LegalSection>

      <LegalSection title="2.8 Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, Alyssum Labs, its officers,
          directors, employees, and agents shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages — including loss of profits, loss of data, loss of
          business opportunity, or loss of goodwill — arising out of or in connection with your
          access to or use of the Site, whether based on contract, tort, statute, or any other legal
          theory.
        </p>
        <p>
          In no event shall Alyssum Labs&apos; total cumulative liability arising out of or in
          connection with the Site or these Terms exceed{" "}
          <strong>one hundred Singapore dollars (SGD 100)</strong>.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability for fraud, fraudulent
          misrepresentation, or any liability that cannot lawfully be excluded or limited.
        </p>
      </LegalSection>

      <LegalSection title="2.9 Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Alyssum Labs, its officers, directors,
          employees, and agents from and against any claims, liabilities, damages, losses, and
          expenses (including reasonable legal fees) arising out of or in connection with your
          breach of these Terms, your misuse of the Site, or your violation of any applicable law or
          the rights of any third party.
        </p>
      </LegalSection>

      <LegalSection title="2.10 Modifications">
        <p>
          We may modify these Terms from time to time. When we make material changes, we will update
          the &quot;Last updated&quot; date at the top of these Terms and, where appropriate,
          provide additional notice through the Site. Your continued use of the Site following any
          modification constitutes your acceptance of the modified Terms.
        </p>
        <p>
          We may also modify, suspend, or discontinue any aspect of the Site at any time without
          notice.
        </p>
      </LegalSection>

      <LegalSection title="2.11 Governing Law and Jurisdiction">
        <p>
          These Terms and any matter arising out of or in connection with them or the Site shall be
          governed by and construed in accordance with the <strong>laws of Singapore</strong>,
          without regard to its conflict of laws principles.
        </p>
        <p>
          You agree that any dispute arising out of or in connection with these Terms or the Site
          shall be subject to the exclusive jurisdiction of the <strong>courts of Singapore</strong>
          .
        </p>
      </LegalSection>

      <LegalSection title="2.12 Severability and Waiver">
        <p>
          If any provision of these Terms is held to be invalid, illegal, or unenforceable, the
          remaining provisions shall continue in full force and effect. No failure or delay by
          Alyssum Labs in exercising any right under these Terms shall operate as a waiver of that
          right.
        </p>
      </LegalSection>

      <LegalSection title="2.13 Contact">
        <p>For questions about these Terms, please contact:</p>
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

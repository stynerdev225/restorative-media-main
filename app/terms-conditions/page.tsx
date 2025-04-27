import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsConditions() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <div className="prose max-w-none">
          <p>Last updated: April 21, 2025</p>

          <h2>1. Introduction</h2>
          <p>
            These terms and conditions outline the rules and regulations for the use of Restorative Media's website. By
            accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
            Restorative Media's website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2>2. License</h2>
          <p>
            Unless otherwise stated, Restorative Media and/or its licensors own the intellectual property rights for all
            material on Restorative Media. All intellectual property rights are reserved. You may view and/or print
            pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>
              Redistribute content from Restorative Media (unless content is specifically made for redistribution)
            </li>
          </ul>

          <h2>3. User Comments</h2>
          <p>
            Certain parts of this website offer the opportunity for users to post and exchange opinions, information,
            material and data. Restorative Media does not screen, edit, publish or review Comments prior to their
            appearance on the website and Comments do not reflect the views or opinions of Restorative Media, its agents
            or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion.
          </p>
          <p>You warrant and represent that:</p>
          <ul>
            <li>
              You are entitled to post the Comments on our website and have all necessary licenses and consents to do so
            </li>
            <li>
              The Comments do not infringe any intellectual property right, including without limitation copyright,
              patent or trademark, or other proprietary right of any third party
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material
              or material which is an invasion of privacy
            </li>
            <li>
              The Comments will not be used to solicit or promote business or custom or present commercial activities or
              unlawful activity
            </li>
          </ul>

          <h2>4. Hyperlinking to our Content</h2>
          <p>The following organizations may link to our website without prior written approval:</p>
          <ul>
            <li>Government agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
            <li>
              Online directory distributors when they list us in the directory may link to our website in the same
              manner as they hyperlink to the websites of other listed businesses
            </li>
          </ul>

          <h2>5. Content Liability</h2>
          <p>
            We shall have no responsibility or liability for any content appearing on your website. You agree to
            indemnify and defend us against all claims arising out of or based upon your website. No link(s) may appear
            on any page on your website or within any context containing content or materials that may be interpreted as
            libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or
            other violation of, any third party rights.
          </p>

          <h2>6. Reservation of Rights</h2>
          <p>
            We reserve the right at any time and in its sole discretion to request that you remove all links or any
            particular link to our website. You agree to immediately remove all links to our website upon such request.
            We also reserve the right to amend these terms and conditions and its linking policy at any time. By
            continuing to link to our website, you agree to be bound to and abide by these linking terms and conditions.
          </p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
          <p>
            Email: legal@restorativemedia.com
            <br />
            Restorative Media
            <br />
            123 Media Street
            <br />
            New York, NY 10001
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

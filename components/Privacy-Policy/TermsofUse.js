import Image from "next/image";
import Link from "next/link";

import img from "../../public/images/blog/terms_of_use.jpg";
import bgImg from "../../public/images/bg/bg-image-100.jpg";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="rbt-overlay-page-wrapper">
        <div className="breadcrumb-image-container breadcrumb-style-max-width">
          <div className="breadcrumb-image-wrapper">
            <div className="breadcrumb-dark">
              <Image src={bgImg} alt="Education Images" />
            </div>
          </div>
          <div className="breadcrumb-content-top text-center">
            <h1 className="title">Terms of Use</h1>
            <p className="mb--20">Skillersity Terms of Use Here.</p>
            <ul className="page-list">
              <li className="rbt-breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li>
                <div className="icon-right">
                  <i className="feather-chevron-right"></i>
                </div>
              </li>
              <li className="rbt-breadcrumb-item active">Terms of Use</li>
            </ul>
          </div>
        </div>

        <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
          <div className="rbt-article-content-wrapper">
            <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
              <Image className="w-100" src={img} alt="Blog Images" />
            </div>
            <div className="content">
              {/* <h4>Welcome to Skillersity Privacy Policy</h4> */}
              <p>Welcome to <b>SKILLERSITY</b>. By accessing or using our website, <a href="/">skillersity.com</a>, you agree to comply with and be bound by the following terms and conditions (the "Terms of Use"). If you do not agree with these Terms, please do not use our website.
              </p>
              <p>These Terms of Use govern your use of the website, including all content, functionality, and services offered on or through the site. Please read these terms carefully before proceeding.</p>

              <h5>1. Acceptance of Terms</h5>
              <p style={{ marginLeft: "20px" }}>By using this website, you affirm that you have read, understood, and agree to be bound by these Terms of Use. You also agree to comply with any applicable laws and regulations regarding your use of the site. If you do not agree to these terms, you must refrain from using the website.
              </p>

              <h5>2. Changes to the Terms of Use</h5>
              <p style={{ marginLeft: "20px" }}>SKILLERSITY reserves the right to modify, update, or change these Terms of Use at any time without notice. All changes will be posted on this page, and your continued use of the website after any such changes will constitute your acceptance of the revised Terms. It is your responsibility to review these Terms periodically.
              </p>

              <h5>3. Use of the Website</h5>
              <p style={{ marginLeft: "20px" }}>You agree to use this website only for lawful purposes and in a manner consistent with all applicable local, state, national, and international laws and regulations. You may not use the website in any way that could disable, overburden, or damage the functionality of the site or interfere with any other user's enjoyment of the site.</p>

              <h5>4. Account Creation and Security</h5>
              <p style={{ marginLeft: "20px" }}>Some services on the website may require you to create an account. If you choose to register for these services, you agree to provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account information and for any activities that occur under your account.</p>

              <h5>5. Intellectual Property Rights</h5>
              <p style={{ marginLeft: "20px" }}>The content, design, graphics, logos, text, videos, and other materials on this website are the property of SKILLERSITY or its licensors and are protected by copyright and intellectual property laws. You may not use, reproduce, modify, or distribute any of the content without the express written permission of SKILLERSITY.
              </p>

              <h5>6. Course Information</h5>
              <p style={{ marginLeft: "20px" }}>While SKILLERSITY makes every effort to provide accurate and up-to-date information regarding the courses, programs, and services listed on the website, we cannot guarantee the accuracy, completeness, or availability of any course details at all times. Course offerings may change without prior notice.</p>

              <h5>7. Third-Party Links</h5>
              <p style={{ marginLeft: "20px" }}>The website may contain links to third-party websites for convenience or informational purposes. SKILLERSITY does not control or endorse these third-party sites and is not responsible for their content or privacy practices. Accessing third-party websites is at your own risk.</p>

              <h5>8. Privacy Policy</h5>
              <p style={{ marginLeft: "20px" }}>Your use of the website is also governed by our Privacy Policy, which can be found at <a href="/privacy-policy">Privacy Policy</a>. By using the website, you consent to the practices described in our Privacy Policy.</p>

              <h5>9. Limitation of Liability</h5>
              <p style={{ marginLeft: "20px" }}>To the fullest extent permitted by applicable law, SKILLERSITY shall not be held liable for any damages or losses arising from your use of the website, including but not limited to any direct, indirect, incidental, special, or consequential damages, or any loss of data, profits, or business opportunities.</p>

              <h5>10. Indemnification</h5>
              <p style={{ marginLeft: "20px" }}>You agree to indemnify, defend, and hold harmless SKILLERSITY, its affiliates, officers, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or expenses (including reasonable attorneys’ fees) arising from your use of the website, violation of these Terms of Use, or infringement of any rights of a third party.</p>

              <h5>11. Termination of Access</h5>
              <p style={{ marginLeft: "20px" }}>SKILLERSITY reserves the right to suspend or terminate your access to the website at any time, without notice, for any reason, including if we believe you have violated these Terms of Use.</p>

              <h5>12. Disclaimer of Warranties</h5>
              <p style={{ marginLeft: "20px" }}>The website is provided "as is" and "as available," without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the website will be free from errors, viruses, or interruptions.
              </p>

              <h5>13. Governing Law</h5>
              <p style={{ marginLeft: "20px" }}>These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which SKILLERSITY operates, without regard to its conflict of law principles. Any disputes related to these Terms shall be resolved in the courts located within that jurisdiction.</p>

              <h5>14. Severability</h5>
              <p style={{ marginLeft: "20px" }}>If any provision of these Terms of Use is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect.
              </p>

              <h5>15. Entire Agreement</h5>
              <p style={{ marginLeft: "20px" }}>These Terms of Use, together with our Privacy Policy, constitute the entire agreement between you and SKILLERSITY with respect to the use of the website.
              </p>

              <h5>16. Contact Us</h5>
              <p style={{ marginLeft: "20px" }}>If you have any questions about these Terms of Use, please contact us at:
              </p>

              <p><b>Email:</b> <a href="mailto:Info@skillersity.com">Info@skillersity.com</a><br></br>
              <b>Phone:</b> <a href="tel:919605662277">+91 9605 66 22 77</a><br></br>
              <b>Website:</b> <a href="/">www.skillersity.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

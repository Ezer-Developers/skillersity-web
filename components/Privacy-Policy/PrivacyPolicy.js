import Image from "next/image";
import Link from "next/link";

import img from "../../public/images/blog/privacy_policy.jpg";
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
            <h1 className="title">Privacy Policy</h1>
            <p className="mb--20">Skillersity Privacy Policy Here.</p>
            <ul className="page-list">
              <li className="rbt-breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li>
                <div className="icon-right">
                  <i className="feather-chevron-right"></i>
                </div>
              </li>
              <li className="rbt-breadcrumb-item active">Privacy Policy</li>
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
              <p>At <b>SKILLERSITY</b>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website <a href="/"> skillersity.com</a>. By using our website, you agree to the practices described in this policy.</p>
              <h5>1. Information We Collect</h5>
              <p>When you visit <a href="/">skillersity.com</a>, we may collect the following types of information:</p>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <b>Personal Information:</b> We do not collect personal information unless you voluntarily provide it. This could include your name, email address, phone number, and other details you choose to share with us through contact forms or other interactive elements on the website.
                </li>
                <li>
                  <b>Usage Data:</b> We may automatically collect certain data about your visit to our website. This includes information such as your IP address, browser type, pages visited, and time spent on the site. This information helps us understand how visitors use our website and improve its functionality.
                </li>
                <li>
                  <b>Cookies:</b> Our website may use cookies to enhance your user experience. Cookies are small text files placed on your device that help us track user preferences, improve website performance, and gather analytics. You can adjust your browser settings to disable cookies if you prefer, though some features of the website may not work as intended.
                </li>
              </ul>

              <h5>2. How We Use Your Information</h5>
              <p>We may use the information we collect in the following ways:</p>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <b>To Improve Our Website:</b> We analyze usage data to enhance the content and functionality of our site, making it easier for visitors to navigate and access relevant information.
                </li>
                <li>
                  <b>To Communicate with You:</b> If you reach out to us through contact forms or other means, we may use your email address or phone number to respond to your inquiries and provide you with information about our courses and services.
                </li>
                <li>
                  <b>To Monitor Website Performance:</b> We may use data to monitor the performance of our website, identify issues, and ensure that it is running smoothly.
                </li>
              </ul>

              <h5>3. How We Protect Your Information</h5>
              <p>We take reasonable steps to protect your information from unauthorized access, alteration, or disclosure. However, please be aware that no method of transmitting data over the internet or storing data is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>

              <h5>4. Third-Party Links</h5>
              <p>Our website may contain links to external websites or services that are not operated by us. We are not responsible for the privacy practices or content of these third-party sites. We recommend that you review the privacy policies of any third-party websites you visit.</p>

              <h5>5. Your Rights and Choices</h5>
              <p>You have the right to:</p>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <b>Access:</b> You may request information about the personal data we hold about you.
                </li>
                <li>
                  <b>Update or Correct:</b> If you believe the information we have about you is incorrect or incomplete, you can contact us to have it corrected.
                </li>
                <li>
                  <b>Opt-Out of Communications:</b>  If you no longer wish to receive marketing communications from us, you can opt-out by following the unsubscribe instructions in our emails or by contacting us directly.
                </li>
              </ul>

              <h5>6. Children’s Privacy</h5>
              <p>Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we learn that we have inadvertently collected personal data from a child under 13, we will take steps to delete that information.</p>

              <h5>7. Changes to This Privacy Policy</h5>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page, and the “Last Updated” date at the bottom of this policy will be revised. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>

              <h5>8. Contact Us</h5>
              <p>If you have any questions or concerns about this Privacy Policy, or if you would like to exercise your rights regarding your personal information, please contact us at:</p>

              <p><b>Email:</b> <a href="mailto:Info@skillersity.com">Info@skillersity.com</a><br></br>
              <b>Phone:</b> <a href="tel:919605662277">+91 9605 66 22 77</a><br></br>
              <b>Website:</b> <a href="/">www.skillersity.com</a><br></br>
              <b>Last Updated:</b> December 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

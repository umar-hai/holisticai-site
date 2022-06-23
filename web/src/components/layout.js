import { Link } from "gatsby";
import React from "react";
import CookieConsent from "react-cookie-consent";
import Navbar from "./header/navbar";
import Seo from "./seo";

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handler = () => {
    if (window.scrollY > 0) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  React.useEffect(() => {
    setShowNavbar(window.scrollY > 0);

    document.addEventListener("scroll", handler);

    return function cleanup() {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <>
      <div
        className={`transition-all ${
          showNavbar ? "fixed left-0 right-0 top-0 z-10 h-20" : "h-28 lg:h-36"
        }`}
      >
        <Navbar shrink={showNavbar}></Navbar>
      </div>

      <Seo title={title} description={description} image={image} path={path} />
      <div className={showNavbar ? "mt-20" : undefined}>{children.hero}</div>

      <main>{children.main}</main>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        We <Link to="cookie-policy">use cookies</Link> on this website to
        improve our service.
      </CookieConsent>
    </>
  );
}

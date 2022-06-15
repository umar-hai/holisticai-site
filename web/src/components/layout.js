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
  return (
    <>
      <Navbar></Navbar>
      <Seo title={title} description={description} image={image} path={path} />
      {children.hero}

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

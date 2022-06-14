import * as React from "react";
import ContactForm from "../components/contact/contact-form";
import ContactHero from "../components/contact/contact-hero";
import Footer from "../components/footer";
import HaiContainer from "../components/hai-container";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      {{
        hero: <ContactHero></ContactHero>,
        main: (
          <>
            <ContactForm></ContactForm>
            <Footer></Footer>
          </>
        ),
      }}
    </Layout>
  );
}

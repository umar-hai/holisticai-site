import * as React from "react";
import HaiButton from "../button";
import HaiContainer from "../hai-container";
export default function ContactForm() {
  return (
    <section className="bg-dark border-b border-text-secondary border-opacity-50">
      <HaiContainer>
        <div className="flex justify-center py-8">
          <form
            id="contactForm"
            action="https://formspree.io/f/mayawbqk"
            method="POST"
            className="w-[546px]"
          >
            <div className="row">
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="bg-dark border-b border-text-secondary w-full text-text-secondary outline-none"
                    required
                    placeholder="Name*"
                  />
                </div>
              </div>

              <div className="mt-10">
                <div className="form-group">
                  <input
                    type="email"
                    name="_replyto"
                    className="bg-dark border-b border-text-secondary w-full text-text-secondary outline-none"
                    required
                    placeholder="Email*"
                  />
                </div>
              </div>

              <div className="mt-10">
                <div className="form-group">
                  <input
                    name="message"
                    className="bg-dark border-b border-text-secondary w-full text-text-secondary outline-none"
                    cols="30"
                    rows="6"
                    required
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="mt-10">
                <div className="font-roboto text-white text-lg mb-5 ">
                  Demo Version
                </div>
                <div className="flex">
                  <label className="flex items-center select-none cursor-pointer gap-5">
                    <input
                      type="checkbox"
                      className="bg-dark appearance-none border rounded-sm border-text-secondary h-4 w-4  
                    checked:before:flex checked:before:text-white checked:before:text-sm checked:before:font-semibold checked:before:h-[15px] checked:before:w-[15px]
                    checked:before:items-center checked:before:justify-center checked:before:content-['✔']"
                      name="demo"
                    />
                    <span className="text-text-secondary">Request a demo</span>
                  </label>
                </div>
              </div>

              <div className="mt-14 flex">
                <div className="ml-auto">
                  <HaiButton>Send Message</HaiButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </HaiContainer>
    </section>
  );
}

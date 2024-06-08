import React, { useEffect } from "react";
import "./Contact.css";
import FrontHeadB from "../Component/FrontHeadB";
import ContactCard from "../Component/ContactCard";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Our Rajasthan Taxi Service Bikaner";
  }, []);
  return (
    <>
      <main>
        <FrontHeadB name="Contact" />
        <section className="contact-sec">
          <h2 className="theme-black text-center fs-2-5 my-20 py-20">
            Contact Now For Taxi Booking
          </h2>
          <div className="contact-box-content full-flex gapx-30">
            <ContactCard
              ClassName="fa-solid fa-map-location-dot"
              CardHeading="OUR OFFICE LOCATION"
              CardPara="7/11 M.P. Colony, Bikaner, Rajasthan - 334004"
            />
            <ContactCard
              ClassName="fa-solid fa-phone"
              CardHeading="Have A Question?"
              CardPara="(+91)8118830211"
            />
            <ContactCard
              ClassName="fa-solid fa-envelopes-bulk"
              CardHeading="Any Question? Email Us!"
              CardPara="sgursinder23@gmail.com"
            />
          </div>
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.4559033912255!2d73.29177767504999!3d28.041101110692935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd8b93988987%3A0xdc41bb4f76a5ed66!2sOur%20Rajasthan!5e0!3m2!1sen!2sin!4v1707557574748!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "2px solid rgb(162 162 162)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;

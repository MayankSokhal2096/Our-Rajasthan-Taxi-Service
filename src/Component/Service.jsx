import React, { useEffect } from "react";
import "./Service.css";
import FrontHeadB from "../Component/FrontHeadB";
import ServiceCard from "../Component/ServiceCard";
import RapidCityImg from "../Images/rapid-city-transfer.jpg";
import OnlineBookingImg from "../Images/online-booking.jpg";
import AirportTransImg from "../Images/airport-transfer.jpg";
import BusinessTransImg from "../Images/business-transport.jpg";
import RegularTransImg from "../Images/regular-transport.jpg";
import TourTransImg from "../Images/tour-transport.jpg";

const Service = () => {
  useEffect(() => {
    document.title = "Service - Our Rajasthan Taxi Service Bikaner";
  }, []);
  return (
    <>
      <main>
        <FrontHeadB name="Service" />
        <section className="service-card-sec full-flex flex-col gapy-30">
          <h2 className="theme-black fs-3 text-center p-20">Our Service</h2>
          <div className="full-flex flex-wrap gap-25">
            <ServiceCard
              CardImg={RapidCityImg}
              Imgalt="Rapid City Transfer"
              Cardheading="Rapid City Transfer"
              Cardpara="Convenient, affordable taxi service for everyday travel needs. Quick pickups, friendly drivers, and comfortable rides"
            />
            <ServiceCard
              CardImg={OnlineBookingImg}
              Imgalt="Online Booking"
              Cardheading="Online Booking"
              Cardpara="Book your ride hassle-free! Our online platform offers easy booking, instant confirmations, and secure payments."
            />
            <ServiceCard
              CardImg={AirportTransImg}
              Imgalt="Airport Transport"
              Cardheading="Airport Taxi"
              Cardpara="Our airport transfer service provides timely pickups, luggage assistance, and comfortable rides to and from the terminal."
            />
            <ServiceCard
              CardImg={BusinessTransImg}
              Imgalt="Business Transport"
              Cardheading="Business Taxi"
              Cardpara="Efficient, reliable taxi service for your business needs. Professional drivers, modern vehicles, and seamless booking."
            />
            <ServiceCard
              CardImg={RegularTransImg}
              Imgalt="Regular Transport"
              Cardheading="Regular Taxi"
              Cardpara="Prompt pickups, efficient routes, and experienced drivers ensure you reach your destination on time."
            />
            <ServiceCard
              CardImg={TourTransImg}
              Imgalt="Tour Transport"
              Cardheading="Tour Taxi"
              Cardpara="Explore with ease! Our tour taxis offer personalized trips to iconic destinations."
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Service;

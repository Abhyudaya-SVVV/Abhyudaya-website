"use client";
import contact from "@/../public/assets/contact/contact.svg";
import { turret } from "@/app/(pages)/page";
import Image from "next/image";
import React, { FormEvent } from "react";

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="bg-rich-blue-bg text-white h-screen">
        <section
      id="contact"
      className="flex flex-col items-center w-5/6 mx-auto gap-10 pb-8"
    >
      <h2 className={`${turret.className} text-4xl mt-24 sm:mt-4 font-extrabold`}>
        Contact Us
      </h2>
      <div className="flex justify-center items-center w-full border-2 rounded-[16px] overflow-hidden sm:-mt-10">
        <div className="flex flex-col py-5 w-full items-center bg-rich-blue-contactBg md:px-24 px-6">
          <Image src={contact} height={200} className="" alt="" />
          
          <form
            onSubmit={onSubmit}
            className="flex text-[#eeeeee] flex-col gap-1 items-start"
          >
            <label htmlFor="name">Name</label>
            <input
              className="rounded-lg md:w-[288px] px-5 mb-2 py-2 bg-[#343333]"
              type="text"
              id="name"
              placeholder="Rachel Joe"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              value={formData.name}
            />
            <label htmlFor="email">Email</label>
            <input
              className="rounded-lg px-5 md:w-[288px] mb-2 py-2 bg-[#343333]"
              type="email"
              id="email"
              placeholder="Rachel@domain.com"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              value={formData.email}
            />
            <label htmlFor="message">Message</label>
            <textarea
              className="rounded-lg w-full px-5 mb-2 py-2 resize-none bg-[#343333]"
              id="message"
              placeholder="Type your query here"
              rows={3}
              cols={18}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              value={formData.message}
            />
            <button
              type="submit"
              className="bg-[#6088EE] py-2 my-2 px-10 flex gap-2"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="lg:block hidden w-1/2 h-[550px] px-2  ">
        <iframe className='rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117676.79402006012!2d75.70263912955559!3d22.824693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039c587a8091%3A0x206d00d7a5e4afb3!2sSVVV!5e0!3m2!1sen!2sin!4v1720799469416!5m2!1sen!2sin" width="600" height="550"  loading="lazy" ></iframe>
        </div>
      </div>
    </section>
    
    </div>
  );
};

export default ContactSection;
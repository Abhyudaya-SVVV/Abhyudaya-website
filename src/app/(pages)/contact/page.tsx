"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { turret } from "@/app/(pages)/page";
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("Sending...");
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("Submission successful!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="bg-gradient-to-br from-rich-blue-bg via-rich-blue-contactBg to-blue-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-24">
        <h2 className={`${turret.className} text-6xl text-center font-bold mb-16`}>Contact Us</h2>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-12">
              <h3 className="text-3xl font-semibold mb-8">Let's get in touch</h3>
              <p className="mb-8 text-blue-100">We're here to help and answer any question you might have. We look forward to hearing from you!</p>
              <div className="space-y-6 mb-8">
                {[
                  { icon: FiMail, text: "info@abhyudaya.com" },
                  { icon: FiPhone, text: "+91 1234567890" },
                  { icon: FiMapPin, text: "SVVV, Indore, MP, India" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <item.icon className="mr-4 text-2xl text-blue-300" />
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3336859990286!2d75.8909!3d22.7467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd13ed2bae49%3A0xb6e8502b1c53413!2sShri%20Vaishnav%20Vidyapeeth%20Vishwavidyalaya!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-blue-600 p-12">
              <h4 className="text-2xl font-semibold mb-8">Send us a message</h4>
              <form onSubmit={onSubmit} className="space-y-6">
                {[
                  { name: 'name', type: 'text', placeholder: 'Your Name' },
                  { name: 'email', type: 'email', placeholder: 'Your Email' },
                  { name: 'subject', type: 'text', placeholder: 'Subject' },
                  { name: 'message', type: 'textarea', placeholder: 'Your Message' },
                ].map((field) => (
                  <div key={field.name}>
                    {field.type === 'textarea' ? (
                      <textarea
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/60 resize-none"
                        rows={4}
                        onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
                        value={formData[field.name as keyof typeof formData]}
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/60"
                        onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
                        value={formData[field.name as keyof typeof formData]}
                        required
                      />
                    )}
                  </div>
                ))}
                <button type="submit" className="w-full bg-white text-blue-600 hover:bg-blue-100 transition duration-300 py-3 rounded-lg font-semibold text-lg flex items-center justify-center">
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </form>
              {submitStatus && <p className="mt-4 text-center text-sm">{submitStatus}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

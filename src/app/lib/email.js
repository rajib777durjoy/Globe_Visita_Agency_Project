"use client";
import emailjs from "@emailjs/browser";

export const initEmailJS = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY);
};

export const sendEmail = (serviceId, templateId, templateParams) => {
  return emailjs.send(serviceId, templateId, templateParams);
};

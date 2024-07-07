"use client";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import DarkButton from "@/ui-component/DarkButton";

const Contact = () => {
  const route = useRouter();
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
        publicKey: process.env.PUBLIC_ID,
      })
      .then(
        () => {
          route.refresh();
          toast.success("✅ Successfully Submitted!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section>
      <div className="flex justify-around items-center gap-2">
        <div className="lg:w-[50vw] w-full md:mx-10 lg:mx-0 mx-2">
          <form ref={form} onSubmit={handleSubmit} className="my-4">
            <div>
              <input
                placeholder="Enter Your Name *"
                type="text"
                id="name"
                name="user_name"
                required
                autoComplete="off"
                className="border-slate-500 focus:border-black w-full bg-transparent border-2 p-2 rounded-lg placeholder:text-sm my-2"
              />
            </div>
            <div>
              <input
                placeholder="Enter Your Email *"
                type="email"
                id="email"
                name="user_email"
                required
                autoComplete="off"
                className="border-slate-500 focus:border-black w-full bg-transparent border-2 p-2 rounded-lg placeholder:text-sm my-2"
              />
            </div>
            <div>
              <input
                placeholder="Enter Your Subject *"
                type="text"
                id="subject"
                name="user_subject"
                required
                autoComplete="off"
                className="border-slate-500 focus:border-black w-full bg-transparent border-2 p-2 rounded-lg placeholder:text-sm my-2"
              />
            </div>
            <div>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="6"
                placeholder="Your message *"
                required
                autoComplete="off"
                className="border-slate-500 focus:border-black w-full bg-transparent border-2 p-2 rounded-lg placeholder:text-sm my-2"
              ></textarea>
            </div>

            <div className="mt-5">
              <DarkButton lable={"Send Message"} />
            </div>
          </form>
        </div>

        <div className="hidden lg:block">
          <Image
            width={500}
            height={500}
            src="/asset/pi.png"
            className="max-h-[500px] max-w-[500px]"
            alt="contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

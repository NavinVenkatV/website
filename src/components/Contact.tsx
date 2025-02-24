"use client";
import { useState } from "react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {motion} from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });

  const [loadingMessage, setLoadingMessage] = useState({
    loading: false,
    message: "",
    success: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if all fields are filled out
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
      setLoadingMessage({
        loading: false,
        message: "Please fill in all fields!",
        success: false
      });
      return;
    }

    setLoadingMessage({
      loading: true,
      message: "Sending message...",
      success: false
    });

    try {
      const data = {
        name: `${formData.firstname} ${formData.lastname}`,
        email: formData.email,
        message: formData.message
      };

      
      const response = await fetch('/api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network error");
      }

      
      const res = await response.json();
      if (res.message) {
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: ""
        });
        setLoadingMessage({
          loading: false,
          message: res.message,
          success: true
        });
      } else {
        setLoadingMessage({
          loading: false,
          message: "Failed to send message",
          success: false
        });
      }
    } catch (error) {
      setLoadingMessage({
        loading: false,
        message: "Failed to send message",
        success: false
      });
      console.error(error);
    }
  };

  

  return (
    <div className="w-auto mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black" id="contact">
      <motion.h2
      initial={{opacity : 0, x:-50}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.5, ease:"easeInOut"}}
       className="font-bold text-2xl md:text-4xl text-neutral-800 dark:text-neutral-200 text-center">
        You know the Business and <span className="text-green-800">I know the Chemistry</span>
      </motion.h2>
      <motion.p
      initial={{opacity : 0, x:50}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.5, ease:"easeInOut"}}
       className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 text-center">
        Maybe You and I could partner up
      </motion.p>
      {loadingMessage.message && <p className={`mt-[20px] text-center text-[0.9rem] ${loadingMessage.success ? "text-green-400" : "text-red-400"}`}>{loadingMessage.message}</p>}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your Message</Label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Let's cook...." className="p-[10px] rounded-[4px] border-none outline-none h-[140px] bg-zinc-800 text-white placeholder-text-neutral-600" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loadingMessage.loading ? "Sending to connect..." : "Submit"}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

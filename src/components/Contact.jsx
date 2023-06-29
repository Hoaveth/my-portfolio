import React, { useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({ submitting: false, status: { ok, msg } });
    if (ok) {
      // show success message
      // handle success next steps
      return;
    }
    // show failure message
    // handle failure next steps
    return;
  };

  const onSubmit = (data, e) => {
    const formData = new FormData();
    for (var field in data) {
      formData.append(field, data[field]);
    }
    setServerState({ submitting: true });
    // replace the url parameter with your own GetForm.io form id/url
    axios({
      method: "post",
      url: "https://getform.io/f/038e2bff-f956-4988-8834-49bf0c9eae4f",
      data: formData,
    })
      .then((r) => {
        e.target.reset();
        handleServerResponse(true, "Form Submitted", e);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, e);
      });
  };

  console.info(watch("name"));
  console.info(watch("email"));
  console.info(watch("message"));

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline underline decoration-violet-700 decoration-wavy underline-offset-8">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            className=" flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full mb-5">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-600">Name is required.</p>}
            </div>
            <div className="w-full mb-5">
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-600">Email is required.</p>
              )}
            </div>
            <div className="w-full mb-5">
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <p className="text-red-600">Message is required.</p>
              )}
            </div>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

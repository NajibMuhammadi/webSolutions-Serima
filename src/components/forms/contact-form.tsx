"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
/* import ErrorMsg from '../common/error-msg'; */
import { notifyError, notifySuccess } from "@/utils/toast";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const schema = yup.object().shape({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().min(10).label("Message"),
});

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit(async (data) => {
        console.log("Form submission started with data:", data);
        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            console.log("Response status:", res.status);

            const result = await res.json();
            console.log("Response JSON:", result);

            if (!res.ok || result.error) {
                console.log("Notify error triggered");
                notifyError("Failed to send message. Please try again later.");
                return;
            }

            console.log("Resetting form and notifying success");
            notifySuccess(
                "Message sent successfully! We will get back to you soon."
            );
            reset();
        } catch (error) {
            console.error("Catch block error:", error);
            notifyError("Something went wrong.");
        }
    });

    return (
        <form id="contact-form" onSubmit={onSubmit}>
            <div className="messages"></div>
            <div className="row controls">
                <div className="col-12">
                    <div className="input-group-meta form-group mb-30">
                        <label htmlFor="">Name*</label>
                        <input
                            type="text"
                            placeholder="Your Name*"
                            {...register("name")}
                            id="name"
                        />
                        {errors.name?.message && (
                            <div
                                className="error-message"
                                style={{ color: "red" }}
                            >
                                {errors.name.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group-meta form-group mb-40">
                        <label htmlFor="">Email*</label>
                        <input
                            type="email"
                            placeholder="Email Address*"
                            {...register("email")}
                            id="email"
                        />
                        {errors.email?.message && (
                            <div
                                className="error-message"
                                style={{ color: "red" }}
                            >
                                {errors.email.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group-meta form-group mb-35">
                        <textarea
                            placeholder="Your message*"
                            {...register("message")}
                            id="message"
                        ></textarea>
                        {errors.message?.message && (
                            <div
                                className="error-message"
                                style={{ color: "red" }}
                            >
                                {errors.message.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <button
                        type="submit"
                        className="btn-four tran3s w-100 d-block"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;

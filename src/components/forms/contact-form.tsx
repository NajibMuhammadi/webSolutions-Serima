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
    name: yup
        .string()
        .required("Ditt namn är obligatoriskt")
        .label("Ditt namn"),
    email: yup
        .string()
        .required("Din e-postadress är obligatorisk")
        .email()
        .label("Din e-postadress"),
    message: yup
        .string()
        .required("Ditt meddelande är obligatoriskt")
        .min(10, "Meddelandet måste vara minst 10 tecken långt")
        .label("Ditt meddelande"),
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
        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok || result.error) {
                notifyError("Meddelandet kunde inte skickas.");
                return;
            }

            notifySuccess(
                "Ditt meddelande har skickats framgångsrikt! Vi återkommer snart."
            );
            reset();
        } catch (error) {
            notifyError("Ett fel uppstod vid sändning av meddelandet.");
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
                            placeholder="Ditt namn*"
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
                            placeholder="Din e-postadress*"
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
                            placeholder="Ditt meddelande*"
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

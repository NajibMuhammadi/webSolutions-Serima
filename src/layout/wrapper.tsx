"use client";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { animationCreate } from "@/utils/utils";
import BackToTopCom from "@/components/common/back-to-top-com";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    useEffect(() => {
        animationCreate();
    }, []);
    useEffect(() => {}, [router]);

    return (
        <>
            {children}
            <BackToTopCom />
            <ToastContainer />
        </>
    );
};

export default Wrapper;

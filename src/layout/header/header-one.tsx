"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import Navbar from "./navbar";
import logo from "@/assets/images/logo/logo_01.svg";
import useSticky from "@/hooks/use-sticky";

const HeaderOne = () => {
    const { sticky } = useSticky();
    return (
        <>
            <header
                className={`theme-main-menu menu-overlay menu-style-two sticky-menu ${sticky ? "fixed" : ""}`}
            >
                <div className="inner-content gap-fix">
                    <div className="top-header position-relative">
                        <div className="d-flex align-items-center">
                            <div className="logo order-lg-0">
                                <Link
                                    href="/"
                                    className="d-flex align-items-center"
                                >
                                    <Image src={logo} alt="logo" />
                                </Link>
                            </div>

                            <div className="right-widget order-lg-3 ms-auto">
                                <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                                    <ul className="d-flex align-items-center style-none">
                                        <li className="d-none d-md-block">
                                            <Link
                                                href="/contact"
                                                className="btn-one tran3s"
                                            >
                                                Få en offert
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                                <button
                                    className="navbar-toggler d-block d-lg-none"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarNav"
                                >
                                    {/* header navbar start */}
                                    <Navbar />
                                    {/* header navbar end */}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderOne;

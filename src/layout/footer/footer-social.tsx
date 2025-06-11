import React from "react";
import Link from "next/link";

const FooterSocial = () => {
    return (
        <>
            <li>
                <Link
                    href="https://www.instagram.com/websolutions.serima"
                    target="_blank"
                >
                    <i className="bi bi-instagram"></i>
                </Link>
            </li>
        </>
    );
};

export default FooterSocial;

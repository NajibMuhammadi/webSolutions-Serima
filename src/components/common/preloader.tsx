import React from "react";
import loader from "@/assets/images/loader.svg";
import Image from "next/image";

const Preloader = () => {
    return (
        <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="icon">
                    <Image
                        src={loader}
                        alt="loader"
                        className="m-auto d-block"
                        width="60"
                    />
                </div>
                <div className="txt-loading">
                    <span data-text-preloader="W" className="letters-loading">
                        W
                    </span>
                    <span data-text-preloader="e" className="letters-loading">
                        e
                    </span>
                    <span data-text-preloader="b" className="letters-loading">
                        b
                    </span>
                    <span data-text-preloader="s" className="letters-loading">
                        S
                    </span>
                    <span data-text-preloader="s" className="letters-loading">
                        S
                    </span>
                    <span data-text-preloader="s" className="letters-loading">
                        S
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;

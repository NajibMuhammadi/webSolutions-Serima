import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_09.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import service_data from "@/data/service-data";

const ServiceIndustri = () => {
    const services = service_data.filter((s) => s.page === "home-3");
    return (
        <>
            {/* block feature start */}
            <div className="block-feature-one position-relative light-bg-deep pt-120 pb-130 lg-pb-60">
                <div className="container">
                    <div className="position-relative">
                        <div className="title-one text-center mb-40 lg-mb-10">
                            <h2>Våra tjänster för industri</h2>
                            <p className="text-lg mt-20">
                                Vi erbjuder tjänster som täcker allt från design
                                till utveckling, driftsättning och support –
                                alltid med fokus på användaren och tekniken
                                bakom.
                            </p>
                        </div>
                        <div className="row">
                            {services.map((s, i) => (
                                <div
                                    key={i}
                                    className="col-lg-4 col-md-6 d-flex wow fadeInUp"
                                    data-wow-delay={`0.${i}s`}
                                >
                                    <div className="card-style-two vstack tran3s w-100 mt-30">
                                        <Image
                                            src={s.icon}
                                            alt="icon"
                                            className="lazy-img icon me-auto"
                                        />
                                        <h4 className="fw-bold mt-30 mb-25">
                                            {s.title}
                                        </h4>
                                        <p className="mb-20">{s.desc}</p>
                                        {/* <Link href="/service-details" className="arrow-btn tran3s mt-auto stretched-link"><Image src={icon_1} alt="icon" className="lazy-img" /></Link> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Image
                    src={shape}
                    alt="shape"
                    className="lazy-img shapes shape_01"
                />
                <Image
                    src={shape}
                    alt="shape"
                    className="lazy-img shapes shape_02"
                />
            </div>
        </>
    );
};

export default ServiceIndustri;

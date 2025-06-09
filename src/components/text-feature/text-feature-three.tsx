import React from "react";
import Link from "next/link";
// internal

// image style

const TextFeatureThree = ({ style_2 }: { style_2?: boolean }) => {
    return (
        <>
            {/*     {!style_2 && <div className={`text-feature-three position-relative ${cls?cls:'mt-30 pb-150 lg-pb-80'}`}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
            <div className="title-one">
              <div className="upper-title">About us</div>
              <h2>Guideline for your financial grow.</h2>
            </div>
            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
              Your success is our mission. As business advisors, we offer expert
              guidance, unlocking your potential for growth and profitability
            </p>
            <div>
              <Link href="/about-us" className="btn-four mt-15">
                More About us
              </Link>
            </div>
            <div className="counter-wrapper mt-60 lg-mt-40 pt-25 lg-pt-10">
              <div className="row">
                <div className="col-xl-6 col-sm-5">
                  <div className="counter-block-one mt-20">
                    <div className="main-count fw-bold">
                      <span className="counter">1.2</span>x
                    </div>
                    <p className="m0">Rapid wealth grow</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-7">
                  <div className="counter-block-one mt-20">
                    <div className="main-count fw-bold">
                      $<span className="counter">1.3</span>b+
                    </div>
                    <p className="m0">Cumulative trading volume</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-5 d-flex order-lg-first wow fadeInLeft">
            <div className="media-wrapper w-100 position-relative">
              <Image src={screen_1} alt="screen" className="lazy-img shapes screen_01" style={imageStyle}/>
              <Image src={screen_2} alt="screen" className="lazy-img shapes screen_02" style={imageStyle}/>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>} */}

            {style_2 && (
                <div className="text-feature-three text-feature-one position-relative mt-150 lg-mt-80 pb-150 lg-pb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
                                <div className="title-one">
                                    <div className="upper-title">
                                        Satsa smart – väx digitalt
                                    </div>
                                    <h2>Guiden till din digitala tillväxt.</h2>
                                </div>
                                <p className="text-lg mt-35 lg-mt-10 mb-30">
                                    Vi hjälper dig att växa online med moderna
                                    verktyg, smart teknik och en tydlig digital
                                    strategi – från idé till färdig lösning.
                                </p>
                                <div>
                                    <Link
                                        href="/kontakta-oss"
                                        className="btn-four mt-15"
                                    >
                                        Kontakta oss
                                    </Link>
                                </div>
                                <div className="counter-wrapper mt-50 lg-mt-40 pt-5">
                                    <div className="row">
                                        <div className="col-xl-6 col-sm-5">
                                            {/* <div className="counter-block-one mt-20">
										<div className="main-count fw-bold">
                      <span className="counter">1.2</span>x
                      </div>
										<p className="m0">Rapid wealth grow</p>
									</div> */}
                                        </div>
                                        <div className="col-xl-6 col-sm-7">
                                            {/* <div className="counter-block-one mt-20">
										<div className="main-count fw-bold">$<span className="counter">1.3</span>b+</div>
										<p className="m0">Cumulative trading volume</p>
									</div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-lg-6 wow fadeInLeft">
                                <div className="media-list-item me-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-40 d-flex align-items-end">
                                    <ul className="style-none">
                                        <li>Inga dolda kostnader</li>
                                        <li>Digital marknadsföring</li>
                                        <li>Personligt anpassade lösningar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TextFeatureThree;

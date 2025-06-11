import React from "react";

const FancyBannerOne = () => {
    return (
        <div className="fancy-banner-one position-relative pt-30 md-pt-20 pb-40 md-pb-20 bg-white">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-end">
                    <h2 className="pe-xl-5 pe-md-4 sm-pb-50">
                        Låt oss <span>bygga och växa tillsammans</span>
                    </h2>
                </div>
                <div className="col-md-6">
                    <div className="ps-xl-5 ps-md-4 pe-xxl-5 d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="fw-bold">10% Rabatt</h3>
                            <p className="text-md m0">
                                Serima AB satsar nu även på webbutveckling – få
                                10% rabatt på din första beställning
                            </p>
                        </div>
                        {/* <Image
              src={screen}
              alt="screen"
              className="lazy-img screen me-xxl-5"
              style={{height:'auto'}}
            /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FancyBannerOne;

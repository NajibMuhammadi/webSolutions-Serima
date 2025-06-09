import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import icon from "@/assets/images/assets/ils_04.svg";

// pricing card item
type IProps = {
    title: string;
    month: string;
    price: string;
    membership: string;
    lists: string[];
    desc: string;
};
function PricingCardItem({
    title,
    month,
    price,
    membership,
    lists,
    desc,
}: IProps) {
    return (
        <div className="pricing-card-one d-flex flex-column w-100 h-100 text-center">
            <h2 className="fw-bold">{title}</h2>
            <div className="row">
                <div className="col-xxl-9 m-auto">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="price-banner text-lg-start d-lg-flex justify-content-center align-items-center">
                <div className="price">
                    <sup>KR</sup> {price}
                </div>
                <div className="ps-lg-4">
                    <strong className="text-lg fw-500">{membership}</strong>
                </div>
            </div>

            <ul className="style-none mb-35">
                {lists.map((l, i) => (
                    <li key={i}>{l}</li>
                ))}
            </ul>
            {/* <div className="action-btn text-center">
        Try us without risk.{" "}
        <Link href="#">
          Choose Plan <i className="bi bi-chevron-right"></i>
        </Link>
      </div> */}
        </div>
    );
}

const PricingArea = () => {
    return (
        <div
            className="pricing-section light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80"
            id="pris"
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 text-center text-lg-start">
                        <div className="title-one">
                            <h2>Anpassade driftlösningar för din Webbplats</h2>
                        </div>
                        <p className="text-lg pt-10 m0">
                            Vår prisplan är uppbyggd för att ge dig precis den
                            nivå av service och support din verksamhet behöver.
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <nav className="pricing-nav d-flex justify-content-center justify-content-lg-end md-mt-40">
                            <div
                                className="nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                            >
                                <button
                                    className="nav-link active"
                                    id="nav-month-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-month"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-month"
                                    aria-selected="true"
                                    tabIndex={-1}
                                >
                                    Wordpress
                                </button>
                                <button
                                    className="nav-link"
                                    id="nav-year-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-year"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-year"
                                    aria-selected="false"
                                    tabIndex={-1}
                                >
                                    Modern webbteknik
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="tab-content mt-50 md-mt-30">
                    <div
                        className="tab-pane show active"
                        id="nav-month"
                        role="tabpanel"
                        aria-labelledby="nav-month-tab"
                        tabIndex={0}
                    >
                        <div className="row gx-xl-5">
                            <div className="col-md-6 mb-65 md-mb-30">
                                <PricingCardItem
                                    title="Grundläggande Drift"
                                    month="engångs"
                                    price="4 900"
                                    desc="Idealisk för nystarter och enklare webbplatser som vill ha allt väsentligt på ett ställe."
                                    membership="/år"
                                    lists={[
                                        "Egen domän (.se, .com, etc.)",
                                        "Obegränsat antal e-postadresser",
                                        "Administratörssystem (CMS)",
                                        "Svensk webbhotell",
                                        "SSL-certifikat (HTTPS & säkerhet)",
                                        " Fria mindre uppdateringar (max 1 timme/månad)",
                                        "Support (E-post, 24h svarstid)",
                                    ]}
                                />
                            </div>
                            <div className="col-md-6 mb-65 md-mb-30">
                                <PricingCardItem
                                    title="Premium Drift"
                                    month="engångs"
                                    price="7 900"
                                    membership="/år"
                                    desc="För växande företag som kräver mer avancerad support och regelbundet underhåll."
                                    lists={[
                                        "Allt i Grundpaket +",
                                        "Prioriterad support (Telefon/chat, 8h svarstid)",
                                        "Automatiska säkerhetskopior (daglig backup)",
                                        " SEO-grundoptimering (bas-justeringar)",
                                        " 3 timmars uppdateringar/månad",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane"
                        id="nav-year"
                        role="tabpanel"
                        aria-labelledby="nav-year-tab"
                        tabIndex={0}
                    >
                        <div className="row gx-xl-5">
                            <div className="col-md-6 mb-65 md-mb-30">
                                <PricingCardItem
                                    title="Standard Drift"
                                    month="engångs"
                                    price="6 900"
                                    desc="Perfekt för mindre projekt eller statiska webbplatser."
                                    membership="/år"
                                    lists={[
                                        "Automatisk deployment (CI/CD)",
                                        "Global CDN (Snabb laddning överallt)",
                                        "SSL-certifikat (HTTPS)",
                                        "Molnhosting",
                                        "Support (E-post, 24h svarstid)",
                                        "Prestandaövervakning",
                                    ]}
                                />
                            </div>
                            <div className="col-md-6 mb-65 md-mb-30">
                                <PricingCardItem
                                    title="Pro Drift"
                                    month="engångs"
                                    price="11 900"
                                    membership="/år"
                                    desc="För kritiska applikationer och företagslösningar."
                                    lists={[
                                        "Allt i Standard +",
                                        "Realtidsövervakning (99,9% uppetid)",
                                        "Dedikerad teknisk kontakt",
                                        "Kvartalsvis optimering",
                                        "Upp till 5 timmars utvecklingssupport/år – för vidareutveckling och teknisk rådgivning",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-banner position-relative">
                    <Image
                        src={icon}
                        alt="icon"
                        className="lazy-img shapes screen_01"
                    />
                    <div className="row align-items-center justify-content-end">
                        <div className="col-lg-6">
                            <h2 className="pb-20">Vad kostar en hemsida?</h2>
                            <p>
                                Vi arbetar inte med färdiga paket – varje
                                hemsida vi bygger anpassas efter dina unika
                                behov och mål. Priset beror på funktioner,
                                design och omfattning. <br />
                                <span>Kontakta oss</span> så tar vi fram en
                                kostnadsfri offert baserad på just ditt projekt.
                            </p>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <Link href="/kontakta-oss" className="btn-four">
                                Kontakta oss
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingArea;

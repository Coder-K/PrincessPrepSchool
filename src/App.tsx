import "./App.css";
import Modling2 from "./Images/Modling2.png";
import Eti from "./Images/Eti.png";
import dance from "./Images/dance.png";
import Crown2 from "./Images/Crown2.png";
import Speech from "./Images/Speech.png";
import Portfolio from "./Images/portfolio2.png";
import Practical from "./Images/best-practice.png";

const images = import.meta.glob("/src/Images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

function getImage(filename: string): string {
  return images[`/src/Images/${filename}`] as string;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "size-5 -rotate-45" : "size-5"}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Spark() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 2.5c.6 5.8 3.7 8.9 9.5 9.5-5.8.6-8.9 3.7-9.5 9.5-.6-5.8-3.7-8.9-9.5-9.5 5.8-.6 8.9-3.7 9.5-9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const message = "Hello, I'm interested in enrolling my child into your lessons";

const programs = [
  {
    number: "01",

    title: "Runway &\nMODELLING",

    text: "Girls learn confident walking, posture, and movement in heels. Training focuses on composure, balance, and presentation under pressure.",

    color: "program-card--pink",

    image:
      "https://raw.githubusercontent.com/Coder-K/PrincessPrepSchool/main/src/Images/Modling2.png",

    icon: "♛",
  },

  {
    number: "02",

    title: "DEPORTMENT & \nETIQUETTE",

    text: "Girls are taught refined behaviour, posture, manners, and social awareness. Teaching them to carry themselves with Grace",

    // color: "program-card--purple",
    photo: "photo-champagne",

    image: Eti,

    icon: "❁",
  },

  {
    number: "03",

    title: "DANCE & \nTALENT DEVELOPMENT",

    text: "Girls are taught a fusion of Latin and modern dance and learn how tocustomize each routine to include theirown special talents, allowing them todiversify and perform confidently duringthe talent segment of pageants.",

    color: "program-card--lime",
    photo: "photo-rose",

    image: dance,

    icon: "♫",
  },

  {
    number: "04",

    title: "PAGEANT TRAINING & \nPARTICIPATION",

    text: "Girls receive structured preparation for pageants. Every four months, girls are entered into pageants to assess progress and gain practical experience",

    photo: "photo-champagne",
    image: Crown2,
    icon: "♛",
  },

  {
    number: "05",

    title: "PUBLIC SPEAKING \n& DEBATE",

    text: "Girls develop clear communication, critical thinking, and confidence in expressing ideas. Training emphasises respectful argument, composure, and thinking under pressure..",

    color: "program-card--lime",
    photo: "photo-rose",

    image: Speech,
    icon: "❝",
  },

  {
    number: "06",

    title: "LEADERSHIP \nPORTFOLIO",

    text: "Girls build strong leadership portfolios through volunteering, charity initiatives, fundraising, and community involvement. Plus short holiday attachments to build a resume.",

    color: "program-card--pink",
    image: Portfolio,
    icon: "✎",
  },

  {
    number: "07",

    title: "PRACTICAL APPLICATION\n EXCURSIONS",

    text: "Every other month the girls go on a trip to either apply classroom knowledge or observe professionals.",

    color: "program-card--lime",
    photo: "photo-rose",
    span: "program-feature",

    image: Practical,
    icon: "✧",
  },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-cream text-brand-forest">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/25 text-white">
        <div className=" container nav-shell ">
          <a className="flex items-center  text-brand-pink gap-2.5" href="#">
            <img
              src={getImage("crownPink.svg")}
              alt="crown"
              className="size-9 text-brand-lime-soft fill-current "
            />
            Princess Prep School
          </a>

          <nav
            aria-label="Main navigation"
            className="desktop-nav text-brand-forest"
          >
            <a className="transition-opacity hover:opacity-70" href="#programs">
              Curriculum
            </a>

            <a className="transition-opacity hover:opacity-70" href="#fees">
              Fees & Enrollment
            </a>

            <a
              className="transition-opacity hover:opacity-70"
              href="#requirements"
            >
              Requirements
            </a>
          </nav>

          <a
            className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-brand-forest transition-transform hover:-translate-y-0.5"
            href="#enroll"
          >
            Apply now
            <Spark />
          </a>
        </div>
      </header>

      <section id="home" className="hero quote-section">
        <div className="hero-orbit orbit-one" aria-hidden="true"></div>
        <div className="hero-orbit orbit-two" aria-hidden="true"></div>
        <div className="hero-spark hero-spark-one" aria-hidden="true">
          ✧
        </div>
        <div className="hero-spark hero-spark-two" aria-hidden="true">
          ✦
        </div>
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="eyebrow-line"></span> THE BEGINNING OF SOMETHING
              BEAUTIFUL
            </div>
            <h1>
              Preparing young ladies to take on{" "}
              <span className="relative inline-block italic text-brand-pink">
                The World
                <svg
                  aria-hidden="true"
                  className="absolute -right-10 -top-6 hidden w-14 text-brand-pink sm:block"
                  fill="none"
                  viewBox="0 0 64 48"
                >
                  <path
                    d="M7 29 1 36M31 17 29 2M47 24 59 14"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
              </span>
              <span className="gold-period">.</span>
              with Elegance.
            </h1>
            <p className="hero-lede">
              A pageant training and scholarship portfolio development academy
              dedicated to shaping confident, elegant young ladies through
              structured training, mentorship and leadership development.
            </p>
            <div className="hero-cta">
              <a className="button button-primary button-large" href="#enroll">
                Begin her journey
                <span className="button-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a className="text-link" href="#programs">
                Explore our curriculum <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note-icon" aria-hidden="true">
                ✳
              </span>
              <span>Poise. Confidence. Kindness. Presence.</span>
            </div>
          </div>
          <div
            className="hero-visual reveal"
            aria-label="Princess Prep School academy imagery"
          >
            <div className="hero-image-frame">
              <img
                src={getImage("Background.png")}
                alt="Young ladies at an elegant event"
              />
              <div className="hero-image-overlay"></div>
            </div>
            <span className="photo-label">
              <span className="label-spark">✦</span> ELEGANCE IS AN ATTITUDE
            </span>
            <div className="hero-medallion">
              <span className="medallion-spark">✦</span>
              <strong>
                Bloom
                <br />
                with
                <br />
                <i>purpose</i>
              </strong>
              <span className="medallion-bottom">THE PRINCESS PREP WAY</span>
            </div>
            <div className="floating-seal">
              <span>EST.</span>
              <strong>✧</strong>
              <span>TO SHINE</span>
            </div>
            <span className="hero-caption">
              Empowering tomorrow's confident young women
            </span>
          </div>
        </div>
        <div className="hero-bottom-ornament" aria-hidden="true">
          ✦
        </div>
      </section>

      <section className=" value-strip bg-brand-purple py-5 text-[#FFFFFF]">
        <div className="marquee-track flex min-w-max items-center gap-7 text-sm font-extrabold uppercase tracking-[0.14em]">
          {[...Array(2)].flatMap((_, set) =>
            ["Poise", "Confidence", "Kindness", "Presence"].map((item) => (
              <div className="flex items-center gap-7" key={`${set}-${item}`}>
                <span>{item}</span>

                <Spark />
              </div>
            )),
          )}
        </div>
      </section>

      <section id="programs" className="section curriculum-section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Our Foundatin For Excellences</p>

              <h2 className="font-display mt-5 max-w-2xl text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl">
                Curriculum <br />
                <em className="text-brand-pink">Break Down</em>
              </h2>
            </div>

            <p className="max-w-lg text-base leading-7 text-brand-muted lg:ml-auto lg:pb-2">
              Our curriculum aligns with pageant judging criteria, giving girls
              thorough preparation and a competitive edge for competing and
              winning. Beyond pageantry, girls build a well- rounded portfolio —
              including volunteer work, holiday experience, leadership, and soft
              skills — creating a CV that opens doors to scholarships,
              university, and future opportunities. Giving them an alternative
              route to get ahead in life beyond academics
            </p>
          </div>
          <hr />
          <br />
          <div className=" program-grid">
            {programs.map((program) => (
              <article
                className={`program-card ${program.span} reveal ${program.color}`}
                key={program.number}
              >
                {/* <span className="text-brand-forest font-extrabold tracking-[0.16em]">
                  {program.number}
                </span> */}
                <div
                  className={`program-photo ${program.photo}`}
                  key={program.number}
                  data-art={program.icon}
                >
                  <img
                    loading="lazy"
                    src={program.image}
                    alt={program.title}
                    className="mt-flex w-flex h-flex object-cover "
                  />
                </div>
                <div className="program-body">
                  <span className="program-category"></span>
                  <div className="mt-5">
                    <h3>{program.title}</h3>
                    <p>{program.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section" aria-label="Our philosophy">
        <div className="container quote-content reveal">
          <span className="quote-star" aria-hidden="true">
            ✦
          </span>
          <p>
            Not just preparing her
            <br />
            for the <em>spotlight.</em>
            <br />
            Preparing her for <em>life.</em>
          </p>
          <span className="quote-under">
            CONFIDENCE THAT GOES FAR BEYOND THE STAGE
          </span>
        </div>
      </section>

      <section id="requirements" className="section requirements-section">
        <div className="container requirements-layout">
          <div className="requirements-heading reveal">
            <p className="eyebrow">BASIC CLASS ESSENTIALS</p>
            <h2>
              Little things.
              <br />
              <em>Big Impact.</em>
            </h2>
            <p>
              Getting ready for className is simple. Here's all your young lady
              needs to bring along.
            </p>
            <a className="text-link" href="#enroll">
              Questions about classes? <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="requirement-cards">
            <div className="requirement-card reveal">
              <span className="req-number">01</span>
              <div className="req-icon" aria-hidden="true">
                <img
                  src={getImage("high-heels.svg")}
                  alt="heels"
                  className="w-flex"
                />
              </div>
              <h3>A pair of heels</h3>
              <p>An old pair of heels that fit comfortably.</p>
            </div>
            <div className="requirement-card reveal">
              <span className="req-number">02</span>
              <div className="req-icon" aria-hidden="true">
                <img src={getImage("book.svg")} alt="heels" className="w-40" />
              </div>
              <h3>A 2-quire book</h3>
              <p>A notebook for lessons, reflections and practice.</p>
            </div>
            <div className="requirement-card reveal">
              <span className="req-number">03</span>
              <div className="req-icon" aria-hidden="true">
                <img src={getImage("skirt.svg")} alt="book" className="w-40" />
                {/* <svg viewBox="0 0 72 72" fill="none">
                  <path
                    d="m24 16 12 9 12-9 12 11-10 11-5-5 4 24H23l4-24-5 5-10-11 12-11Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M36 25v32M28 43h16"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg> */}
              </div>
              <h3>School dress</h3>
              <p>Please attend className in school dress.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fees" className="fees-section">
        <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="fees-decoration fees-decoration-1" aria-hidden="true">
            ✧
          </div>
          <div className="fees-decoration fees-decoration-2" aria-hidden="true">
            ✦
          </div>

          <div className="relative min-h-[560px]">
            <div className="fees-image reveal rounded-[0.8rem]">
              <img
                src={getImage("backround2.png")}
                alt="Little Princesses in a pageant"
                className="h-full w-full object-cover"
              />
              <div className="impact-card">
                <p className="font-display text-6xl tracking-[-0.05em]">20%</p>

                <p className="mt-2 text-sm font-bold leading-5">
                  Of all proceeds go to The School for child enrichment
                  programmes
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <p className="eyebrow eyebrow-light text-brand-pink-soft">
              <span className="eyebrow "></span> SIMPLE & THOUGHTFUL PRICING
            </p>
            <h2 className="font-display mt-5 text-5xl leading-[0.96] tracking-[-0.045em] md:text-7xl">
              Fees
              <br />
              <span className="italic text-brand-pink-soft price">
                R1100 <small>per month</small>
              </span>
            </h2>

            <div className="mt-10 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-2">
              {[
                ["Weekly classes", "R 600 /month"],
                [
                  "Competitions",
                  "R 500 /month ",
                  "(Covers all competition expenses including dresses,accessories and shoes)",
                ],
              ].map(([title, text, comment]) => (
                <div key={title}>
                  <p className="flex items-center gap-2 font-extrabold">
                    <span className="text-brand-lime">●</span>
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                  <p className="fee-detail text-white">{comment}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/70">
              The monthly competition fund prevents parents from having to pay
              large, once-off amounts when competitions arise. By contributing
              gradually, girls’ competition outfits and requirements are covered
              in advance. This makes pageant participation more affordable,
              predictable, and stress- free. Parents are free to choose to
              handle competition costs at their own discretion!
              <strong>
                Parents may also choose to manage competition expenses
                independently.
              </strong>
            </p>
          </div>
          <a href="#enroll" className="button button-gold">
            Talk to us about enrollment <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section id="enroll" className="enroll-section">
        <div className="container">
          <div className="enroll-panel reveal">
            <div className="enroll-decoration" aria-hidden="true">
              ✧
            </div>
            <div className="enroll-copy">
              <p className="eyebrow">
                <span className="eyebrow-line"></span> ENROLLMENT OPEN • 2026–27
              </p>
              <h2>
                Her next chapter
                <br />
                starts <em>here.</em>
              </h2>
              <p>
                Ready to help her discover her confidence, character and
                sparkle? We'd love to welcome you to Princess Prep School.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe5r9y9c4mHnQbJNqw_hAqKf4saZrf3ifkn4oPceR_ZeINNqg/viewform?usp=dialog"
                className="button button-primary button-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start your application
                <span className="button-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <span className="enroll-helper">
                Opens WhatsApp with a prepared message
              </span>
            </div>
            <div className="enroll-contact">
              <div className="contact-title">
                LET'S TALK ABOUT HER FUTURE <span aria-hidden="true">✧</span>
              </div>
              <div className="contact-item">
                <span>EMAIL US</span>
                <a href="mailto:info.princessprepschool@gmail.com">
                  info.princessprepschool@gmail.com
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="contact-item">
                <span>WHATSAPP US</span>
                <a
                  href="https://wa.me/27644844533"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  064 484 4533 <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="contact-footer">
                Every confident young woman has a beautiful story in the making.
                <span>✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 py-12 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <a className="flex items-center gap-2.5" href="#">
              <img
                src={getImage("crownPink.svg")}
                alt="crown"
                className="size-9 text-brand-lime-soft fill-current "
              />
              <span className="text-[17px] font-extrabold tracking-[-0.03em]">
                Princess Prep School
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-brand-muted">
              An etiquette school helping the next generation of women move
              through the world with confidence and grace.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold">
            <a href="#programs">Curiculum</a>

            <a href="#fees">Fees</a>

            <a href="#requirements">Requirements</a>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1312px] flex-col gap-2 border-t border-brand-forest/15 pt-5 text-xs text-brand-muted-light sm:flex-row sm:justify-between">
          <p>© 2026 Princess Prep School. All rights reserved.</p>

          <p>Timeless grace for young girls.</p>
          <p>App designed by Coder K in Figma</p>
        </div>
      </footer>
    </main>
  );
}

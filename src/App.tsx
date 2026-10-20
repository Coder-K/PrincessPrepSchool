import "./App.css";

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

    image: "src\Images\Modling2.png",
  },

  {
    number: "02",

    title: "DEPORTMENT & \nETIQUETTE",

    text: "Girls are taught refined behaviour, posture, manners, and social awareness. Teaching them to carry themselves with Grace",

    color: "program-card--purple",

    image: "src\Images\Eti.png",
  },

  {
    number: "03",

    title: "DANCE & \nTALENT DEVELOPMENT",

    text: "Girls are taught a fusion of Latin and modern dance and learn how tocustomize each routine to include theirown special talents, allowing them todiversify and perform confidently duringthe talent segment of pageants.",

    color: "program-card--lime",

    image: "src\Images\dance.png",
  },

  {
    number: "04",

    title: "PAGEANT TRAINING & \nPARTICIPATION",

    text: "Girls receive structured preparation for pageants. Every four months, girls are entered into pageants to assess progress and gain practical experience",

    color: "program-card--purple",
    image: "src\Images\Crown2.png",
  },

  {
    number: "05",

    title: "PUBLIC SPEAKING \n& DEBATE",

    text: "Girls develop clear communication, critical thinking, and confidence in expressing ideas. Training emphasises respectful argument, composure, and thinking under pressure..",

    color: "program-card--lime",
    image: "src\Images\Speech.png",
  },

  {
    number: "06",

    title: "LEADERSHIP \nPORTFOLIO",

    text: "Girls build strong leadership portfolios through volunteering, charity initiatives, fundraising, and community involvement. Plus short holiday attachments to build a resume.",

    color: "program-card--pink",
    image: "src\Images\portfolio2.png",
  },

  {
    number: "07",

    title: "PRACTICAL APPLICATION\n EXCURSIONS",

    text: "Every other month the girls go on a trip to either apply classroom knowledge or observe professionals.",

    color: "program-card--lime",
    image: "src\Images\best-practice.png",
  },
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-cream text-brand-forest">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/25 text-white">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <a className="flex items-center gap-2.5" href="#">
            <img
              src={getImage("crownPink.svg")}
              alt="crown"
              className="size-9 text-brand-lime-soft fill-current "
            />
            Princess Prep School
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-9 text-sm font-bold md:flex"
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

      <section className="relative min-h-[760px] bg-brand-forest text-white lg:min-h-[860px]">
        <img
          alt="Young women enjoying an elegant formal dinner"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
          src={getImage("Background.png")}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#8846eb(17,48,40,.96)_0%,#f8f5ef(17,48,40,.74)_43%,#f8f5ef(17,48,40,.12)_80%)]" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#17352D]/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-16 pt-36 md:px-10 lg:min-h-[860px] lg:px-16 lg:pb-20">
          <div className="max-w-[800px]">
            <div className="mb-7 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-lime-soft">
              <span className="h-px w-10 bg-current" />
              Pageant Training and Portfolio Building Academy
            </div>

            <h1 className="font-display max-w-[780px] text-[clamp(4.5rem,9vw,8.2rem)] leading-[0.82] tracking-[-0.065em]">
              Preparing young ladies to take on
              <br />
              <span className="relative inline-block italic text-brand-pink">
                The World
                <svg
                  aria-hidden="true"
                  className="absolute -right-10 -top-6 hidden w-14 text-brand-lime-soft sm:block"
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
              </span>{" "}
              with Elegance.
            </h1>

            <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-center sm:gap-10">
              <p className="max-w-md text-base leading-7 text-white/78 md:text-lg">
                Princess Prep School is a pageant training and scholarship
                portfolio development academy dedicated to shaping confident,
                elegant young ladies through structured training, mentorship,
                and leadership development
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-purple py-5 text-[#FFFFFF]">
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

      <section className="px-5 py-24 md:px-10 lg:px-16 lg:py-32" id="programs">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">WHAT WE DO</p>

              <h2 className="font-display mt-5 max-w-2xl text-5xl leading-[0.98] tracking-[-0.045em] md:text-7xl">
                Curriculum Break Down
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

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {programs.map((program) => (
              <article
                className={`program-card ${program.color} group lg:p-9`}
                key={program.number}
              >
                <span className="text-brand-forest font-extrabold tracking-[0.16em]">
                  {program.number}
                </span>

                <div className="mt-5">
                  <h3 className="font-display whitespace-pre-line text-[#FFFFFF] text-4xl leading-[0.98] tracking-[-0.035em] lg:text-5xl">
                    {program.title}
                  </h3>

                  <div className="my-6 h-px bg-brand-forest/25" />

                  <p className="max-w-xs text-sm font-medium leading-6 text-[#FFFFFF]">
                    {program.text}
                  </p>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="mt-flex w-flex h-80 object-cover "
                  />
                </div>
              </article>
            ))}
            <section
              id="requirements"
              className="w-full pt-6 pb-0 lg:px-16 md:col-span-2"
            >
              <div className="program-card border  border-brand-forest/25 group text-center px-7 pt-7 pb-0 lg:px-9 lg:pt-9 ">
                <h2 className="font-display whitespace-pre-line text-4xl leading-[0.98] tracking-[-0.035em] lg:text-5xl">
                  Class Requirements
                </h2>
                <div className="my-6 h-px pb-0 bg-brand-forest/25" />
                <ul className="list-none space-y-3 pl-6 pb-0 text-center leading-7">
                  <li>Pair of old heels that fit</li>
                  <li>A 2 Quire Book</li>
                  <li>Attend class in school dress</li>
                </ul>
                <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
                  <img
                    src={getImage("skirt.svg")}
                    alt="skirt"
                    className="w-40"
                  />
                  <img
                    src={getImage("high-heels.svg")}
                    alt="heels"
                    className="w-40"
                  />
                  <img src={getImage("book.svg")} alt="book" className="w-40" />
                </div>
                ```
              </div>
            </section>
          </div>
        </div>
      </section>

      <section
        className="bg-brand-purple px-5 pt-20 pb-0 text-white md:px-10 lg:px-16 lg:pt-28"
        id="fees"
      >
        <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[560px]">
            <div className="absolute left-0 top-0 h-[88%] w-[84%] overflow-hidden rounded-[0.8rem]">
              <img
                src={getImage("backround2.png")}
                alt="Little Princesses in a pageant"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-56 rounded-[1.5rem] bg-brand-pink p-7 text-[#FFFFFF] shadow-2xl md:w-64">
              <p className="font-display text-6xl tracking-[-0.05em]">20%</p>

              <p className="mt-2 text-sm font-bold leading-5">
                Of all proceeds go to The School for child enrichment programmes
              </p>
            </div>
          </div>

          <div className="lg:pl-12">
            <h2 className="font-display mt-5 text-5xl leading-[0.96] tracking-[-0.045em] md:text-7xl">
              Fees
              <br />
              <span className="italic text-brand-lime">
                R1100-All inclusive.
              </span>
            </h2>

            <div className="mt-10 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-2">
              {[
                ["Weekly classes", "R 600 per Month"],

                [
                  "Competitions",

                  "R 500 per month  \n (Covers all competition expenses including dresses,accessories and shoes)",
                ],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="flex items-center gap-2 font-extrabold">
                    <span className="text-brand-lime">●</span>

                    {title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
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
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-5 md:px-10 md:pb-10" id="enroll">
        <div className="relative  mt-10 mx-auto max-w-[1360px] overflow-hidden rounded-[2rem] bg-brand-pink px-6 py-16 text-center md:px-16 md:py-24">
          <div className="absolute -left-16 -top-20 size-64 rounded-full border-[45px] border-brand-lime-soft/80" />

          <div className="absolute -bottom-32 -right-16 size-72 rounded-full bg-brand-lilac" />

          <div className="relative">
            <p className="mx-auto mb-6 w-fit rounded-full border border-brand-forest/25 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em]">
              Enrollment open for 2026 -27
            </p>

            <h2 className="font-display mx-auto max-w-4xl text-5xl leading-[0.92] tracking-[-0.055em] md:text-8xl">
              Contact US &
              <span className="italic text-brand-purple"> Apply Now</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-brand-forest-light">
              Email:
              <a
                className="email ml-2"
                href="mailto:info.princessprepschool@gmail.com"
              >
                info.princessprepschool@gmail.com
              </a>
              <hr />
              Whatsapp:
              <a
                className="whatsapp ml-2"
                href="https://wa.me/+27644844533"
                target="_blank"
              >
                064 484 4533
              </a>
            </p>

            <a
              className="group mx-auto mt-9 flex w-fit items-center gap-5 rounded-full bg-brand-purple py-2 pl-7 pr-2 text-sm font-extrabold text-white"
              href={`https://wa.me/+27644844533?text=${encodeURIComponent(message)}`}
              target="_blank"
            >
              Start your application
              <Spark />
            </a>
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

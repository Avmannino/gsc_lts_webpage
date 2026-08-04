import { useState } from "react";
import "./App.css";

const programImages = [
  {
    fileName: "lts-photo-1.jpeg",
    alt: "Young skaters participating in the Greenwich Skating Club Learn to Skate program",
    className: "photo-card--one",
  },
  {
    fileName: "lts-photo-2.jpeg",
    alt: "Beginning skater practicing balance on the ice",
    className: "photo-card--two",
  },
  {
    fileName: "lts-photo-3.jpeg",
    alt: "Learn to Skate participants practicing together",
    className: "photo-card--three",
  },
  {
    fileName: "lts-photo-4.png",
    alt: "Young skater building confidence on the ice",
    className: "photo-card--four",
  },
];

const REGISTRATION_URL = "";

const equipmentItems = [
  {
    title: "Hockey Helmet",
    description: "A properly fitted hockey helmet with face protection.",
  },
  {
    title: "Snowpants",
    description:
      "Warm snowpants that allow your child to move comfortably.",
  },
  {
    title: "Gloves or Mittens",
    description:
      "Warm gloves or mittens that provide complete hand coverage.",
  },
  {
    title: "Skates",
    description:
      "Figure skates, hockey skates or Softec skates may be used.",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="button-arrow"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="check-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function HeroLogo() {
  const [imageFailed, setImageFailed] = useState(false);

  const imageSource = `${import.meta.env.BASE_URL}gsc-logo.png`;

  return (
    <span className="hero-logo">
      {!imageFailed ? (
        <img
          src={imageSource}
          alt="Greenwich Skating Club logo"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="hero-logo__placeholder">
          Add logo
          <br />
          public/logo.png
        </span>
      )}
    </span>
  );
}

function PhotoCard({ fileName, alt, className, index }) {
  const [imageFailed, setImageFailed] = useState(false);

  const imageSource = `${import.meta.env.BASE_URL}${fileName}`;

  return (
    <figure className={`photo-card ${className}`}>
      <div className="photo-card__frame">
        {!imageFailed ? (
          <img
            src={imageSource}
            alt={alt}
            loading={index === 0 ? "eager" : "lazy"}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="photo-placeholder">
            <span className="photo-placeholder__number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <strong>Add your photo</strong>
              <span>public/{fileName}</span>
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}

function RegisterButton() {
  const [showNotice, setShowNotice] = useState(false);

  if (REGISTRATION_URL) {
    return (
      <a
        className="secondary-button"
        href={REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Registration
      </a>
    );
  }

  return (
    <div className="register-button-wrap">
      <button
        type="button"
        className="secondary-button"
        onClick={() => setShowNotice((value) => !value)}
      >
        Registration
      </button>

      {showNotice && (
        <div className="register-notice" role="status">
          <strong>Check Back Later...</strong>
          <p>
            We are not currently accepting registrations for this program.
          </p>
        </div>
      )}
    </div>
  );
}

function EquipmentItem({ title, description }) {
  return (
    <article className="equipment-item">
      <span className="equipment-item__icon">
        <CheckIcon />
      </span>

      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__background-shape hero__background-shape--one" />
        <div className="hero__background-shape hero__background-shape--two" />

        <div className="hero__inner">
          <div className="hero__content">
            <h1>
              Learn to
              <span className="hero-title-skate">
                <HeroLogo />
                Skate
              </span>
            </h1>

            <p className="hero__intro">
              A fun introduction to skating that helps children develop
              balance, coordination and confidence on the ice.
            </p>

            <div className="hero__details">
              <div className="hero-detail">
                <span className="hero-detail__label">Age Group</span>
                <strong>3–5 Years</strong>
              </div>

              <div className="hero-detail">
                <span className="hero-detail__label">Program Focus</span>
                <strong>Beginning Skaters</strong>
              </div>
            </div>

            <div className="hero__actions">
              <a className="primary-button" href="#program-details">
                Program Details
                <ArrowIcon />
              </a>

              <RegisterButton />
            </div>
          </div>

          <div
            className="hero__gallery"
            aria-label="Learn to Skate program photo gallery"
          >
            {programImages.map((image, index) => (
              <PhotoCard
                key={image.fileName}
                fileName={image.fileName}
                alt={image.alt}
                className={image.className}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="hero__bottom-line" />
      </section>

      <section id="program-details" className="program-section">
        <div className="section-container program-layout">
          <div className="program-main">
            <div className="program-heading">
              <div className="section-label">The Program</div>

              <h2>First steps on the ice.</h2>
            </div>

            <div className="program-copy">
              <p>
                Designed for beginning skaters ages 3–5 years, the Learn to
                Skate program stresses preliminary coordination and strength
                to maneuver on skates. This class will include fun and games
                to encourage enjoyment of skating.
              </p>

              <p>
                In Learn to Skate, players are introduced to basic skating
                skills such as balance, agility and edge control. Skating is
                the foundation to all other hockey skills. GSC encourages
                all current and future Mini-Mite players to enroll in Learn
                to Skate classes.
              </p>

              <div className="age-notice">
                <span className="age-notice__symbol">*</span>

                <p>
                  Skaters must be 3 years of age to participate.
                </p>
              </div>
            </div>
          </div>

          <div id="required-equipment" className="equipment-callout">
            <div className="equipment-panel__intro">
              <div className="section-label section-label--light">
                What to Bring
              </div>

              <h2>Required Equipment</h2>

              <p>
                Each skater should arrive dressed and ready for a safe,
                comfortable session on the ice.
              </p>
            </div>

            <div className="equipment-grid">
              {equipmentItems.map((item) => (
                <EquipmentItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            <div className="weather-reminder">
              <div className="weather-reminder__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <path d="M24 5v38" />
                  <path d="m13 11 22 26" />
                  <path d="m35 11-22 26" />
                  <path d="M5 24h38" />
                  <path d="m11 13 26 22" />
                  <path d="m37 13-26 22" />
                </svg>
              </div>

              <div>
                <span>Cold Weather Reminder</span>

                <p>
                  Please remember to dress your child appropriately,
                  especially in extremely cold weather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
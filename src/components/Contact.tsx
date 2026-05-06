import { MouseEvent, ReactNode, useEffect, useRef } from "react";
import {
  MdCopyright,
  MdContentCopy,
  MdCheck,
  MdEmail,
  MdLocationOn,
  MdArrowOutward,
} from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { config } from "../config";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import "./styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  { href: config.contact.github, label: "Github", handle: "@gomeslxy", icon: FaGithub },
  { href: config.contact.linkedin, label: "Linkedin", handle: "Lucas Gomes", icon: FaLinkedinIn },
  { href: config.contact.instagram, label: "Instagram", handle: "@1llucasgm", icon: FaInstagram },
] as const;

interface ContactCardProps {
  className?: string;
  children: ReactNode;
}

const ContactCard = ({ className = "", children }: ContactCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      ref={ref}
      className={`contact-box ${className}`.trim()}
      onMouseMove={handleMove}
    >
      <div className="contact-box-glow" />
      <div className="contact-box-content">{children}</div>
    </div>
  );
};

const Contact = () => {
  const { copied, copy } = useCopyToClipboard();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    timeline.fromTo(
      ".contact-tag",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    timeline.fromTo(
      ".contact-title",
      { opacity: 0, y: 60, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      },
      "-=0.3"
    );

    timeline.fromTo(
      ".contact-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 0.6, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.5"
    );

    timeline.fromTo(
      ".contact-box",
      { opacity: 0, y: 60, filter: "blur(8px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.5"
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="contact-section" id="contact">
      <div className="contact-bg-fade" aria-hidden="true" />
      <div className="contact-orb contact-orb-1" aria-hidden="true" />
      <div className="contact-orb contact-orb-2" aria-hidden="true" />
      <div className="contact-orb contact-orb-3" aria-hidden="true" />
      <div className="contact-grid-bg" aria-hidden="true" />
      <div className="contact-noise" aria-hidden="true" />

      <div className="contact-container section-container">
        <div className="contact-header">
          <span className="contact-tag">
            <span className="status-dot" aria-hidden="true" />
            DISPONÍVEL PARA PROJETOS
          </span>
          <h3 className="contact-title">
            Vamos <br />
            <span className="title-accent">conversar.</span>
          </h3>
          <p className="contact-subtitle">
            Aberto a freelas, parcerias e novas oportunidades. <br />
            Resposta normalmente em até 24 horas.
          </p>
        </div>

        <div className="contact-flex">
          <ContactCard className="contact-box-email">
            <div className="contact-box-header">
              <h4>
                <MdEmail /> E-mail
              </h4>
              <span className="contact-box-index">01</span>
            </div>
            <div className="email-display">
              <a
                href={`mailto:${config.contact.email}`}
                data-cursor="disable"
                className="email-link"
              >
                {config.contact.email}
              </a>
              <button
                className="copy-btn"
                onClick={() => copy(config.contact.email)}
                data-cursor="disable"
                title="Copiar email"
                aria-label="Copiar email"
              >
                <span
                  className={`copy-btn-icon${copied ? " is-copied" : ""}`}
                >
                  {copied ? (
                    <MdCheck className="icon-success" />
                  ) : (
                    <MdContentCopy />
                  )}
                </span>
              </button>
            </div>
            <div className="contact-box-footer">
              <h4>
                <MdLocationOn /> Localização
              </h4>
              <p className="location">{config.social.location}</p>
            </div>
          </ContactCard>

          <ContactCard className="contact-box-social">
            <div className="contact-box-header">
              <h4>Redes</h4>
              <span className="contact-box-index">02</span>
            </div>
            <div className="social-links-list">
              {SOCIAL_LINKS.map(({ href, label, handle, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  <span className="contact-social-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="contact-social-text">
                    <span className="contact-social-label">{label}</span>
                    <span className="contact-social-handle">{handle}</span>
                  </span>
                  <span className="contact-social-arrow" aria-hidden="true">
                    <MdArrowOutward />
                  </span>
                </a>
              ))}
            </div>
          </ContactCard>

          <ContactCard className="contact-box-credit">
            <div className="contact-box-header">
              <h4>Crédito</h4>
              <span className="contact-box-index">03</span>
            </div>
            <h2>
              Desenvolvido por <br />
              <span>{config.developer.fullName}</span>
            </h2>
            <p className="credit-tagline">{config.developer.title}</p>
            <div className="contact-box-footer">
              <h5>
                <MdCopyright /> {new Date().getFullYear()} · Todos os direitos
                reservados
              </h5>
            </div>
          </ContactCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;

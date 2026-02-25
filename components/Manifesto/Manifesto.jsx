"use client";
import "./Manifesto.css";
import Copy from "../Copy/Copy";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const Manifesto = () => {
  useGSAP(() => {
    function initStickyWorkHeaderAnimation() {
      const workHeaderSection = document.querySelector(
        ".featured-missions-header"
      );
      const homeWorkSection = document.querySelector(".featured-missions");

      if (!workHeaderSection || !homeWorkSection) return;

      ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }
    initStickyWorkHeaderAnimation();
  });
  return (
    <>
      <section id="manifesto" className="featured-missions-header">
        <Copy>
          <h1 className="text-[#ebb02b]!">
            My <br /> Manifesto
          </h1>
          <p>
            Africa’s renewal lies in the harmony between tradition and progress.
          </p>
        </Copy>
      </section>
      <section className="featured-missions">
        <div className="featured-missions-list lg:w-[40%]! md:w-[60%]!">
          <Link href="/" className="featured-missions-item">
            <p>01 / 04</p>
            <h3 className="lg:text-4xl! text-2xl!">Leadership is Sacred</h3>
            <div className="featured-mission-item-img">
              <img src="/img30.jpg" alt="" />
            </div>
            <p className="lg:text-sm! text-sm!">
              [ A covenant of service, justice, and stewardship toward one’s
              people and the land. ]
            </p>
          </Link>

          <Link href="/" className="featured-missions-item">
            <p>02 / 04</p>
            <h3 className="lg:text-4xl! text-2xl!">Tradition & Modernity</h3>
            <div className="featured-mission-item-img">
              <img src="/img2.jpg" alt="" />
            </div>
            <p className="lg:text-sm! text-sm!">
              [ Twin pillars upon which Africa’s renewal must rest; one
              preserving identity, the other propelling progress. ]
            </p>
          </Link>

          <Link href="/" className="featured-missions-item">
            <p>03 / 04</p>
            <h3 className="lg:text-4xl! text-2xl!">Environment is Life</h3>
            <div className="featured-mission-item-img">
              <img src="/img9.jpg" alt="" />
            </div>
            <p className="lg:text-sm! text-sm!">
              [ The forest and rivers are living ancestors that sustain us.
              Their protection is a moral duty. ]
            </p>
          </Link>

          <Link href="/" className="featured-missions-item">
            <p>04 / 04</p>
            <h3 className="lg:text-4xl! text-2xl!">Unity is Strength</h3>
            <div className="featured-mission-item-img">
              <img src="/img25.jpg" alt="" />
            </div>
            <p className="lg:text-sm! text-sm!">
              [ Africa’s destiny lies in the collective will of her people,
              transcending borders and tribes. ]
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Manifesto;

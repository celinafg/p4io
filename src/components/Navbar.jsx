"use client";
import "../styles/Navbar.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = ({
  links = [],
  backButton = false,
  observeSelector = "section",
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`${observeSelector}[id]`);
      let currentActiveId = "";

      elements.forEach((el) => {
        const elTop = el.offsetTop - 60; // 60px offset
        const isPastEl = window.pageYOffset >= elTop;

        if (isPastEl) {
          currentActiveId = el.getAttribute("id");
        }
      });

      const navItems = document.querySelectorAll("nav ul li");
      navItems.forEach((item) => {
        item.classList.remove("active");
        const itemNavValue = item.dataset.nav.replace("#", "");
        if (itemNavValue === currentActiveId) {
          item.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const BackButton = () => {
    return (
      <>
        {backButton && (
          <Link href="/#projects" className="back">
            back
          </Link>
        )}
      </>
    );
  };

  return (
    <nav>
      <div className="divc">
        <BackButton />
        <ul>
          <div className="container">
            {links.map((link, index) => {
              return (
                <li
                  data-nav={link.href}
                  key={index}
                  className={`${
                    link.customClassName ? link.customClassName : ""
                  } ${link.status === "active" ? "active" : ""}`}
                  style={{ ...link.customStyle }}
                >
                  <a href={link.href}>{link.label}</a>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

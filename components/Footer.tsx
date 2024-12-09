"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

interface FooterLinkProps {
  href: string;
  src: string;
  alt: string;
  children?: React.ReactNode;
}

const FooterLink = ({ href, src, alt, children }: FooterLinkProps) => {
  const { theme } = useTheme();

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:opacity-60"
    >
      <Image
        aria-hidden
        src={src}
        alt={alt}
        width={16}
        height={16}
        className={`${theme === "dark" ? "invert" : ""}`}
      />
      {children}
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 items-center justify-center">
      <FooterLink
        href="https://github.com/gizemnkorkmaz"
        src="/github.svg"
        alt="Github icon"
      />
      <FooterLink
        href="https://twitter.com/gizemnkorkmaz"
        src="/twitter.svg"
        alt="Twitter icon"
      />
      <FooterLink
        href="https://gizemnkorkmaz.com/"
        src="/globe.svg"
        alt="Globe icon"
      >
        see portfolio →
      </FooterLink>
    </footer>
  );
}

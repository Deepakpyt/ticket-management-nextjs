"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainNavLinks = () => {
  const links = [
    { title: "Dashboard", href: "/" },
    { title: "Tickets", href: "/tickets" },
    { title: "Users", href: "/users" },
  ];
  const currentPath = usePathname();
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.title}
          className={`navbar-link ${
            currentPath === link.href &&
            "cursor-default text-primary/70 hover:text-primary/60"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default MainNavLinks;

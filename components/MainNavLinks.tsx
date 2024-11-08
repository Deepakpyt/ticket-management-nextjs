"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainNavLinks = ({ role }: { role?: string }) => {
  const links = [
    { title: "Dashboard", href: "/", adminOnly: false },
    { title: "Tickets", href: "/tickets", adminOnly: false },
    { title: "Users", href: "/users", adminOnly: true },
  ];
  const currentPath = usePathname();
  return (
    <div className="flex items-center gap-2">
      {links
        .filter((link) => !link.adminOnly || role === "ADMIN")
        .map((link) => (
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

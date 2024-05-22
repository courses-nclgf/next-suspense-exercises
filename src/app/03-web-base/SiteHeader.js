import React, { Suspense, cache } from "react";
import Link from "next/link";

import { getCachedNavLinks } from "@/helpers/web-base-helpers";
import Spinner from "@/components/Spinner";

async function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <ol className="header-nav-links">
          <Suspense fallback={<Spinner />}>
            <NavLinks />
          </Suspense>
        </ol>
      </nav>
    </header>
  );
}

export default SiteHeader;

const NavLinks = async () => {
  let navLinks = await getCachedNavLinks();

  // Only show the first 4 links in the header.
  navLinks = navLinks.slice(0, 4);

  return navLinks.map(({ slug, label, href, type }) => (
    <li key={slug}>
      <Link href={href} className={`header-nav-link ${type}`}>
        {label}
      </Link>
    </li>
  ));
};

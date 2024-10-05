import Image from "next/image";

import { links, footer_links } from "@/utils/links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-white-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-2">
          <Image
            src="/logo-title.png"
            width={118}
            height={118}
            className="object-contain"
          />
          <p className="text-base font-bold text-blue-600">
            Car Rental Services 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="flex flex-col gap-6 text-base min-w-[170px]">
          <h3 className="font-bold">About</h3>
          <div className="flex flex-col gap-3">
            {footer_links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-500 capitalize hover:text-blue-700 hover:underline transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 text-base min-w-[170px]">
          <h3 className="font-bold">Links</h3>
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-500 capitalize hover:text-blue-700 hover:underline transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

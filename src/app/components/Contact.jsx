"use client";

import { EnvelopeIcon, PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <article>
      <h2 className="text-center text-2xl">Contact</h2>
      <section className="grid grid-cols-1 justify-items-center mt-2 mb-2 gap-4 md:grid-cols-2 lg:gap-1">
        <div className="col-span-full md:col-span-1 md:row-span-1">
          <div className="flex flex-row justify-center gap-4">
            <a
              className="block text-sm text-center size-6 hover:scale-110 hover:drop-shadow-lg active:scale-125"
              href="mailto:&#109;&#101;&#64;&#112;&#104;&#105;&#108;&#45;&#103;&#101;&#111;&#114;&#103;&#105;&#111;&#117;&#46;&#100;&#101;&#118;"
            >
              <EnvelopeIcon />
            </a>
            <a
              className="block text-sm text-center size-6 hover:scale-110 hover:drop-shadow-lg active:scale-125"
              href="tel:&#43;&#52;&#52;&#32;&#55;&#57;&#52;&#56;&#32;&#48;&#53;&#51;&#53;&#56;&#55;"
            >
              <PhoneArrowUpRightIcon />
            </a>
          </div>
        </div>
        <div className="col-span-full md:col-span-1 md:row-span-1">
          <SocialLinks />
        </div>
      </section>
    </article>
  );
}

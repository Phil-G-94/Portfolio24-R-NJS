"use client";

import SocialLinks from "./SocialLinks";

export default function Contact() {
    return (
        <article>
            <h2 className="text-center text-lg">Contact</h2>
            <section className="grid grid-cols-1 justify-items-center mt-2 mb-2 gap-4 md:grid-cols-2 lg:gap-1">
                <div className="col-span-full md:col-span-1 md:row-span-1">
                    <p className="block text-sm text-center">
                        someemail@gmail.com
                    </p>
                    <p className="block text-sm text-center">+44 7923 563211</p>
                </div>
                <div className="col-span-full md:col-span-1 md:row-span-1">
                    <SocialLinks />
                </div>
            </section>
        </article>
    );
}

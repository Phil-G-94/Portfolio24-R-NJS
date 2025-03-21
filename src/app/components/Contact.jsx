"use client";

import SocialLinks from "./SocialLinks";

export default function Contact() {
    return (
        <article>
            <h2 className="text-center text-lg">Contact</h2>
            <section className="grid grid-cols-1 place-items-start md:grid-cols-2 mt-2 mb-2">
                <div className="md:col-span-1 md:row-span-1">
                    <h3>Contact Information</h3>
                    <p className="block text-sm">Email: someemail@gmail.com</p>
                    <p className="block text-sm">Mobile: +44 7923 563211</p>
                </div>
                <div className="md:col-span-1 md:row-span-1">
                    <h3>Social Media</h3>
                    <SocialLinks />
                </div>
            </section>
        </article>
    );
}

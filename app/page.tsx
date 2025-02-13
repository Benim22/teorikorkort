import { Container } from "@/components/Container";
import Hero from "@/components/Hero";
import { Products } from "@/components/Products";
import { Services } from "@/components/SistaDelen";
import { Testimonial } from "@/components/Testimonial";
import { testimonials } from "constants/testimonials";
import type { NextPage } from "next";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Testimonial testimonial={testimonials[0]} />
      <div id="work" className=" max-w-6xl mx-auto antialiased">
        <h2 className="font-bold text-4xl text-center text-slate-700 capitalize">
        {" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
          Vilken körkortsapp fungerar bäst?
          </span>
        </h2>
        <p className="text-base text-slate-500 font-normal text-center max-w-2xl mx-auto my-4">
        Vi har testat och jämfört fyra populära körkortsappar baserat på funktioner, användarvänlighet och pris.
        </p>

        <Products />
      </div>
      <Testimonial testimonial={testimonials[1]} />
      <Services />
    </Container>
  );
}

import React from "react";
import Image from "next/image"; // Importa o componente Image
import ButtonInverse from "./ButtonInverse";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-">
          <div className="bg-[#01122E] p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl pb-4">
                Our story:
              </h2>

              <p className="hidden text-white/90 sm:mt-4  sm:block">
               Every strong foundation starts with a challenge.
VIX Construction was born during a difficult moment, when the desire to grow and provide a better life for our family became the driving force behind our work. What started as a way to overcome adversity quickly turned into a passion for building — not just homes, but also trust, stability, and opportunities.

With dedication, hard work, and a clear vision, we transformed those early challenges into a company committed to quality, integrity, and long-lasting results. Today, VIX Construction proudly serves families and communities across Massachusetts, New Hampshire, and Rhode Island, helping each client bring their vision to life.

For us, every project is more than construction — it’s a partnership, built on trust and the belief that better living starts with better building.
<br /><br />
<cite>Luis Ribeiro</cite>
 <br />
CEO - VIX Construction

              </p>

              <div className="mt-4 md:mt-8">
                <ButtonInverse name={"More"} url={"#"} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Image
              alt="Pessoa trabalhando em um laptop"
              src="/assets/about-1.jpeg"
              width={654}
              height={800}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <Image
              alt="Pessoa sorrindo e usando óculos"
              src="/assets/about-2.jpeg"
              width={774}
              height={800}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

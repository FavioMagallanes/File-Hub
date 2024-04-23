import { FC } from "react";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import { HERO_TEXTS } from "../../../constants/constants";

export const Hero: FC = () => {
  return (
    <main className="flex-1">
      <section className="w-full bg-gray-100 h-[85vh] py-12 md:py-24 lg:py-32 xl:py-48 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6">
                <h1>
                  <span className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    {HERO_TEXTS.FILEHUB}
                  </span>
                </h1>
                <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl lg:text-4xl/none">
                  {HERO_TEXTS.SECURE_AND_EFFORTLESS_FILE_MANAGEMENT}
                </h2>
                <TextGenerateEffect words={HERO_TEXTS.OPTIMIZE_WORKFLOW} />
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="500"
              src="/folders.png"
              width="550"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

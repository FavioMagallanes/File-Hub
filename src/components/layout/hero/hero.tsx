import { FC } from "react";
import { TextGenerateEffect } from "../../ui/text-generate-effect";

export const Hero: FC = () => {
  const words = ` Streamline your workflow with our powerful file management
  solution. Store, share, and collaborate on files seamlessly.`;

  return (
    <main className="flex-1">
      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure and Effortless File Management
                </h1>
                <TextGenerateEffect words={words} />
              </div>
              <div className="w-full max-w-sm space-y-2">
                <p />
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

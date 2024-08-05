import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className=" pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pt-24 lg:pb-52 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center flex flex-col items-center lg:text-left lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" alt="" className="w-full" />
              </div>
              <h1 className=" relative tracking-tight w-fit text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 text-white px-2">Custom</span>{" "}
                Phone Case
              </h1>

              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favourite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone
                case.CaseCobra allows you to protect your memories, not just
                your phone.
              </p>

              <ul className="space-y-2 mt-8 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 text-green-600 shrink-0" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 text-green-600 shrink-0" />5 year
                    print gurantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 text-green-600 shrink-0" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="h-10 w-10 inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt=""
                  />
                  <img
                    className="h-10 w-10 inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt=""
                  />
                  <img
                    className="h-10 w-10 inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt=""
                  />
                  <img
                    className="h-10 w-10 inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt=""
                  />
                  <img
                    className="h-10 w-10 inline-block object-cover rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1300</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-full">
              <img
                src="/your-image.png"
                alt=""
                className="absolute w-40 lg:52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt=""
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading font-bold text-5xl md:text-6xl sm:text-7xl">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-600" />
              </span>
              say
            </h2>

            <img
              src="/snake-2.png"
              className="w-24 order-0 lg:order-2"
              alt=""
            />
          </div>

          <div className="mx-auto grid grid-cols-1 max-w-2xl px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for twomonths now and the{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellowish after couple weeks. Love it."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-1.png"
                  alt=""
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Ali Hassan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="w-4 h-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">verfied purchase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for twomonths now and the{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    Amazing case
                  </span>
                  , on the case I had before, the image started fading into
                  yellowish after couple weeks. Love it."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-4.jpg"
                  alt=""
                  className="rounded-full h-12 w-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Rajab</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="w-4 h-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">verfied purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

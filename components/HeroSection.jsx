"use client";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1
                        className="mb-1 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold"
                        style={{ color: '#3b3b3b' }}
                    >
                        <span
                            style={{
                                background: 'linear-gradient(to right, #44624a, #90b493)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            Hello, I'm {""}
                        </span>
                        <TypeAnimation
                            sequence={[
                                "Polly!",
                                1000,
                                "a tech enthusiast!",
                                1000,
                                "an aspiring engineer!",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#3b3b3b] text-base sm:text-lg mb-6 lg:text-base">
                        Hi, I am a diligent student driven by curiosity and a passion for coding! I am currently looking for internships or research opportunities, so please reach out to me if you know of any ( ˊᵕˋ )✩
                    </p>
                    <div>
                        <a href="mailto:ynhapnguyen@gmail.com">
                            <button
                                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white hover:bg-opacity-80"
                                style={{
                                    background: 'linear-gradient(to right, #44624a, #90b493)',
                                    color: '#ffffff',
                                }}
                            >
                                Contact Me
                            </button>
                        </a>
                        <button
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/Pauline_Nguyen_Resume.pdf";
                                link.download = "Pauline_Nguyen_Resume.pdf";
                                link.click();
                            }}
                            className="px-1 py-1 w-full sm:w-fit rounded-full hover:bg-stone-100 text-[#3b3b3b] mt-3"
                            style={{ background: 'linear-gradient(to right, #44624a, #90b493)' }}
                        >
                            <span className="block bg-[#efeee8] hover:bg-neutral-100 rounded-full px-5 py-2">
                                Download Resume
                            </span>
                        </button>

                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4">
                    <div className="relative rounded-full overflow-hidden w-72 h-72">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(getVideoSrc());

    useGSAP(() => {
        gsap.to(".hero-title", {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power4.inOut",
        });

        gsap.to("#cta", {
            opacity: 1,
            y: -50,
            duration: 2,
            delay: 1,
            ease: "power4.inOut",
            
        })
    });

    function getVideoSrc() {
        return window.innerWidth < 768 ? smallHeroVideo : heroVideo;
    }

    const handleVideoResize = () => {
        setVideoSrc(getVideoSrc());
    };

    useEffect(() => {
        window.addEventListener("resize", handleVideoResize);
        return () => {
            window.removeEventListener("resize", handleVideoResize);
        };
    }, []);

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p className="hero-title">Iphone 15 Pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video
                        className="pointer-events-none"
                        autoPlay
                        muted
                        playsInline
                        key={videoSrc}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From 199$/month or 999$ up front </p>
            </div>
        </section>
    );
};

export default Hero;

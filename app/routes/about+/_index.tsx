import { useEffect, useRef } from "react";

export default function Component() {
    const contentRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fly-up-animation');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        }
    }, []);

    return (
        <div>
            <style>
                {
                    `
                    @keyframes flyUp {
                        0% {
                            opacity: 0;
                            transform: translateY(100px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .fly-up-animation {
                        animation: flyUp 2s ease-out forwards;
                    }
                    .hidden-initially {
                        opacity: 0;
                    }
                    `
                }
            </style>
            <div ref={contentRef} className="flex flex-row place-content-center text-white hidden-initially">
                <div className="w-2/3 pt-8">
                    <div className="flex flex-row place-content-center pb-8">
                        <h1 className="text-5xl font-custom text-red-900">
                            Fallen Society
                        </h1>
                    </div>
                    <div className="flex text-wrap">
                        Fallen Society is a post-apocalyptic third-person survival game that propels the player into a perilous island environment booming with mystery. 
                        In order to progress, battle relentless hordes of enemies while uncovering the mysteries of the island. Our wave based survival game looks to reinvent 
                        the genre of wave-style games by including resource, objective, and health management. A familiar hack and slash system combined with an inventory, item, 
                        and mission system aims to create a fresh but recognizable experience. Built in Unreal Engine 5, Fallen Society implements key features of the engine such 
                        as megascans, locomotion, and procedural content generation in order to deliver an immersive and engaging adventure.
                    </div>
                    <div className="flex flex-row w-full pt-12 pb-6">
                        <img src="/images/snowMap.png" alt="Fallen Society Snow Demo Map" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
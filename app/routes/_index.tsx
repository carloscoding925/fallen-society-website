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
    };
  }, []);

  return (
    <div>
      <style>{`
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
          animation: flyUp 3s ease-out forwards;
        }
        .hidden-initially {
          opacity: 0;
        }
      `}
      </style>

      <div className="bg-[url('/images/islandMap.png')] bg-contain bg-center min-h-screen">
        <div className="flex flex-col place-content-center w-full h-screen">
          <div className="flex flex-row place-content-center w-full pt-4">
            <h1 className="text-6xl text-red-800 font-custom fly-up-animation" style={{ animationDelay: '0.3s' }}>
              Welcome to Fallen Society
            </h1>
          </div>
        </div>
      </div>

      <div ref={contentRef} className="py-8 text-white hidden-initially">
        <div className="flex flex-row w-full pl-8">
          <div className="flex flex-row w-1/2 justify-start pl-8">
            <img src="/images/snowMap.png" alt="Fallen Society Snow Demo Map" className="w-full" />
          </div>
          <div className="flex flex-row w-1/2 justify-end pr-8">
            <div className="flex flex-col space-y-4 items-center">
              <h1 className="text-2xl font-bold">
                CS 426 Senior Project in Computer Science
              </h1>
              <h1 className="text-2xl font-bold">
                University of Nevada, Reno - Spring 2025
              </h1>
              <h1 className="text-2xl font-bold">
                Department of Computer Science and Engineering
              </h1>
              <div className="flex text-wrap px-8 pt-2">
                Fallen Society is a fresh take on third person shooter/survival video games built for PC where the player is put up against hordes of post-apocalyptic mutated animals. 
                The main goal of the game is to survive waves of aggressive enemies while simultaneously trying to maintain other key components of the character such as ammunition, 
                inventory, and health management. The game project aims to combine elements from larger game titles like Doom, Call of Duty Zombies, The Last of Us, and other similar 
                titles, creating a unique, immersive experience that plans to focus on high-intensity combat and survival mechanics. The use of a round based system allows the player 
                to traverse through an interactive world with important secrets hidden behind quests. The player will play as an explorer whose curiosity leads them to explore a whole 
                new ecosystem of unexplored islands. As soon as you begin you realize that this journey will be a fight for your life as the islands are inhabited by mutated animals 
                created from an experiment gone wrong. The longer you take the stronger the mutation gets and the lower chance of  survival you have. Work efficiently to complete the 
                quests and this explorer might just have a chance at saving the human race. To create beautiful graphics and establish a great player experience, Fallen Society is being 
                built using the Unreal Engine 5 game engine to take full advantage of modern gaming technology.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
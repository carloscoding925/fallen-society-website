export default function Component() {
    return (
        <div>
            <div className="flex flex-row place-content-center w-full text-white">
                <div className="w-full pt-4">
                    <div className="flex flex-row place-content-center w-full py-4">
                        <h1 className="text-4xl font-custom text-red-900">
                            Resources
                        </h1>
                    </div>
                    <div className="flex flex-row place-content-center w-full pt-6 pb-8">
                        <h1 className="text-2xl font-custom text-white">
                            Game Inspiration
                        </h1>
                    </div>
                    <div className="flex flex-row place-content-center">
                        <div className="flex flex-col w-1/2 space-y-6 justify-center items-center">
                            <a href="https://en.bandainamcoent.eu/elden-ring/elden-ring" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-blue-400">Elden Ring (Click me)</a>
                            <a href="https://thelastofus.fandom.com/wiki/The_Last_of_Us_Wiki" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-blue-400">The Last of Us (Click me)</a>
                            <a href="https://www.callofduty.com/blackops6/zombies" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-blue-400">Call of Duty: Black Ops 6 Zombies (Click me)</a>
                        </div>
                    </div>
                    <div className="flex flex-row place-content-center w-full pt-6 pb-8">
                        <h1 className="text-2xl font-custom text-white">
                            Problem Domain Book
                        </h1>
                    </div>
                    <div className="flex flex-row place-content-center">
                        <div className="flex flex-col w-1/2 space-y-6 justify-center items-center">
                            <a href="https://www.gameenginebook.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-blue-400">Game Engine Architecture (Click me)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
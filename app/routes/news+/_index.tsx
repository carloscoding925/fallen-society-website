export default function Component() {
    return (
        <div>
            <div className="pt-8 text-white">
                <div className="flex flex-row w-full">
                    <div className="flex flex-row w-1/2 justify-start pl-8">
                        <img src="/images/pennington.jpg" alt="William N Pennington Engineering Building" className="w-full" />
                    </div>
                    <div className="flex flex-row w-1/2 justify-end pr-8">
                        <div className="flex flex-col w-full space-y-4 justify-center items-center">
                            <h1 className="text-3xl font-bold">
                                <a href="https://www.unr.edu/engineering/about/innovation-day" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                    Join us for Innovation Day!
                                </a>
                            </h1>
                            <div className="flex text-wrap px-8 pt-4">
                                Join us on May 2nd, 2025 at the William N Pennington Engineering Building & Davidson Math & Science 
                                Center at the University of Nevada, Reno as we showcase Fallen Society to members of the public,
                                faculty, and students. We will have a booth with monitors and computers set up so people can come
                                and play our game. Additional information such as the project poster and website will also be available
                                for viewing.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full place-content-center text-3xl pt-12 font-bold">
                    Check out our project poster!
                </div>
                <div className="flex flex-row w-full place-content-center py-6">
                    <div className="w-4/5">
                        <img src="/images/poster.png" alt="Fallen Society Poster" className="w-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
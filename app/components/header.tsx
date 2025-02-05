import { Link } from "@remix-run/react";

export function Header() {
    return (
        <div className="">
            <header className="flex flex-row bg-black h-[130px] text-white">
                <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-col justify-end h-full">
                        <h1 className="text-4xl font-bold font-serif pb-2 pl-2">
                            Fallen Society
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row justify-end w-full space-x-10 pr-4">
                    <div className="flex flex-col justify-end h-full">
                        <h1 className="text-xl font-bold transition-transform duration-300 hover:-translate-y-2">
                            <Link to="/">
                                Home
                            </Link>
                        </h1>
                    </div>
                    <div className="flex flex-col justify-end h-full">
                        <h1 className="text-xl font-bold transition-transform duration-300 hover:-translate-y-2">
                            <Link to="/about">
                                About
                            </Link>
                        </h1>
                    </div>
                </div>
            </header>
        </div>
    )
}
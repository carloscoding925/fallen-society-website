import { Link, Outlet } from "@remix-run/react";

export default function Component() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-full pt-8">
                <div className="w-full flex flex-row justify-center place-content-center space-x-4">
                    <div className="">
                        <h1 className="text-xl text-white transition-transform duration-300 hover:-translate-y-2 hover:text-red-900">
                            <Link to="/about">
                                <div className="flex flex-col">
                                    <p className="font-custom">The Project</p>
                                    <p>-------------</p>
                                </div>
                            </Link>
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="text-xl text-white transition-transform duration-300 hover:-translate-y-2 hover:text-red-900">
                            <Link to="/about/theTeam">
                                <div className="flex flex-col">
                                    <p className="font-custom">Meet The Team</p>
                                    <p>----------------</p>
                                </div>
                            </Link>
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="text-xl text-white transition-transform duration-300 hover:-translate-y-2 hover:text-red-900">
                            <Link to="/about/resources">
                                <div className="flex flex-col">
                                    <p className="font-custom">Resources</p>
                                    <p>-----------</p>
                                </div>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
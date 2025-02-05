import { Link, Outlet } from "@remix-run/react";

export default function Component() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-full pt-4">
                <div className="w-full flex flex-row justify-center place-content-center space-x-4">
                    <div className="">
                        <h1 className="text-xl font-bold text-black transition-transform duration-300 hover:-translate-y-2">
                            <Link to="/about">
                                The Project
                            </Link>
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-bold text-black transition-transform duration-300 hover:-translate-y-2">
                            <Link to="/about/theTeam">
                                Meet the Team
                            </Link>
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-bold text-black transition-transform duration-300 hover:-translate-y-2">
                            <Link to="/about/resources">
                                Resources
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
import packageJson from '../../package.json'

export function Footer() {
    return (
        <div className="">
            <footer className="flex flex-row bg-black h-[80px]">
                <div className="flex flex-row justify-start space-x-16 w-full pb-2 pl-4 text-white">
                    <div className="flex flex-col justify-center h-full">
                        <h1 className="text-xl font-bold font-serif">
                            Made With ❤️ By Team 10
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row justify-center w-full text-white">
                    <div className="flex flex-col justify-center h-full">
                        <h1 className="text-sm font-bold font-serif">
                            Version {packageJson.version}
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-end text-white pr-4">
                    <div className="flex flex-col justify-center h-full">
                        <h1 className="text-xl font-bold font-serif">
                            © 2024 Fallen Society
                        </h1>
                    </div>
                </div>
            </footer>
        </div>
    )
}
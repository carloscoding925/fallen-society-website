export default function Component() {
    return (
        <div>
            <div className="flex flex-row place-content-center w-full">
                <div className="w-2/3 pt-4">
                    <div className="flex flex-row place-content-center w-full">
                        <h1 className="text-xl font-bold">
                            Developers (Team 10)
                        </h1>
                    </div>
                    <div className="flex flex-row place-content-center">
                        <div className="flex flex-col space-y-4 pt-4 items-center">
                            <p>Tristan Hughes</p>
                            <p>Carlos Hernandez</p>
                            <p>Joey Bertrand</p>
                        </div>
                    </div>
                    <div className="flex flex-row place-content-center w-full pt-4">
                        <h1 className="text-xl font-bold">
                            Advisor
                        </h1>
                    </div>
                    <div className="flex flex-row place-content-center">
                        <div className="flex flex-col space-y-4 pt-4">
                            <p>Dr. Eelke Folmer, Chair of CSE</p>
                        </div>
                    </div>
                    <div className="flex flex-row place-content-center w-full">
                        <h1 className="text-xl font-bold pt-4">
                            Teaching Team
                        </h1>
                    </div>
                    <div className="flex flex-row place-content-center">
                        <div className="flex flex-col space-y-4 pt-4 items-center">
                            <p>Dr. Dave Feil-Seifer, Professor in CSE at UNR</p>
                            <p>Sara Davis, Lecturer in CSE at UNR</p>
                            <p>Vinh Le, Lecturer in CSE at UNR</p>
                            <p>Levi Scully, TA for CS 425/426 at UNR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
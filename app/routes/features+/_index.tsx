export default function Component() {
    return (
        <div>
            <div className="text-white">
                <div className="flex flex-row w-full place-content-center py-12">
                    <h1 className="text-4xl font-custom text-red-900">
                        Features
                    </h1>
                </div>
                <div className="flex flex-row w-full pb-12">
                    <div className="flex flex-row w-1/2 justify-start pl-8">
                        <img src="/images/showcaseMap.png" alt="William N Pennington Engineering Building" className="w-full" />
                    </div>
                    <div className="flex flex-row w-1/2 justify-end pr-8">
                        <div className="flex flex-col w-full space-y-4 justify-center items-center">
                            <h1 className="text-3xl font-custom">
                                Beautiful Maps
                            </h1>
                            <div className="flex text-wrap px-8 pt-4">
                                Using procedural content generation, we are able to create large, beautiful maps that are both fun to explore and easy to navigate.
                                The maps are designed to be visually stunning, with a variety of biomes and environments that players can explore and that add to the game's
                                storyline. Navigate through lust forests or frozen tundras, and discover the secrets hidden within each map. Players will begin their
                                journey constrained to a small area, where they must kill enemies, complete objectives, and collect items in order to progress and 
                                unlock new areas.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full py-12">
                    <div className="flex flex-row w-1/2 justify-end pl-8">
                        <div className="flex flex-col w-full space-y-4 justify-center items-center">
                            <h1 className="text-3xl font-custom">
                                Inventory
                            </h1>
                            <div className="flex text-wrap px-8 pt-4">
                                Our game features a fully comprehensive inventory system that allows players to collect, manage, and utilize items they find
                                throughout the game world. Players can access their inventory at any time, view item descriptions, and use items to solve puzzles or
                                progress through the game. The inventory system is designed to be intuitive and user-friendly, ensuring that players can easily navigate
                                their items and make strategic decisions about how to use them. Players will have to manage their item weight in order to not become
                                encumbered: a state where they cannot move quickly. Additionally, players wll be able to collect money dropped by enemies and use it to purchase
                                items from vendors throughout the game world. A real time projection of the player character will be displayed in the inventory screen, 
                                allowing players to see how their character looks with the items they have equipped.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-1/2 justify-start pr-8">
                        <img src="/images/inventory.png" alt="William N Pennington Engineering Building" className="w-full" />
                    </div>
                </div>
                <div className="flex flex-row w-full py-12">
                    <div className="flex flex-row w-1/2 justify-start pl-8">
                        <img src="/images/combat.png" alt="William N Pennington Engineering Building" className="w-full" />
                    </div>
                    <div className="flex flex-row w-1/2 justify-end pr-8">
                        <div className="flex flex-col w-full space-y-4 justify-center items-center">
                            <h1 className="text-3xl font-custom">
                                Combat
                            </h1>
                            <div className="flex text-wrap px-8 pt-4">
                                Our game features a dynamic combat system that allows players to engage in fast-paced, action-packed battles with a variety of enemies.
                                Players will have access to a wide range of weapons ranging from swords to cooking pans to staffs, all with their own drawbacks and benefits. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
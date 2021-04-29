import Header from "./Header";
import TopicItem from "./TopicItem";
import VoteTopicItem from "./VoteTopicItem";
import Countdown from 'react-countdown';


function TopicsView() {
    return (
        <div className="h-screen overflow-hidden flex items-center justify-center" style={{background: '#edf2f7'}}>
            <div className="w-full h-screen">
                <div className="py-6">
                    <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
                            <nav aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">
                                Welcome to Sofatalk!
                                Here will be navigation bar
                            </nav>
                        </div>
                        <main className="lg:col-span-9 xl:col-span-6">
                            <h1 className="text-3xl text-center">Next SofaTalk is in <Countdown
                                date={Date.parse("2021-04-15 20:00:00")}/></h1>
                            Please vote for the next topic:
                            <div className="space-y-4">
                                <VoteTopicItem
                                    name={"Why do we need to live with somebody if living alone is much better?"}
                                    votes={10}/>
                                <VoteTopicItem name={"Catcalling: just overreacting to a compliment?"} votes={5}/>
                                <VoteTopicItem name={"Do the ends justify the means?"} votes={0}/>
                            </div>

                        </main>
                        <aside className="hidden xl:block xl:col-span-4">
                            <div className="sticky top-6 space-y-4">
                                <h1 className="text-3xl text-center">Past SofaTalks:</h1>

                                <fieldset>
                                    <legend className="sr-only">
                                        Server size
                                    </legend>
                                    <div className="space-y-1">

                                        <TopicItem name={"🎙️Life after Corona: New Life 2.0?"} date={"08.04.2021"}/>
                                        <TopicItem name={"Political correctness is a new censorship?⚖️"}
                                                   date={"01.04.2021"}/>
                                        <TopicItem name={"Should Prostitution be illegal?👯"} date={"25.03.2021"}/>
                                        <TopicItem name={"University degree or MOOC? "} date={"18.03.2021"}/>
                                        <TopicItem name={"Online vs casual dating: which one is better? "}
                                                   date={"11.03.2021"}/>
                                        <TopicItem name={"It's time to save the men: Masculism 🥊"}
                                                   date={"04.03.2021"}/>


                                    </div>
                                </fieldset>
                            </div>
                        </aside>
                    </div>
                </div>
                <main className="flex justify-end items-end">

                </main>
            </div>
        </div>
    );
}

export default TopicsView;

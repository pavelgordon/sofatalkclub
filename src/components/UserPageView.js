import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import TopicItem from "./components/TopicItem";
import UserInfo from "./components/UserInfo";

function TopicView() {
    return (
        <div className="h-screen overflow-hidden flex items-center justify-center" style={{background: '#edf2f7'}}>
            <div className="w-full h-screen">
                <Header/>

                <div className="py-6">
                    <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
                            <nav aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">
                                Content
                            </nav>
                        </div>
                        <main className="lg:col-span-9 xl:col-span-6">
                            Content2
                        </main>
                        <aside className="hidden xl:block xl:col-span-4">
                            <div className="sticky top-6 space-y-4">
                                <h1 className="text-3xl text-center">Welcome Nadya</h1>

                                <fieldset>
                                    Vote for your favorite topic
                                    <legend className="sr-only">
                                        Server size
                                    </legend>
                                    <div className="space-y-4">

                                        <TopicItem name={"Topic 1"} date={"23.01.2021"}/>
                                        <TopicItem name={"🎙️Life after Corona: New Life 2.0?"} date={"08.04.2021"}/>
                                        <TopicItem name={"🎙️Life after Corona: New Life 2.0?"} date={"08.04.2021"}/>
                                        <TopicItem name={"🎙️Life after Corona: New Life 2.0?"} date={"08.04.2021"}/>
                                        <TopicItem name={"🎙️Life after Corona: New Life 2.0?"} date={"08.04.2021"}/>




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

export default TopicView;

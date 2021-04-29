import Header from "./components/Header";
import TopicItem from "./components/TopicItem";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TopicsView from "./components/TopicsView";
import UserInfoView from "./components/UserInfoView";

function App() {
    return (
        <Router>

            <header className="bg-teal-400">
                <nav className="flex justify-between w-full bg-purple-500 text-white p-4">
                    <a href="/"><span
                        className="font-semibold text-xl tracking-tight">🎙️ Welcome to SofaTalks 🎙️</span></a>
                    <div className="md:items-center md:w-auto flex">
                        <div className="md:flex hidden">

                            <div className="block md:text-white mr-4">
                                <Link to="/topics">Topics</Link>
                            </div>
                            <div className="block md:text-white mr-4">
                                <Link to="/user">User info</Link>
                            </div>
                        </div>
                        <div className="flex text-sm">
                            <a className="p-2 ml-2 bg-red-500 text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100"
                               href="/auth/signin">Login</a>
                            <a className="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600"
                               href="/auth/signup">Sign up</a>
                        </div>
                    </div>
                </nav>
            </header>


            <div className="h-screen overflow-hidden flex items-center justify-center" style={{background: '#edf2f7'}}>
                <div className="w-full h-screen">

                    <Switch>
                        {/*<Route exact path="/">*/}
                        {/*    <TopicsView/>*/}
                        {/*</Route>*/}
                        <Route exact path="/">
                            <TopicsView/>
                        </Route>
                        <Route path="/topics">
                            <TopicsView/>
                        </Route>
                        <Route path="/user">
                            <UserInfoView/>
                        </Route>
                    </Switch>

                </div>
            </div>

        </Router>

    );
}

export default App;

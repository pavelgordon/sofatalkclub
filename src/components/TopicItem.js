function TopicItem({name, date}) {
    return (
        <label className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <input type="radio" name="server_size" value="Enterprise" className="sr-only" aria-labelledby="server-size-3-label" aria-describedby="server-size-3-description-0 server-size-3-description-1"/>
            <div className="flex items-center">
                <div className="text-sm">
                    <p id="server-size-3-label" className="font-medium text-gray-900">
                      {name}
                    </p>
                    <div id="server-size-3-description-0" className="text-gray-500">
                        <p className="sm:inline">Society</p>
                        {/*<span className="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>*/}
                        {/*<p className="sm:inline">Society</p>*/}
                    </div>
                </div>
            </div>
            <div id="server-size-3-description-1" className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                <div className="font-medium text-gray-900">{date}</div>
                {/*<div className="ml-1 text-gray-500 sm:ml-0">/mo</div>*/}
            </div>
            <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
        </label>

    );
}

export default TopicItem;

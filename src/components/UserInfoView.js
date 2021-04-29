function UserInfoView() {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="py-10">
                <div
                    className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                    <div className="flex items-center space-x-5">
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <img className="h-16 w-16 rounded-full"
                                     src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                     alt=""/>
                                    <span className="absolute inset-0 shadow-inner rounded-full"
                                          aria-hidden="true"></span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Pavel Gordon</h1>
                            <p className="text-sm font-medium text-gray-500"><a href="#"
                                                                                            className="text-gray-900">@freemahn</a></p>
                        </div>
                    </div>

                </div>

                <div
                    className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                        <section aria-labelledby="applicant-information-title">
                            <div className="bg-white shadow sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h2 id="applicant-information-title"
                                        className="text-lg leading-6 font-medium text-gray-900">
                                        About me
                                    </h2>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                        Personal details and application.
                                    </p>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Application for
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900">
                                                Backend Developer
                                            </dd>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <dt className="text-sm font-medium text-gray-500">
                                                About
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900">
                                                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
                                                cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit
                                                id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                            </dd>
                                        </div>

                                    </dl>
                                </div>
                            </div>
                        </section>

                    </div>

                    <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
                        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                            <h2 id="timeline-title" className="text-lg font-medium text-gray-900">Timeline</h2>

                            <div className="mt-6 flow-root">
                                <ul className="-mb-8">


                                    <li>
                                        <div className="relative pb-8">
                                            <div className="relative flex space-x-3">
                                                <div>
<span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
         aria-hidden="true">
<path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clip-rule="evenodd"/>
</svg>
</span>
                                                </div>
                                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                    <div>
                                                        <p className="text-sm text-gray-500"> <a
                                                            href="#" className="font-medium text-gray-900">🎙️Life after Corona: New Life 2.0?
                                                        </a></p>
                                                    </div>
                                                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                        <time datetime="2020-10-04">April 12</time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="relative pb-8">
                                            <div className="relative flex space-x-3">
                                                <div>
<span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
         aria-hidden="true">
<path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clip-rule="evenodd"/>
</svg>
</span>
                                                </div>
                                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                    <div>
                                                        <p className="text-sm text-gray-500"><a
                                                            href="#" className="font-medium text-gray-900">🎙️Life after
                                                            Corona: New Life 2.0?
                                                        </a></p>
                                                    </div>
                                                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                        <time dateTime="2020-10-04">April 12</time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="relative pb-8">
                                            <div className="relative flex space-x-3">
                                                <div>
<span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
         aria-hidden="true">
<path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clip-rule="evenodd"/>
</svg>
</span>
                                                </div>
                                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                    <div>
                                                        <p className="text-sm text-gray-500"><a
                                                            href="#" className="font-medium text-gray-900">🎙️Life after
                                                            Corona: New Life 2.0?
                                                        </a></p>
                                                    </div>
                                                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                        <time dateTime="2020-10-04">April 12</time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="relative pb-8">
                                            <div className="relative flex space-x-3">
                                                <div>
<span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
         aria-hidden="true">
<path fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clip-rule="evenodd"/>
</svg>
</span>
                                                </div>
                                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                    <div>
                                                        <p className="text-sm text-gray-500"><a
                                                            href="#" className="font-medium text-gray-900">🎙️Life after
                                                            Corona: New Life 2.0?
                                                        </a></p>
                                                    </div>
                                                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                        <time dateTime="2020-10-04">April 12</time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 flex flex-col justify-stretch">
                                <button type="button"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                   Click me maybe
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>

);
}

export default UserInfoView;

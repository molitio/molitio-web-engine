

const CookieConsent = () => {
    return (
        <div className="fixed right-0 bottom-0 left-0 flex h-auto w-full flex-col space-y-5 rounded-lg bg-blue-950 p-5 md:h-auto md:w-1/3 lg:w-1/4">
            <div className="grid grid-cols-1"><h3 className="text-left text-white">Cookie Concent</h3></div>
                <div className="flex flex-wrap md:flex-wrap lg:flex-wrap"><h3 className="text-left text-white">We use cookies to improve your browsing experience, to show personalized content, and to analyze our traffic. You can choose to accept all cookies or manage your preferences.</h3></div>

                <div className="space-y-4">
                    <div className="grid grid-cols-[1fr_auto] justify-between text-white">
                        <span className="text-left">Accept All Cookies</span>
                    <div classNameName="flex space-x-5">
                        <button classNameName="rounded px-2 hover:bg-gray-500 hover:p-1">Yes</button>
                        <button classNameName="rounded px-2 hover:bg-gray-500 hover:p-1">No</button>
                    </div>
                </div>

                <div classNameName="grid grid-cols-[1fr_auto] justify-between text-white">
                    <span classNameName="text-left">Accept Advertisement Cookies</span>
                    <div className="flex space-x-5">
                        <button className="rounded px-2 hover:bg-gray-500 hover:p-1">Yes</button>
                        <button className="rounded px-2 hover:bg-gray-500 hover:p-1">No</button>
                    </div>
                </div>

                <div className="flex justify-end space-x-3">
                    <button className="rounded bg-gray-300 p-1 px-2 text-black">Accept</button>
                    <button className="rounded bg-gray-300 p-1 px-2 text-black">Decline</button>
                </div>
            </div>
        </div>

    );
};

export default CookieConsent;
export default function Features() {
    return (
        <div className="container flex flex-col px-6 mt-10 mx-auto space-y-10 md:flex-row md:justify-evenly md:px-0">
            <div className="flex flex-col space-y-6 mt-10">
                <h1 className="max-w-md text-3xl text-darkBlue font-bold text-center md:text-4xl md:text-left">
                    What’s different about Manage?
                </h1>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Manage provides all the functionality your team needs, without
                    the complexity. Our software is tailor-made for modern digital
                    product teams.
                </p>
            </div>

            <div className="flex flex-col space-y-8">
                <div className="flex flex-col items-start space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="flex flex-row rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="rounded-full text-white bg-brightRed p-2 px-6">01</div>
                            <h3 className="font-bold text-base md:hidden pr-1">Track company-wide progress</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mt-2 mb-4 font-bold text-base md:block">Track company-wide progress</h3>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            See how your day-to-day tasks fit into the wider vision. Go from
                            tracking progress at the milestone level all the way done to the
                            smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="flex flex-row rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="rounded-full text-white bg-brightRed p-2 px-6">02</div>
                            <h3 className="font-bold text-base md:hidden pr-1">Advanced built-in reports</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mt-2 mb-4 font-bold text-base md:block">Advanced built-in reports</h3>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Set internal delivery estimates and track progress toward company
                            goals. Our customisable dashboard helps you build out the reports
                            you need to keep key stakeholders informed.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="flex flex-row rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="rounded-full text-white bg-brightRed p-2 px-6">03</div>
                            <h3 className="font-bold text-base md:hidden pr-1">Everything you need in one place</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mt-2 mb-4 font-bold text-base md:block">Everything you need in one place</h3>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Stop jumping from one service to another to communicate, store files,
                            track tasks and share documents. Manage offers an all-in-one team
                            productivity solution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

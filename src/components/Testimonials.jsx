export default function Testimonials() {
    return (
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="font-bold text-4xl text-center">
                What they’ve said
            </h2>
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src="/avatar-anisha.png" className="w-16 -mt-14" alt="Anisha Li" />
                    <h5 className="font-bold text-lg">Anisha Li</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Manage has supercharged our team’s workflow. The ability to maintain
                        visibility on larger milestones at all times keeps everyone motivated.”
                    </p>
                </div>
                <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src="/avatar-ali.png" className="w-16 -mt-14" alt="Anisha Li" />
                    <h5 className="font-bold text-lg">Ali Bravo</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “We have been able to cancel so many other subscriptions since using
                        Manage. There is no more cross-channel confusion and everyone is much
                        more focused.”
                    </p>
                </div>
                <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src="/avatar-richard.png" className="w-16 -mt-14" alt="Anisha Li" />
                    <h5 className="font-bold text-lg">Richard Watts</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Manage allows us to provide structure and process. It keeps us organized
                        and focused. I can’t stop recommending them to everyone I talk to!”
                    </p>
                </div>
                <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img src="/avatar-shanai.png" className="w-16 -mt-14" alt="Anisha Li" />
                    <h5 className="font-bold text-lg">Shanai Gough</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Their software allows us to track, manage and collaborate on our projects
                        from anywhere. It keeps the whole team in-sync without being intrusive.”
                    </p>
                </div>
            </div>
            <div className="my-16">
                <a href="#" className="rounded-full text-white text-sm bg-brightRed shadow-lg shadow-brightRed/50 p-3 px-6 hover:bg-brightRedLight">Get Started</a>
            </div>
        </div>
    )
}

export default function Hero() {
    return (
        <div className="container flex flex-col-reverse items-center px-6 mt-10 mx-auto space-y-10 md:flex-row md:justify-evenly md:px-0">

            <div className="flex flex-col space-y-12">
                <h1 className="max-w-md text-4xl text-darkBlue font-bold text-center md:text-5xl md:text-left">Bring everyone together to build better products.</h1>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                </p>
                <div className="flex justify-center md:justify-start">
                    <a href="#" className="rounded-full text-white text-sm bg-brightRed shadow-lg shadow-brightRed/50 p-3 px-6 hover:bg-brightRedLight">Get Started</a>
                </div>
            </div>

            <div>
                <img src="/illustration-intro.svg" alt="illustrations" />
            </div>

        </div>
    )
}

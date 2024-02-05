export default function CTA() {
    return (
        <div className="relative -z-10 bg-brightRed flex flex-col items-center justify-around px-12 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            <h1 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                Simplify how your team works today.
            </h1>
            <div className="my-16">
                <a href="#" className="rounded-full text-brightRed text-sm bg-white shadow-lg shadow-brightRed p-3 px-6 hover:bg-gray-100 hover:text-brightRedLight">Get Started</a>
            </div>
        </div>
    )
}

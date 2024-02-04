export default function Footer() {
    return (
        <footer className="bg-veryDarkBlue">
            <div className="flex flex-col-reverse justify-around px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div className="flex flex-col-reverse justify-between items-center space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div className="my-6 mx-auto text-sm text-darkGrayishBlue text-center md:hidden">
                        Copyright &copy; 2024, All Rights Reserved
                    </div>

                    <div>
                        <img src="/logo.svg" className="h-8" alt="manage logo" />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="#">
                            <img src="/icon-facebook.svg" className="h-8" alt="" />
                        </a>
                        <a href="#">
                            <img src="/icon-youtube.svg" className="h-8" alt="" />
                        </a>
                        <a href="#">
                            <img src="/icon-twitter.svg" className="h-8" alt="" />
                        </a>
                        <a href="#">
                            <img src="/icon-pinterest.svg" className="h-8" alt="" />
                        </a>
                        <a href="#">
                            <img src="/icon-instagram.svg" className="h-8" alt="" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">Home</a>
                        <a href="#" className="hover:text-brightRed">Pricing</a>
                        <a href="#" className="hover:text-brightRed">Products</a>
                        <a href="#" className="hover:text-brightRed">About Us</a>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className="hover:text-brightRed">Careers</a>
                        <a href="#" className="hover:text-brightRed">Community</a>
                        <a href="#" className="hover:text-brightRed">Privacy Policy</a>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <form action="">
                        <div className="flex space-x-3">
                            <input type="text" placeholder="Update in your inbox" className="flex-1 px-4 rounded-full focus:outline-none" />
                            <button className="px-6 py-2 rounded-full text-white bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
                        </div>
                    </form>
                    <div className="hidden md:block text-sm text-darkGrayishBlue text-center">
                        Copyright &copy; 2024, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

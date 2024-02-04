import CTA from "./components/CTA"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Testimonials from "./components/Testimonials"

function App() {

    return (
        <>
            <NavBar />
            <Hero />
            <Features />
            <Testimonials />
            <section id="cta">
                <CTA />
            </section>
            <Footer />
        </>
    )
}

export default App

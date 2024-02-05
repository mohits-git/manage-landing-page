import CTA from "./components/CTA"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Testimonials from "./components/Testimonials"
//import "./App.css";

function App() {

    return (
        <>
            <NavBar />

            <section id="hero">
                <Hero />
            </section>

            <section id="fnt">
                <section id="features">
                    <Features />
                </section>

                <section id="testimonials">
                    <Testimonials />
                </section>
            </section>

            <section id="cta">
                <CTA />
            </section>

            <Footer />
        </>
    )
}

export default App

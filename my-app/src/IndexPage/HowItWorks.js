import React from 'react'
import '../assets/css/style.css'
import '../assets/css/bootsnav.css'
import '../assets/css/linearicons.css'
import '../assets/css/flaticon.css'
import '../assets/css/bootstrap.min.css'
import '../assets/fonts/fontawesome-webfont.svg'
import '../assets/fonts/Flaticon.svg'
import '../assets/fonts/Linearicons-Free.svg'
import '../assets/fonts/glyphicons-halflings-regular.svg'
import HowItContent from './HowItContent'

const HowItWorks = ({ content }) => {
    return (
        <div>
            <section id="works" class="works">
                <div class="container">
                    <div class="section-header">
                        <h2>how it works</h2>
                        <p>Learn More about how our website works</p>
                    </div>

                    <div style={{display:'grid',gridTemplateColumns:'400px 400px 400px',gridTemplateRows:'400px'}}>
                    <HowItContent content='Chose What You Do' ></HowItContent>
                    <HowItContent content='Find What you want' ></HowItContent>
                    <HowItContent content='Explore Amazing Place'></HowItContent>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default HowItWorks
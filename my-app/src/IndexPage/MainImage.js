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

const MainImage = () => {
  return (
    <section id="home" class="welcome-hero">
    <div class="container">
        <div class="welcome-hero-txt">
            <h2>best place to find and explore <br/> that all you need </h2>
            <p>
                Find Best Restaurant, Hotel,and many more think in just One click 
            </p>
        </div>
        <div class="welcome-hero-serch-box">
            <div class="welcome-hero-form">
                <div class="single-welcome-hero-form">
                    <h3>what?</h3>
                    <form action="index.html">
                        <input type="text" placeholder="Ex: resturent, food" />
                    </form>
                    <div class="welcome-hero-form-icon">
                        <i class="flaticon-list-with-dots"></i>
                    </div>
                </div>
                <div class="single-welcome-hero-form">
                    <h3>location</h3>
                    <form action="index.html">
                        <input type="text" placeholder="Ex: Calicut, Malapuram, Cochin" />
                    </form>
                    <div class="welcome-hero-form-icon">
                        <i class="flaticon-gps-fixed-indicator"></i>
                    </div>
                </div>
            </div>
            <div class="welcome-hero-serch">
                <button class="welcome-hero-btn" onclick="window.location.href='#'">
                     search  <i data-feather="search"></i> 
                </button>
            </div>
        </div>
    </div>

</section>
  )
}

export default MainImage
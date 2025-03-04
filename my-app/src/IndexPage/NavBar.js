import React from 'react'
// import './Style.css'
// import './bootsnav.css'
// // import './flaticon.css';
// import './slick.css';
// import "bootstrap/dist/css/bootstrap.min.css"; // Use Bootstrap from npm
// import './linearicons.css'
import '../assets/css/style.css'
import '../assets/css/bootsnav.css'
import '../assets/css/linearicons.css'
import '../assets/css/flaticon.css'
import '../assets/css/bootstrap.min.css'
import '../assets/fonts/fontawesome-webfont.svg'
import '../assets/fonts/Flaticon.svg'
import '../assets/fonts/Linearicons-Free.svg'
import '../assets/fonts/glyphicons-halflings-regular.svg'



const NavBar = () => {

  return (
    <>
    <section className="top-area">
    <div class="header-area">
      
        <nav class="navbar navbar-default bootsnav navbar-sticky navbar"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

            <div class="container">

        
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    </button>
                    <a class="navbar-brand" href="index.html">Book<span>My</span>Room</a>

                </div>
            

    
                <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li class=" scroll active"><a href="#home">home</a></li>
                        <li class="scroll"><a href="#works">how it works</a></li>
                        <li class="scroll"><a href="#explore">Hotals</a></li>
                        <li class="scroll"><a href="#reviews">review</a></li>
                        <li class="scroll"><a href="#blog">blog</a></li>
                        <li class="scroll"><a href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

      
    </div>
      <div class="clearfix"></div>
      </section>

      {/* <section id="home" class="welcome-hero">
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

		</section> */}

      {/* <section id="list-topics" class="list-topics">
			<div class="container">
				<div class="list-topics-content ">
					<ul>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
									<i class="flaticon-restaurant"></i>
								</div>
								<h2><a href="#">resturent</a></h2>
								<p>150 listings</p>
							</div>
						</li>
						
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
									<i class="flaticon-building"></i>
								</div>
								<h2><a href="#">hotels</a></h2>
								<p>185 listings</p>
							</div>
						</li>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
									<i class="flaticon-pills"></i>
								</div>
								<h2><a href="#">Resorts</a></h2>
								<p>200 listings</p>
							</div>
						</li>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
									<i class="flaticon-transport"></i>
								</div>
								<h2><a href="#">Beach side Restaurant</a></h2>
								<p>120 listings</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</section> */}
      </>
  )
}

export default NavBar
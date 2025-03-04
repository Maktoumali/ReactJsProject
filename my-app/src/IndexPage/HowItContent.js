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

const HowItContent = ({content}) => {
  return (

        <div class="works-content">
					<div class="row">
						<div class="col-md-4 col-sm-6">
							<div class="single-how-works">
								<div class="single-how-works-icon">
									<i class="flaticon-lightbulb-idea"></i>
								</div>
								<h2><a href="#">{content}</a></h2>
								<p>
									Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua. 
								</p>
								<button class="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
									read more
								</button>
							</div>
						</div>
					
					</div>
				</div>

  )
}

export default HowItContent
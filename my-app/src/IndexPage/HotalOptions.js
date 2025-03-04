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

const HotalOptions = () => {
  return (
    <div>
         <section id="list-topics" class="list-topics">
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

		</section>
    </div>
  )
}

export default HotalOptions
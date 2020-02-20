import { html, render } from 'https://unpkg.com/lit-html/lit-html.js';

let headertop = () => html`
<div class="headbar-top">
	<div class="grid-container">
	  <div class="grid-x grid-margin-x">
	   <div class="cell auto align-self-middle ">
	     <span >  +91 9319 466 656 | +91 9717 303 287 | +91 93194 66656 </span>
	  </div> 
	   <div class="cell shrink">
	     <div class="grid-x  ">
		 <div class="cell shrink"> <i class="step fi-social-facebook size-24"></i>  <i class="step fi-mail size-24"></i> <i class="step fi-social-youtube size-24"></i> <i class="step fi-social-flickr size-24"></i>  </div>	
		 </div>
	  </div> 
	  </div>
	</div>  
`;
render(headertop(),document.getElementById('header-top'));

let navbar = () => html`
<div class="navbar-top">
	<div class="grid-container">
		  <div class="grid-x grid-margin-x">
			<div class=" cell auto align-self-middle">
			logo
			</div>
			<div class="cell shrink">
					<ul class="dropdown menu" data-dropdown-menu>
					  <li><a href="index.html">Home</a></li>
					  <li><a href="about-us.html">About Us </a></li>	
					  <li><a href="#">Lead Performer</a></li>				  
					 <li>
						<a href="#">Shows</a>
						<ul class="menu">
						  <li class="size-18"><a href="#">Corporate Shows</a></li>
						  <li class="size-18" ><a href="#">Celebrities Shows</a></li>
						  <li class="size-18" ><a href="#">Wedding Events</a></li>
						  <!-- ... -->
						</ul>
					  </li>
					 <li>
						<a href="#">Cleints</a>
						<ul class="menu">
						  <li class="size-18" ><a href="#">International</a></li>
						  <li class="size-18" ><a href="#">Indian</a></li>
						 
						  <!-- ... -->
						</ul>
					  </li>
					   <li><a href="media.html">Media</a></li>
					  <li><a href="contact.html">Contact Us</a></li>
					</ul>
			</div>
		  </div>
		 
	</div>
	</div>
`;
render(navbar(),document.getElementById('nav-bar'));
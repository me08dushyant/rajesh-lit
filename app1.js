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
		 <div class="cell shrink">
		 <a href="https://www.facebook.com/ZealFireDanceTroupe" target="_blank"><i class="step fi-social-facebook size-24"></i></a>
		 <a href="mailto:zfdc07@gmail.com zeal.fire.troupe@gmail.com"><i class="step fi-mail size-24"></i></a>
		 <a href="https://www.youtube.com/channel/UCBT1-xu69RwShH_oYGym-Og" target="_blank"><i class="step fi-social-youtube size-24"></i></a>
		 <a href="https://www.flickr.com/photos/zfdc/albums" target="_blank"><i class="step fi-social-flickr size-24"></i></a>  
		 </div>	
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
	<img src="assets/img/logo.jpg">
	</div>
	<div class="cell shrink">
		<ul class="dropdown menu" data-dropdown-menu>
		  <li><a href="index.html">Home</a></li>
		  <li><a href="about-us.html">About Us </a></li>	
		  <li><a href="lead-performer.html">Lead Performer</a></li>				  
		 <li>
		  <div class ="dropdown1">
		  <a class="dropbtn1">Shows &nbsp;<img src="assets/img/60995.png" width="15px" height="15px"></a>
		  <div class="dropdown-content1">
          <a href="corporate-shows.html">Corporate Shows</a>
          <a href="celebrity-shows.html">Celebrity Shows</a>
          <a href="wedding-events.html">Wedding events</a>
          </div>
		  </div>
		  </li>
		 <li>
		 <div class ="dropdown1">
		 <a class="dropbtn1">Clients &nbsp;<img src="assets/img/60995.png" width="15px" height="15px"></a>
		 <div class="dropdown-content1">
		 <a href="#">International</a>
		 <a href="#">Indian</a>
		 </div>
		 </div>
		  </li>
		   <li><a href="media.html">Media</a></li>
		  <li><a href="contact.html">Contact Us</a></li>
		</ul>
	</div>
	</div>
   
</div>
`;
render(navbar(),document.getElementById('nav-bar'));


let footer = () => html`
<div class="footer">
		<div class="grid-container">
			<div class="grid-x grid-margin-x">
				<div class="cell large-6 ">
				<h5> About Us </h5>
				<p> Zeal Fire Dance Company is one of the best dance troupe in Agra. All dancers are professionally trained and lots of experience of events,celebrity shows. About choreographer-Anil Verma.He has 17 years experience of all types of dances.He is a D.I.D Fame.His troupe performed with lots of celebrities like BABA SEHGAL,MAMTA SHARMA (FAME-ANARKALI DISCO CHALI), Kavita KrishnaMurti, Vinod Rathore, Ananya Idol, Harshi Mad and many more </p>
				</div>
				<div class="cell large-6 ">
				<h5> Contact Us </h5>
				<strong>Download Presentation PDF </strong> <br/>
	
				Lets put stage on fire. Feel free to contact ZFDC - zealfiredancecompany <br/>
	
				Phone:    9837273741, 9717303287 <br/>
				Whatsapp: 9837273741 <br/>
				Email: zfdc07@gmail.com 
				zeal.fire.troupe@gmail.com <br/>
				Address: B-108 1st Floor Central Bank Road Opp Bank of India Kamla Nagar Agra 
				</div>
	
			</div>
			
		</div>
		
	<div class="logo-placeholder">
	<p class="text-center">
	
	<a href="ZEAL FIRE DANCE COMPANY 2019+20.pdf" target="_blank"  class="hollow button" >Download Presentation PDF </a>
	</p>
	</div>	
	
	</div>
	
`;

render(footer(),document.getElementById('footer'));


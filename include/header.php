<!DOCTYPE html>
<html>
<head>
	<title>UlugBek Abduloev - Portfolio</title>

	<meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />

	<!-- Custom CSS -->
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<!-- Bootstrap-4 CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css" crossorigin="anonymous">

	<!-- Font Rajdhani -->
	<link href="https://fonts.googleapis.com/css?family=Rajdhani:100|Rajdhani:200|Rajdhani:300|Rajdhani:400|Rajdhani:500|Rajdhani:600|Rajdhani:700|Rajdhani:800|Rajdhani:900" rel="stylesheet">

	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>


	<!-- Loading Screen JS -->
	<script type="text/javascript">
		$(document).ready(function(){
			$('#loading-logo').attr('src','img/logo.gif');
			
			$(window).load(function() {
				setTimeout(function(){
					$('#loading-logo').fadeOut();

					setTimeout(function(){
						$('#loading-screen').addClass('slide-up');
					}, 500);

					setTimeout(function(){
						$('.my-name div').addClass('name-anim');
  						$('#social').css('transform', 'translatex(-14px)');
					}, 1000);
				}, 2000);
			});

			// Smooth scroll
			$("a").on('click', function(event) {

				if (this.hash !== "") {
				  event.preventDefault();

				  var hash = this.hash;

				  $('html, body').animate({
				    scrollTop: $(hash).offset().top
				  }, 800, function(){

				    window.location.hash = hash;
				  });
				} // End if
			});
		});

		window.onbeforeunload = function(event){
			$(this).scrollTop(0);
	    };
	</script>
</head>
<body>
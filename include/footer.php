<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script src="https://divergentbilly.github.io/eai-stories/assets/smooth-scroll/smooth-scroll.js"></script>

<script src="https://pdfobject.com/js/pdfobject.min.js"></script>
<script>PDFObject.embed("https://pdfobject.com/pdf/sample-3pp.pdf", "#resume_pdf");</script>

<script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
<script src="https://d3js.org/d3.v3.min.js"></script>
<script  src="js/index.js"></script>
<script src="js/plugins.js"></script>

<script type="text/javascript">
  $(document).on('ready', function() {
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
       	responsive: [
		    {
				breakpoint: 769,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '25%',
					slidesToShow: 1
		      	}
		    },
		    {
				breakpoint: 568,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '10%',
					slidesToShow: 1
				}
		    }
	   	]
    });
  });

  $(document).on('ready', function() {
    $(".center2").slick({
      dots: true,
      infinite: false,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });
</script>

<script src="js/index.js"></script>

</body>
</html>
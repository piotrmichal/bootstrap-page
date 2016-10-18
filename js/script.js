$(function() {
	
	var select = $(".navbar ul li a");
	var button = $('a.btn.btn-lg');

	$(select).on('click', function(e) {
		e.preventDefault()
		var hash = this.hash;

    	$(this).addClass('active');
		$('html, body').animate({
      		scrollTop: $(this.hash).offset().top
     	}, 1000, function(){
       window.location.hash = hash
    	})

	});

	$(select).on('click', function(){
	    $(select).removeClass('active')
	    $(this).addClass('active')
	});
	
	$(button).on('click', function(){
	 	$('html, body').animate({
	    scrollTop:$('#testimonial').offset().top }, 1000);
	});
	
});
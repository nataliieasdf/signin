$('.signin').on('click', function(e){
	$('.modal').fadeIn(200, function(e){
		$('.close').on('click', function(e){
			$('.modal').fadeOut(300);
		});

		$('.submit').on('click', function(e){
			$('input').addClass('error');
		});

	});

});


		// $('.submit').on('click', function(e){
		// 	$('input').addClass('error');
		// });
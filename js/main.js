$('.signin').on('click', function(e){
	$('.modal').fadeIn(200, function(e){
		$('.close').on('click', function(e){
			$('.modal').fadeOut(300);
		});

		$('.submit').on('click', function(e){
			$('input').addClass('error');
		});

		$('input').on('click', function(e){
			$('input').removeClass('error');
		});

	})
		.on('click', function(e){
			$('.modal').fadeOut(300);

			$('form').on('click', function(e){
				event.stopPropagation();
			});
		})
	;

});





$(function(){
	let $mail = $('.letter-image');
	let $letter = $('.animated-mail .letter');
	let $page = $('.page');
	let $imgDetail = $('.img_detail');
	let letterWidth = $letter.width();
	var clickCount = 0;

	openMail();

	function openMail() {
		setTimeout(function() {
			$mail.addClass('active');
			openCard();
		}, 0.5);

	}

	function openCard() {
		setTimeout(function() {
			$page.addClass('active');
			showLetter();
		}, 100);
	}

	function showLetter() {
		setTimeout(function() {
			$letter.css('overflow','visible');
			zoomOut();
		}, 800);
	}

	function zoomOut() {
		setTimeout(function() {

			$imgDetail.css({
				left: $letter.offset().left - $letter.width(),
				top: $letter.offset().top,
				width: $letter.width()*2,
				display: 'flex'
			});

			$mail.animate({
				opacity: 0
			}, 500);

			$imgDetail.animate({
				width: '100vw',
				left: 0,
				top: '27%'
			}, 500, () => {
				
				// $imgDetail.css('width','');
				// $imgDetail.css('top','');
			});

		}, 500);

	}

	// $(window).on("orientationchange", function(event) {
	// 	console.log(event )
	// 	// alert($('body').width() +"x"+$('body').height())
	// 	if($('body').width() > $('body').height()) {
	// 		$imgDetail.css('width','');
	// 		$imgDetail.animate({
	// 			height: '100vh',
	// 			left: 0,
	// 			top:0
	// 		}, 500);
	// 	}else{
	// 		alert()
	// 		$imgDetail.css('height','');
	// 	    $imgDetail.animate({
	// 			width: '100vw',
	// 			left: 0,
	// 			top: '27%'
	// 		}, 500);
	// 	}
		
	// });

	

	// $mail.on( "mouseenter", function() {
	// 	$(this).addClass('active');
	// });

	// $letter.on( "mouseenter", function() {
	// 	$letter.css('overflow','visible');
	// 	$page.addClass('active');
	// });

	// $letter.click(function() {
	// 	clickCount++;
	// 	if (clickCount > 2) {

	// 		$imgDetail.css({
	// 			'z-index' : 99,
	// 			'display' : 'flex',
	// 			'transform': 'translateY(50%)'
	// 		});
	// 		$('body').append('<div style="position:fixed; z-index:90; width:100vw; height:100vh; background-color: rgba(50, 54, 65);"></div>');
	// 	}
	// });
});
$(function(){
	let $mail = $('.letter-image');
	let $letter = $('.letter');
	let $page = $('.page');
	let $imgDetail = $('.img_detail');
	let letterWidth = $letter.width();
	var clickCount = 0

	$mail.on( "mouseenter", function() {
		$(this).addClass('active');
	});

	$letter.on( "mouseenter", function() {
		$letter.css('overflow','visible');
		$page.addClass('active');
	});

	$letter.click(function() {
		clickCount++;
		if (clickCount > 2) {

			$imgDetail.css({
				'z-index' : 99,
				'display' : 'flex',
				'transform': 'translateY(50%)'
			});
			$('body').append('<div style="position:fixed; z-index:90; width:100vw; height:100vh; background-color: rgba(50, 54, 65);"></div>');
		}
	});
});
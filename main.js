$(function(){
	let $mail = $('.letter-image');
	let $letter = $('.letter');
	let $page = $('.page');
	let $imgDetail = $('.img_detail');
	let letterWidth = $letter.width();

	$mail.on( "mouseenter", function() {
		$(this).addClass('active');
	});

	$letter.on( "mouseenter", function() {
		$letter.css('overflow','visible');
		$page.addClass('active');
	});

	$letter.click(function() {
		$imgDetail.css({
			'z-index' : 99,
			'display' : 'flex',
			'position' : 'fixed'
		});
	});
});
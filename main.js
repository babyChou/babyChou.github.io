$(function(){
	let $letter = $('.letter');
	let $page = $('.page');
	let letterWidth = $letter.width();

	$letter.click(function() {
		$letter.width(letterWidth);
		$page.addClass('active');
	});
});
$(document).ready(function() {
     $('.edit').editable('post.php');
 });

$( "body" ).keypress(function(event) {
	switch(event.keyCode) {
		case 49 :
			$('#player1 > .player').append('<div class="cup"></div>');
			break;
		case 50 :
			$('#player2 > .player').append('<div class="cup"></div>');
			break;
		case 51 :
			$('#player3 > .player').append('<div class="cup"></div>');
			break;
		case 52 :
			$('#player4 > .player').append('<div class="cup"></div>');
			break;
		case 33 :
			$('#player1 > .player > div:last-child', this).remove();
			break;
		case 34 :
			$('#player2 > .player > div:last-child', this).remove();
			break;
		case 35 :
			$('#player3 > .player > div:last-child', this).remove();
		case 167 :
			$('#player3 > .player > div:last-child', this).remove();
			break;
		case 36 :
			$('#player4 > .player > div:last-child', this).remove();
			break;
	}
});


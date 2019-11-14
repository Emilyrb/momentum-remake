$(document).ready(function(){

	var game_board = [[0,0,0],[0,0,0],[0,0,0]];
	var player_char = "X";
	var bot_char = "O";
	var difficulty;

	// Player turn
	function game_move(cell,char)
	{
		cell.toggleClass("pointerbox");
		cell.html(char);

		var x = cell.attr('id')%3;
		var y = Math.floor(cell.attr('id')/3);

		game_board[y][x] = char;
		if (check_win(game_board,char))
		{
			game_over(char);
		}
	}

	$("td").click(function()
	{
	
	});

	// Restart game
	$("#email_prompt").on('click','button',function(e)
	{
		$("#display_email").fadeOut();
		$("#email_prompt").fadeOut();
		$("#display_main").fadeIn();
		$("#display_quote").fadeIn();
	});

	$("input[name='username']").on('keypress',function(e) {
		if(e.which == 13) {
			$("#display_intro").fadeOut();
			$("#display_email").fadeIn();
			$("#email_prompt").fadeIn();
			var username = $("input[name='username']").val();
			$(".user").text(username);
		}
	});
	$("input[name='focus']").on('keypress',function(e) {
		if(e.which == 13) {
			$("input[name='focus']").fadeOut();
			$("#display_main h3").fadeOut();
			$("#display_focus").fadeIn();
			var focus_text = $("input[name='focus']").val();
			$(".focus_msg").text(focus_text);
		}
	});
	var interval = setInterval(function() {
		var momentNow = new Date();
		var hours = momentNow.getHours();
		var minutes = momentNow.getMinutes();
        $("#display_main h1").html((hours%12 ? hours%12 : 12) + ":" + (minutes < 10 ? '0'+minutes : minutes));
    }, 100);
	
});
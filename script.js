$(document).ready(function(){
	$("td").click(function()
	{
	
	});
	

	$("#email_prompt").on('click','button',function(e)
	{
		$("#display_email").fadeOut();
		$("#email_prompt").fadeOut();
		$("#display_main").fadeIn();
		$("#display_quote").fadeIn();
		$("#top_bar").fadeIn();
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
		$(".day_time").html(hours < 12 && hours > 2 ? "morning" : hours > 12 && hours < 17 ? "afternoon": "evening");
    }, 100);
	
	var quote_api='https://quotes.rest/qod.json?';
	var quote_url=quote_api;
	
	// Getting JSON data
	function quote_json(theUrl){
		$.getJSON( theUrl, function( data ) {
			$('#quote_msg').html("\""+data.contents.quotes[0].quote+"\"");
			$('#quote_author').html(data.contents.quotes[0].author);
		});
	};
	
	quote_json(quote_url);

	var weather_api='https://api.openweathermap.org/data/2.5/weather?';
	var weather_key='&APPID=8c717dcf78dc23081f1047eb61fd3681';
	var weather_loc='q=Brisbane';
	var weather_unit = '&units=metric';
	//var theUnits = 'Celcius';
	var weather_url=weather_api+weather_loc+weather_key+weather_unit;
	
	// Getting JSON data
	function weather_json(theUrl){
		$.getJSON( theUrl, function( data ) {
			$('#weather_temp').html(Math.round(data.main.temp)+"°");
			$('#weather_loc').html(data.name);
		});
	};
	
	weather_json(weather_url);

	$("#focus").on('click','.msg_check',function(e)
	{
		$(".fa-square").toggle();
		$(".fa-check-square").toggle();
		$(".focus_msg").toggleClass("strikethrough");
		$(".fa-times-circle").toggleClass("fa-rotate-45");
	});

	$("#focus").on('click','.msg_remove',function(e)
	{
		$(".focus_msg").text("");
		$("input[name='focus']").val("");

		$("input[name='focus']").fadeIn();
		$("#display_main h3").fadeIn();
		$("#display_focus").fadeOut();

		$(".focus_msg").removeClass("strikethrough");
		$(".fa-times-circle").removeClass("fa-rotate-45");
		$(".fa-square").show();
		$(".fa-check-square").hide();
	});
	
});

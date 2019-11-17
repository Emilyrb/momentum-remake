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
		$(".day_time").html(hours < 12 && hours > 2 ? "morning" : hours > 12 && hours < 5 ? "afternoon": "evening");
    }, 100);
	
	var quote_api='http://quotes.rest/qod.json?';
	var quote_url=quote_api;
	
	// Getting JSON data
	function quote_json(theUrl){
		$.getJSON( theUrl, function( data ) {
			$('#quote_msg').html("\""+data.contents.quotes[0].quote+"\"");
			$('#quote_author').html(data.contents.quotes[0].author);
		});
	};
	
	quote_json(quote_url);

	var weather_api='http://api.openweathermap.org/data/2.5/weather?';
	var weather_key=THEKEY
	var weather_loc='q=Brisbane';
	var weather_unit = '&units=metric';
	//var theUnits = 'Celcius';
	var weather_url=weather_api+weather_loc+weather_key+weather_unit;
	
	// Getting JSON data
	function weather_json(theUrl){
		$.getJSON( theUrl, function( data ) {
			console.log(data);
			$('#weather_temp').html(Math.round(data.main.temp)+"°");
			$('#weather_loc').html(data.name);
		});
	};
	
	weather_json(weather_url);

	
});
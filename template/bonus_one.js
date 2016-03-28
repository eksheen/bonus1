// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types
$.ajaxSetup({
    async: false
});
(function() {
	// Magic!
	console.log('Keepin\'n it clean with an external script!');
	var data = $.getJSON("http://www.mattbowytz.com/simple_api.json?data=all", function (json) {
	console.log(json);
	console.log('success!');
	});
$.ajaxSetup({
    async: true
});
	$(".flexsearch").keyup(function() {
		$("#dropdown").remove();
		var keys = JSON.parse(data.responseText);
		console.log(keys);
		//console.log("We just logged the keys");
		var input = $(".flexsearch-input").val();
		var interestsArr = keys.data.interests;
		console.log(interestsArr);
		//console.log("We just logged the interestsArr");
		var programmingArr = keys.data.programming;
		console.log(programmingArr);
		//console.log("We just logged the programming");
		var prefixArr = [];

		//add the interests array to the prefix array
		for(var i = 0 ; i < interestsArr.length ; i++) {
			var index = interestsArr[i].toLowerCase().indexOf(input.toLowerCase());
			if(index === 0) {
				console.log(index);
				prefixArr.push(interestsArr);
			}
		}
		//add the programming array to the prefix array
		
		for(var i = 0 ; i < programmingArr.length ; i++) {
			var index = programmingArr[i].toLowerCase().indexOf(input.toLowerCase());
			if(index === 0) {
				console.log(index);
				prefixArr.push(programmingArr[i]);
			}
		}
		
		console.log(prefixArr);

		

	});
		



})();
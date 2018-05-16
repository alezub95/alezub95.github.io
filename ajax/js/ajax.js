'use strict';


$("#btn").click(function(e){
	e.preventDefault();
	
	var ajaxUrl = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php";
	$.ajax({
		url: ajaxUrl,
		dataType: "json",
		success: function(element, index){
		console.log(element);
			var newElement = document.getElementById("area");
			newElement.innerHTML += '<div id="dane-programisty">' + 
				'<p>Imię: ' + element.imie + '</p>' +
				'<p>Nazwisko: ' + element.nazwisko + '</p>' +
				'<p>Zawód: ' + element.zawod + '</p>' +
				'<p>Firma: ' + element.firma + '</p>' +
				'</div>';

		}  
	});
});
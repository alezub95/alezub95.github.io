'use strict';

var btn = document.getElementById('get');

$(function (){
$("input").after("<div id='dane-programisty'></div>");
});

var dane = document.getElementById('dane-programisty');

function pobierzDane() {
    ajax('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');

}

function ajax (method, url) {
    var httpReq = new XMLHttpRequest();
    httpReq.open( method, url );

    httpReq.addEventListener('readystatechange', function () {
        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {
                var data = httpReq.responseText;
                
                dane.innerHTML = data;
            }
        }
        
    });


httpReq.send();
}

btn.addEventListener('click', pobierzDane)


// Zapisz w zmiennej adres url w postaci ciagu znakow
var url = 'http://api.icndb.com/jokes/random';
// Zapisz w zmiennej szukanie elementu przycisku poprzez nazwe atrybutu id
var button = document.getElementById( 'get-joke' );
// Zadeklaruj zmienna i przypisz wyszukanie paragrafu za pomoca nazwy atrybutu id 
var paragraph = document.getElementById( 'joke' );

// Uzyj zmiennej ktora przechowuje przycisk i nasluchuj ten element na klikniecie uzytkownika
button.addEventListener( 'click', function(){
    // Wywolaj funkcje "getJoke" po kliknieciu w przycisk 
    getJoke();
});

// Stworz funkcje ktora wyswietla losowy zart
function getJoke(){
    // Tworzymy nowa instancje obiektu XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Uzywamy nowego obiektu aby otworzyc polaczenie z wybranym adresem
    xhr.open( 'GET', url );
    // Podpinamy nasluchiwanie na odpowiedz z serwera
    xhr.addEventListener('load', function(){
        // Tworzymy zmienna w callbacku gdzie dostajemy od serwera odpowiedz
        // w formacie JSON i parsujemy na obiekt JS
        var response = JSON.parse( xhr.response );
        // Wykorzystaj element paragrafu i za pomoca innerHTML przypisz dostanie sie
        // do obiektu "joke" ktory wyswietla losowy zart
        paragraph.innerHTML = response.value.joke;
    });
    // Wyslij wynik zapytania do serwera
    
    xhr.send();
}
// Wyswietl losowy zart po zaladowaniu strony poraz pierwszy
getJoke();
/*Nicky Devilee
Bol4 applicatieontwikkelaar
Week 4 - JavaScript
opdracht: The Game*/

var level8 = prompt('365!');

var score = 0;
var keuze1;

if (level8 == '365') {
	score++;
	alert('Goed gedaan! Het juiste antwoord was inderdaad 365 dagen. Je score is nu: ' + score);
	console.log('Goed gedaan! Level 8 gehaald.');
	document.write('<hr>' + 'Vraag: Hoeveel dagen heeft een jaar?' + '<br>' + 'Juiste antwoord: 365 dagen' + '<br>' + 'Jouw antwoord: ' + level8 + '<br>' + 'Tussenstand: ' + score);
	alert('Gefeliciteeerd, je hebt 8 punten, tijd voor het bonus level!');
	alert('Goed lezen! Je staat in een doolhof en de stroom valt uit. Het enige wat je om je heen kan zien zijn 3 deuren en een heleboel struiken. Je loopt op blote voeten rond en je wilt graag naar huis.');
	alert('Je moet 3x kiezen door welke deur je wilt gaan, elke keuze heeft gevolgen!');
	keuze1 = prompt('Je ziet 3 deuren, deur A, B & C. Welke deur kies je? Typ de letter naar keuze als hoofdletter!');
} else{
	alert('Helaas! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, level 8 fout.');
}

var keuze2;

if (keuze1 == 'A' || keuze1 == 'B' || keuze1 == 'C') {
	alert('Goede keus! Je loopt nu verder en ziet nu weer 3 deuren.');
	console.log('Eerste deur goed gekozen.');
	document.write('<hr>' + 'Keuze eerste deur: ' + keuze1);
	keuze2 = prompt('Je ziet 3 deuren, deur 1, 2 & 3. Welke deur kies je?');
} else {
	alert('Helaas, dit was de verkeerde keus! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, verkeerde keus.');
}

var keuze3;

if (keuze2 == '1' || keuze2 == '2' || keuze2 == '3') {
	alert('Goede keus! Je loopt nu verder en ziet nu weer 3 deuren, maar dit is een belangrijke keus.');
	alert('Je staat nu voor een dodelijke keuze!');
	alert('Je moet een keus maken. Als je door deur 1 gaat, kom je dodelijke schorpioenen tegen die je binnen 1 minuut afmaken. Als je door deur 2 gaat, word je vast gezet in de elektrische stoel en kom je zo aan je einde. Als je door deur 3 gaat, kom je hongerige leeuwen tegen tijdens hun voedtijd die al vaker mens hebben gegeten.');
	console.log('Tweede deur goed gekozen.');
	document.write('<hr>' + 'Keuze tweede deur: ' + keuze2);
	keuze3 = prompt('Welke van de 3 deuren kies je, deur 1 (schorpioenen), deur 2 (elektrische stoel) of deur 3 (hongerige leeuwen) ?');
} else {
	alert('Helaas, dit was de verkeerde keus! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, verkeerde keus.');
}

if (keuze3 == '2') {
	alert('Slimme keus, de stroom was uit dus doet de elektrische stoel het ook niet.');
	alert('Bedankt voor het deelnemen aan deze quiz. Gelukkig heb je het gehaald en ben je er levend uitgekomen :).');
	console.log('Spel uigespeeld!');
	document.write('<hr>' + 'Keuze derde deur: ' + keuze3);
	document.write('<br>' + 'Spel uitgespeeld! Je hebt het levend gehaald!' + '<hr>' + 'Bedankt voor het meedoen!');
} else {
	alert('Bedankt voor het deelnemen aan deze quiz. Helaas heb je het niet levend gehaald. de stroom was uit in het doolhof dus de enige niet dodelijke optie was deur 2, de elektrische stoel, deze werkt namelijk niet als er geen stroom is :P');
	console.log('Helaas, verkeerde keus. Dodelijk einde.');
	document.write('<hr>' + 'Keuze derde deur: ' + keuze3);
	document.write('<br>' + 'Helaas, verkeeude keuze. Speel het spel opnieuw!' + '<hr>' + 'Bedankt voor het meedoen!');
}


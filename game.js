/*Nicky Devilee
Bol4 applicatieontwikkelaar
Week 4 - JavaScript
opdracht: The Game*/

alert('Quiz tijd: beantwoord alle vragen goed anders moet je opnieuw beginnen, na 8 punten is er een bonus level!');

var score = 0;
var level1 = prompt('Wat is de hoofdstad van Duitsland? Denk aan hoofdletters!');
var level2;

if (level1 == 'Berlijn') {
	score++;
	alert('Goed gedaan! Het juiste antwoord was inderdaad Berlijn. Je score is nu: ' + score);
	console.log('Goed gedaan! Level 1 gehaald.');
	document.write('<hr>' + 'Vraag: Wat is de hoofdstad van Duitsland?' + '<br>' + 'Juiste antwoord: Berlijn' + '<br>' + 'Jouw antwoord: ' + level1 + '<br>' + 'Tussenstand: ' + score + ' punten.');
	level2 = prompt('Door welk bedrijf is de Playstation ontwikkelt? Denk aan hoofdletters!');
} else{
	alert('Helaas! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, level 1 fout.');
}

var level3;

if (level2 == 'Sony') {
	score++;
	alert('Goed gedaan! Het juiste antwoord was inderdaad Sony. Je score is nu: ' + score);
	console.log('Goed gedaan! Level 2 gehaald.');
	document.write('<hr>' + 'Vraag: Door welk bedrijf is de Playstation ontwikkelt?' + '<br>' +  'Juiste antwoord: Sony' + '<br>' + 'Jouw antwoord: ' + level2 + '<br>' + 'Tussenstand: ' + score + ' punten.');
	level3 = prompt('Er is maar 1 telefoonmerk waarmee je officieel kan Pingen, welk merk is dit? Denk aan hoofdletters en juiste spelling!');	
} else{
	alert('Helaas! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, level 2 fout.');
}

var level4;

if (level3 == 'Blackberry') {
	score++;
	alert('Goed gedaan! Het juiste antwoord was inderdaad Blackberry. Je score is nu: ' + score);
	console.log('Goed gedaan! Level 3 gehaald.');
	document.write('<hr>' + 'Vraag: Er is maar 1 telefoonmerk waarmee je officieel kan Pingen, welk merk is dit?' + '<br>' + 'Juiste antwoord: Blackberry/Blackbery' + '<br>' + 'Jouw antwoord: ' + level3 + '<br>' + 'Tussenstand: ' + score + ' punten.');
	level4 = prompt('Hoe heet een reservekopie van al je bestanden? Denk aan hoofdletters en juiste spelling!');
} else{
	alert('Helaas! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, level 3 fout.');
}

var level5;

if (level4 == 'Back-up') {
	score++;
	alert('Goed gedaan! Het juiste antwoord was inderdaad Back-up. Je score is nu: ' + score);
	console.log('Goed gedaan! Level 4 gehaald.');
	document.write('<hr>' + 'Vraag: Hoe heet een reservekopie van al je bestanden?' + '<br>' + 'Juiste antwoord: Back-up' + '<br>' + 'Jouw antwoord: ' + level4 + '<br>' + 'Tussenstand: ' + score + ' punten.');
	level5 = prompt('Simpel rekensommetje: 8+8/8*8-9 = ...?');
} else{
	alert('Helaas! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, level 4 fout.');
}

var level6;

if (level5 == '7') {
	score++;
	alert('Goed gedaan! Het juiste antwoord was inderdaad 7. Je score is nu: ' + score);
	console.log('Goed gedaan! Level 5 gehaald.');
	document.write('<hr>' + 'Vraag: Simpel rekensommetje: 8+8/8*8-9 = ...?' + '<br>' + 'Juiste antwoord: 7' + '<br>' + 'Jouw antwoord: ' + level5 + '<br>' + 'Tussenstand: ' + score + ' punten.');
	level6 = prompt('Hoeveel inwoners heeft Gorinchem ongeveer? Denk goed na!');
} else{
	alert('Helaas! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, level 5 fout.');
}

var level7;

if (level6 <= '37000') {
	score++;
	alert('Goed gedaan! Het juiste antwoord was inderdaad 36000+. Je score is nu: ' + score);
	console.log('Goed gedaan! Level 6 gehaald.');
	document.write('<hr>' + 'Vraag: Hoeveel inwoners heeft Gorinchem ongeveer?' + '<br>' + 'Juiste antwoord: 36000+' + '<br>' + 'Jouw antwoord: ' + level6 + '<br>' + 'Tussenstand: ' + score + ' punten.');
	level7 = prompt('Hoeveel (miljoen) inwoners heeft Nederland? Denk goed na!');
} else{
	alert('Helaas! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, level 6 fout.');
}

var level8;

if (level7 >= '17') {
	score++;
	alert('Goed gedaan! Het juiste antwoord was inderdaad 17+ miljoen. Je score is nu: ' + score);
	console.log('Goed gedaan! Level 7 gehaald.');
	document.write('<hr>' + 'Vraag: Hoeveel (miljoen) inwoners heeft Nederland?' + '<br>' + 'Juiste antwoord: 17+ miljoen' + '<br>' + 'Jouw antwoord: ' + level7 + '<br>' + 'Tussenstand: ' + score + ' punten.');
	level8 = prompt('Laatste vraag! Hoeveel dagen heeft een jaar? Denk goed na!');
} else{
	alert('Helaas! Druk op F5 of herlaad de site om opnieuw te beginnen.');
	console.log('Helaas, level 7 fout.');
}

var keuze1;

if (level8 == '365') {
	score++;
	alert('Goed gedaan! Het juiste antwoord was inderdaad 365 dagen. Je score is nu: ' + score);
	console.log('Goed gedaan! Level 8 gehaald.');
	document.write('<hr>' + 'Vraag: Hoeveel dagen heeft een jaar?' + '<br>' + 'Juiste antwoord: 365 dagen' + '<br>' + 'Jouw antwoord: ' + level8 + '<br>' + 'Tussenstand: ' + score + ' punten.');
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
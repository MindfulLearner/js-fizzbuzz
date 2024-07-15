// scriptsssssssssssss

// contiamo da 1 a 101 perche 101 non verra contato e arrivera soloa 100 ho cercato di non usare &
	for (let i = 1; i < 101; i++) {
		// a ogni iterazione stampiamo un numero
		if (i % 3 == 0) {
			if (i % 5 == 0) {
				// se divisibile per 3 e anche divisibile per 5 facciamo FIZZERBUZZ
				console.log("FizzBuzz");
				// ridefiniamo square con collegamento alla funzione createSquadre
				let square = createSquare();
				//scriviamo dentro il div in questo caso square FIZZBUZZ
				square.innerText = "FizzBuzz";
// Mettiamo un colore diverso per FizzBuzz
				square.style.backgroundColor = "#FDFFD2"
// Diamo a .center-layout un figlio e gli diamo square che ha diverse caratteristiche di stile
				document.querySelector(".center-layout").appendChild(square);
			} else {
				// dato che abbiamo passato prima i diviso 3 ma non ha passato quello di 5 allora passiamoa questo else e stampiamo Fizz
				console.log("Fizz");
				// ridefiniamo square con collegamento alla funzione creaSquare
				let square = createSquare();
				//con la funzione innerTextscriviamo all'interno dello square Fizz
				square.innerText = "Fizz";
				// con aggiungiamo uno style background Color diverso per FIzz
				square.style.backgroundColor = "#FFB4C2"
// Diamo a .center-layout un figlio e gli diamo square che ha diverse caratteristiche di stile
				document.querySelector(".center-layout").appendChild(square);
			}
		} else if (i % 5 == 0) {
			// se invece dall'inizio non divisibile per 3 controlliamo se divisibile per 5 e quindi Stamperemo Buzz non appena passato
			console.log("Buzz");
			// ridefiniamo let square create square perche fuori scope in merito alla funzioone 
			let square = createSquare();
			// scriviamo all'interno di square Buzz 
			square.innerText = "Buzz";
			// aggiungiamo style background per distinguire da altri 
			square.style.backgroundColor = "#DA7297"
// Diamo a .center-layout un figlio e gli diamo square che ha diverse caratteristiche di stile
			document.querySelector(".center-layout").appendChild(square);
		} else {
			// se invece non nemmeno divisibile per 5 dato che abbiamo un falso su 3 e un falso su 5 allora sara solo un numero normale di conseguenza verra stampato solo il numero normale
			console.log(i);
			// ridefiniamo square in merito a scope fuori da if e funzione
			let square = createSquare();
// scriviamo all'interno dello square direttamente i
			square.innerText = i;
			// mettiamo un background tramite funzione di style backghrungrd di colore diverso per diversificarlo dagli altri 
			square.style.backgroundColor = "#667BC6"
// Diamo a .center-layout un figlio e gli diamo square che ha diverse caratteristiche di stile
			document.querySelector(".center-layout").appendChild(square);

		}
	}

// funzione crea square, poteva scrivere direttamente dentro le condizioni else, ma era troppo troppo troppo....
	function createSquare() {
		// Definiamo con const perche square non andra modificato e rimarra sempre quello
		const square = document.createElement("div");
		// Usiamo diverse funzioni per defiunire lo stile dell'eventuale square 
		square.style.width = "100px"
		square.style.height = "100px"
		square.style.display = "flex"
		square.style.justifyContent = "center"
		square.style.alignItems = "center"
		// ritorniamo square tramite funzione
		return square;
	}


// Fine programma 
// Considerazioni personali, non ho usato calc e non ho usatpcol o altro. gaps e un po calcolato.. mhm
// forse ho barato un po con i gap perche non essendo responsive potrbbe anche creare [roblematiche mhm.....










































/*JS dokument individuel opgave*/
var cities = [ {name: "Beijing", population : 21707000, size: 16411},
{name : "Chongqing", population : 30165500, size: 82403},
{name : "Istanbul", population : 15029000, size: 620},
{name : "Karachi", population : 14910000, size: 3780},
{name : "Shanghai", population : 24183300, size: 6341}];

/*Herfra tælles tegn/
	
/*Individuel opgave A*
/*Inspireet af W3's insertrow funktion:
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow*/


function Info() {
		var tableA = document.getElementById("A");
		var tableB = document.getElementById("B");
		var tableC = document.getElementById("C");

		//Ny info til tabellen
		var navn = prompt("Indtast byens navn:") 
		var befolkning = prompt("Indtast byens befolkningstal:")
		var størrelse = prompt("Indtast byens størrelse i kvadratkilometer:")

		/*Tabel A - ny info*/
		var row = "";
		for (var i = 0; i < tableA.rows.length; i++) {

					var x = document.getElementById("A").rows[tableA.rows.length-1].getElementsByTagName("TD")[1]
					if (befolkning < Number(x.innerHTML)) {
										var row = tableA.insertRow(-1);
										var cell1 = row.insertCell(0);
										var cell2 = row.insertCell(1);
										cell1.innerHTML = navn;
										cell2.innerHTML = befolkning;
										break
						}



					var x = document.getElementById("A").rows[i].getElementsByTagName("TD")[1]
					if (befolkning > Number(x.innerHTML)) {
										var row = tableA.insertRow(i);
										var cell1 = row.insertCell(0);
										var cell2 = row.insertCell(1);
										cell1.innerHTML = navn;
										cell2.innerHTML = befolkning;
										break
						}

				}



		/*Tabel B - ny info*/
		var row = "";
		for (var i = 0; i < tableB.rows.length; i++) {

			var x = document.getElementById("B").rows[tableB.rows.length-1].getElementsByTagName("TD")[1]
							if (størrelse < Number(x.innerHTML)) {
												var row = tableB.insertRow(-1);
												var cell1 = row.insertCell(0);
												var cell2 = row.insertCell(1);
												cell1.innerHTML = navn;
												cell2.innerHTML = størrelse;
												break
								}

							var x = document.getElementById("B").rows[i].getElementsByTagName("TD")[1]
							if (størrelse > Number(x.innerHTML)) {
												var row = tableB.insertRow(i);
												var cell1 = row.insertCell(0);
												var cell2 = row.insertCell(1);
												cell1.innerHTML = navn;
												cell2.innerHTML = størrelse;
												break
								}


				}
	

		/*Tabel C - ny info*/
		var row = "";
		for (var i = 0; i < tableC.rows.length; i++) {

					var x = document.getElementById("C").rows[tableC.rows.length-1].getElementsByTagName("TD")[0]
					if (navn.toLowerCase() > x.innerHTML.toLowerCase()) {
										var row = tableC.insertRow(-1);
										var cell1 = row.insertCell(0);
										cell1.innerHTML = navn;
										break
						}



					var x = document.getElementById("C").rows[i].getElementsByTagName("TD")[0]
					if (navn.toLowerCase() < x.innerHTML.toLowerCase()) {
										var row = tableC.insertRow(i);
										var cell1 = row.insertCell(0);
										cell1.innerHTML = navn;
										break
						}

				}

};
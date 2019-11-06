// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi,
// gli altri diventano verdi (tutti i rimanennti)
// Opzionale: Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti

$( document ).ready(function() { 


    var numRossi = 0;
    var numVerdi = 0;

    $(".grid-item").click(function() {
        if ($(this).hasClass("rosso")) {
            $(this).css("background", "red");
            numRossi++;
            document.getElementById("punt-rosso").innerHTML = "Rossi : " + numRossi;

        } else {
            $(this).css("background", "green");
            numVerdi++;
            document.getElementById("punt-verdi").innerHTML = "Verdi : " + numVerdi;

        }
    })


});
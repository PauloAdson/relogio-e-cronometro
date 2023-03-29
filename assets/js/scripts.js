/*CODIGO DO RELOGIO*/
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;


    horas.textContent = hr;
    minutos.textContent= min;
    segundos.textContent = s;
});


/*  CODIGO DO CRONOMETRO*/
var croHoras = 0;
var croMinutos = 0;
var croSegundos = 0;
var croTempo = 1000; /*ISSO VALE 1 SEGUNDO*/
var cron;

function start () {
    /*ISSO RESOLVE O BUG DO TEMPO FICAR MAIS RÁPIDO*/
    if (status == "START"){
        return;
    }
    status = "START";

    cron = setInterval(() => {timer();}, croTempo);
}

function pause () {
    status = "PAUSE"
    clearInterval(cron);

}

function restart () {
    status = "PAUSE"
    clearInterval(cron);
    croHoras = 0;   
    croMinutos = 0;    
    croSegundos = 0;

    document.getElementById('cronometro-horas').innerText = '00';
    document.getElementById('cronometro-minutos').innerText = '00';
    document.getElementById('cronometro-segundos').innerText = '00';
}

function timer () {

    croSegundos++;

    if (croSegundos == 60) {
        croSegundos = 0;
        croMinutos++;

        if (croMinutos == 60) {
            croMinutos = 0;
            croHoras++;
        }
    }

    var formatHoras = (croHoras < 10 ? '0' + croHoras : croHoras);
    var formatMinutos = (croMinutos < 10 ? '0' + croMinutos : croMinutos); 
    var formatSegundos = (croSegundos < 10 ? '0' + croSegundos : croSegundos); 

    document.getElementById('cronometro-horas').innerText = formatHoras;
    document.getElementById('cronometro-minutos').innerText = formatMinutos;
    document.getElementById('cronometro-segundos').innerText = formatSegundos;
}

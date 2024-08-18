
window.onload = function main() {


}


var o1;
var g1;
var o2;
var g2;

var C3=130.8;
var Cs3=138.6;
var D3=146.8;
var Eb3=155.6;
var E3=164.8;
var F3=174.6;
var Fs3=185.0;
var G3=196.0;
var Gs3=207.7;
var A3=220.0;
var Bb3=233.1;
var B3=246.9;
var C4=261.6;
var Cs4=277.2;
var D4=293.7;
var Eb4=311.1;
var E4=329.6;
var F4=349.2;
var Fs4=370.0;
var G4=392.0;
var Gs4=415.3;
var A4=440.0;
var Bb4=466.2;
var B4=493.9;
var C5=523.3;
var Cs5=554.4;
var D5=587.3;
var Eb5=622.3;
var E5=659.3;
var F5=698.5;
var Fs5=740.0;
var G5=784.0;
var Gs5=830.6;
var A5=880.0;
var Bb5=932.3;
var B5=987.8;


function play1() {
    let frecuencia= $("#frecuencia").val();
    var context = new AudioContext();
    o1 = context.createOscillator();
    g1 = context.createGain();
    o1.connect(g1);
    g1.connect(context.destination);
    var frequency = frecuencia;
    o1.frequency.value = frequency;
    o1.start(0);
    o1.stop(context.currentTime + 1);
}

function play2() {
    var context = new AudioContext();
    o2 = context.createOscillator();
    g2 = context.createGain();
    o2.connect(g2);
    g2.connect(context.destination);
    var frequency = 440.0;
    o2.frequency.value = frequency;
    o2.start(0);
    o2.stop(context.currentTime + 1);
}

function stop() {
    g1.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    g2.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
}


// alert('hello world')
var euroValue = 100;
var dolarCot = 5.25;
var finalValue = euroValue * dolarCot;

var meters = 1000;
var lightYears = meters / 9.461e+15;
alert (euroValue + ' € são ' + finalValue.toFixed(2) + ' reais');
alert (meters + ' metros são ' + lightYears + ' anos luz');


const velocidadeDaLuz = 299792; // km/s

const distanciaParaSigmaOctantis = 1930000; // km
const distanciaParaAlphaCentauri = 4.37 * Math.pow(10, 12); // km

const distanciaEmAnosLuz = distanciaParaAlphaCentauri / Math.pow(velocidadeDaLuz, 2);
const distanciaEmQuilometros = distanciaParaAlphaCentauri / 1000;

alert(`A distância de Sigma Octantis até Alpha Centauri é de ${distanciaEmAnosLuz} anos-luz.`);
alert(`A distância de Sigma Octantis até Alpha Centauri é de ${distanciaEmQuilometros} quilômetros.`);

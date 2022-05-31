// Import stylesheets
import './style.css';

// Write Javascript code!

var canvas = document.getElementById('A2Canvas');
var ctx = canvas.getContext('2d');  


ctx.rotate((Math.PI / 180) * 39); 
ctx.translate(-200, -90)

ctx.fillStyle = 'blue';
ctx.fillRect(350,0, 80, 80);
ctx.restore();
ctx.translate(200, 80); 





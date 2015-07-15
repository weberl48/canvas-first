var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//Shape class
function Shape(x,y,w,c,s) {
   this.x = x;
   this.y = y;
   this.w = w;
   this.s = s;
}
//Square class
function Square (x,y,w,c) {
  Shape.call(this,x,y,w,c,"Square");
}
Square.prototype = new Shape();
Square.prototype.constructor = Square;

//Circle class
function Circle (x,y,w,c) {
  Shape.call(this,x,y,w,c,"Circle");
}
Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

//Rectangle class
function Rectangle (x,y,w,c) {
  Shape.call(this,x,y,w,c,"Rectangle");
}

Rectangle.prototype = new Shape();
Rectangle.prototype.constructor = Rectangle;

//render square to screen
Square.prototype.draw = function(x,y,w,c) {
  ctx.fillStyle = c;
  ctx.fillRect (x, y, w, w);
};
//render circle to screen
Circle.prototype.draw = function(x,y,c) {
  ctx.fillStyle = c;
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
};
//render Rectangle to screen
Rectangle.prototype.draw = function (x,y,c){

      ctx.beginPath();
      ctx.rect(x, y, 200, 100);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'black';
      ctx.stroke();

};

//new instance of square
var square = new Square(); // params 10,10,20,"blue"
//new instance of ciricle
var circle = new Circle();
//new instanve of Rectangle
var rectangle = new Rectangle();
//location of shapes based on event.X,Y
canvas.addEventListener('click',  function(){
  var x = event.clientX; // Get the horizontal coordinate on click
  var y = event.clientY; // Get the vertical coordinate on click
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  rectangle.draw(x,y,"purple");
  render(x,y,"red");
  square.draw(x,y,20,"blue");
});

var render = function (x,y,c) {

  circle.draw(x,y,c);
};

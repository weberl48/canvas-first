var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var selection = document.getElementById('shape').value;
var random = document.getElementById('random');


var shapes= [];
canvas.addEventListener('click', function() {
    //grabing the selected shape value
    var selection = document.getElementById('shape').value;
    //grabbing the selected color value
    var c = document.getElementById('color').value;
    //get width
    var w = document.getElementById("width").value;

    var x = event.clientX; // Get the horizontal coordinate on click
    var y = event.clientY; // Get the vertical coordinate on click
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    if (selection.toUpperCase() === "SQUARE") {
        //new instance of square
      var square = new Square(x,y,w,c); // params 10,10,20,"blue"
        //adding instance to shapes array
        shapes.push(square);
        square.draw(x, y, w, c);
    } else if (selection.toUpperCase() === "CIRCLE") {
        //new instance of ciricle
        var circle = new Circle(x,y,w,c);
        //adding instance to shapes array
        shapes.push(circle);
        //new instanve of Rectangle
        circle.draw(x, y, w, c);
    } else if (selection.toUpperCase() === "RECTANGLE") {
        var rectangle = new Rectangle(x,y,w,c);
        //adding instance to shapes array
        shapes.push(rectangle);
        //location of shapes based on event.X,Y
        rectangle.draw(x, y,w*2, w, c);
    }
});
//Shape class
function Shape(x, y, w, c, s) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.s = s;
}
//Square class
function Square(x, y, w, c) {
    Shape.call(this, x, y, w, c, "Square");
}
Square.prototype = new Shape();
Square.prototype.constructor = Square;

//Circle class
function Circle(x, y, w, c) {
    Shape.call(this, x, y, w, c, "Circle");
}
Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

//Rectangle class
function Rectangle(x, y, w, c) {
    Shape.call(this, x, y, w, c, "Rectangle");
}

Rectangle.prototype = new Shape();
Rectangle.prototype.constructor = Rectangle;

//render square to screen
Square.prototype.draw = function(x, y, w, c) {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, w, w);
};
//render circle to screen
Circle.prototype.draw = function(x, y, w,c) {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(x, y, w/2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
};
//render Rectangle to screen
Rectangle.prototype.draw = function(x, y,w,h,c) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = c;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
};





var randomColor = function() {
    // 16777215 == ffffff in decimal
    var c = '#'+Math.floor(Math.random()*16777215).toString(16);


    return c;
};

random.addEventListener('click', function() {
        var x;
        var y;
        var w;
    for (var j = 0; j < 3; j++) {
        var c=randomColor();
        //new square instance each time through loop
        var square = new Square(x,y,w,c);
        square.draw(x, y, w, c);
        //new circle instance each time through loop
        var circle = new Circle(x,y,w,c);
        circle.draw(x, y, w, c);
        //new rectangle instance each time through loop
        var rectangle = new Rectangle(x,y,w,c);
        rectangle.draw(x, y,w*2, w, c);
    for (var i = 0; i < 20; i++) {
        // var index = Math.floor(Math.random() * c.length);
        x = Math.floor((Math.random() * 1000) + 1);
        w = Math.floor((Math.random() * 50) + 1);
        y = Math.floor((Math.random() * 500) + 1);


    }
  }
});

// var render = function(x, y, c) {
//
//
// };

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var selection = document.getElementById('shape').value;
var random = document.getElementById('random');
var randomC = document.getElementById('randomC');
var reset = document.getElementById('reset');
var clear = document.getElementById('clear');
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
    this.c= c;
    this.s = s;
}
//Square class
function Square(x, y, w, c) {
    //
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

var randomCords = function () {
      var cords = {
        x: Math.floor((Math.random() * 1000) + 1),
        w: Math.floor((Math.random() * 500) + 1),
        y: Math.floor((Math.random() * 500) + 1)
      };
        return cords;
};
randomC.addEventListener('click', function() {
  for (var i = 0; i < shapes.length; i++) {
    console.log(shapes[i].s);
    if (shapes[i].s.toUpperCase() ==="SQUARE") {
    shapes[i].c = randomColor();
    ctx.fillStyle = shapes[i].c;
    ctx.fillRect(shapes[i].x, shapes[i].y, shapes[i].w, shapes[i].w);
  } else if(shapes[i].s.toUpperCase() ==="CIRCLE"){
    shapes[i].c = randomColor();
    ctx.fillStyle = shapes[i].c;
    ctx.beginPath();
    ctx.arc(shapes[i].x, shapes[i].y, shapes[i].w/2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  } else if (shapes[i].s.toUpperCase() ==="RECTANGLE") {
    ctx.beginPath();
    ctx.rect(shapes[i].x, shapes[i].y, shapes[i].w *2, shapes[i].w);
    shapes[i].c = randomColor();
    ctx.fillStyle = shapes[i].c;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
  }

});
random.addEventListener('click', function() {
    var cords = [randomCords(),randomCords(),randomCords()];
    var colors = [randomColor(),randomColor(),randomColor()];
    for (var j = 0; j < 3; j++) {
        var y = cords[0].y;
        console.log(y);
        var w = cords[0].w;
        //new square instance each time through loop
        var square = new Square(cords[1].x,cords[1].y,cords[1].w,colors[1]);
        shapes.push(square);
        square.draw(cords[1].x,cords[1].y,cords[1].w,colors[1]);
        //new circle instance each time through loop
        var circle = new Circle(cords[0].x,cords[0].y,cords[0].w,colors[0]);
        shapes.push(circle);
        circle.draw(cords[0].x,cords[0].y,cords[0].w,colors[0]);
        //new rectangle instance each time through loop
        var rectangle = new Rectangle(cords[2].x,cords[2].y,cords[2].w,colors[2]);
        shapes.push(rectangle);
        rectangle.draw(cords[2].x,cords[2].y *2,cords[2].w,colors[2]);
      }

});
reset.addEventListener('click', function() {
  for (var i = 0; i < shapes.length; i++) {
    console.log(shapes[i].s);
    if (shapes[i].s.toUpperCase() ==="SQUARE") {
    shapes[i].c =  document.getElementById('color').value;
    ctx.fillStyle = shapes[i].c;
    ctx.fillRect(shapes[i].x, shapes[i].y, shapes[i].w, shapes[i].w);
  } else if(shapes[i].s.toUpperCase() ==="CIRCLE"){
    shapes[i].c = document.getElementById('color').value;
    ctx.fillStyle = shapes[i].c;
    ctx.beginPath();
    ctx.arc(shapes[i].x, shapes[i].y, shapes[i].w/2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  } else if (shapes[i].s.toUpperCase() ==="RECTANGLE") {
    ctx.beginPath();
    ctx.rect(shapes[i].x, shapes[i].y, shapes[i].w *2, shapes[i].w);
    shapes[i].c = document.getElementById('color').value;
    ctx.fillStyle = shapes[i].c;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
  }
});
clear.addEventListener('click', function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  shapes.splice(0 ,shapes.length);
});

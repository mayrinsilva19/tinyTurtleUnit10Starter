TinyTurtle.apply(window);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
penDown();
}

function triangle(){
penUp();
left(90);
forward(20);
penDown();
right(90);
forward(50);
left(120);
forward(40);
left(110);
forward(45);
penDown();
}

function house(){
penUp();
left(100);
forward(50);
penDown();
left(30);
forward(50);
right(90);
forward(30);
right(90);
forward(50)
right(90);
forward(30);
left(180);
forward(30);
left(45);
forward(35);
left(90);
forward(35);
}

function pentagon(){
penUp();
left(45);
forward(60);
penDown();
right(45);
forward(20);

}

// Type your function call below
square();
triangle();
house();
pentagon();
stamp();


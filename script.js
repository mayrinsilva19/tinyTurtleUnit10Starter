TinyTurtle.apply(window);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
penDown();
}

function triangle(x){
penUp();
left(90);
forward(x);
penDown();
right(90);
forward(x);
left(120);
forward(x);
left(120);
forward(x);
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

}

function shape(x,y){
penUp();
left(60);
forward(90)
}
// Type your function call below
//square(40);
//triangle(40);
//house();
//pentagon();
stamp();
shape(40,45);


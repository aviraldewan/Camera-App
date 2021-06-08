var v;
var button,i,c,m,te;

function setup() {
  createCanvas(400, 400);
  c = confirm("Press 'Ok' to turn on camera permission");
  if (c == true)
    {
  v = createCapture(VIDEO);
  v.size(400,200)
  v.position(400,50);
  te = createP('Current Video');
  te.position(555,270);
  te.style('font-size',100);
  button = createButton('Take pic');
      button.position(400, 500);
  button.style('background-color','yellow');
  button.mousePressed(takesnap);
    }
  else
    {
      textSize(30);
      text("Reload the page and click ok\n option if you want\n to use camera",1,100);
    }
}

function takesnap()
{
    image(v,100,10,300,300);
    //image(v,100,10)
}

function draw() {
  //background(220);
}
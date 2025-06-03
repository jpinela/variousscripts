
function drawGrid(){
  let numRows = 10;
  let numCols = 10;
  let unitPixels = 40;
  
  //https://p5js.org/examples/animation-and-variables-drawing-lines/
  stroke(0,0,0);
  strokeWeight(2);
  for (let i=0;i<numRows;i++){ //desenhar linhas
    if(i%2==1)
        stroke(255,128,128);
    line(30, 100+unitPixels*i, 30+numCols*unitPixels, 100+unitPixels*i);     
    if(i%2==1)
        stroke(0,0,0);
  }
  for (let j=0;j<numCols;j++){ //desenhar barras
    if(j%2==1)
      stroke(255,128,128);
    line(30+unitPixels*j, 100, 30+unitPixels*j, 100+unitPixels*numRows); 
    if(j%2==1)
      stroke(0,0,0);
  }
  strokeWeight(1);
}

function drawRobot1(ang1,ang2){
  push();
  rotate(ang1);
  line(30,100,30+20*4,100);
  pop();
}

function drawRobot2(ang1degs,ang2degs,ang3degs){
  let arm1l=4, arm2l=3, arm3l=2;
  strokeWeight(4);
  stroke(255,0,0);
  let ang1=ang1degs*PI/180, ang2=ang2degs*PI/180 , ang3=ang3degs*PI/180 ;
  stroke(255,0,0);
  
  let pointarm1x=30+40*arm1l*cos(ang1);
  let pointarm1y=100+40*arm1l*sin(ang1);
  line(30,100,pointarm1x,pointarm1y);

  let pointarm2x=pointarm1x+40*arm2l*cos(ang1+ang2);
  let pointarm2y=pointarm1y+40*arm2l*sin(ang1+ang2);
  line(pointarm1x,pointarm1y,pointarm2x,pointarm2y);

  let pointarm3x=pointarm2x+40*arm3l*cos(ang1+ang2+ang3);
  let pointarm3y=pointarm2y+40*arm3l*sin(ang1+ang2+ang3);
  line(pointarm2x,pointarm2y,pointarm3x,pointarm3y);

  stroke(255,255,255);
  strokeWeight(1);
}

function setup() {
  createCanvas(600, 600);

  //https://editor.p5js.org/gr.gromko/sketches/f-oF3Cf0q
  slider = createSlider(-90, 90, 0); //повзунок, значення 0-255
  slider.position(20, 15);  //позиція
  slider.style('width', '200px'); // стиль

  slider2 = createSlider(-90, 90, 0); //повзунок, значення 0-255
  slider2.position(20, 35);  //позиція
  slider2.style('width', '200px'); // стиль

  slider3 = createSlider(-90, 90, 0); //повзунок, значення 0-255
  slider3.position(20, 55);  //позиція
  slider3.style('width', '200px'); // стиль

  background("aqua");
  drawGrid();

}

function draw() {

  background("aqua");
  //https://p5js.org/examples/transformation-rotate/
  // rotate / push / pop. curioso!
  let val = slider.value();
  let val2 = slider2.value();
  let val3 = slider3.value();

  text(val,0,30);
  text(val2,0,50);
  text(val3,0,70);

  drawGrid();
  drawRobot2(val,val2,val3);
  //Example – Two-Link Planar Manipulator (Trigonometry Method)
  x=4*cos(val*PI/180)+3*cos((val+val2)*PI/180)+2*cos((val+val2+val3)*PI/180);
  y=4*sin(val*PI/180)+3*sin((val+val2)*PI/180)+2*sin((val+val2+val3)*PI/180);
  text(x+","+y,30,550); //working
  strokeWeight(10);
  point(30+40*x,100+40*y);
  strokeWeight(1);
}

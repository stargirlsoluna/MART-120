function setup()
{
    createCanvas(520,700);
}

function draw()
{
    background(244,237,244);

    // title
    fill(85,80,90);
    noStroke();
    textAlign(CENTER);
    textSize(30);
    text("My Self Portrait",260,48);

    // background
    fill(250,247,250);
    rect(65,75,390,580,28);

    // hair
    fill(18,18,26);
    noStroke();
    ellipse(260,330,320,440);
    ellipse(155,440,100,300);
    ellipse(365,440,100,300);

    // arms
    fill(220,174,156);

    push();
    translate(123,560);
    rotate(radians(10));
    ellipse(0,0,58,175);
    pop();

    push();
    translate(397,560);
    rotate(radians(-10));
    ellipse(0,0,58,175);
    pop();

    // shoulders
    ellipse(260,535,295,115);

    // neck
    rect(228,410,64,100,20);

    // ears
    ellipse(176,334,24,44);
    ellipse(344,334,24,44);

    // face
    ellipse(260,314,180,215);

    // front hair
    fill(18,18,26);
    ellipse(216,196,105,105);
    ellipse(304,196,105,105);
    ellipse(181,320,50,190);
    ellipse(339,320,50,190);

    // middle part
    stroke(135);
    strokeWeight(2);
    line(260,132,260,185);

    // eyebrows
    stroke(105,76,80);
    strokeWeight(6);
    line(204,275,237,270);
    line(283,270,316,275);

    // eyeshadow
    noStroke();
    fill(220,157,185);
    ellipse(218,301,54,26);
    ellipse(302,301,54,26);

    // eyes
    fill(250);
    ellipse(218,311,50,19);
    ellipse(302,311,50,19);

    fill(82,68,65);
    ellipse(218,311,15,15);
    ellipse(302,311,15,15);

    fill(20);
    ellipse(218,311,7,7);
    ellipse(302,311,7,7);

    // eyeliner
    stroke(25);
    strokeWeight(3);
    line(194,304,241,304);
    line(194,304,186,298);

    line(279,304,326,304);
    line(326,304,334,298);

    // nose
    stroke(160,110,100);
    strokeWeight(1.5);
    line(260,324,255,358);

    noFill();
    arc(260,362,26,16,0,PI);

    // septum
    stroke(85);
    strokeWeight(2);
    arc(260,368,12,8,0,PI);

    // cheeks
    noStroke();
    fill(210,130,145,65);
    ellipse(208,359,27,15);
    ellipse(312,359,27,15);

    // lips
    fill(210,145,165);
    ellipse(260,396,47,17);

    fill(233,184,198);
    ellipse(260,392,34,8);

    stroke(175,115,135);
    strokeWeight(1);
    line(238,396,282,396);

    // earrings
    noFill();
    stroke(185,185,190);
    strokeWeight(4);
    ellipse(160,344,31,64);
    ellipse(360,344,31,64);

    // necklace
    stroke(90);
    strokeWeight(2);
    line(230,470,260,505);
    line(290,470,260,505);

    // points
    stroke(90);
    strokeWeight(4);
    point(230,470);
    point(290,470);

    // pendant
    fill(88,160,190);
    stroke(55,110,140);
    strokeWeight(2);
    ellipse(260,510,37,40);

    // triangle
    noStroke();
    fill(220,125,175);
    triangle(252,503,268,503,260,517);

    // shirt
    fill(22,22,28);
    rect(100,555,320,90,24);
    ellipse(260,625,320,75);

    // chest
    fill(220,174,156);
    ellipse(260,551,220,22);

    // shirt
    fill(22,22,28);
    rect(100,565,320,80,20);

    // name
    fill(250,247,250);
    rect(150,600,220,42,10);

    fill(75,70,80);
    textAlign(CENTER,CENTER);
    textSize(17);
    text("Soluna Shoemaker",260,621);
}
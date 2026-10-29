var leftCheekX = 208;
var rightCheekX = 312;
var leftCheekMove;
var rightCheekMove;

var leftEarringY = 344;
var rightEarringY = 344;
var leftEarringMove;
var rightEarringMove;

var pendantX = 260;
var pendantY = 510;
var pendantMoveX;
var pendantMoveY;

var titleSize = 30;
var titleMove = 1;
var titleCount = 0;

var nameX = 260;
var nameY = 621;
var nameDirection = 1;

var headSize = 0;
var headMove = 0.2;

var leftCheekColor;
var rightCheekColor;
var leftEarringColor;
var rightEarringColor;
var pendantColor;


function setup()
{
    createCanvas(520,700);

    // random speeds
    leftCheekMove = random(0.5,1.2);
    rightCheekMove = random(0.7,1.4);

    leftEarringMove = random(0.6,1.3);
    rightEarringMove = random(0.8,1.5);

    pendantMoveX = random(0.6,1.2);
    pendantMoveY = random(0.7,1.3);

    leftCheekColor = color(210,130,145,65);
    rightCheekColor = color(210,130,145,65);

    leftEarringColor = color(185,185,190);
    rightEarringColor = color(185,185,190);

    pendantColor = color(88,160,190);
}


function draw()
{
    background(244,237,244);


    // cheeks move on x-axis
    leftCheekX += leftCheekMove;

    if(leftCheekX >= 225 || leftCheekX <= 192)
    {
        leftCheekMove *= -1;

        leftCheekColor = color(
            random(180,255),
            random(100,180),
            random(130,210),
            80
        );
    }


    rightCheekX += rightCheekMove;

    if(rightCheekX >= 328 || rightCheekX <= 295)
    {
        rightCheekMove *= -1;

        rightCheekColor = color(
            random(180,255),
            random(100,180),
            random(130,210),
            80
        );
    }


    // earrings move on y-axis
    leftEarringY += leftEarringMove;

    if(leftEarringY >= 365 || leftEarringY <= 325)
    {
        leftEarringMove *= -1;

        leftEarringColor = color(
            random(100,255),
            random(100,255),
            random(100,255)
        );
    }


    rightEarringY += rightEarringMove;

    if(rightEarringY >= 365 || rightEarringY <= 325)
    {
        rightEarringMove *= -1;

        rightEarringColor = color(
            random(100,255),
            random(100,255),
            random(100,255)
        );
    }


    // pendant moves diagonally
    pendantX += pendantMoveX;
    pendantY += pendantMoveY;

    if(pendantX >= 280 || pendantX <= 240)
    {
        pendantMoveX *= -1;

        pendantColor = color(
            random(50,180),
            random(100,220),
            random(150,255)
        );
    }

    if(pendantY >= 530 || pendantY <= 490)
    {
        pendantMoveY *= -1;

        pendantColor = color(
            random(50,180),
            random(100,220),
            random(150,255)
        );
    }


    // title gets bigger five times and smaller five times
    if(frameCount % 8 == 0)
    {
        titleSize += titleMove;
        titleCount++;

        if(titleCount == 5)
        {
            titleMove *= -1;
            titleCount = 0;
        }
    }


    // name moves in a square
    if(nameDirection == 1)
    {
        nameX += 1;

        if(nameX >= 280)
        {
            nameDirection = 2;
        }
    }

    else if(nameDirection == 2)
    {
        nameY += 1;

        if(nameY >= 636)
        {
            nameDirection = 3;
        }
    }

    else if(nameDirection == 3)
    {
        nameX -= 1;

        if(nameX <= 240)
        {
            nameDirection = 4;
        }
    }

    else if(nameDirection == 4)
    {
        nameY -= 1;

        if(nameY <= 606)
        {
            nameDirection = 1;
        }
    }


    // head gets bigger and smaller
    headSize += headMove;

    if(headSize >= 8 || headSize <= -8)
    {
        headMove *= -1;
    }


    // title
    fill(85,80,90);
    noStroke();
    textAlign(CENTER);
    textSize(titleSize);
    text("My Self Portrait",260,48);


    // background
    fill(250,247,250);
    rect(65,75,390,580,28);


    // hair
    fill(18,18,26);
    noStroke();

    ellipse(
        260,
        330,
        320 + headSize,
        440 + headSize
    );

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
    ellipse(
        260,
        314,
        180 + headSize,
        215 + headSize
    );


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

    fill(leftCheekColor);
    ellipse(leftCheekX,359,27,15);

    fill(rightCheekColor);
    ellipse(rightCheekX,359,27,15);


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
    strokeWeight(4);

    stroke(leftEarringColor);
    ellipse(160,leftEarringY,31,64);

    stroke(rightEarringColor);
    ellipse(360,rightEarringY,31,64);


    // necklace
    stroke(90);
    strokeWeight(2);

    line(230,470,pendantX,pendantY);
    line(290,470,pendantX,pendantY);


    // points
    stroke(90);
    strokeWeight(2);

    point(230,470);
    point(290,470);


    // pendant
    fill(pendantColor);
    stroke(55,110,140);
    strokeWeight(2);

    ellipse(
        pendantX,
        pendantY,
        37,
        40
    );


    // triangle
    noStroke();
    fill(220,125,175);

    triangle(
        pendantX - 8,
        pendantY - 7,
        pendantX + 8,
        pendantY - 7,
        pendantX,
        pendantY + 7
    );


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

    rect(
        nameX - 110,
        nameY - 21,
        220,
        42,
        10
    );

    fill(75,70,80);

    textAlign(CENTER,CENTER);
    textSize(17);

    text(
        "Soluna Shoemaker",
        nameX,
        nameY
    );
}
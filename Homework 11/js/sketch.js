var playerX = 60;
var playerY = 250;

var obstacle1X = 150;
var obstacle1Y = 100;
var obstacle1MoveX;
var obstacle1MoveY;

var obstacle2X = 450;
var obstacle2Y = 400;
var obstacle2MoveX;
var obstacle2MoveY;

var mouseObstacleX = -100;
var mouseObstacleY = -100;

var win = false;


function setup()
{
    createCanvas(700,500);

    // random obstacle speeds
    obstacle1MoveX = Math.floor(Math.random() * 3) + 1;
    obstacle1MoveY = Math.floor(Math.random() * 3) + 1;

    obstacle2MoveX = (Math.floor(Math.random() * 3) + 1) * -1;
    obstacle2MoveY = Math.floor(Math.random() * 3) + 1;
}


function draw()
{
    background(244,237,244);


    // title
    fill(85,80,90);
    noStroke();
    textAlign(CENTER);
    textSize(24);
    text("Find the Exit",350,35);


    // exit
    fill(120,200,150);
    rect(650,200,40,100);

    fill(255);
    textSize(14);
    text("EXIT",670,250);


    // keep player on canvas
    if(playerX < 0)
    {
        playerX = 0;
    }
    else if(playerX > width)
    {
        playerX = width;
    }

    if(playerY < 0)
    {
        playerY = 0;
    }
    else if(playerY > height)
    {
        playerY = height;
    }


    // player
    fill(225,115,165);
    noStroke();
    circle(playerX,playerY,35);


    // obstacle 1
    fill(110,150,190);
    circle(obstacle1X,obstacle1Y,45);

    obstacle1X += obstacle1MoveX;
    obstacle1Y += obstacle1MoveY;


    // obstacle 1 wraps around
    if(obstacle1X > width)
    {
        obstacle1X = 0;
    }
    else if(obstacle1X < 0)
    {
        obstacle1X = width;
    }

    if(obstacle1Y > height)
    {
        obstacle1Y = 0;
    }
    else if(obstacle1Y < 0)
    {
        obstacle1Y = height;
    }


    // obstacle 2
    fill(155,110,175);
    rect(obstacle2X,obstacle2Y,65,35);

    obstacle2X += obstacle2MoveX;
    obstacle2Y += obstacle2MoveY;


    // obstacle 2 wraps around
    if(obstacle2X > width)
    {
        obstacle2X = 0;
    }
    else if(obstacle2X < 0)
    {
        obstacle2X = width;
    }

    if(obstacle2Y > height)
    {
        obstacle2Y = 0;
    }
    else if(obstacle2Y < 0)
    {
        obstacle2Y = height;
    }


    // mouse obstacle
    fill(150,160,230);
    noStroke();

    triangle(
        mouseObstacleX,
        mouseObstacleY - 20,
        mouseObstacleX - 20,
        mouseObstacleY + 20,
        mouseObstacleX + 20,
        mouseObstacleY + 20
    );


    // check if player reaches exit
    if(playerX >= 650 && playerY >= 200 && playerY <= 300)
    {
        win = true;
    }


    // win message
    if(win == true)
    {
        fill(85,80,90);
        textAlign(CENTER);
        textSize(40);
        text("You Win!",350,250);
    }
}


// click to make a non-moving obstacle
function mouseClicked()
{
    mouseObstacleX = mouseX;
    mouseObstacleY = mouseY;
}


// move player with WASD
function keyPressed()
{
    if(key == 'd' || key == 'D')
    {
        playerX += 10;
    }

    else if(key == 'a' || key == 'A')
    {
        playerX -= 10;
    }

    else if(key == 's' || key == 'S')
    {
        playerY += 10;
    }

    else if(key == 'w' || key == 'W')
    {
        playerY -= 10;
    }

    return false;
}
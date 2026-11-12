// PLAYER
var playerX = 80;
var playerY = 300;
var playerSize = 35;


// OBSTACLE ONE
var obstacleOneX = 200;
var obstacleOneY = 150;
var obstacleOneXSpeed;
var obstacleOneYSpeed;


// OBSTACLE TWO
var obstacleTwoX = 500;
var obstacleTwoY = 420;
var obstacleTwoXSpeed;
var obstacleTwoYSpeed;


// MOUSE OBSTACLE
var mouseObstacleX = 0;
var mouseObstacleY = 0;
var showMouseObstacle = false;


// GAME
var won = false;



function setup()
{
    createCanvas(800,600);

    obstacleOneXSpeed = Math.floor(Math.random() * 4) + 1;
    obstacleOneYSpeed = Math.floor(Math.random() * 3) + 1;

    obstacleTwoXSpeed = Math.floor(Math.random() * 3) + 2;
    obstacleTwoYSpeed = Math.floor(Math.random() * 4) + 1;
}



function draw()
{
    background(244,237,244);

    createBorders();
    createExit();

    createPlayer();

    createObstacles();
    moveObstacleOne();
    moveObstacleTwo();

    createMouseObstacle();

    displayWin();
}



// PLAYER
function createPlayer()
{
    fill(220,130,175);
    noStroke();

    circle(playerX,playerY,playerSize);

    fill(250,210,225);
    circle(playerX,playerY,14);
}



// MOVE PLAYER
function movePlayer()
{
    // W
    if(key == 'w' || key == 'W')
    {
        playerY -= 10;
    }

    // S
    else if(key == 's' || key == 'S')
    {
        playerY += 10;
    }

    // A
    else if(key == 'a' || key == 'A')
    {
        playerX -= 10;
    }

    // D
    else if(key == 'd' || key == 'D')
    {
        playerX += 10;
    }
}



// KEYBOARD
function keyPressed()
{
    movePlayer();

    return false;
}



// CREATE OBSTACLES
function createObstacles()
{
    // smaller blue obstacle
    fill(110,150,190);
    noStroke();
    circle(obstacleOneX,obstacleOneY,50);

    // larger purple obstacle
    fill(155,110,175);
    rect(obstacleTwoX,obstacleTwoY,110,60);
}



// MOVE OBSTACLE ONE
function moveObstacleOne()
{
    obstacleOneX += obstacleOneXSpeed;
    obstacleOneY += obstacleOneYSpeed;

    if(obstacleOneX > width)
    {
        obstacleOneX = 0;
    }
    else if(obstacleOneX < 0)
    {
        obstacleOneX = width;
    }

    if(obstacleOneY > height)
    {
        obstacleOneY = 0;
    }
    else if(obstacleOneY < 0)
    {
        obstacleOneY = height;
    }
}



// MOVE OBSTACLE TWO
function moveObstacleTwo()
{
    obstacleTwoX -= obstacleTwoXSpeed;
    obstacleTwoY += obstacleTwoYSpeed;

    if(obstacleTwoX > width)
    {
        obstacleTwoX = 0;
    }
    else if(obstacleTwoX < 0)
    {
        obstacleTwoX = width;
    }

    if(obstacleTwoY > height)
    {
        obstacleTwoY = 0;
    }
    else if(obstacleTwoY < 0)
    {
        obstacleTwoY = height;
    }
}



// BORDERS
function createBorders()
{
    fill(80);
    noStroke();

    rect(0,0,width,20);
    rect(0,height - 20,width,20);
    rect(0,0,20,height);

    // right border with opening for exit
    rect(width - 20,0,20,240);
    rect(width - 20,360,20,240);
}



// EXIT
function createExit()
{
    fill(120,200,150);
    noStroke();

    rect(width - 40,240,40,120);

    fill(70);
    textAlign(CENTER);
    textSize(16);
    text("EXIT",width - 60,225);
}



// MOUSE OBSTACLE
function createMouseObstacle()
{
    if(showMouseObstacle == true)
    {
        fill(120);
        noStroke();

        triangle(
            mouseObstacleX,
            mouseObstacleY - 30,

            mouseObstacleX - 30,
            mouseObstacleY + 30,

            mouseObstacleX + 30,
            mouseObstacleY + 30
        );
    }
}



// MOUSE CLICK
function mousePressed()
{
    mouseObstacleX = mouseX;
    mouseObstacleY = mouseY;

    showMouseObstacle = true;
}



// WIN MESSAGE
function displayWin()
{
    if(playerX >= 760 && playerY > 240 && playerY < 360)
    {
        won = true;
    }

    if(won == true)
    {
        fill(60);
        textAlign(CENTER);
        textSize(48);

        text("You Win!",width / 2,height / 2);
    }
}
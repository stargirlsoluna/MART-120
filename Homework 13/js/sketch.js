// player
var playerX = 100;
var playerY = 300;
var playerSize = 35;


// obstacle arrays
var obstacleXs = [];
var obstacleYs = [];
var obstacleSizes = [];
var obstacleXSpeeds = [];
var obstacleYSpeeds = [];

var obstacleReds = [];
var obstacleGreens = [];
var obstacleBlues = [];


// mouse obstacle arrays
var mouseXs = [];
var mouseYs = [];
var mouseSizes = [];
var mouseXSpeeds = [];
var mouseYSpeeds = [];


// game
var won = false;



function setup()
{
    createCanvas(800,600);

    // create five obstacles
    for(var i = 0; i < 5; i++)
    {
        obstacleXs[i] = getRandomNumber(650) + 50;
        obstacleYs[i] = getRandomNumber(450) + 50;

        obstacleSizes[i] = 30 + (i * 12);

        obstacleXSpeeds[i] = getRandomNumber(5) - 3;
        obstacleYSpeeds[i] = getRandomNumber(5) - 3;

        if(obstacleXSpeeds[i] == 0)
        {
            obstacleXSpeeds[i] = 1;
        }

        if(obstacleYSpeeds[i] == 0)
        {
            obstacleYSpeeds[i] = 1;
        }


        // blue
        if(i == 0)
        {
            obstacleReds[i] = 110;
            obstacleGreens[i] = 150;
            obstacleBlues[i] = 190;
        }

        // purple
        else if(i == 1)
        {
            obstacleReds[i] = 155;
            obstacleGreens[i] = 110;
            obstacleBlues[i] = 175;
        }

        // pink
        else if(i == 2)
        {
            obstacleReds[i] = 220;
            obstacleGreens[i] = 130;
            obstacleBlues[i] = 175;
        }

        // periwinkle
        else if(i == 3)
        {
            obstacleReds[i] = 145;
            obstacleGreens[i] = 160;
            obstacleBlues[i] = 220;
        }

        // lavender
        else
        {
            obstacleReds[i] = 185;
            obstacleGreens[i] = 145;
            obstacleBlues[i] = 205;
        }
    }
}



function draw()
{
    background(244,237,244);

    createBorders();
    createExit();

    createPlayer();

    createObstacles();
    moveObstacles();

    createMouseObstacles();
    moveMouseObstacles();

    checkWin();
    displayWin();
}



// player
function createPlayer()
{
    noStroke();

    fill(225,115,165);
    circle(playerX,playerY,playerSize);

    fill(250,190,215);
    circle(playerX,playerY,14);
}



// move player
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



// keyboard
function keyPressed()
{
    movePlayer();

    return false;
}



// create obstacles
function createObstacles()
{
    for(var i = 0; i < obstacleXs.length; i++)
    {
        noStroke();

        fill(
            obstacleReds[i],
            obstacleGreens[i],
            obstacleBlues[i]
        );

        circle(
            obstacleXs[i],
            obstacleYs[i],
            obstacleSizes[i]
        );
    }
}



// move obstacles
function moveObstacles()
{
    for(var i = 0; i < obstacleXs.length; i++)
    {
        obstacleXs[i] += obstacleXSpeeds[i];
        obstacleYs[i] += obstacleYSpeeds[i];


        if(obstacleXs[i] > width)
        {
            obstacleXs[i] = 0;
        }

        else if(obstacleXs[i] < 0)
        {
            obstacleXs[i] = width;
        }


        if(obstacleYs[i] > height)
        {
            obstacleYs[i] = 0;
        }

        else if(obstacleYs[i] < 0)
        {
            obstacleYs[i] = height;
        }
    }
}



// borders
function createBorders()
{
    noFill();

    stroke(80);
    strokeWeight(20);

    rect(10,10,780,580);

    strokeWeight(1);
}



// exit
function createExit()
{
    noStroke();

    fill(120,200,150);

    rect(
        750,
        245,
        50,
        110
    );

    fill(70);

    textSize(20);

    text(
        "EXIT",
        705,
        235
    );
}



// check for win
function checkWin()
{
    if(
        playerX >= 735 &&
        playerY >= 235 &&
        playerY <= 365
    )
    {
        won = true;
    }
}



// display win
function displayWin()
{
    if(won == true)
    {
        fill(80,60,100);

        textSize(45);
        textAlign(CENTER);

        text(
            "YOU WIN!",
            width / 2,
            height / 2
        );

        textAlign(LEFT);
    }
}



// create clicked obstacles
function createMouseObstacles()
{
    for(var i = 0; i < mouseXs.length; i++)
    {
        // periwinkle triangles
        fill(150,160,230);

        noStroke();

        triangle(
            mouseXs[i],
            mouseYs[i] - mouseSizes[i],

            mouseXs[i] - mouseSizes[i],
            mouseYs[i] + mouseSizes[i],

            mouseXs[i] + mouseSizes[i],
            mouseYs[i] + mouseSizes[i]
        );
    }
}



// move clicked obstacles
function moveMouseObstacles()
{
    for(var i = 0; i < mouseXs.length; i++)
    {
        mouseXs[i] += mouseXSpeeds[i];
        mouseYs[i] += mouseYSpeeds[i];


        if(mouseXs[i] > width)
        {
            mouseXs[i] = 0;
        }

        else if(mouseXs[i] < 0)
        {
            mouseXs[i] = width;
        }


        if(mouseYs[i] > height)
        {
            mouseYs[i] = 0;
        }

        else if(mouseYs[i] < 0)
        {
            mouseYs[i] = height;
        }
    }
}



// add another obstacle when mouse is clicked
function mousePressed()
{
    var newObstacle = mouseXs.length;

    mouseXs[newObstacle] = mouseX;
    mouseYs[newObstacle] = mouseY;

    mouseSizes[newObstacle] = 15;

    mouseXSpeeds[newObstacle] =
        getRandomNumber(5) - 3;

    mouseYSpeeds[newObstacle] =
        getRandomNumber(5) - 3;


    if(mouseXSpeeds[newObstacle] == 0)
    {
        mouseXSpeeds[newObstacle] = 1;
    }

    if(mouseYSpeeds[newObstacle] == 0)
    {
        mouseYSpeeds[newObstacle] = 1;
    }
}



// random number
function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 1;
}
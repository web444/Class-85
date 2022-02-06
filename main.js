var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//rover wdith and height

var roverHeight = 100
var roverWidth = 100;

//starting position of rover

var roverInX = 150;
var roverInY = 150;

//images of rover and canvas background

var backArray = ["mars.jpg", "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630270503587E02_DXXX.jpg",
    "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630100503570E01_DXXX.jpg",
    "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630700405167E01_DXXX.jpg",
    "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630640503624E02_DXXX.jpg",
    "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
    "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631220503682E01_DXXX.jpg",
    "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG",
    "https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg"
];
var randomStorage = Math.floor(Math.random() * 9);
var roverImage = "rover.png";
var marsImage = backArray[randomStorage];

function startt() {

    marsImageNew = new Image();
    marsImageNew.onload = setterMars;
    marsImageNew.src = marsImage;

    roverImageNew = new Image();
    roverImageNew.onload = setterRover;
    roverImageNew.src = roverImage;

}

function setterMars() {

    ctx.drawImage(marsImageNew, 0, 0, canvas.width, canvas.height);

}

function setterRover() {

    ctx.drawImage(roverImageNew, roverInX, roverInY, roverWidth, roverHeight);

}

window.addEventListener("keydown", keyChecker);

function keyChecker(e) {

    var keyCodder = e.keyCode;

    if (keyCodder == "37") {

        left();

    }

    if (keyCodder == "38") {

        up();

    }

    if (keyCodder == "39") {

        right();

    }

    if (keyCodder == "40") {

        down();

    }

}

function left() {

    if (roverInX >= 0) {

        roverInX = roverInX - 10;
        setterMars();
        setterRover();
        console.log("X=" + roverInX);

    }


}

function right() {

    if (roverInX <= 700) {

        roverInX = roverInX + 10;
        setterMars();
        setterRover();
        console.log("X=" + roverInX);

    }


}

function up() {

    if (roverInY >= 0) {

        roverInY = roverInY - 10;
        setterMars();
        setterRover();
        console.log("Y=" + roverInY);

    }


}

function down() {

    if (roverInY <= 500) {

        roverInY = roverInY + 10;
        setterMars();
        setterRover();
        console.log("Y=" + roverInY);

    }


}
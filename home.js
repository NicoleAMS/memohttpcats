const httpCodes = ["100", "101", "200", "201", "202", "204", "206", "207", 
                   "300", "301", "302", "303", "304", "305", "307", 
                   "400", "401", "402", "403", "404", "405", "406", 
                   "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418",
                   "420", "421", "422", "423", "424", "425", "426", "429", "431", "444", "450", "451",
                   "500", "502", "503", "504", "506", "507", "508", "509", "510", "511", "599"];
const thirtyImages = [];
const tenImages = [];
let points = 0;

function playGame() {
    let infoScreen1 = document.getElementById("info-screen1");
    let gameCanvas = document.getElementById("game-canvas");
    infoScreen1.classList.add("hidden");
    gameCanvas.classList.remove("hidden");
    selectImages(30);
    showImages();
}

// SELECT 30 OR 10 UNIQUE IMAGES
function selectImages(num) {
    let array = [...httpCodes];
    for (let i = 0; i < num; i++) {
        let index = Math.floor(Math.random() * array.length);
        let item = array[index];
        if (num === 30) {
            thirtyImages.push(item);
        } else {
            tenImages.push(item);
        }
        array.splice(index, 1);
    }
}

// LOOP THROUGH 30 IMAGES AND DISPLAY EACH IMAGE 0.5 SEC WITH AWAIT
// AWAIT NEEDS ASYNC FUNCTION
async function showImages() {
    let infoScreen2 = document.getElementById("info-screen2");
    let gameCanvas = document.getElementById("game-canvas");
    for (let i = 0; i < thirtyImages.length; i ++) {
        let image = document.getElementById("catImg");
        image.src = "https://http.cat/" + thirtyImages[i];
        console.log(image.src);
        await sleep(50);
    }
    gameCanvas.classList.add("hidden");
    infoScreen2.classList.remove("hidden");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playGame2() {
    let infoScreen2 = document.getElementById("info-screen2");
    let gameCanvas2 = document.getElementById("game-canvas2");
    infoScreen2.classList.add("hidden");
    gameCanvas2.classList.remove("hidden");
    selectImages(10);
    show10Images();
}

function show10Images() {
    let image = document.getElementById("catImg2");
    image.src = "https://http.cat/" + tenImages[1];
}

async function checkAnswer(button) {
    let feedback = document.getElementById("feedback");
    let image = document.getElementById("catImg2").src;
    let statusCode = image.split("/").pop();
    feedback.classList.remove("hidden");
    if (thirtyImages.includes(statusCode) && button === "yes-btn" || 
       !thirtyImages.includes(statusCode) && button === "no-btn") {
        points += 1;
        feedback.innerHTML = "Correct!";
    } else  {
        feedback.innerHTML = "Wrong!";
    }
    await sleep(1000);
    feedback.classList.add("hidden");
    showNext(statusCode);
}

function showNext(statusCode) {
    let index = tenImages.indexOf(statusCode);
    console.log("Index: " + index);
    let image = document.getElementById("catImg2");
    if (index < 9) {
        image.src = "https://http.cat/" + tenImages[index + 1];
    }
}
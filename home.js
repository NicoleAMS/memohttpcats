const httpCodes = ["100", "101", "200", "201", "202", "204", "206", "207", 
                   "300", "301", "302", "303", "304", "305", "307", 
                   "400", "401", "402", "403", "404", "405", "406", 
                   "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418",
                   "420", "421", "422", "423", "424", "425", "426", "429", "431", "444", "450", "451",
                   "500", "502", "503", "504", "506", "507", "508", "509", "510", "511", "599"];
const thirtyImages = [];

function playGame() {
    let playBtn = document.getElementById("play-btn");
    let gameCanvas = document.getElementById("game-canvas");
    playBtn.classList.add("hidden");
    gameCanvas.classList.remove("hidden");
    select30Images();
}


// SELECT 30 UNIQUE IMAGES
function select30Images() {
    let array = httpCodes;
    for (let i = 0; i < 30; i++) {
        let index = Math.floor(Math.random() * array.length);
        let item = array[index];
        thirtyImages.push(item);
        array.splice(index, 1);
    }
    showImages();
}

// LOOP THROUGH 30 IMAGES AND DISPLAY EACH IMAGE 0.5 SEC WITH AWAIT
// AWAIT NEEDS ASYNC FUNCTION
async function showImages() {
    for (let i = 0; i < thirtyImages.length; i ++) {
        let image = document.getElementById("catImg");
        image.src = "https://http.cat/" + thirtyImages[i];
        console.log(image.src);
        await sleep(500);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
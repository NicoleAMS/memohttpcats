describe('on start game', function() {
    beforeAll(function() {
        const gameCanvas = document.createElement('div');
        gameCanvas.classList.add("hidden");
        document.body.appendChild(gameCanvas);
        this.gameCanvas = gameCanvas;
    });

    afterAll(function() {
        document.body.removeChild(this.gameCanvas);
      });

    it('changes screen to game-canvas', function() {
        this.gameCanvas.classList.remove("hidden");
        expect(this.gameCanvas.classList.contains('hidden')).toBeFalsy();
    }); 
    

    describe('on selecting 30 images', function() {
        beforeAll(function() {
            selectImages(30);
        })

        afterAll(function() {
            thirtyImages = [];
        });

       it('adds selected 30 images to array', function () {
            expect(thirtyImages.length).toEqual(30);
       }); 

       it('does not change the original httpCodes array', function() {
            expect(httpCodes.length).toEqual(56);
       });

        it('selects unique images', function() {
            let count = 0;
            let arr = thirtyImages.sort();
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === arr[i + 1]) {
                    count += 1;
                }
            }
            expect(count).toEqual(0);
        });

        it('selects random images', function() {
            let array1 = [...thirtyImages];
            thirtyImages = [];
            selectImages(30);
            expect(array1[0]).not.toEqual(thirtyImages[0]); 
        });
    }); 

    xit('shows selected 30 images for 0.5 sec each', function() {
        // it adds the right statusCode to the url of every item in thirtyImages[]
        // it waits 0.5 sec before displaying next image (async)
        // it changes creen to info-screen2 after the last image
    });
});

describe('on continue game', function() {
    xit('changes screen to game-canvas2', function() {
        // initial screen
        // new screen
    }); 

    xit('randomly selects 10 unique http codes and adds it to right array', function() {
        // items are unique
        // items are random
        // tenImages array contains 10 items 
    });

    xit('shows first image on screen', function() {
        // it adds the right statusCode to the url of the image.src  
    });
});

describe('on user\'s response', function() {
    xit('checks the user\'s answer and gives feedback', function() {
        // it checks the user's answer
        // it shows feedback (e.g. 'Correct' or 'Wrong') for 1 sec
        // it adds 1 point to points if user is right
    });

    xit('shows the next image or results page after showing feedback for 1sec', function() {
        // it waits 1sec before displaying next image
        // it gets the index of statusCode of current image
        // it correctly shows the next image or result page
    });
});


describe ('on try again', function() {
    xit('resets the game', function() {
        // thirtImages[], tenImages[] and points
    });

    xit('restarts the game', function() {
        // startGame() is triggered
    });
});

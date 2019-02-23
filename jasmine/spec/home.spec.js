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
            thirtyImages = [];
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

        xit('shows selected 30 images for 0.5 sec each', function() {
        // it adds the right statusCode to the url of every item in thirtyImages[]
        // it waits 0.5 sec before displaying next image (async)
        // it changes screen to info-screen2 after the last image
        });
    }); 

});

describe('on continue game', function() {
    xit('changes screen to game-canvas2', function() {
        // initial screen
        // new screen
    }); 

    it('randomly selects 10 unique http codes and adds it to right array', function() {
        selectImages(10);
        expect(tenImages.length).toEqual(10);
        tenImages = [];
    });

    xit('shows first image on screen', function() {
        // it adds the right statusCode to the url of the image.src  
    });
});

describe('on user\'s response', function() {

    it('user\'s answer is correct', function() {
        let feedbackEl = document.createElement("p");
        thirtyImages = ["412", "101", "599", "416", "420", "450", "301", "207", "423", "414", "506", "507", "409", "511", "406", "426", "200", "510", "204", "300", "424", "408", "401", "307", "444", "422", "415", "405", "413", "503"];
        checkAnswer("yes-btn", "412", feedbackEl);
        expect(points).toEqual(1);
        checkAnswer("no-btn", "101", feedbackEl);
        expect(points).toEqual(1);
        checkAnswer("no-btn", "100", feedbackEl);
        expect(points).toEqual(2);
        thirtyImages = [];
    });

    xit('shows the next image or results page after showing feedback for 1sec', function() {
        // it waits 1sec before displaying next image
        // it gets the index of statusCode of current image
        // it correctly shows the next image or result page
    });
});


describe ('on try again', function() {
    beforeAll(function () {
        spyOn(window, 'playGame').and.callFake(function() {
        });
    }); 

    it('resets the game', function() {
        thirtyImages = ["412", "101", "599", "416", "420", "450", "301", "207", "423", "414", "506", "507", "409", "511", "406", "426", "200", "510", "204", "300", "424", "408", "401", "307", "444", "422", "415", "405", "413", "503"];
        resetGame();
        expect(thirtyImages).toEqual([]);
    });

    xit('restarts the game', function() {
        // playGame() is triggered
    });
});

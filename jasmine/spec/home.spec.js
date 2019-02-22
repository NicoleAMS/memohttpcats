describe ('select images', function() {
    // it copies httpCodes array, 
    // it chooses a random item from array (by randomly choosing an index between 0 and num), 
    // it pushes item to right array (tenImages or thirtyImages),
    // httpCodes array is not affected
});

describe ('set image src', function() {
    // it adds the right statusCode number to url for every item in thirtyImages array and thenImages array
});

describe ('check user answer', function() {
    // it checks the user's answer
    // it adds 1 point to points if user is right
});

describe ('show next image or result page', function() {
    // it gets the index of statusCode of current image
    // it correctly shows the next image or result page
});

describe ('reset and restart game', function() {
    // it resets thirtImages[], tenImages[] and points and restarts game
});

describe ('asynchronous functions', function() {
    // it waits 0.5 sec before displaying next image of 30 images
    // it shows feedback (e.g. 'Correct' or 'Wrong') for 1sec
});
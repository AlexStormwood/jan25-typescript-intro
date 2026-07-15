
let message = "Hello, world!";

console.log(message);


// bit is 1s and 0s
// bitflag = collection of bits 
// 100111100110

enum FavouriteColours {
    NONE,
    BLUE = 1 << 1,
    RED = 1 << 2,
    GREEN = 1 << 4,
    ALL = BLUE | RED | GREEN
}

let favouriteColourChoice = FavouriteColours.ALL;

console.log(favouriteColourChoice);


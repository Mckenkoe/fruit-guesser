//Create fruit objects
let orange = {name:"orange", lnk:"https://i5.peapod.com/c/6H/6HFEA.jpg"};
let watermelon = {name:"watermelon", lnk:"https://images.heb.com/is/image/HEBGrocery/000583329?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0"};
let apple = {name:"apple", lnk:"https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g="};
let cherry ={name: "cherry", lnk: "https://static.libertyprim.com/files/varietes/cerise-burlat-large.jpg?1569344439"};
let grapes= {name: "grapes", lnk:"https://ipcdn.freshop.com/resize?url=https://images.freshop.com/produce_grapes_red/dd131994003a7a06d97ae2370507c10d_large.png&width=512&type=webp&quality=90"};
let pineapple = {name: "pineapple", lnk:"https://www.meijer.com/content/dam/meijer/product/0002/40/0005/98/0002400005988_1_A1C1_1200.png"};

//create fruits array
fruits = [orange, watermelon, apple, cherry, grapes, pineapple];

//Old functions to test hiding and revealing of visual elements
// function reveal(){
//     document.getElementById("hidden").style.display = "block";
// }

// function hide(){
//     document.getElementById("hidden").style.display = "none";
// }


//hides the start message and displays the first fruit image
function begin(){
    document.getElementById("beginimg").style.display = "none";
    document.getElementById("toChange").style.display = "block";
}

//Adds event that runs change function when button is clicked
document.getElementById("toChange").addEventListener("click", change);

//count var to make sure index doesn't go past the amount of fruit objects in fruit array
//inializes currentFruit to the first fruit's name, orange
var count = 0;
var currentFruit = orange.name;

//when image is clicked, the image is changed to another fruit image
//done by replacing the img id "toChange"'s src to image source of the current fruit object
function change(){
    if(count == 6 ){
        count = 0;
    }
    document.getElementById("toChange").src = fruits[count].lnk;
    currentFruit = fruits[count].name
    count = count+1;
}

//Creates the guessing system
//taking the input from the text box input, checks to see if the input is same as the object's name
function guess(){
    var input= document.querySelector("#guess").value;
    input = input.toLowerCase();
    if(input == currentFruit){
        document.getElementById("result").innerHTML="Correct!!";
    }
    else{
        document.getElementById("result").innerHTML = "No...";
    }

    //for debugging
    console.log(input);
    console.log(currentFruit)
}

// ********** IDEAS ***********

/*

- Make a waiting sign for correct or wrong so the user knows it was changed
- If you press enter or the button it will go to the next one
- When you reach the end it tells you how many you got right and wrong
- If you get all correct there is confetti

*/
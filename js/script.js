
const totSquares = 10 * 10;
const squareContainer = document.querySelector(".square-container");


for (let i = 1; i <= totSquares; i++) {
    let singleSquare = document.createElement("div");
    singleSquare.classList.add("square-cell")

    
    
    if (i % 3 === 0 && i % 5 === 0) {
        singleSquare.classList.add("bg-danger")
        singleSquare.append("FizzBuzz")
    } else if (i % 5 === 0) {
        singleSquare.classList.add("bg-warning")
        singleSquare.append("Buzz")
    } else if (i % 3 === 0) {
        singleSquare.classList.add("bg-success")
        singleSquare.append("Fizz")
    } else {
        singleSquare.classList.add("bg-primary")
        singleSquare.append(i)
    }


    squareContainer.append(singleSquare);
}


for (let i = 1; i <= totSquares; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else (console.log(i))
}


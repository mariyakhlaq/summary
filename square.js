function square(side) {
    for (let i = 1; i <= side; i++) {
        let row = '';

        for (let j = 1; j <= side; j++) {
            row += '* ';
        }

        console.log(row);
    }
}

const squareSize = 5;

// Call the drawSquare function with the specified size
square(squareSize);

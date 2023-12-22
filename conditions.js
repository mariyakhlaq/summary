// 1. You have to get 90 or above on your english exam
// 2. Your room has to be clean
// 3. You have to complete all house chores 
// 4. You have to finish all your homework

const score = 90;
const cleanroom = true;
const housechores = true;
const homework = true; // Enclose the string in quotes

// first conditions
if (score >= 90) {
    console.log("You passed. You can go out.");
    // 2nd 
    if (cleanroom === true) {
        console.log("Your room is clean");

        // 3rd cond
        if (housechores === true) {
            console.log("You completed all house chores");

            // 4th 
            if (homework === true) {
                console.log("You finished your homework");
                console.log("I meet all the conditions and I can go out now");
            } else {
                console.log("I didn't finish my homework");
            }
        } else {
            console.log("You did not complete all house chores");
        }
    } else {
        console.log("Your room is not clean");
    }
} else {
    console.log("Score is not 90 or above. I can't go out");
}
const colors = ["red", "orange", "yellow", "green", "blue"];

//toString()
colors.toString();
console.log(colors)

//pop()- takes off last 
colors.pop();
console.log(colors)

//push()-adds to the end
colors.push("purple");
console.log(colors)

//slice()
colors.slice(1,3)
console.log(colors)

//splice()-adds within index
colors.splice(0,2, "black", "white")
console.log(colors)

//unshift()-adds to the front
colors.unshift("pink")
console.log(colors)
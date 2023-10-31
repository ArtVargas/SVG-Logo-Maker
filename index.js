const inquirer = require ("inquirer");
const fs = require ("fs");

const {Triangle, Square, Circle} = require("./Lib/shapes");

// Function to write the SVG file using user answers from inquirer//

function writeTofile(fileName, answers) {

let svgString= ""

svgString=

'<svg version= "1.1" width= "300" height= "200"> ';

svgString += "<g>";

// Takes the input of the user shape choice and turns it into an SVG file //
svgString += '${answer.shape}';

// Takes input from the users choice array which adds the polygon properties such as shape color to SVG String//
let shapeChoice;
if (answers.shape === "Triangle"){

shapeChoice= new Triangle ();
svgString += `<Polygon points= "150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
} else if (answers.shape === "Square") {
    shapeChoice = new Square ();
    svgString += `<rect x="73" y= "40" width= "160" height= "160" fill= "${answers.shapeBackgroundColor}"/>`;

} else {

    shapeChoice = new Circle ();
    svgString += `<circle cx= "150" cy="115" r="80" fill= "${answers.shapeBackgroundColor}"/>`;

}

// Text Tag which will helps with the text alignment, color, and text content which gives a default font size of "40"//
svgString += `<text x= "150" y= "130" text-anchor= "middle" font-size= "40" fill= "${answers.textColor}">${answers.text}</text>`; 

//Closing tag will be here//
svgString += "</g>";

// File module generation for SVG File from user promptUser function//

fs.writeFile(fileName, svgString, (err) => {
err ? console.log (err) : console.log("Generate logo.svg");

});
    
}

// Function that utilizies inquirer.prompt for questions to put in the command line //

function promptUser (){
inquirer
.prompt ([

{
    type: "input",
    message: "What text would you like your logo to display? (You may enter up to three characters)",
    name: "text"



},

{
    type: "input",
    message: "Choose a text color (Enter color keyword)",
    name: "textColor"

},

{
    type: "list",
    message: "What shape would you like your logo to render?",
    choices: ["Triangle", "Square", "Circle"],
    name: "shape",



},

// Shape Color Prompt //

{
    type: "input",
    message: "Please choose shape color (Enter color keyword)",
    name: "shapeBackgroundColor",

},


])

.then((answers) => {
if (answers.text.length > 3) {
console.log("Must enter a value of at least 3 characters");
promptUser();

} else {

// Writing file function to generate SVG File //
    writeTofile("logo.svg", answers);

}


});

// Calling the promptUser fucntion for inquirer prompts //

promptUser ();








































}





















const inquirer = require('inquirer');
const fs = require('fs');
const color = require('color-name');
//color validator function//
function validColor(input) {
    const colorName = input.toLowerCase();
    return color[colorName] !== undefined;
};
//user input prompts//
const userInput = [
    {
        name: 'text',
        message: 'Please enter THREE (3) characters.',
        validate: (input) => {
            if (input.length !== 3) {
                return 'Please enter THREE (3) characters.'
            } return true;
        }
    },
    {
        name: 'textColor',
        message: 'Please select text color.',
        validate: (input) => {
            if (!validColor(input)) {
                return 'Please enter a valid Color Kayword or Hexadeciaml number.';
            }
            return true;
        }
    },
    {
        name: 'shape',
        message: 'Please choose a shape.',
        type: 'list',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        name: 'shapeColor',
        message: 'Please choose a shape color',
        validate: (input) => {
            if (!validColor(input)) {
                return 'Please enter a valid Color Kayword or Hexadeciaml number.';
            }
            return true;
        }
    }
];



inquirer.prompt(userInput).then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    const svgCode = `<svg width="300" height="200">
    <rect width="300" height="200" fill="${shapeColor}" />
    <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
</svg>`;

    fs.writeFile('logo.svg', svgCode, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Generated logo.svg')
    });
})
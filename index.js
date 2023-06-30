const inquirer = require('inquirer');
const fs = require('fs');
const color = require('color-name')

userInput = [
    {
        name: 'text',
        message: 'Please enter THREE (3) characters.',
        validate: (input) => {
            if (input.length !== 3) {
                return 'Please enter THREE (3) characters.'
            } else { return true }
        }
    },
    {
        name: 'textColor',
        message: 'Please select text color.',
    }

    ,
    {
        name: 'shape',
        message: 'Please choose a shape.',
        Type: 'list',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        name: 'shapeColor',
        message: 'Please choose a shape color',
        type: 'list',

    }

];
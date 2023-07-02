// shapes.test.js

const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should render triangle with correct color', () => {
        const triangle = new Triangle();
        triangle.color = 'red';
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    });
});

describe('Circle', () => {
    test('should render circle with correct color', () => {
        const circle = new Circle();
        circle.color = 'blue';
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('Square', () => {
    test('should render square with correct color', () => {
        const square = new Square();
        square.color = 'green';
        expect(square.render()).toEqual('<rect x="50" y="20" width="200" height="200" style="fill:green" />');
    });
});

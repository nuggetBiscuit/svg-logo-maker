const Shape = require('./shapeCons.js')

// child of Shape, render Circle using svg literal template

class Circle extends Shape { 
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return  `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" transform="translate(50, -15)" fill="${this.shapeColor} " />
            <text x="152" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Circle;








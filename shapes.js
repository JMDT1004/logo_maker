class Shape {
    consrtuctor() {
        this.color = '';
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy"100" c"80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points = "150, 18 244, 182 56, 182" fill${this.color}>`;
    }
}
class Sqaure extends Shape {
    render() {
        return `<rect x="50" y="20" width= "200" height ="200" style = "fill${this.color}">`
    }
}
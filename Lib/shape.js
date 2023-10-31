class Shape {

    constructor (){
        this.color = "";
    }

    // Shape color takes in setColor function //
    setColor (colorVar){
        this.color = colorVar;
    }


}

// Triangle class with properties //

class Triangle extends Shape {
render(){
return `<polygon points="150", 18 244, 182" fill="${this.color}"/>`;
}



}

// Square Class with properties //

class Square extends Shape {
    render(){
    return `<polygon points= "<rect x= "73" y="40" width= "160" fill=${this.color}"/>`;
    }

}

// Circle class containing properties //

class Circle extends Shape {
    render (){
    return ` <circle cx= "150" cy="115" r="80" fill=${this.color}"/.`;

    }

}

// Export classes containing triangle, square, and circle //

module.exports= {Triangle, Square, Circle};
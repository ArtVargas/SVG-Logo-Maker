const {Triangle, Square, Circle} = require ("./shape");

// Example of unit testing for triangle with a purple background //

describe("Triangle test", () => {
    test("test for a triangle with a purple background", () => {
    const shape = new Triangle ();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="purple" />'
    );
    
    });
    
    });

    // Example of unit testing for square with a blue background //

    describe("Square test", () => {
        test("test for a square with a blue background", () => {
        const shape = new Square ();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
        '<polygon points= "<rect x= "73" y="40" width= "160" fill="blue" />'
        );
        
        });
        
        });

        // Example of testing with a circle with a red background //

        describe("Circle test", () => {
            test("test for a circle with a red background", () => {
            const shape = new Circle ();
            shape.setColor("red");
            expect(shape.render()).toEqual(
            '<circle cx= "150" cy="115" r="80" fill="red" />'
            );
            
            });
            
            });
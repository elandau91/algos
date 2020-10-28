//CLASS IN JAVASCRIPT

    //Class is a blueprint for creating objects with pre-defined properties and methods
    //JS Classes are syntantical sugar, JS is really prototypal for inheritance
    //Class instances are created with the new keyword
    //The constructor function is a special function that gets run when the class is instantiated

    //CLASS SYNTAX

    class Student {
        constructor(firstName, lastName, year){
            this.firstName = firstName;
            this.lastName = lastName;
            this.grade = year;
            this.tardies = 0;
            this.scores = [];
        }

        fullName(){
            return `Your full name is ${this.firstName} ${this.lastName}`;
        }

        static enrollStudents(){
            return "ENROLLING STUDENTS!"
        }

        markLate(){
            this.tardies += 1;
            if(this.tardies >= 3) {
                return "YOU ARE EXPELLED!!!!"
            }
            return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
        }

        addScore(score){
            this.scores.push(score);
            return this.scores
        }

        calculateAverage(){
            let sum = this.scores.reduce(function(a,b){return a+b;})
            return sum/this.scores.length;
        }  
    }
    
    let firstStudent = new Student("Colt", "Steele", 1);
    let secondStudent = new Student("Blue", "Steele", 2);


    //Instance Methods
        //Provide functionality pertaining to specific instance 

    //Class Methods
        //Use static keyword in front of method, to make method pertenaint for class
        //Static methods are called without instantiating their class and cannot be called through class intance.
        //Static methods are often used to create utility functions for an application

        class Point {
            constructor(x, y) {
              this.x = x;
              this.y = y;
            }
          
            static distance(a, b) {
              const dx = a.x - b.x;
              const dy = a.y - b.y;
          
              return Math.hypot(dx, dy);
            }
          }
          
          const p1 = new Point(5, 5);
          const p2 = new Point(10, 10);
          
          console.log(Point.distance(p1, p2)); // 7.0710678118654755

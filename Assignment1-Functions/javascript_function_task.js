// Task 1 :  Write a function that returns the square of a number
// Function `findSquare()` returns the square of the input number which is passed as an argument
// in the function call.

const findSquare = (num) => {

    return num  * num
 }

 console.log(findSquare(3))


// Task 2 :  Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the
// formula `(Celsius × 9/5) + 32 = Fahrenheit

const calFahrenheit= (Celsius) => {
   let Fahrenheit =  (Celsius *  9/5) + 32
   return  `${Fahrenheit}F`
}

console.log(calFahrenheit(20))

// Task3: Write a function to find the area and perimeter of a Circle
// Function `circleValues()` returns the perimeter and area of the circle provided the radius as an
// argument for the function call

const circleValues = (radius) => {

    let perimeter =  (2 * Math.PI *radius).toFixed(2);
    let area = (Math.PI * radius**2).toFixed(2);

    return `The perimeter of the circle is ${perimeter} while its area is ${area}`
}

console.log(circleValues(7))

// Task 4:  Write a function to calculate simple interest based on the principle amount
// Function `simpleInt()` returns a final amount based on the simple interest formula provided
// principal amount, rate of interest per year, and time on a yearly basis.

const simpleInt = (principal, rate, time) => {
 let final_amount =  (principal * rate * time)/100
 return final_amount
}

console.log(simpleInt(200, 2 , 4))

// Task 5: Write a function to find the area of a given Rectangle
// Function `rectangleArea()` returns the rectangle area provided the width and height as the
// argument

const rectangleArea = (width, height) => {
  area = width * height
  return `The area of the triangle is ${area}`
}

console.log(rectangleArea(5,10))

// 6. What are the two possible values of the Boolean data type?
true/false




---
layout: post
title: Common Interview Questions and Answers (English & Turkish)
date: 2024-01-06
categories: [interview, programming, oop]
---

> Not: Kimi durumda Türkçe karşılıkları tam olarak anlamı karşılamamaktadır.

### Why OOP?

- Maintenance
- Maintenance Cost
- Extensibility
- Reusability


### What is Class and Object?

1. **Class Structure:**
   - A class is the fundamental structure in object-oriented programming.
   - Data and methods are defined together within a class.
   - A class serves as a blueprint, specifying how an object will be created.

2. **Object:**
   - Instances derived from a class.
   - Objects are tangible entities carrying the properties and behaviors of a specific class.
   - It represents an example of a class and embodies real-world entities.

3. **Differences Between Class and Object:**
   - Class is an abstract structure, not directly usable; object is a concrete concept.
   - Class is a blueprint; object is an instance created based on that blueprint.

4. **Attributes:**
   - Variables or properties defined within a class.
   - For instance, in a "Car" class, attributes could include "color" and "model."

5. **Methods:**
   - Functions defined within a class.
   - Used to perform various actions on an object.
   - For example, a "Car" class might have methods like "move" or "stop."

6. **Instance:**
   - An object derived from a class.
   - A tangible entity carrying the properties and behaviors of a specific class.
   - For instance, an object derived from the "Car" class represents a specific car.

7. **Examples of Attributes:**
   - In a "Car" class, attributes like color, model, and speed might exist.
   - In a "Student" class, attributes like name, ID, and class could be present.


```java
public class Car {
    // Attributes
    private String color;
    private String model;
    private int speed;

    // Constructor
    public Car(String color, String model, int speed) {
        this.color = color;
        this.model = model;
        this.speed = speed;
    }

    // Methods
    public void accelerate() {
        speed += 10;
    }

    public void brake() {
        speed -= 5;
    }

    public void displayInfo() {
        System.out.println("Car Info - Color: " + color + ", Model: " + model + ", Speed: " + speed);
    }

    public static void main(String[] args) {
        Car myCar = new Car("Red", "Sedan", 0);
        myCar.accelerate();
        myCar.displayInfo();
    }
}
```

``` cpp
#include <iostream>
using namespace std;

class Car {
private:
    string color;
    string model;
    int speed;

public:
    Car(string color, string model, int speed) {
        this->color = color;
        this->model = model;
        this->speed = speed;
    }

    void accelerate() {
        speed += 10;
    }

    void brake() {
        speed -= 5;
    }

    void displayInfo() {
        cout << "Car Info - Color: " << color << ", Model: " << model << ", Speed: " << speed << endl;
    }
};

int main() {
    Car myCar("Blue", "SUV", 0);
    myCar.accelerate();
    myCar.displayInfo();
    return 0;
}
```

```python
class Car:
    def __init__(self, color, model, speed):
        self.color = color
        self.model = model
        self.speed = speed

    def accelerate(self):
        self.speed += 10

    def brake(self):
        self.speed -= 5

    def display_info(self):
        print(f"Car Info - Color: {self.color}, Model: {self.model}, Speed: {self.speed}")

# Example
my_car = Car("Green", "Hatchback", 0)
my_car.accelerate()
my_car.display_info()
```

```kotlin
class Car(var color: String, var model: String, var speed: Int) {
    fun accelerate() {
        speed += 10
    }

    fun brake() {
        speed -= 5
    }

    fun displayInfo() {
        println("Car Info - Color: $color, Model: $model, Speed: $speed")
    }
}

fun main() {
    val myCar = Car("Yellow", "Convertible", 0)
    myCar.accelerate()
    myCar.displayInfo()
}
```

<hr/>


### What are Access Modifiers?

Access modifiers are keywords that set the accessibility of classes, methods, and other members.

- **Public:** Accessible from anywhere.
- **Private:** Accessible only from within the class.
- **Protected:** Accessible from within the class and subclasses.
- **Internal:** Accessible from within the same module.
- **Protected Internal:** Accessible from within the same module and subclasses.
- **Private Protected:** Accessible from within the same class or subclasses in the same module.

### What is Constructor?

- A constructor is a special method that is called when an object is created.
- It is used to initialize the object's state.
- It has the same name as the class.
- It does not have a return type.
- Can be overloaded.
- Can be empty or have parameters.
- Access modifiers are used when defining constructors.

``` java
public class Car {
    private String color;
    private String model;
    private int speed;

    // Constructor
    public Car(String color, String model, int speed) {
        this.color = color;
        this.model = model;
        this.speed = speed;
    }

    // Constructor Overloading (Empty Constructor) 
    // @NoArgsContructor annotation can be used in Spring Boot
    public Car() {
        this.color = "Black";
        this.model = "Sedan";
        this.speed = 0;
    } 
    

    // Constructor Overloading
    public Car(String color, String model) {
        this.color = color;
        this.model = model;
        this.speed = 0;
    }

    public void displayInfo() {
        System.out.println("Car Info - Color: " + color + ", Model: " + model + ", Speed: " + speed);
    }

    public static void main(String[] args) {
        Car myCar = new Car("Red", "Sedan", 0);
        myCar.displayInfo();
    }
}
```

### What is Destructor?

- A destructor is a special method that is called when an object is destroyed.
- It is used to perform cleanup tasks.
- It has the same name as the class preceded by a tilde (~).
- It does not have a return type.
- Cannot be overloaded.
- Cannot have parameters.
- Access modifiers are not used when defining destructors.
- ex. to free memory allocated by the object.


### What are OOP Principles?

- Abstraction
- Encapsulation
- Polymorphism
- Inheritance


<img 
  src="https://www.imaginarycloud.com/blog/content/images/2021/07/OOP_4p.png"
  alt="OOP Principles"
  width="100%"
  height="300"
  />

### What is Abstraction?

- Abstraction is the process of hiding the internal details and showing only the functionality.
- Abstraction lets you focus on what the object does instead of how it does it., i.e., the implementation details are hidden from the user.
- **Example:** You interact with your phone by using only a few buttons. What’s going on under the hood? You don’t have to know — implementation details are hidden. You only need to know a short set of actions.

![Abstraction](https://cdn-media-1.freecodecamp.org/images/hiX0NQOcZFShroq-a3FM5pFP2LV4UUI5mLle)
Source: [FreeCodeCamp](https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/)


### What is Encapsulation?

- Encapsulation is the process of wrapping data and methods into a single unit.
- It is used to hide the internal details of an object from the outside world.
- We are able to access the data only through the methods defined in the class.
- Thanks to **access modifiers**, we can control the visibility of the data and methods.


``` java
public class Book {
    private String title;
    private String author;
    private int year;

    public Book(String title, String author, int year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Getter and setter methods for encapsulation
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
```

> The `Book` class encapsulates the details of a `book`, such as `title`, `author`, and `year`.
> The attributes (`title`, `author`, and `year`) are marked as private, meaning they can only be accessed within the Book class. This is an example of encapsulation, as the internal representation is hidden from outside classes.
> Public getter and setter methods are provided to access and modify the private attributes. This allows controlled access to the internal state of the Book object.


### What is Inheritence?

- Inheritance is the process of creating a new class from an existing class.
- The new class is called the **derived class** or **child class**.
- The existing class is called the **base class** or **parent class**.
- The derived class inherits the properties and methods of the base class.
- The derived class can add new properties and methods.
- The derived class can override the properties and methods of the base class.
- In Java, a class can only (**extends**) inherit from **one** class.

``` java
public class Animal {
    private String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println("Animal is eating...");
    }

    public void sleep() {
        System.out.println("Animal is sleeping...");
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }

    public void bark() {
        System.out.println("Dog is barking...");
    }

    @Override
    public void eat() {
        System.out.println("Dog is eating...");
    }
}
```

> The `Dog` class inherits the properties and methods of the `Animal` class.
> The `Dog` class adds a new property called `breed`.
> The `Dog` class can access the `eat()` and `sleep()` methods of the `Animal` class.
> The `Dog` class can access the `name` and `age` properties of the `Animal` class.
> The `Dog` class can access the `breed` property.
> The `Dog` class can access the `bark()` method on its own.
> The `Dog` class can access the `eat()` method of the `Animal` class, but it will call the `eat()` method of the `Dog` class because it overrides the `eat()` method of the `Animal` class.

- **Another exapmle:**  Imagine the positions Programmer and Manager within an organization. Both of these positions have a common set of properties, including name, address, and phone num- ber. These positions also have different properties. A Programmer may be concerned with a project’s programming languages, whereas a Manager may be concerned with project status reports.:

![Inheritance](https://2558458775-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LSemf7mp1liQa7nfIAC%2F-LU16Tx-lr3TosIV8kV5%2F-LU1B9IF9HLAeH5rF2q1%2FScreen%20Shot%202018-12-18%20at%2010.07.24%20PM.png?alt=media&token=bbcfdbf9-86f1-4212-a3bf-8499a1875274)
Source: [GitBook](https://gyansetu-java.gitbook.io/core-java/inheritance)


### What is Polymorphism in General? 

- Polymorphism is the ability of an object to take on many forms.
- It is the ability to redefine methods for derived classes.
- It is the ability to provide a single interface to entities of different types.


### What are the Types of Polymorphism?

1. **Compile-time Polymorphism:**
   - Also known as **static polymorphism** or **early binding**.
   - The compiler determines which method to call at compile time.
   - ***Method overloading*** is an example of compile-time polymorphism.
   - The compiler determines which overloaded method to call based on the number and type of arguments passed to the method.

2. **Run-time Polymorphism:**
    - Also known as **dynamic polymorphism** or **late binding**.
    - The compiler determines which method to call at run time.
    - ***Method overriding*** is an example of run-time polymorphism.
    - The compiler determines which overridden method to call based on the type of the object.

### What is Method Overloading?

- Method overloading is a feature that allows a class to have more than one method with the same name.
- The methods must have different types or numbers of parameters.
- The methods may have different return types.
- The methods may have different access modifiers.
- The methods may throw different exceptions.
- The methods may have different method bodies.

``` java
// Method Overloading
class Demo {
    void show(int a) {
        System.out.println("Method with one parameter: " + a);
    }

    void show(int a, int b) {
        System.out.println("Method with two parameters: " + a + ", " + b);
    }
}

public class Main {
    public static void main(String[] args) {
        Demo obj = new Demo();
        obj.show(1);       // Calls the method with one parameter
        obj.show(1, 2);    // Calls the method with two parameters
    }
}
```

### What is Method Overriding?

- Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already provided by its superclass.
- The method in the subclass has the same name, same parameters or signature, and same return type as the method in the superclass.
- The method in the subclass must be at least as accessible or more accessible than the method in the superclass.

``` java
// Method Overriding
class Parent {
    void show() {
        System.out.println("Parent's show()");
    }
}

class Child extends Parent {
    // This method overrides the show() of Parent
    @Override
    void show() {
        System.out.println("Child's show()");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent obj1 = new Parent();
        obj1.show();      // Calls the show() of Parent

        Parent obj2 = new Child();
        obj2.show();      // Calls the show() of Child
    }
}
```

### What is the Difference Between Method Overloading and Method Overriding?

| Method Overloading | Method Overriding |
| --- | --- |
| Method overloading is a feature that allows a class to have more than one method with the same name. | Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already provided by its superclass. |
| The methods must have different types or numbers of parameters. | The method in the subclass has the same name, same parameters or signature, and same return type as the method in the superclass. |
| The methods may have different return types. | The method in the subclass must be at least as accessible or more accessible than the method in the superclass. |
| The methods may have different access modifiers. | The methods have same access modifiers. |
|Overloaded methods are in the same class or class hierarchy but have different method signatures. | Overriding methods are present in a superclass and a subclass, where the subclass provides a specific implementation.|
| Method names must be the same. | Method names must be the same. |
| Method signatures must be different. | Method signatures must be the same. |
| Method overloading is an example of **compile-time polymorphism**. | Method overriding is an example of **run-time polymorphism**. |


### Simple Coding Question 1

> Take an input from the keyboard in Java, and write a function to determine whether this input is the sum of the squares of any two other numbers. Provide the Java code and explain the solution.

```java
public class SumOfSquares {

    // Function to check if a number is the sum of squares of two other numbers
    static boolean isSumOfSquares(int num) {
        // Iterate through possible values of a and b
        for (int a = 0; a <= Math.sqrt(num); a++) {
            int b = (int) Math.sqrt(num - a * a);
            
            // Check if a^2 + b^2 equals the given number
            if (a * a + b * b == num) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        // Example usage
        int inputNumber = 5;
        if (isSumOfSquares(inputNumber)) {
            System.out.println(inputNumber + " is the sum of squares of two numbers.");
        } else {
            System.out.println(inputNumber + " is NOT the sum of squares of two numbers.");
        }
    }
}
```

#### Explanation

##### `isSumOfSquares` Function:

- Takes an integer as input and iterates through possible values of two numbers (`a` and `b`) to check if their squares sum up to the given number.
- The iteration for `a` goes from 0 to the square root of the given number because any larger value for `a` would result in a negative or complex value for `b`.
- Inside the loop, `b` is calculated as the square root of `(num - a * a)`.
- The function checks if `a^2 + b^2` equals the given number. If true, it returns `true` indicating that the number is the sum of squares of two other numbers; otherwise, it returns `false`.

##### Example Usage (`main` method):

- An example usage is provided where the `isSumOfSquares` function is called with an input number (in this case, 5).
- The result is printed to the console, indicating whether the input number is the sum of squares of two other numbers or not.

##### Example Output:

```
5 is NOT the sum of squares of two numbers.
13 is the sum of squares of two numbers.
```


### What is UML?

- UML stands for Unified Modeling Language.
- It is a standardized modeling language for object-oriented software engineering.
- It is used to visualize, specify, construct, and document the artifacts of a software system.
- It is used to model business and similar processes.
- Different visibility of the class can be represented as
  - **+** Public
  - **-** Private
  - **#** Protected

**Example UML Diagram:**

``` cpp
class Circle {
private:
double radius;
Point center;
public:
setRadius(double radius);
setCenter(Point center);
double getArea();
double getCircumfrence();
};
```

![UML Diagram](https://cppcodetips.files.wordpress.com/2013/12/class_diagram_sample.png)

Source: [CppCodeTips](https://cppcodetips.wordpress.com/2013/12/23/uml-class-diagram-explained-with-c-samples/)



### Simple Coding Question 2

> Write a function that finds weather a given number is a palindrome or not. Provide the Java code and explain the solution.
> 
> **Palindrome:** A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam, racecar.

```java
public class Palindrome {

    // Function to check if a number is a palindrome
    static boolean isPalindrome(int num) {
        int reversedNum = 0;
        int originalNum = num;

        // Reverse the number
        while (num != 0) {
            int digit = num % 10;
            reversedNum = reversedNum * 10 + digit;
            num /= 10;
        }

        // Check if the reversed number is equal to the original number
        return originalNum == reversedNum;
    }

    public static void main(String[] args) {
        // Example usage
        int inputNumber = 12321;
        if (isPalindrome(inputNumber)) {
            System.out.println(inputNumber + " is a palindrome.");
        } else {
            System.out.println(inputNumber + " is NOT a palindrome.");
        }
    }
}
```

#### Explanation

##### `isPalindrome` Function:

- Takes an integer as input and reverses it.
- The reversed number is compared to the original number to check if they are equal.
- If they are equal, the function returns `true` indicating that the number is a palindrome; otherwise, it returns `false`.
- The function uses the `%` operator to get the last digit of the number and the `/` operator to remove the last digit of the number.
- The last digit is added to the reversed number by multiplying it by 10 and adding the digit.
- The last digit is removed from the original number by dividing it by 10.
- This process is repeated until the original number becomes 0.
  
##### Example Usage (`main` method):

- An example usage is provided where the `isPalindrome` function is called with an input number (in this case, 12321).
- The result is printed to the console, indicating whether the input number is a palindrome or not.

##### Example Output:

```
12321 is a palindrome.
12345 is NOT a palindrome.
```

### Simple Coding Question 3

> Write a function that finds weather a given number is a prime number or not. Provide the Java code and explain the solution.
>
> **Prime Number:** A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

```java
public class PrimeNumber {

    // Function to check if a number is a prime number
    static boolean isPrime(int num) {
        // Check if the number is less than 2
        if (num < 2) {
            return false;
        }

        // Check if the number is divisible by any number from 2 to its square root
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        // Example usage
        int inputNumber = 7;
        if (isPrime(inputNumber)) {
            System.out.println(inputNumber + " is a prime number.");
        } else {
            System.out.println(inputNumber + " is NOT a prime number.");
        }
    }
}
```

#### Explanation

##### `isPrime` Function:

- Takes an integer as input and checks if it is a prime number.
- The function first checks if the number is less than 2. If true, it returns `false` indicating that the number is not a prime number.
- If the number is greater than or equal to 2, the function checks if the number is divisible by any number from 2 to its square root.
- If the number is divisible by any number from 2 to its square root, it returns `false` indicating that the number is not a prime number.
- If the number is not divisible by any number from 2 to its square root, it returns `true` indicating that the number is a prime number.
- The function uses the `%` operator to check if the number is divisible by another number.
- The function uses the `sqrt` method of the `Math` class to get the square root of the number.
- The function uses a `for` loop to iterate through possible values of `i` from 2 to the square root of the number.
- The function returns `false` if the number is divisible by `i`; otherwise, it returns `true`.
- The function returns `true` if the number is not divisible by any number from 2 to its square root.
- The function returns `false` if the number is divisible by any number from 2 to its square root.
- The function returns `false` if the number is less than 2.

##### Example Usage (`main` method):

- An example usage is provided where the `isPrime` function is called with an input number (in this case, 7).

##### Example Output:

```
7 is a prime number.
12 is NOT a prime number.
```


### Simple Coding Question 4

> Write a function that finds the Greatest Common Divisor (GCD) of two numbers. Provide the Java code and explain the solution.
>
> **Greatest Common Divisor (GCD):** The greatest common divisor (GCD) of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers.
>
> **Note:** Use recursion to solve this problem.

```java
public class GCD {

    // Function to find the GCD of two numbers
    static int findGCD(int num1, int num2) {
        // Check if num2 is 0
        if (num2 == 0) {
            return num1;
        }

        // Recursively call the function with num2 as the first parameter and num1 % num2 as the second parameter
        return findGCD(num2, num1 % num2);
    }

    public static void main(String[] args) {
        // Example usage
        int num1 = 12;
        int num2 = 18;
        System.out.println("GCD of " + num1 + " and " + num2 + " is " + findGCD(num1, num2));
    }
}
```

#### Explanation

##### `findGCD` Function:

- Takes two integers as input and finds their GCD.
- The function first checks if the second number is 0. If true, it returns the first number indicating that the GCD is the first number.
- If the second number is not 0, the function recursively calls itself with the second number as the first parameter and the remainder of the first number divided by the second number as the second parameter.
- The function returns the result of the recursive call.

##### Example Usage (`main` method):

- An example usage is provided where the `findGCD` function is called with two input numbers (in this case, 12 and 18).
- The result is printed to the console, indicating the GCD of the two input numbers.
- The result is 6 because 6 is the largest positive integer that divides both 12 and 18.

##### Example Output:

```
GCD of 12 and 18 is 6
```

### Simple Coding Question 5

> Write a function that finds the Least Common Multiple (LCM) of two numbers. Provide the Java code and explain the solution.
>
> **Least Common Multiple (LCM):** The least common multiple (LCM) of two integers a and b is the smallest positive integer that is divisible by both a and b.

```java
public class LCMDemo {
    public static void main(String[] args) {
        int num1 = 15, num2 = 20;
        System.out.println("The LCM of " + num1 + " and " + num2 + " is " + lcm(num1, num2));
    }

    public static int lcm(int num1, int num2) {
        int max, step, lcm = 0;

        // Get the maximum number
        max = (num1 > num2) ? num1 : num2;

        // Initialize step with the maximum number
        step = max;

        // This loop will run until it finds an LCM
        while(true) {
            if(max % num1 == 0 && max % num2 == 0) {
                lcm = max;
                break;
            }
            max += step;
        }
        return lcm;
    }
}
```


### Simple Coding Question 6

> Write a function that finds the given number is an Armstrong number or not. Provide the Java code and explain the solution.
>
> **Armstrong Number:** An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

```java
public class ArmstrongNumber {

    // Function to check if a number is an Armstrong number
    static boolean isArmstrongNumber(int num) {
        int originalNum = num;
        int sum = 0;

        // Calculate the sum of the digits raised to the power of the number of digits
        while (num != 0) {
            int digit = num % 10;
            sum += Math.pow(digit, String.valueOf(originalNum).length());
            num /= 10;
        }

        // Check if the sum is equal to the original number
        return originalNum == sum;
    }

    public static void main(String[] args) {
        // Example usage
        int inputNumber = 153;
        if (isArmstrongNumber(inputNumber)) {
            System.out.println(inputNumber + " is an Armstrong number.");
        } else {
            System.out.println(inputNumber + " is NOT an Armstrong number.");
        }
    }
}
```

#### Explanation

##### `isArmstrongNumber` Function:

- Takes an integer as input and checks if it is an Armstrong number.
- The function first stores the original number in a variable.
- The function then calculates the sum of the digits raised to the power of the number of digits.
- The function checks if the sum is equal to the original number.
- If the sum is equal to the original number, the function returns `true` indicating that the number is an Armstrong number; otherwise, it returns `false`.
- The function uses the `%` operator to get the last digit of the number and the `/` operator to remove the last digit of the number.
- The last digit is added to the sum by raising it to the power of the number of digits.
- The last digit is removed from the original number by dividing it by 10.
- This process is repeated until the original number becomes 0.

##### Example Usage (`main` method):

- An example usage is provided where the `isArmstrongNumber` function is called with an input number (in this case, 153).
- The result is printed to the console, indicating whether the input number is an Armstrong number or not.

##### Example Output:

```
153 is an Armstrong number.
123 is NOT an Armstrong number.
```

### Simple Coding Question 7

> Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
>
> Source: [HackerRank](https://www.hackerrank.com/challenges/mini-max-sum/problem)

```java
public class MinMaxSum {

    public static void main(String[] args) {
        // Example usage:
        int[] inputNumbers = {1, 3, 5, 7, 9};
        long[] result = findMinMaxSum(inputNumbers);

        // Print the respective minimum and maximum values as a single line
        System.out.println(result[0] + " " + result[1]);
    }

    public static long[] findMinMaxSum(int[] arr) {
        long minSum = Long.MAX_VALUE;
        long maxSum = Long.MIN_VALUE;
        long totalSum = 0;

        for (int num : arr) {
            totalSum += num;

            // Track the minimum and maximum elements
            minSum = Math.min(minSum, num);
            maxSum = Math.max(maxSum, num);
        }

        // Calculate the minimum and maximum sums
        long minTotal = totalSum - maxSum;
        long maxTotal = totalSum - minSum;

        return new long[]{minTotal, maxTotal};
    }
}
```

#### Explanation

- The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is
3 + 5 + 7 + 9 = 24. 

#### Example Output:

```
16 24
```

### Simple Coding Question 8

> Find second largest number in an array. Provide the Java code and explain the solution.

```java
public class SecondLargestNumber {

    public static void main(String[] args) {
        // Example usage:
        int[] numbers = {5, 2, 9, 1, 7};
        int secondLargest = findSecondLargest(numbers);

        System.out.println("Second largest number: " + secondLargest);
    }

    public static int findSecondLargest(int[] arr) {
        if (arr.length < 2) {
            System.out.println("Array should have at least two elements.");
            return -1; // Return a special value indicating an error or not found
        }

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }

        return secondLargest;
    }
}
```



<hr />

<script src="https://gist.github.com/samet-byte/d2decd630f9eb3086b659375d5d4599c.js"></script>

<br/>

## Türkçe


### Neden OOP?

- Bakım
- Bakım Maliyeti
- Genişletilebilirlik
- Tekrar Kullanılabilirlik

### OOP Prensipleri Nelerdir?

- Soyutlama
- Kapsülleme / Sarmalama / Paketleme / Korumalı Erişim
- Çok Biçimlilik
- Kalıtım


<img 
  src="https://www.imaginarycloud.com/blog/content/images/2021/07/OOP_4p.png"
  alt="OOP Principles"
  width="100%"
  height="300"
  />

Kaynak: [Imaginary Cloud](https://www.imaginarycloud.com/blog/the-dos-and-donts-of-oop/)


### Sınıf ve Nesne Nedir?

1. **Sınıf Yapısı:**
   - Sınıf, nesneye yönelik programlamanın temel yapısıdır.
   - Bir sınıf içinde veri ve metotlar bir arada tanımlanır.
   - Sınıf, bir şablondur ve bir nesnenin nasıl oluşturulacağını belirtir.

2. **Nesne:**
   - Sınıftan türetilen örneklerdir.
   - Nesneler, belirli bir sınıfın özelliklerini ve davranışlarını taşıyan somut varlıklardır.
   - Sınıfın bir örneğidir ve gerçek dünyadaki nesneleri temsil eder.

3. **Class ve Nesne Arasındaki Farklar:**
   - Class soyut bir yapıdır, doğrudan kullanılamaz; nesne somut bir kavramdır.
   - Class, bir şablondur; nesne, bu şablona dayalı olarak oluşturulan bir örnektir.

4. **Attributes (Özellikler):**
   - Sınıf içinde tanımlanan değişkenler veya özelliklerdir.
   - Örneğin, bir "Araba" sınıfında, "renk" ve "model" özellikleri bulunabilir.

5. **Metotlar (Fonksiyonlar):**
   - Sınıf içinde tanımlanan işlevlerdir.
   - Nesne üzerinde çeşitli eylemleri gerçekleştirmek için kullanılır.
   - Örneğin, "Araba" sınıfında "hareket_et" veya "dur" gibi metotlar olabilir.

6. **Instance (Örnek):**
   - Bir sınıftan türetilen nesnedir.
   - Belirli bir sınıfın özelliklerini ve davranışlarını taşıyan bir somut varlıktır.
   - Örneğin, "Araba" sınıfından türetilen bir nesne, belirli bir arabanın temsilidir.

7. **Özelliklerin Örnekleri:**
   - "Araba" sınıfında renk, model, hız gibi özellikler bulunabilir.
   - "Öğrenci" sınıfında isim, numara, sınıf gibi özellikler bulunabilir.





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

### Neden OOP?

- Bakım
- Bakım Maliyeti
- Genişletilebilirlik
- Tekrar Kullanılabilirlik


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



_____



<div class="tabs">
  <input type="radio" id="java-tab" name="code-tabs" checked>
  <label for="java-tab">Java</label>

  <input type="radio" id="cpp-tab" name="code-tabs">
  <label for="cpp-tab">C++</label>

  <input type="radio" id="python-tab" name="code-tabs">
  <label for="python-tab">Python</label>

  <input type="radio" id="kotlin-tab" name="code-tabs">
  <label for="kotlin-tab">Kotlin</label>

  <div class="tab-content">
  
  <div id="java-content">

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
  </div>
  <div id="cpp-content">
    
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
  </div>
  <div id="python-content">
    
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

  </div>
    <div id="kotlin-content">
    
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
  </div>
  </div>
  </div>
<style>
  .tabs {
    display: flex;
    flex-wrap: wrap;
  }
  input[type="radio"] {
    display: none;
  }
  label {
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .tab-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .tab-content > div {
    display: none;
    width: 100%;
  }
  input:checked + label {
    background-color: #ddd;
  }
  input:checked + label + .tab-content > div {
    display: none;
}
input:checked + label + .tab-content > div:nth-of-type(2) {
    display: block;
}
}
</style>



<!-- Tabbed Content -->
<details>
<summary>Tab 1</summary>

Content for Tab 1 goes here.

</details>

<details>
<summary>Tab 2</summary>

Content for Tab 2 goes here.

</details>

<details>
<summary>Tab 3</summary>

Content for Tab 3 goes here.

</details>





______

### What are OOP Principles?

- Abstraction
- Encapsulation
- Polymorphism
- Inheritance

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
Source: [Imaginary Cloud](https://www.imaginarycloud.com/blog/the-dos-and-donts-of-oop/)


---
layout: post
title: Infix Functions 
date: 2023-07-28
categories: [kotlin, first post]
---

# Infix Functions

## this _\_operation\__ other

```kotlin
// Summation
infix fun Int._sum(n:Int){return this + n}

// Subtraction
infix fun Int._minus(n:Int){return this - n}

// Multiplication
infix fun Int._mult(n:Int){return this + n}

// Division
infix fun Int._div(n:Int){return this / n}

infix fun String._mail(c: Char): String {
    return "$this@" + when(c){
        'g' -> "gmail.com"
        'o' -> "outlook.com"
        else -> "mail.com"
    }
}
```
Division method will return integer part of the result.
Therefore for the cases which needs the exact number, 
'Double, Float' seems much proper.
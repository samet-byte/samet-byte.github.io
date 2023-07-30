---
layout: post
title: Android<br>Make TextView Scrollable<br>Java / Kotlin
date: 2023-07-30
categories: [textview, android, java,kotlin,scroll]
---

```kotlin
//KOTLIN
val textView = findViewById<TextView>(R.id.textView) 
// or with binding -> binding.textView
...

textView.movementMethod = ScrollingMovementMethod()
```

```java
//JAVA
TextView textView = findViewById(R.id.textView) 
// or with binding -> binding.textView
...

textview.setMovementMethod(new ScrollingMovementMethod());
```
---
layout: post
title: Android<br>Make TextView Scrollable<br>Java / Kotlin
date: 2023-07-30
categories: [textview, android, java,kotlin,scroll]
---

```kotlin
val textView = findViewById<TextView>(R.id.textView) 
// or with binding -> binding.textView
...

textView.movementMethod = ScrollingMovementMethod()
```

```java
TextView textView = findViewById(R.id.textView) 
// or with binding -> binding.textView
...

textview.setMovementMethod(new ScrollingMovementMethod());
```
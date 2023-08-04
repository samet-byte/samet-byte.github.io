---
layout: post
title: Prevent Lifecycle Call onCreate Attribute When Configuration Changed
date: 2023-08-04
categories: [android, manifest, android-studio, xml]
---


## In Android onCreate can be triggered for several unwanted scenarios. Such as "Screen Orientation", "Keyboard Configuration", etc...

## To prevent this we need to declare it on AndroidManifest.xml


```xml
<activity
// Activity stuff ..
android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|uiMode|screenSize|smallestScreenSize"
>
```
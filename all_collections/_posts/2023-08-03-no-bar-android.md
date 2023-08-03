---
layout: post
title: How to Get Rid of Action Bar and Make Status Bar Transparent in Android Studio
date: 2023-08-03
categories: [android, xml, "android studio"]
---

## Simply add this code block to themes.xml file.
```xml
    <style name="NoActionBarAndStatusBar" >

        <item name="windowActionBar">false</item>
        <item name="windowNoTitle">true</item>
        <item name="android:statusBarColor">@android:color/transparent</item>
        <item name="android:windowTranslucentStatus">true</item>
        <item name="android:windowTranslucentNavigation">true</item>
        <item name="android:fitsSystemWindows">true</item>
    </style>
```
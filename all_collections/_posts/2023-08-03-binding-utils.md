---
layout: post
title: "Binding Utils: 

Power Your DataBinding Views"
date: 2023-08-03
categories: [android, data-binding, binding-utils]
---


## BindingUtils.kt

```kotlin
object CustomBindingUtils {
    @JvmStatic
    @BindingAdapter("app:set_data")
    internal fun TextView.setData(data: Boolean) {
        if(data) text =  "📌"
    }

    @JvmStatic
    @BindingAdapter("app:set_date")
    internal fun TextView.setDate(date: String) {
        text = date.customStyleDate()
    }

    @JvmStatic
    @BindingAdapter("app:prune_all")
    internal fun TextView.trimAll(data: String) {
        text = data.trimMargin()
    }
}
```


### (Optional)
### You can call these functions with custom tag instead of 'app:'

```xml
<layout 
xmlns:android="http://schemas.android.com/apk/res/android"
xmlns:app="http://schemas.android.com/apk/res-auto"
xmlns:tools="http://schemas.android.com/tools"

xmlns:sam="http://schemas.sametbayat.me/sam">
<!-- 'http://schemas.' part is mandatory, 
you can change rest of it -->

<data>
    <variable
        name="item"
        type="me.sametbayat.myApp.model.Item" />

</data>

    <TextView
    android:id="@+id/clip_text"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:ellipsize="middle"
    sam:prune_all="@{item.name}"
    android:textSize="16sp" />

    <!-- Rest of 'em is your code -->
```


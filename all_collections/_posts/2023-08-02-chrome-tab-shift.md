---
layout: post
title: "Sloth Series 1:
 Swicth Between Chrome Tabs 
 AppleScript"
date: 2023-08-02
categories: [mac, applescript, sloth, shortcut, chrome]
---

```applescript
tell application "Google Chrome"
    activate
    set windowList to every window
    if (count of windowList) > 1 then
	-- Change "2" to the index of the window you want to focus on
    -- or with a little more effort you can make it more dynamic.
        set targetWindow to item 2 of windowList   
        set index of targetWindow to 1
    else
        display dialog "There are no other Chrome windows to focus on."
    end if
end tell
``` 
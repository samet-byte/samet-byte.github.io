---
layout: post
title: Electric VLSI Setup
date: 2024-03-18
categories: [electric, vlsi, setup, tutorial, howto, guide]
---


> ![Note] To download files, either do 
> 
> right click on the link and select `Save link as...` or `Save target as...` to download the file.
>
> or click on the link and then press `Ctrl + S` to save the file.


> ## cmosedu.com Tutorials:
> ![Inverter Tutorial3](https://cmosedu.com/videos/electric/tutorial3/electric_tutorial_3.htm)
> ![NAND Tutorial4](https://cmosedu.com/videos/electric/tutorial4/electric_tutorial_4.htm)


# Electric VLSI Setup

This is a tutorial on how to setup a VLSI design environment on a your machine.

## 1. Install Java 1.8

> Check if Java is installed on your machine by running the following command on command line:
>
> Type `cmd` (for Windows), `terminal` (for MacOS) in the search bar and press enter to open the command line.
> 
> Then type the following command and press enter:
> 
>```bash
>java -version
>```

> If Java is installed, you will see the version of Java installed on your machine. If not, you will see an error message.
> ![Java Version](https://samet-byte.github.io/electric_vlsi_stuff/java_version.png)
>
> ## Java 1.8 Installation for Windows
> [Java 1.8 Windows Installer Download](https://samet-byte.github.io/electric_vlsi_stuff/JavaSetup8u401.exe)
> 
> ## Java 1.8 Installation for MacOS
> 
> Open the terminal and type the following command and press enter:
> 
> ```bash
> $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
> $ brew tap adoptopenjdk/openjdk
> $ brew install openjdk@8
> ```



## 2. Install Electric (VLSI Design Tool)
> [Electric VLSI Design Tool Download](https://samet-byte.github.io/electric_vlsi_stuff/electricBinary-9.07.jar)
> 
> or you can download it from the official website:
> 
> [Electric VLSI Design Tool Official Website](http://www.staticfreesoft.com/productsFree.html)
> 
> [Official Download Link](https://ftp.gnu.org/pub/gnu/electric/electric-9.07.jar)


## 3. Install LTSpice
> Follow the instructions on the official website to install LTSpice:
> ## For Windows Better Download Legacy Version:
> ![Windows LTSpiceIV Legacy Download](https://cmosedu.com/cmos1/ltspice/LTspiceIV.exe)
> ## For MacOS, Linux Based Systems (Better Use This Version):
> [LTSpice Official Website](https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html)

## 4. Download tmsc180.txt (180nm) (Technology File)
> [tmsc180.txt Download](https://samet-byte.github.io/electric_vlsi_stuff/tmsc180.txt)

## 4.1. Download C5_Models.txt (Technology File)
> [C5_Models.txt Download](https://samet-byte.github.io/electric_vlsi_stuff/C5_Models.txt)


# 5. Preferences / Settings

![Technology Scale](https://samet-byte.github.io/electric_vlsi_stuff/tech_scale.png)

![Spice Setup](https://samet-byte.github.io/electric_vlsi_stuff/spice_setup.png)

> For LTSpice, you need to set the path of the LTSpice executable file.
> At `Running Spice` Section:
> 
> After running deck: `Run, Ignore Input`
> Run program: Path of the LTSpice executable file (e.g. C:\Program Files\LTC\LTspice\LTSpice.exe)
>
> Run program (MacOS): Path of the LTSpice executable file (e.g. /Applications/LTspice.app/Contents/MacOS/script.sh)
>
> Download script.sh from the following link:
> [script.sh Download (for LTSpice](https://samet-byte.github.io/electric_vlsi_stuff/script.sh)
> 
> With Args: Paste following: 
>
> ### For Windows:
> 
> `-i ${FILENAME} -r ${FILENAME_NO_EXT}.raw -o ${FILENAME_NO_EXT}.out`
> 
> ### For MacOS:
> 
> `${FILENAME_NO_EXT} -r ${FILENAME_NO_EXT}.raw -o ${FILENAME_NO_EXT}.out`
> 


## Bonus: How to Toggle Measurement (Display Ruler):
![Toggle Measurement](https://samet-byte.github.io/electric_vlsi_stuff/toggle_measurement.png)
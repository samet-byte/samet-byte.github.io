---
layout: post
title: Electric VLSI Setup
date: 2024-03-20
categories: [electric, vlsi, setup, tutorial, howto, guide, linux, cadence, mentor, synopsys, xilinx, altera, lattice, microchip, atmel, st, ti, analog, onsemi, infineon, toshiba, rohm, fairchild, diodes, maxim, nxp, renesas, toshiba, vishay, yageo, kemet, murata, tdk, avx, samsung, skhynix, micron, toshiba, western-digital, seagate, sandisk, kingston, micron, intel, amd, nvidia, arm, x86, risc-v, mips, microcontroller, microprocessor, fpga, cpld, asic, soc, digital, analog, mixed-signal, power, rf, high-speed, low-power, low-noise, high-precision, high-voltage, high-current, high-temperature, high-frequency, low-frequency, low-temperature, low-current, low-voltage, low-power, low-noise, low-precision, low-frequency, low-temperature]
---

<style>
sam {text-align: center;}
</style>




# Electric VLSI Setup

This is a tutorial on how to setup a VLSI design environment on a your machine.

## 1. Install Java 1.8

> Check if Java is installed on your machine by running the following command on command line:
>
> Type `cmd` (for Windows), `terminal` (for MacOS) in the search bar and press enter to open the command line.
> Then type the following command and press enter:
>```bash
>java -version
>```

> If Java is installed, you will see the version of Java installed on your machine. If not, you will see an error message.
> ![Java Version](https://samet-byte.github.io/electric_vlsi_stuff/java_version.png)
>
> ## Java 1.8 Installation for Windows
> [Java 1.8 Windows Installer Download](https://samet-byte.github.io/electric_vlsi_stuff/JavaSetup8u401.exe)
> ## Java 1.8 Installation for MacOS
> Open the terminal and type the following command and press enter:
> ```bash
> $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
> $ brew tap adoptopenjdk/openjdk
> $ brew install openjdk@8
> ```



## 2. Install Electric (VLSI Design Tool)
> [Electric VLSI Design Tool Download](https://samet-byte.github.io/electric_vlsi_stuff/electric-9.07.jar)
> or you can download it from the official website:
> [Electric VLSI Design Tool Official Website](http://www.staticfreesoft.com/productsFree.html)
> [Official Download Link](https://ftp.gnu.org/pub/gnu/electric/electric-9.07.jar)


## 3. Install LTSpice
> Follow the instructions on the official website to install LTSpice:
> [LTSpice Official Website](https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html)

## 4. Download tmsc180.txt (180nm) (Technology File)
> [tmsc180.txt Download](https://samet-byte.github.io/electric_vlsi_stuff/tmsc180.txt)

## 4.1. Download C5_Models.txt (Technology File)
> [C5_Models.txt Download](https://samet-byte.github.io/electric_vlsi_stuff/C5_Models.txt)


# Preferences


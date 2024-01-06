---
layout: post
title: Hackerrank SQL Basic Join Solutions
date: 2024-01-06
categories: [hackerrank, sql]
---

### Average Population of Each Continent

> Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their respective average city populations (CITY.Population) rounded down to the nearest integer.
> 
> **Note:** CITY.CountryCode and COUNTRY.Code are matching key columns.

<img src="https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg" alt="Alt Text" width="300" height="200">

<img src="https://s3.amazonaws.com/hr-challenge-images/8342/1449769013-e54ce90480-Country.jpg" alt="Alt Text" width="300" height="400">

#### Desired Output

> Asia 693038
> Europe 175138
> Oceania 109189
> South America 147435
> Africa 274439



<details>
  <summary>
    <strong>
        Answer
    </strong>
  </summary>

``` javascript

SELECT CO.CONTINENT, FLOOR(AVG(CI.POPULATION))
FROM CITY CI
INNER JOIN COUNTRY CO
ON CI.COUNTRYCODE = CO.CODE
GROUP BY CO.CONTINENT
```
</details>



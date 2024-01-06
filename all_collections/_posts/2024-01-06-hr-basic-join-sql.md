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

<img src="https://s3.amazonaws.com/hr-challenge-images/8137/1449729804-f21d187d0f-CITY.jpg" alt="Alt Text" width="250" height="200">

<img src="https://s3.amazonaws.com/hr-challenge-images/8342/1449769013-e54ce90480-Country.jpg" alt="Alt Text" width="250" height="400">

#### Desired Output

> Asia 693038  <br/>
> Europe 175138 <br/>
> Oceania 109189 <br/>
> South America 147435 <br/>
> Africa 274439



<details>
  <summary>
    <strong>
        Answer
    </strong>
  </summary>

<br/>
SELECT CO.CONTINENT, FLOOR(AVG(CI.POPULATION))
<br/>

FROM CITY CI
<br/>

INNER JOIN COUNTRY CO
<br/>

ON CI.COUNTRYCODE = CO.CODE
<br/>

GROUP BY CO.CONTINENT
<br/>
<br/>


</details>

____

### Population Census

> Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
>
> **Note:** CITY.CountryCode and COUNTRY.Code are matching key columns.
>
> **Note2:** Tables are same as above.

#### Desired Output

> 27028484



<details>
  <summary>
    <strong>
        Answer
    </strong>
  </summary>

<br/>
SELECT SUM(CI.POPULATION)
<br/>
FROM CITY CI
<br/>
INNER JOIN COUNTRY CO
<br/>
ON CI.COUNTRYCODE = CO.CODE
<br/>
WHERE CO.CONTINENT = 'Asia'
<br/>
<br/>
</details>

____

### African Cities

> Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.
>
> **Note:** CITY.CountryCode and COUNTRY.Code are matching key columns.
>
> **Note2:** Tables are same as above.

#### Desired Output

> Qina <br/>
> Warraq al-Arab <br/>
> Kempton Park <br/>
> Alberton  <br/>
> Klerksdorp <br/>
> Uitenhage <br/>
> Brakpan <br/>
> Libreville <br/>



<details>
  <summary>
    <strong>
        Answer
    </strong>
  </summary>

<br/>
<strong>SELECT</strong> CITY.NAME <br/>
FROM CITY <br/>
INNER JOIN COUNTRY <br/>
ON CITY.COUNTRYCODE = COUNTRY.CODE <br/>
WHERE COUNTRY.CONTINENT = 'AFRICA' <br/>
<br/>
</details>
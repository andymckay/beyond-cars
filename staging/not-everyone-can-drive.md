Title: Not everyone can drive
Date: 2023-02-09
Tags: Speed, Injuries
Category: Dangerous Driving
Summary: A common refrain is "not everyone can cycle". But less people can drive than potentially cycle.

For this I wanted to get some solid data on who can actually drive, so I've got some numbers to back up later discussions. From the age of about ~5 to about ~70 for most people can ride a bike or walk for short trips. There's a group there somewhere in the middle who can ride, walk etc for longer distances.

However driving is gated by:

* Age
* Having a license
* Health conditions
* Economic factors

If "not everyone can cycle", surely "not everyone can drive"? At Beyond Cars we want people to be able to drive, walk, take the bus or cycle or whatever form of transit they'd like.

So I compared the numbers from ICBC with Statistics Canada. Spent far too long looking at Tableau and CSV files and putting the data into a <a href="https://github.com/andymckay/beyond-cars-data">GitHub repository</a>. The results for British Columbia are for 2021 [^1]:

|Age range|Number of drivers licenses|Population|Percentage without drivers license
|-|-|-|-|
|0-15|0|766,895|100%
|16-18|105,000|152,265|31.04%
|19-21|130,000|164,715|21.08%
|22-25|215,000|246,915|12.93%
|26-35|665,000|701,700|5.23%
|36-45|640,000|663,070|3.48%
|46-55|600,000|643,580|6.77%
|56-65|650,000|713,420|8.89%
|66-75|505,000|564,145|10.48%
|76-85|210,000|280,175|25.05%
|86-100|39,000|103,950|62.48%
|All|3,759,000|5,000,830|24.83%

So the outcome is 24.83% of people do not have a drivers license. However that is obviously skewed at either end with those too young to drive, or those past the age of 86 who are likely to old to be able to drive. In the 26-65 age range we have 7% of British Columbians who have no drivers license. At the other ends of the spectrum we can see the numbers shoot up dramatically.

How many vehicles are there in British Columbia [^2]?

* Passenger vehicles: 2,330,014
* Commercial vehicles: 508,278

So for every person with a driving license, there's 0.62 passenger vehicles for that person [^3].

[^1]: It's odd but ICBC's data is consistenly rounded to 5k or 10k people 🤷‍♂
[^2]: [Source](https://public.tableau.com/app/profile/icbc/viz/VehiclePopulation-PassengerVehicles-2021/2021PassengerVehicles)
[^3]: In case you were wondering, that's an 11% increase in the number of passenger vehicles since 2017, 5 years ago.
---
title: "Finding Median"
pubDate: 2025-11-27
description: "Introduction to Statistics"
order: 3
math: true
---

**How to calculate Median:**
------------------------------------------

Median is the middle value of all the data set if arranged in ascending order. Now, in frequency distribution things are already in ascending so we just need which class contains the value that is middle of all the values. To find these we will add all frequencies of corresponding class intervals, line by line, for all classes and see which contains the middle value.


   Class Interval   Frequency   Cumulative Frequency
  ---------------- ----------- ----------------------
        0-10            2                2
       10-20            5                7
       20-30            3                10
       30-40            3                13

  : An Example Of Frequency Distribution Table
::



### **Cumulative Frequency:**

CF of a class is the addition of frequencies of corresponding classes from top up to that class whose CF we are finding.

so, to find middle of all class we need to find total frequency then divide it by 2 we get which class to look at. We will do this by finding which very first class contains that frequency like if half of total frequency is 50 and if a class has CF 30 then we will check next one and next one until one contains 50 or more as CF. If it's hard to grasp, feel free to pause and ponder.

Note that, CF of last class interval is sum of all frequencies thus in Table [2] last CF say $n = 13$.

$\frac{1}{2}$ of $n$ is 6.5 the very first class which will carry CF 6.5 or more will be our median class.

here it's 10-20

Now we reached to our class but which value from that class is our median it could be any in the class interval of the median class. To find median (one single digit value) we need to know first at which number our median lies in median class itself. As in this example our median class has frequency 5 means it carries 5 values from the data that lies between interval of 10-20. Now out of these 5 values which numbered value contains median like is 3rd one is median or fourth one? because we know at least that it contains our median, we know that in CF 6.5th value (yes we are going to keep the decimal, the reason is we will be not able to find exact value even, if we know which numbered value contains median we are anyway going to approximate. so why to tweak numbers and decrease precession of approximation.) contains median and if we subtract the CF of previous class we get 6.5-2 i.e, 4.5th value in our median class between 10-20 contains our median. Do note out of 5 values of our median class contains median not 4.5th value counting from start. As been told in parentheses we dont know any actual value from data only intervals so we are going to predict the value. Say all values in the median class is well distributed in the interval of 10-20 thus exactly 4.5th value will then become lower class limit $10+ 4.5 \times$ (equally distributed value between its own frequency) i.e, $10+4.5\times \frac{10}{5}$

class height = upper class limit - lower class limit = 10 and frequency = 5 (basically class height is $20-10=10$ is being divided equally between its class frequency and assumed that each data in class interval will increase by $10/5$ and then being found that it is being calculated what will be the value of 4.5th data).

Thus final formula is: $$\text{Median} = l+\left(\frac{n}{2}-\text{CF}\right)\times \frac{h}{f}$$

where:

-   $l$ = Lower class limit

-   $\frac{n}{2}$ = Half of cumulative frequency

-   CF = Cumulative Frequency of previous class

-   $h$ = Height of Class Interval

-   $f$ = Frequency of Class Interval
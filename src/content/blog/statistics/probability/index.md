---
title: "Probability Basics"
pubDate: 2023-11-26
description: "Introduction to probability"
order: 3
math: true
---

import AutoPageNav from '../../../../components/AutoPageNav.astro';

**Introduction**
================

All three are measures of central tendency.

**Mean** is just the average of the data.

**Median** The median is the middle value of the data when it is arranged in ascending order. If there is an even number of data points, the median is the average of the two middle values, for example, if the data is 2, 3, 4, 2,3,4,4, then the median is $(3 + 4)/2 =3.5$.

and,

**Mode** The mode is the number that appears most frequently in a data set, as shown in the previous example, where the mode is 4. It is important to note that there can be more than one mode in a data set if multiple numbers have the same highest frequency of occurrence.

**Uses**
========

[**Mean:**]{.underline}

It's just an average, more like taking rate of change but at a constant rate. For example: If there are two tea stalls and one runs for 30 days and the other for 20 days. You know the data for the sales, but how would you guess which is selling more? by just adding per day sales? This is not the correct way, it's biased to compare one's 30 days sales with others' 20 days then? We have a solution, after summing and dividing by the number of days per day, you will get the actual picture of which shop has higher sales volumes.

[**Median:**]{.underline}

The median comes in where the mean becomes unuseful or not enough, say in the previous case if you get an average of per day of sale Rs 500, and you are wondering if the sale is well distributed over the total selling period or if on one day there was a sudden rush of customers. Importance of knowing well distributed will be understood in this example saying there is swimming club and only 5 years old toddlers and above, the 60-year-old people are regular visitors if you ask what is the average age of the person in the swimming pool the club recipient would answer 35 years so you would expect there would be some people in their 20s then 30s and 40s basically young or mature adults but when you entered in the pool area you saw no one of your age but only children and retired person. In this case it is good to also ask median with mean since median is just middle number if numbers arranged in ascending if there are actually enough people of adulthood you would find middle number in between 20s to 40s but if not, like in this case you would get median as maybe 6 or 7 or 60s or 70s. After knowing mean you can then figure out if mean is 35 and median is 60 then there are probably more children and older people and very few or no adults.

[**Mode:**]{.underline}

The mode is more used by shopkeepers because when ordering from wholesalers they must know which product was sold the most, so that those particular products can be ordered more.

**Finding Mean, Median, Mode of Frequency Distribution Tables**
===============================================================

Up to now it was a basic understanding of the Central tendency of raw data, but data could become so large that adding or arranging in ascending order or tracking every bit of data could become impossible, in that case even if actual value of Central tendencies are off by little margin it's forgivable, but we want clean and most precise way to get values as close as possible.

**"Frequency distribution table"** Basically, instead of working with each data point, we create class intervals where we distribute data into small classes. For example, rather than counting separately 3 people who are 2 years old and 2 people who are 5 years old, we would say that in the class interval of 0 to 5, there are five children, or the frequency is 5. This process continues similarly.

   Class Interval   Frequency
  ---------------- -----------
        0-5             5
        5-10            1
       10-15            0
       15-20            4

  : Table

I would recommend you to look out this kind of table from book or online to get better clarity if you are new.

Now to our main work, this bit is a little technical, but precession without proper reason seems like reading without vision (no offence to blind people I kept it because it rhymed).

[**Now To Calculate Mean:**]{.underline}
----------------------------------------

**Simple Direct Method:** $$\bar{x}= \frac{\sum\limits_{i=1}^{n}f_ix_i}{\sum\limits_{i=1}^{n}f_i}$$

**Extension of equation 1:**

Equation 1 is just telling you to this:

$$\frac{f_1 x_1 + f_2 x_2 + f_3 x_3 + \cdots + f_n x_n}{f_1 + f_2 + f_3 + \cdots + f_n}$$

"$\sum_{i=1}^{n}$" is summation representing sign telling you to sum repeated placing i=1 then 2 and so on to 'n' note that equation 1 doesn't expand to $$\frac{(f_1+f_2+f_3+\cdots)(x_1+x_2+x_3+\cdots+x_n)}{f_1+f_2+f_3+\cdots+f_n}$$

this will just give $(x_1+x_2+x_3+\cdots+x_n)$ which is just sum of data not mean so need to be careful for beginners.

Now, $f_i$ is representing frequency of corresponding value of class interval $x_i= \text{class mark}$

it's just middle value of class interval means if class interval is 10-15 then class mark is $\frac{10+15}{2}=12.5$

[**Assumed Mean Method:**]{.underline}

In previous method multiplying $f_ix_i$ and then adding is nice and good for small numbers but for large numbers it's going to be unnecessary pain because we have a simple way to bypass this, but before that let me show you something:

   Class Interval   Frequency   Class mark
  ---------------- ----------- ------------
        0-10            2           5
       10-20            3           15
       20-30            1           25

  : Say we have a frequency distribution table:

Now, $$\bar{X}=\frac{5\times2+15\times3+25\times1}{2+3+1}
   \label{eq:meanex}$$

Now, subtract a number say 5 like this:

$$\begin{aligned}
 &\frac{(5-5)\times2+(15-5)\times3+(25-5)\times1}{2+3+1}\\
 &=\frac{5\times2-5\times2+15\times3-5\times3+25\times1-5\times1}{2+3+1}\\
 &=\frac{5\times2+15\times3+25\times1-5\times2-5\times3-5\times1}{2+3+1}\\
 &=\frac{5\times2+15\times3+25\times1}{2+3+1}-\frac{5\times2+5\times3+5\times1}{2+3+1}\\
 &=\frac{5\times2+15\times3+25\times1}{6}-5\times\frac{6}{6}\\
 &=\frac{5\times2+15\times3+25\times1}{6}-5\end{aligned}$$

I just want you to look at the process not the numbers, see we have subtracted 5 from each number from class mark in our mean, and it is just same as subtracting five from actual mean i.e, subtracting inside in each term of summation is just same as subtracting that outside for once.

so if we counter a big class mark, we can actually subtract any number we want from each class mark and make our summation easy, then just add that subtracted number as a whole.

And which number we prefer to subtract? $\rightarrow$ middle number from class mark because above it will become negative and below it will become positive which will help to decrease calculation.

::: {#tab:table3}
   Class Interval   Frequency   Class Mark   $d_i=x_i-a$
  ---------------- ----------- ------------ -------------
        0-10            2           5            -10
       10-20            3           15            0
       20-30            1           25           10

  : An example
:::

[\[tab:table3\]]{#tab:table3 label="tab:table3"}

15 is apparent mean $a$. Basically we are taking it as a number which will be subtracted from all other number in class mark.

Now, $$\begin{aligned}
    \bar{d} &= \frac{-10\times2+0\times3+10\times1}{6}\\
    &=\frac{-10}{6}\\
    &=-\frac{5}{3}\end{aligned}$$

Now, add $a$ back: $$\begin{aligned}
\bar{X} &= \bar{d} + a\\
&= -\frac{5}{3}+15\\
&=\frac{40}{3}\end{aligned}$$

Let's check our result from direct method: $$\begin{aligned}
    &\frac{2\times5+3\times15+1\times25}{6}\\
    &=\frac{10+45+25}{6}\\
    &=\frac{80}{6}= \frac{40}{3}\end{aligned}$$ so it works.

[**Step Deviation Method:**]{.underline} Now if you see $d_i$ in Table [1](#tab:table3){reference-type="ref" reference="tab:table3"}, $d_i$ is multiple of 10. If we divide each $d_i$ by 10 then find mean of new quantity $u_i=\frac{d_i}{10}$

Then, $$\begin{aligned}
    \bar{u}&= \text{average of } u_i\\
    &=\frac{-1}{6}\end{aligned}$$

then multiply it back by $10$\
i.e, $\bar{u}\times10=\frac{-10}{6}=\bar{d}$\
which is exactly $\bar{d}$ we found earlier. So it makes things even easier. The concept behind it is simple, it doesn't require a formal proof because taking common of a product term is easy. In Equation [\[eq:meanex\]](#eq:meanex){reference-type="ref" reference="eq:meanex"} just multiply by any number, and it will easily go inside in each class mark. And finally after finding $d_i$ just add assumed mean $a$ to get final mean $\bar{X}$.

So, the final formula is: $$\bar{X}=a+h\frac{\sum\limits_{i=1}^nf_iu_i}{\sum\limits_{i=1}^nf_i}$$

$h$ is height of class interval, why divide by height and not other number because by taking assumed mean like this, always $h$ is going to come out as factor.

[**How to calculate Median:**]{.underline}
------------------------------------------

Median is the middle value of all the data set if arranged in ascending order. Now, in frequency distribution things are already in ascending so we just need which class contains the value that is middle of all the values. To find these we will add all frequencies of corresponding class intervals, line by line, for all classes and see which contains the middle value.

::: {#tab:freqdistformedian}
   Class Interval   Frequency   Cumulative Frequency
  ---------------- ----------- ----------------------
        0-10            2                2
       10-20            5                7
       20-30            3                10
       30-40            3                13

  : An Example Of Frequency Distribution Table
:::

[\[tab:freqdistformedian\]]{#tab:freqdistformedian label="tab:freqdistformedian"}

### **Cumulative Frequency:**

CF of a class is the addition of frequencies of corresponding classes from top up to that class whose CF we are finding.

so, to find middle of all class we need to find total frequency then divide it by 2 we get which class to look at. We will do this by finding which very first class contains that frequency like if half of total frequency is 50 and if a class has CF 30 then we will check next one and next one until one contains 50 or more as CF. If it's hard to grasp, feel free to pause and ponder.

Note that, CF of last class interval is sum of all frequencies thus in Table [2](#tab:freqdistformedian){reference-type="ref" reference="tab:freqdistformedian"} last CF say $n = 13$.

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

<AutoPageNav />
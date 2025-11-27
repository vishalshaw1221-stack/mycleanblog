---
title: "Finding Mean"
pubDate: 2025-11-27
description: "Introduction to Statistics"
order: 2
math: true
---

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

  

I would recommend you to look out this kind of table from book or online to get better clarity if you are new.

Now to our main work, this bit is a little technical, but precession without proper reason seems like reading without vision (no offence to blind people I kept it because it rhymed).

[**Now To Calculate Mean:**]
----------------------------

**Simple Direct Method:** $$\bar{x}= \frac{\sum\limits_{i=1}^{n}f_ix_i}{\sum\limits_{i=1}^{n}f_i}$$

**Extension of equation 1:**

Equation 1 is just telling you to this:

$$\frac{f_1 x_1 + f_2 x_2 + f_3 x_3 + \cdots + f_n x_n}{f_1 + f_2 + f_3 + \cdots + f_n}$$

"$\sum_{i=1}^{n}$" is summation representing sign telling you to sum repeated placing i=1 then 2 and so on to 'n' note that equation 1 doesn't expand to $$\frac{(f_1+f_2+f_3+\cdots)(x_1+x_2+x_3+\cdots+x_n)}{f_1+f_2+f_3+\cdots+f_n}$$

this will just give $(x_1+x_2+x_3+\cdots+x_n)$ which is just sum of data not mean so need to be careful for beginners.

Now, $f_i$ is representing frequency of corresponding value of class interval $x_i= \text{class mark}$

it's just middle value of class interval means if class interval is 10-15 then class mark is $\frac{10+15}{2}=12.5$

[**Assumed Mean Method:**]

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

$$
\begin{aligned}
\bar{X} &=
\frac{(5-5)\times2+(15-5)\times3+(25-5)\times1}{2+3+1} \\
&= \frac{5\times2-5\times2+15\times3-5\times3+25\times1-5\times1}{2+3+1} \\
&= \frac{5\times2+15\times3+25\times1-5(2+3+1)}{2+3+1} \\
&= \frac{5\times2+15\times3+25\times1}{6} - \frac{5(2+3+1)}{6} \\
&= \frac{5\times2+15\times3+25\times1}{6} - 5 \\
&= \frac{80}{6} - 5 \\
&= \frac{40}{3}
\end{aligned}
$$

I just want you to look at the process not the numbers, see we have subtracted 5 from each number from class mark in our mean, and it is just same as subtracting five from actual mean i.e, subtracting inside in each term of summation is just same as subtracting that outside for once.

so if we counter a big class mark, we can actually subtract any number we want from each class mark and make our summation easy, then just add that subtracted number as a whole.

And which number we prefer to subtract? $\rightarrow$ middle number from class mark because above it will become negative and below it will become positive which will help to decrease calculation.

::: 
   Class Interval   Frequency   Class Mark   $d_i=x_i-a$
  ---------------- ----------- ------------ -------------
        0-10            2           5            -10
       10-20            3           15            0
       20-30            1           25           10

  : An example
:::


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

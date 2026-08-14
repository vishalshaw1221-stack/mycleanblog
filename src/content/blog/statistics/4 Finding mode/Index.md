
---
title: "Finding Mode"
pubDate: 2025-11-27
description: "Introduction to Statistics"
order: 4
math: true
---

**How to calculate Mode:**
------------------------------------------

# Understanding Mode: A Step-by-Step Intuitive Guide

---

## 1. What is Mode?

**Mode** is basically counting the item that appears the maximum number of times in a dataset.

* **Example 1:** In the dataset {4, 5, 5, 3}, the mode is **5**.
* **Example 2:** In the dataset {4, 4, 5, 5, 3}, the modes are **4 and 5**. Since there are two modes here, it is called **bimodal**.
* If more than two values share the highest frequency, it is called **multimodal**.

---

## 2. Practical Application: Why Do We Care?

Think of a ready-made garment shop. If clothing sizes are fixed, the shop owner needs to know which size is most commonly bought to fill their stock properly—not just the average size.

We already know that a **frequency distribution table** organizes data when the dataset is too large or continuous.

Consider this example frequency table for a shop (measuring clothing sizes):

| Class Interval (Size) | Frequency (Number of people) |
| :--- | :--- |
| 0 - 10 | 5 |
| 10 - 20 | 8 |
| **20 - 30** | **15** |
| 30 - 40 | 10 |
| 40 - 50 | 4 |

---

## 3. Finding the Mode from Grouped Data

From one point of view, this seems fairly simple:
* The maximum frequency is **15**, so the mode must be some number between **20 and 30** (our **modal class**).

### Why not just pick the midpoint, 25?

Let’s look closely at the neighboring classes:
* The **previous class** (10 - 20) has a frequency of **8**.
* The **succeeding class** (30 - 40) has a frequency of **10**.

What if customers visiting the shop tend to buy larger sizes rather than smaller ones? Our data shows that **10** people bought from the 30 - 40 range, while only **8** bought from the 10 - 20 range. 

Choosing the exact center of the modal class (25) is not completely fair to assume. To be honest, the true mode could literally be anything—it could even be 22, smaller than the midpoint. But statistically, our best estimate should account for which neighboring side has more pull.

Therefore, we use a graphical method (a histogram) to find a better value that leans closer to **30** than to **20**, because more people bought larger sizes.

---

## 4. The Graphical Intuition (Histogram)

Let's look at the three main classes:
* **10 people** bought in the 30 - 40 interval
* **15 people** bought in the 20 - 30 interval (Modal class)
* **8 people** bought in the 10 - 20 interval
<div style="text-align: center; margin: 20px 0;">
  <img 
    src="/images/pasted-code.png" 
    alt="Calculating mode from grouped data"
    style="width: 90%; max-width: 700px; height: auto; display: inline-block;"
  >
</div>

In a histogram, the diagonal lines drawn across the modal bar intersect each other. Dropping a perpendicular line straight down from that intersection point gives the exact **mode**.

---

## 5. Mathematical Derivation of the Shift

To do this mathematically:

* **Difference between the modal bar and the left bar:**  
  $$15 - 8 = 7$$

* **Difference between the modal bar and the right bar:**  
  $$15 - 10 = 5$$

The pull between the left and right sides of the modal value is not a 50-50 split (1:1). Instead, the ratio is **7 : 5**, which shifts the value slightly to the right of the middle.

All the classes have the same width:  
$$\text{Class Interval Width } (h) = 10$$

Instead of just adding half (1/2) of the interval width to the lower limit, we take the proportion $\frac{7}{7 + 5}$ of the class interval and add it to the lower limit:

$$\text{Mode} = \text{Lower Class Limit} + \left( \frac{7}{7 + 5} \right) \times 10$$

---

## 6. Defining the Variables & Building the Formal Formula

Let's define the standard variables:
* **L** = Lower class limit of the modal class ($20$)
* **f₁** = Frequency of the modal class ($15$)
* **f₀** = Frequency of the class before the modal class ($8$)
* **f₂** = Frequency of the class after the modal class ($10$)
* **h** = Class width / interval size ($10$)

### How we express the numbers in the formula:
* **How we got 7:**  
  $$f_1 - f_0 = 15 - 8 = 7$$

* **How we got (7 + 5) in the denominator:**  
  We take the difference on the left $(f_1 - f_0)$ and the difference on the right $(f_1 - f_2)$ and add them together:  
  $$(f_1 - f_0) + (f_1 - f_2) = 2f_1 - f_0 - f_2$$  
  $$(15 - 8) + (15 - 10) = 7 + 5 = 12$$

---

## 7. The Final Formula

Putting it all together gives the standard formula for finding the mode of a frequency distribution table:

$$\mathbf{\text{Mode} = L + \left( \frac{f_1 - f_0}{2f_1 - f_0 - f_2} \right) \times h}$$

---

### Step-by-Step Calculation for Our Example:

$$\text{Mode} = 20 + \left( \frac{7}{7 + 5} \right) \times 10$$

$$\text{Mode} = 20 + \left( \frac{7}{12} \right) \times 10$$

$$\text{Mode} = 20 + \frac{70}{12}$$

$$\text{Mode} = 20 + 5.83 = \mathbf{25.83}$$

# **`WEEK ONE CODE CHALLENGE`**

## **`INTRODUCTION`**

This code challenge contains three different codes which are;
  * Grade generator
  * Speed detector
  * Net salary calculator

___

## **`DESCRIPTION`**

1. GRADE GENERATOR

This prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


2. SPEED DETECTOR

This takes input as the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/hr above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

3. NET SALARY CALCULATOR

This is a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

___

## **`PROJECT SETUP`**

Since the work is already deployed on github there will be no need of forking the work, only the link will be needed to access the work.

For instance lets take the grade generator, this enables the user to enter the total marks scored by the student, the grade achived is later given as the output.

In the speed detector, the speed of the car is entered as the input and then it's determined if it's below or above the speed limit. If the speed is below the speed limit there is a specific output given, if it above points will be given according to the speed which will determine whether the license will be suspended or not.

The net salary calculator receives the basic salary as the input, it then checks if there are some allowances given which will be added together and later added to the basic salary, this is known as the gross salary. From there the tax is calculated according to the earned basic salary, after the tax calculation, the code cheks if there are some deductions which will be added to the tax to make the gross tax. If there are some reliefs given, they will be subtracted from the gross tax. From there the gross tax is subtracted from the gross salary to get the net salary.

___

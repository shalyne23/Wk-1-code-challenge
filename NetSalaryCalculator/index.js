// Here is where the user enter their basic salary

let basicSalary = 50000;

// first I'll be calculating the gross salary by finding out the allowances given to the user


// This are some of the allowance given to the user

let pensionAllowance = 2000;
let housingAllowance = 9000;
let ownerOccupiedInterestAllowance = 2500;

// lets calculate the total allowances given to the user

let totalAllowances =( pensionAllowance + housingAllowance + ownerOccupiedInterestAllowance)


// calculating the gross salary

let grossSalary = (basicSalary + totalAllowances)

// above here I have been able to find the gross salary by finding the total allowance and adding to the basic salary


// now i want to get the gross tax

// first of all i have to find the tax 

let tax;

switch (true) {
    case basicSalary >= 24000:
        tax = (24000 * (10 / 100) );
        break;
    
    case basicSalary >= 24001 && basicSalary <= 32333:
        let value = (basicSalary - 24001);
        tax = (( value * (30 / 100)) + ( 24000 * (10/100)));
        break;

    case basicSalary >= 32334:
        let num = ( basicSalary - 32334);
        tax = ((num * (30/100)) + (24000 * (10/100)) + ((32333 - 24001) * (25/100)));
        break;

    default:
        let num1 = (24000 - basicSalary);
        tax = (num1 * (10/100));
}

// This is supposed to be the tax so now i have to calculate the deduction

let deduction;

switch(true) {

    case grossSalary <= 5999:
        deduction = 150;
        break;

    case grossSalary >=6000 && grossSalary <= 7999:
        deduction = 300;
        break;

    case grossSalary >=8000 && grossSalary <= 11999:
        deduction = 400;
        break;

    case grossSalary >=12000 && grossSalary <= 14999:
        deduction = 500;
        break;

    case grossSalary >=15000 && grossSalary <= 19999:
        deduction = 600;
        break;

    case grossSalary >=20000 && grossSalary <= 24999:
        deduction = 750;
        break;

    case grossSalary >=25000 && grossSalary <= 29999:
        deduction = 850;
        break;

    case grossSalary >=30000 && grossSalary <= 34999:
        deduction = 900;
        break;

    case grossSalary >=35000 && grossSalary <= 39999:
        deduction = 950;
        break;

    case grossSalary >=40000 && grossSalary <= 44999:
        deduction = 1000;
        break;

    case grossSalary >=45000 && grossSalary <= 49999:
        deduction = 1100;
        break;

    case grossSalary >=50000 && grossSalary <= 59999:
        deduction = 1200;
        break;

    case grossSalary >=60000 && grossSalary <= 69999:
        deduction = 1300;
        break;

    case grossSalary >=70000 && grossSalary <= 79999:
        deduction = 1400;
        break;

    case grossSalary >=80000 && grossSalary <= 89999:
        deduction = 1500;
        break;

    case grossSalary >=90000 && grossSalary <= 99999:
        deduction = 1600;
        break;
    default:
        deduction = 1700;
}

// now that i was able to find the deduction now i will find the grosstax

//finding the grosstax

let grosstax = (tax + deduction);

//Now I will calculate the reliefs given

let personalRelief = 2400;
let insuranceRelief = 5000;
let housingRelief = 9000;

//Calculating total relief

let relief = ( personalRelief + insuranceRelief + housingRelief);

// Now that I have the gross salary, gross tax and the relief now I can find the NET SALARY 

let netSalary = (grossSalary + relief - grosstax);

console.log("Net Salary= Ksh." + netSalary);
return (`Net Salary= Ksh ${netSalary}`);
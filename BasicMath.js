var hourlyRate = 45.36;
var hoursWorked = 40;

var weeklyPay = hourlyRate * hoursWorked;
console.log("Your Weekly Pay: $" + weeklyPay);

var overtimeHours = 10;
var totalHoursWorked = hoursWorked + overtimeHours;
console.log("Total Hours Worked: " + totalHoursWorked);

var overTimeRate = hourlyRate / 2 + hourlyRate;
console.log("Overtime Rate: " + overTimeRate);
var totalOvertimePay = overtimeHours * overTimeRate;
console.log("Total Overtime pay: " + totalOvertimePay);

var totalWeeklyPay = weeklyPay + totalOvertimePay;
console.log("Total Weekly pay: " + totalWeeklyPay);

var TAX_MULTIPLIER = 0.33;
var totalTax = totalWeeklyPay * TAX_MULTIPLIER;
var totalNetPay = totalWeeklyPay - totalTax;
console.log("Total Net Pay: " + totalNetPay);

console.log(3 ** 2);

console.log((3 % 2).toFixed(2));

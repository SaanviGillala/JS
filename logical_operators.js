// Logical OR (||)
// Logical AND (&&)
// Returns TRUE if one of the operands is TRUE
let highIncome = true;
let goodCrditScore = true;
let eligibleForLoan = highIncome || goodCrditScore;
console.log("Eligible", eligibleForLoan)
// NOT (!)

let applicationRefused  = !eligibleForLoan;
console.log("Application Refused",applicationRefused )

// ==
// is only check is the value the same not the data type

if (8 == "8"); // true

// ===
// also check the data type

if (8 === "8"); //false
if (8 === 8); // true

// Object.is()
// required if you want to check NaN === NaN

if (NaN === NaN); // false
Object.is(NaN, NaN); // true

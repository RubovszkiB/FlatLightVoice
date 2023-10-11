// Create an array to store used serial numbers
const usedSerialNumbers = [];

// Function to generate a unique serial number
function generateUniqueSerialNumber() {
  let serialNumber;
  do {
    // Generate a random serial number
    serialNumber = Math.floor(Math.random() * 10000);
  } while (usedSerialNumbers.includes(serialNumber));
  
  // Add the serial number to the usedSerialNumbers array
  usedSerialNumbers.push(serialNumber);

  return serialNumber;
}

// Example usage
const serial1 = generateUniqueSerialNumber();
console.log("Serial 1:", serial1);

const serial2 = generateUniqueSerialNumber();
console.log("Serial 2:", serial2);

const serial3 = generateUniqueSerialNumber();
console.log("Serial 3:", serial3);

// After running this code, serial1, serial2, and serial3 will contain unique serial numbers.

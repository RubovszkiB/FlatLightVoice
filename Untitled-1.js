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



// Változó a sorszám nyomon követéséhez
let currentSerialNumber = 0;

// Függvény a következő sorszám generálásához
function generateNextSerialNumber() {
  currentSerialNumber++; // Növeljük a sorszámot
  if (currentSerialNumber > 999) {
    console.log("Maximum sorszám elérve.");
    currentSerialNumber = 999;
  }

  // Átalakítjuk a sorszámot 3 számjegyűvé
  const formattedSerialNumber = currentSerialNumber.toString().padStart(3, "0");

  return formattedSerialNumber;
}

// Példa használat
const serial1 = generateNextSerialNumber();
console.log("Serial 1:", serial1);

const serial2 = generateNextSerialNumber();
console.log("Serial 2:", serial2);

const serial3 = generateNextSerialNumber();
console.log("Serial 3:", serial3);

// Ez a kód 1-től induló 3 számjegyű sorszámokat generál.



// Create an array to store used serial numbers
const usedSerialNumbers = [];

// Function to generate a unique 3-digit serial number
function generateUniqueSerialNumber() {
  let serialNumber;
  do {
    // Generate a random serial number from 001 to 999
    serialNumber = (Math.floor(Math.random() * 999) + 1).toString().padStart(3, "0");
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

// After running this code, serial1, serial2, and serial3 will contain unique 3-digit serial numbers.




// Create a variable to keep track of the current serial number
let currentSerialNumber = 111;

// Function to generate the next 3-digit serial number
function generateNextSerialNumber() {
  const serialNumber = currentSerialNumber.toString().padStart(3, "0");
  currentSerialNumber++;
  return serialNumber;
}

// Example usage
const serial1 = generateNextSerialNumber();
console.log("Serial 1:", serial1);

const serial2 = generateNextSerialNumber();
console.log("Serial 2:", serial2);

const serial3 = generateNextSerialNumber();
console.log("Serial 3:", serial3);

// After running this code, serial1, serial2, and serial3 will contain the 3-digit serial numbers starting from 111 and incrementing by 1 each time.

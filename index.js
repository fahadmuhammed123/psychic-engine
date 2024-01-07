const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt the user for their phone number
function getPhoneNumber() {
  return new Promise(resolve => {
    rl.question('Enter your phone number: ', phoneNumber => {
      resolve(phoneNumber);
    });
  });
}

// Function to prompt the user for their email address
function getEmailAddress() {
  return new Promise(resolve => {
    rl.question('Enter your email address: ', emailAddress => {
      resolve(emailAddress);
    });
  });
}

// Function to present the menu and get the user's choice
function getMenuChoice() {
  return new Promise(resolve => {
    console.log('Menu:');
    console.log('1. Unban');
    console.log('2. Ban');
    console.log('3. Verification');

    rl.question('Enter your choice (1, 2, or 3): ', choice => {
      resolve(choice);
    });
  });
}

// Main function to execute the script
async function main() {
  const phoneNumber = await getPhoneNumber();
  const emailAddress = await getEmailAddress();

  console.log(`You entered:\nPhone Number: ${phoneNumber}\nEmail Address: ${emailAddress}`);

  const userChoice = await getMenuChoice();

  switch (userChoice) {
    case '1':
      console.log('You chose to unban.');
      break;
    case '2':
      console.log('You chose to ban.');
      break;
    case '3':
      console.log('You chose verification.');
      break;
    default:
      console.log('Invalid choice.');
  }

  // Close the readline interface
  rl.close();
}

// Run the main function
main();

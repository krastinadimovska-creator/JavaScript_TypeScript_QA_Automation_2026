// Run from the repository root: npm run test:lecture-01
const userName = "testuser@example.test";
const userId = 12345;
const isLoggedIn = true;
const baseUrl = "https://demo.example.test";
const expectedStatus = 200;
const actualStatus = 200;

console.log("Username:", userName, "| type:", typeof userName);
console.log("User ID:", userId, "| type:", typeof userId);
console.log("Logged in:", isLoggedIn, "| type:", typeof isLoggedIn);
console.log("Base URL:", baseUrl, "| type:", typeof baseUrl);
console.log(
  "Expected status:",
  expectedStatus,
  "| type:",
  typeof expectedStatus,
);
console.log("Actual status:", actualStatus, "| type:", typeof actualStatus);

function createUserMessage(name) {
  return `Hello, ${name}! Ready to test?`;
}

console.log(createUserMessage("Sarah"));
console.log(createUserMessage("Alex"));

function validateStatus(expected, actual) {
  const matches = expected === actual;

  console.log(`Expected status: ${expected}`);
  console.log(`Actual status: ${actual}`);
  console.log("Result:", matches ? "PASS" : "FAIL");

  return matches;
}

const matchingResult = validateStatus(200, 200);
const nonMatchingResult = validateStatus(200, 404);

function printTestSummary(...results) {
  const total = results.length;
  let passed = 0;
  let failed = 0;

  for (const result of results) {
    if (result) {
      passed = passed + 1;
    } else {
      failed = failed + 1;
    }
  }

  const overallResult = failed === 0 ? "PASS" : "FAIL";

  console.log(`Total checks: ${total}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Overall result: ${overallResult}`);
}

printTestSummary(matchingResult, nonMatchingResult);

// Optional challenge
function loginTest(expectedLoginState, actualLoginState) {
  const matches = expectedLoginState === actualLoginState;

  console.log(`Expected login state: ${expectedLoginState}`);
  console.log(`Actual login state: ${actualLoginState}`);
  console.log("Result:", matches ? "PASS" : "FAIL");

  return matches;
}

const passingLoginResult = loginTest(true, true);
const failingLoginResult = loginTest(true, false);

printTestSummary(
  matchingResult,
  nonMatchingResult,
  passingLoginResult,
  failingLoginResult,
);

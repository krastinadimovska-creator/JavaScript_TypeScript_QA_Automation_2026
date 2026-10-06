// TODO: Solve the homework exercises described in:
// lectures/01-development-env-basics/homework/homework-assignment.md

// 1. Create variables for the following data types and assign them appropriate values:
const userName = "krastina.dimovska@test.be";
const userId = 1010102;
const isLoggedIn = false;
const baseUrl = "https://demo.test.be";
const expectedStatus = 200;
const actualStatus = 403;

// 2. Log each value and its type
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

// 3. Create a function that takes a name as an argument and returns a message in the format: "Good job, [name]!"
function createUserMessage(name) {
  return `Good job, ${name}!`;
}
console.log(createUserMessage("Krastina Dimovska"));
console.log(createUserMessage("QA Automation Tester"));

// 4. Compare expected and actual status and return PASS/FAIL result
function validateStatus(expected, actual) {
  const matches = expected === actual;

  console.log(`Expected status: ${expected}`);
  console.log(`Actual status: ${actual}`);
  console.log("Result:", matches ? "PASS" : "FAIL");

  return matches;
}

const check1 = validateStatus(200, 200);
const check2 = validateStatus(expectedStatus, actualStatus);

// 5. Write printTestSummary(...) to report the number of checks, passes, failures, and an overall result. Use the results from your status checks.
function printTestSummary(results = []) {
  const totalChecks = results.length;
  const passes = results.filter(Boolean).length;
  const failures = totalChecks - passes;
  const overallResult = passes === totalChecks ? "PASS" : "FAIL";

  const summary = {
    totalChecks,
    passes,
    failures,
    overallResult,
  };

  console.log("Test Summary:");
  console.log(`Total Checks: ${summary.totalChecks}`);
  console.log(`Passes: ${summary.passes}`);
  console.log(`Failures: ${summary.failures}`);
  console.log(`Overall Result: ${summary.overallResult}`);

  return summary;
}
printTestSummary([check1, check2]);

// 6. Ran the file with npm run test:lecture-01, formatted it with Prettier and checked it with ESLint — no problems found.
// 7. Copilot suggested a cleaner version of printTestSummary, which I accepted:
// * Takes an array of results instead of two fixed parameters, so it works for any number of checks.
// * Counts checks with .length and passes with .filter(Boolean) instead of hardcoded values.
// * Returns a summary object, so the results can be reused.
// I did not accept the extra check1/check2 constants it added, because they already exist
// from task 4 and would cause an "already declared" error.
// Verification: I went through the new parts (arrays, .length, .filter, objects) line by line,
// ran the file and confirmed the output is the same as before (2 checks, 1 pass, 1 fail, FAIL).

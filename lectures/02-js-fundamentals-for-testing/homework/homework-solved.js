// Run from the repository root: npm run test:lecture-02
const expectedStatus = 200;
const actualStatus = 200;
const responseTime = 850;
const maxResponseTime = 1000;

if (actualStatus !== expectedStatus) {
  console.log(
    `FAIL: Unexpected status code - expected ${expectedStatus}, got ${actualStatus}`,
  );
} else if (responseTime >= maxResponseTime) {
  console.log(`FAIL: Response too slow - ${responseTime}ms`);
} else {
  console.log(`PASS: API response is valid - ${responseTime}ms`);
}

const username = "  testuser  ";
const cleanUsername = username.trim().toLowerCase();

console.log(`Cleaned username: "${cleanUsername}"`);

const isLoggedIn = true;

if (isLoggedIn && actualStatus === expectedStatus) {
  console.log("User is logged in and the status code is correct");
} else {
  console.log("User is not logged in or the status code is wrong");
}

const result =
  actualStatus !== expectedStatus
    ? "FAIL"
    : responseTime >= maxResponseTime
      ? "FAIL"
      : "PASS";

console.log(`Result: ${result}`);

// Optional challenge
const attemptNumber = 1;
const maxAttempts = 3;

if (actualStatus !== expectedStatus || responseTime >= maxResponseTime) {
  if (attemptNumber < maxAttempts) {
    console.log("RETRY");
  } else {
    console.log("FAIL");
  }
} else {
  console.log("PASS");
}

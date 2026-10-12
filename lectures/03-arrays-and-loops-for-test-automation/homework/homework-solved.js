// Run from the repository root: npm run test:lecture-03
const testResults = [200, 201, 404, 200, 500, 204];

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

for (const statusCode of testResults) {
  totalTests++;

  if (statusCode >= 200 && statusCode < 300) {
    console.log(`PASS: ${statusCode}`);
    passedTests++;
  } else {
    console.log(`FAIL: ${statusCode}`);
    failedTests++;
  }
}

console.log(`Total tests: ${totalTests}`);
console.log(`Passed: ${passedTests}`);
console.log(`Failed: ${failedTests}`);

const testUsers = ["alice", "", "bob", "", "charlie"];

for (const user of testUsers) {
  if (!user) {
    continue;
  }

  console.log(`Testing user: ${user}`);
}

const browsers = ["Chrome", "Firefox"];
const environments = ["QA", "Staging"];

for (const browser of browsers) {
  for (const environment of environments) {
    if (browser === "Firefox" && environment === "Staging") {
      continue;
    }

    console.log(`${browser} on ${environment}`);
  }
}

// Optional challenge
for (const statusCode of testResults) {
  if (statusCode >= 500) {
    console.log(`Stopping early: critical status code ${statusCode} found`);
    break;
  }

  console.log(`Checked status code: ${statusCode}`);
}

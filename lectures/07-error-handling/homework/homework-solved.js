// Run from the repository root: npm run test:lecture-07
class TestDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "TestDataError";
  }
}

function validateUser(user) {
  if (!user) {
    throw new TestDataError("User is required");
  }

  if (!user.username) {
    throw new TestDataError("Username is required");
  }

  return user;
}

try {
  const validUser = validateUser({ username: "alice" });
  console.log("Validated user:", validUser);
} catch (error) {
  if (error instanceof TestDataError) {
    console.log("Invalid test data:", error.message);
  } else {
    throw error;
  }
} finally {
  console.log("Validation attempt finished");
}

try {
  validateUser(null);
} catch (error) {
  if (error instanceof TestDataError) {
    console.log("Invalid test data:", error.message);
  } else {
    throw error;
  }
} finally {
  console.log("Validation attempt finished");
}

// Optional challenge
function parseTestConfig(jsonText) {
  try {
    return JSON.parse(jsonText);
  } catch (error) {
    console.log("Failed to parse test config:", error.message);
    return null;
  }
}

console.log(parseTestConfig('{"browser": "Chrome"}'));
console.log(parseTestConfig("not valid json"));
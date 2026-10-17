// Run from the repository root: npm run test:lecture-06
const alice = {
  username: "alice",
  email: "alice@example.test",
  role: "admin",
  isActive: true,
};

const bob = {
  username: "bob",
  email: "bob@example.test",
  role: "tester",
  isActive: false,
};

const charlie = {
  username: "charlie",
  email: "charlie@example.test",
  role: "user",
  isActive: true,
};

const users = [alice, bob, charlie];

for (const user of users) {
  console.log(user.username);
}

const inactiveUsers = users.filter((user) => !user.isActive);

console.log("Inactive users:", inactiveUsers);

const aliceJson = JSON.stringify(alice);

console.log(aliceJson, "| type:", typeof aliceJson);

const parsedAlice = JSON.parse(aliceJson);

console.log(parsedAlice.username);
console.log(parsedAlice.role);

class User {
  constructor(username, email, role, isActive) {
    this.username = username;
    this.email = email;
    this.role = role;
    this.isActive = isActive;
  }

  getDescription() {
    const activity = this.isActive ? "active" : "inactive";
    return `${this.username} is an ${activity} ${this.role}`;
  }
}

const userInstance1 = new User("dave", "dave@example.test", "admin", true);
const userInstance2 = new User("erin", "erin@example.test", "tester", false);

console.log(userInstance1.getDescription());
console.log(userInstance2.getDescription());

// Optional challenge
function createUsersFromJson(jsonText) {
  const parsedUsers = JSON.parse(jsonText);

  return parsedUsers.map(
    (user) => new User(user.username, user.email, user.role, user.isActive),
  );
}

const usersJson = JSON.stringify(users);
const recreatedUsers = createUsersFromJson(usersJson);

for (const user of recreatedUsers) {
  console.log(user.getDescription());
}

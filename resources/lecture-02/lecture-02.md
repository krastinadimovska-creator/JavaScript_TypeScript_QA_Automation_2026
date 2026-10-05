# Lecture 2: JavaScript Fundamentals for Testing

## Session order

1. Work with strings: concatenation, template literals, and string methods (`trim()`, `toLowerCase()`, `includes()`, `startsWith()`, `endsWith()`).
2. Work with numbers: arithmetic operators and calculations used in automation, such as timeouts and retries.
3. Compare values with `===`, `!==`, `>`, `<`, `>=`, and `<=`, and see why `===` is preferred over `==`.
4. Combine conditions with logical operators: `&&`, `||`, and `!`.
5. Recognize truthy and falsy values in conditions.
6. Make decisions with `if` / `else if` / `else`, including nested conditions.
7. Simplify simple decisions with the ternary operator.
8. Apply these ideas in practical QA validation examples: login checks and API response checks.

## Key ideas

- Template literals (`` `${value}` ``) are easier to read than string concatenation for dynamic messages.
- `===` compares both value and type; `==` does not, which can hide bugs in test assertions.
- `&&` requires all conditions to be true; `||` requires at least one; `!` reverses a boolean.
- Falsy values include `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
- Use ternary operators for simple value selection; use `if`/`else` when the logic has multiple statements or more conditions.
- A QA validation is usually: gather actual values, compare them to expected values, and report a clear pass/fail reason.

## Next

Arrays and loops — working with collections of test data.

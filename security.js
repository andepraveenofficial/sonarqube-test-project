/**
 * ============================================================================
 * SONARQUBE TEST SUITE: SECURITY VULNERABILITIES & SECURITY HOTSPOTS
 * ============================================================================
 * This file contains intentional security violations commonly flagged by SonarQube:
 * 1. javascript:S6437 - Hardcoded credentials, secrets, and API tokens
 * 2. javascript:S1523 - Dynamic code execution using eval()
 * 3. javascript:S4790 - Weak cryptographic hashing algorithm (MD5 / SHA1)
 * 4. javascript:S2245 - Insecure pseudo-random number generation (Math.random for security tokens)
 * 5. javascript:S5852 - Regular Expression vulnerable to Denial of Service (ReDoS)
 * 6. javascript:S2077 - Unsanitized SQL query concatenation (SQL Injection pattern)
 * ============================================================================
 */

const crypto = require("crypto");

// Vulnerability 1: Hardcoded credentials and secrets
const DB_PASSWORD = "SuperSecretPassword123!";
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const JWT_SECRET = "my-hardcoded-jwt-secret-key-123456";

// Vulnerability 2: Dangerous eval() usage
function executeDynamicCode(userInput) {
  console.log("Running eval on user input...");
  return eval(userInput); // Major security flaw: arbitrary code execution
}

// Vulnerability 3: Weak Cryptographic Hash (MD5)
function hashUserPassword(password) {
  // MD5 is broken and cryptographically insecure
  return crypto.createHash("md5").update(password).digest("hex");
}

// Vulnerability 4: Insecure Randomness (Math.random used for auth/crypto tokens)
function generateSessionToken() {
  // Math.random() is predictable and should not be used for security-critical values
  return "session_" + Math.random().toString(36).substring(2);
}

// Vulnerability 5: Regular Expression Denial of Service (ReDoS)
function validateEmail(email) {
  // Catastrophic backtracking regex
  const redosPattern = /^([a-zA-Z0-9]+)+$/;
  return redosPattern.test(email);
}

// Vulnerability 6: SQL Injection pattern (string concatenation in queries)
function queryDatabase(username) {
  const query = "SELECT * FROM users WHERE username = '" + username + "';";
  console.log("Executing SQL Query:", query);
  return query;
}

module.exports = {
  DB_PASSWORD,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  JWT_SECRET,
  executeDynamicCode,
  hashUserPassword,
  generateSessionToken,
  validateEmail,
  queryDatabase,
};

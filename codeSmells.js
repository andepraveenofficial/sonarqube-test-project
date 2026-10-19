/**
 * ============================================================================
 * SONARQUBE TEST SUITE: CODE SMELLS & MAINTAINABILITY ISSUES
 * ============================================================================
 * This file contains intentional code smells commonly flagged by SonarQube:
 * 1. javascript:S3776 - Cognitive Complexity too high (deeply nested logic)
 * 2. javascript:S1481 - Unused local variables
 * 3. javascript:S1172 - Unused function parameters
 * 4. javascript:S125  - Commented-out dead code blocks
 * 5. javascript:S3504 - Use of `var` instead of `let` or `const`
 * 6. javascript:S2486 - Empty catch block (exceptions silently ignored)
 * 7. javascript:S1192 - String literals duplicated 3+ times
 * 8. javascript:S1125 - Redundant boolean literal comparison (x === true)
 * 9. javascript:S107  - Function with too many parameters (>7)
 * ============================================================================
 */

// Code Smell 1: Using 'var' instead of 'let'/'const'
var globalStatus = "pending";

// Code Smell 2: Duplicate string literals without defining a constant
function checkStatus(status) {
  if (status === "PAYMENT_FAILED") {
    console.log("Status: PAYMENT_FAILED");
  } else if (status === "PAYMENT_PROCESSING") {
    console.log("Status: PAYMENT_PROCESSING");
  } else if (status === "PAYMENT_FAILED") {
    console.log("Retrying PAYMENT_FAILED");
  }
  return status;
}

// Code Smell 3: Too many parameters (>7)
function registerAccount(
  firstName,
  lastName,
  email,
  age,
  country,
  city,
  zipCode,
  phoneNumber,
  taxId
) {
  return `${firstName} ${lastName} registered`;
}

// Code Smell 4: High Cognitive Complexity & Redundant Boolean comparison
function evaluateUserPermission(user, resource, action, context) {
  // Redundant boolean comparison: === true
  if (user.isActive === true) {
    if (user.role) {
      if (user.role === "admin") {
        return true;
      } else if (user.role === "manager") {
        if (resource === "finance") {
          if (action === "read" || action === "write") {
            if (context && context.department === "sales") {
              return true;
            } else {
              return false;
            }
          }
        } else if (resource === "hr") {
          return true;
        }
      } else {
        if (action === "read") {
          return true;
        }
      }
    }
  }
  return false;
}

// Code Smell 5: Unused parameters & unused variables
function calculateDiscount(price, unusedFactor, discountRate) {
  const unusedVariable = "I am never used";
  var tempTotal = price * discountRate;
  return price - tempTotal;
}

// Code Smell 6: Empty catch block (swallowed exception)
function parseData(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    // Empty catch block
  }
}

// Code Smell 7: Commented-out dead code
/*
function oldDeprecatedFunction() {
  const x = 10;
  const y = 20;
  return x + y;
}
*/

module.exports = {
  checkStatus,
  registerAccount,
  evaluateUserPermission,
  calculateDiscount,
  parseData,
};

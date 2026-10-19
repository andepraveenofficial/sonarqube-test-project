/**
 * ============================================================================
 * SONARQUBE TEST SUITE: BUGS
 * ============================================================================
 * This file contains intentional bugs commonly flagged by SonarQube:
 * 1. javascript:S2688 - NaN comparison using equality operator (NaN === NaN is always false)
 * 2. javascript:S1763 - Unreachable code after return/throw
 * 3. javascript:S2123 - Value assigned to a variable that is immediately overwritten / self-assignment
 * 4. javascript:S1764 - Identical expressions on both sides of a binary operator
 * 5. javascript:S2234 - Arguments passed in wrong order / suspicious parameter usage
 * 6. javascript:S2692 - IndexOf comparison that will never evaluate properly (indexOf >= 0 mistake)
 * 7. javascript:S2703 - Unintentional assignment in conditional statement
 * ============================================================================
 */

function checkValues(val) {
  // Bug 1: NaN comparison. NaN is never equal to NaN in JavaScript; Number.isNaN() should be used.
  if (val === NaN) {
    console.log("Value is NaN");
  }

  // Bug 2: Accidental assignment instead of comparison in condition
  let status = 200;
  if ((status = 500)) {
    console.log("Server error occurred!");
  }

  // Bug 3: Identical operands on both sides of operator
  const isSelfEqual = val === val && val !== val;

  // Bug 4: Self assignment
  let count = 10;
  count = count;

  return { val, count, isSelfEqual };

  // Bug 5: Unreachable code
  console.log("This line will never execute!");
  const unreachableValue = 42;
  return unreachableValue;
}

function processArray(items) {
  // Bug 6: Incorrect indexOf check. indexOf returns -1 when not found.
  // Checking items.indexOf('admin') > 0 misses index 0.
  if (items.indexOf("admin") > 0) {
    console.log("Admin exists, but index 0 was ignored!");
  }

  // Bug 7: Infinite loop potential / counter incrementing error
  for (let i = 0; i < items.length; i--) {
    console.log(items[i]);
    break; // Break here to avoid crashing when executed
  }
}

module.exports = {
  checkValues,
  processArray,
};

/**
 * SonarQube Test Project - Main Entry Point
 * This project is intentionally populated with common code issues to test SonarQube's
 * detection across:
 * - Bugs
 * - Security Vulnerabilities & Hotspots
 * - Code Smells (Maintainability)
 * - Duplicated Lines / Blocks
 */

const bugs = require("./bugs");
const security = require("./security");
const codeSmells = require("./codeSmells");
const duplications = require("./duplications");

console.log("=== SonarQube Test Project Running ===");

// 1. Trigger sample bug methods
bugs.checkValues(10);
bugs.processArray(["guest", "admin"]);

// 2. Trigger sample security methods
security.hashUserPassword("admin123");
security.generateSessionToken();
security.validateEmail("test@example.com");
security.queryDatabase("admin");

// 3. Trigger sample code smell methods
codeSmells.checkStatus("PAYMENT_FAILED");
codeSmells.evaluateUserPermission({ isActive: true, role: "admin" }, "finance", "read", {});
codeSmells.calculateDiscount(100, 1, 0.1);

// 4. Trigger duplicated methods
const sampleData = [{ id: 1, name: "Item A", price: 50, quantity: 2 }];
duplications.processInvoiceReport(sampleData);
duplications.processReceiptReport(sampleData);

console.log("=== Execution Finished. Ready for SonarQube scan! ===");

/**
 * ============================================================================
 * SONARQUBE TEST SUITE: CODE DUPLICATIONS
 * ============================================================================
 * This file contains duplicated blocks of code to trigger SonarQube's
 * Duplication / Copy-Paste Detector (CPD) metric.
 * ============================================================================
 */

function processInvoiceReport(data) {
  const result = [];
  let totalAmount = 0;
  let taxRate = 0.18;
  let discount = 0.05;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let subtotal = item.price * item.quantity;
    let itemDiscount = subtotal * discount;
    let taxableAmount = subtotal - itemDiscount;
    let tax = taxableAmount * taxRate;
    let finalItemPrice = taxableAmount + tax;

    totalAmount += finalItemPrice;
    result.push({
      id: item.id,
      name: item.name,
      subtotal: subtotal,
      discount: itemDiscount,
      tax: tax,
      total: finalItemPrice,
    });
  }

  return {
    items: result,
    grandTotal: totalAmount,
    generatedAt: new Date().toISOString(),
  };
}

function processReceiptReport(data) {
  const result = [];
  let totalAmount = 0;
  let taxRate = 0.18;
  let discount = 0.05;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let subtotal = item.price * item.quantity;
    let itemDiscount = subtotal * discount;
    let taxableAmount = subtotal - itemDiscount;
    let tax = taxableAmount * taxRate;
    let finalItemPrice = taxableAmount + tax;

    totalAmount += finalItemPrice;
    result.push({
      id: item.id,
      name: item.name,
      subtotal: subtotal,
      discount: itemDiscount,
      tax: tax,
      total: finalItemPrice,
    });
  }

  return {
    items: result,
    grandTotal: totalAmount,
    generatedAt: new Date().toISOString(),
  };
}

module.exports = {
  processInvoiceReport,
  processReceiptReport,
};

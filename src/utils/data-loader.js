// src/utils/data-loader.js
const fs = require('fs');
const path = require('path');

// Assuming your data directory is at the project root

/**
 * Loads a specific test case data block from a given JSON file.
 * @param {string} dataFile - The name of the JSON file (e.g., 'data1.json').
 * @param {string} testCaseId - The key within the JSON (e.g., 'TC01').
 */
function loadData(dataFile, testCaseId) {
  const filePath = path.join(__dirname,'..','..','data', dataFile);
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const allData = JSON.parse(rawData);

  if (!allData[testCaseId]) {
    throw new Error(`Test data ID '${testCaseId}' not found in file: ${dataFile}`);
  }

  // Returns only the data for that specific test case ID
  return allData[testCaseId]; 
}

module.exports = { loadData };
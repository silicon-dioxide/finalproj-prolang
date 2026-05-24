const { performance } = require("node:perf_hooks");

const dataList = Array.from({ length: 1000 }, (_, i) => [i, `item_${i}`]);

function searchInList(target) {
  for (const [key, value] of dataList) {
    if (key === target) {
      return value;
    }
  }
  return undefined;
}

function measureExecutionTime(iterations, target) {
  const start = performance.now();

  for (let i = 0; i < iterations; i += 1) {
    searchInList(target);
  }

  const end = performance.now();
  return (end - start) / 1000;
}

function estimateMemoryFootprint() {
  return Buffer.byteLength(JSON.stringify(dataList));
}

const target = 999;
const executionTime = measureExecutionTime(100000, target);
const memoryUsed = estimateMemoryFootprint();

console.log("Implementation: Linear Search in an Array");
console.log("Search result:", searchInList(target));

console.log("\nMetric 1: Execution Time");
console.log(`${executionTime.toFixed(6)} seconds`);

console.log("\nMetric 2: Memory Footprint");
console.log(`${memoryUsed.toLocaleString()} bytes`);

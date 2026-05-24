const { performance } = require("node:perf_hooks");

const dataMap = new Map(
  Array.from({ length: 1000 }, (_, i) => [i, `item_${i}`]),
);

function searchInMap(target) {
  return dataMap.get(target);
}

function measureExecutionTime(iterations, target) {
  const start = performance.now();

  for (let i = 0; i < iterations; i += 1) {
    searchInMap(target);
  }

  const end = performance.now();
  return (end - start) / 1000;
}

function estimateMemoryFootprint() {
  return Buffer.byteLength(JSON.stringify(Array.from(dataMap.entries())));
}

const target = 999;
const executionTime = measureExecutionTime(100000, target);
const memoryUsed = estimateMemoryFootprint();

console.log("Implementation: Dictionary Lookup with Map");
console.log("Search result:", searchInMap(target));

console.log("\nMetric 1: Execution Time");
console.log(`${executionTime.toFixed(6)} seconds`);

console.log("\nMetric 2: Memory Footprint");
console.log(`${memoryUsed.toLocaleString()} bytes`);

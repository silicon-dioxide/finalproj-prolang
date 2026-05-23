import sys
import timeit


data_list = [(i, f"item_{i}") for i in range(1000)]


def search_in_list(target):
    for key, value in data_list:
        if key == target:
            return value
    return None


target = 999

print("Implementation: Linear Search in a List")
print("Search result:", search_in_list(target))

execution_time = timeit.timeit(
    "search_in_list(target)",
    globals=globals(),
    number=100000,
)

memory_used = sys.getsizeof(data_list)

print("\nMetric 1: Execution Time")
print(f"{execution_time:.6f} seconds")

print("\nMetric 2: Memory Footprint")
print(f"{memory_used:,} bytes")

import sys
import timeit


data_dict = {i: f"item_{i}" for i in range(1000)}


def search_in_dict(target):
    return data_dict.get(target)


target = 999

print("Implementation: Dictionary Lookup")
print("Search result:", search_in_dict(target))

execution_time = timeit.timeit(
    "search_in_dict(target)",
    globals=globals(),
    number=100000,
)

memory_used = sys.getsizeof(data_dict)

print("\nMetric 1: Execution Time")
print(f"{execution_time:.6f} seconds")

print("\nMetric 2: Memory Footprint")
print(f"{memory_used:,} bytes")

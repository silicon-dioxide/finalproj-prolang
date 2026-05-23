import asyncio


async def task(name, delay):
    await asyncio.sleep(delay)
    print(f"Task {name} finished")


async def run_async_examples():
    await asyncio.gather(
        task("A", 1),
        task("B", 2),
    )


asyncio.run(run_async_examples())

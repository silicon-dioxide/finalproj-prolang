import asyncio


async def say_hello():
    await asyncio.sleep(1)
    print("Hello from async function")


asyncio.run(say_hello())

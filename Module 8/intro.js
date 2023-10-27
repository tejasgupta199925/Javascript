/*
    Synchronous Programming means it will use a single-thread, so only one operation or program will run at a time.
    Sync is blocking - it will only send the server one request at a time and will wait for that request to be answered by the server.

    Asynchronous is non-blocking, which means it will send multiple requests to a server at a time.
    Async increases throughput because multiple operations can run at the same time. Multiple requests can run simultaneously.
    The code flow will not wait for a particular function to complete execution, it will move ahead by executing that function in a separate
    thread. There can be multiple threads in asynchronous programming.
    In Javascript, we use a single thread only.
*/
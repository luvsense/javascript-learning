# ASYNC Javascript

1. Js is single threaded
   > Which means that it can only handle one task at a time in a single thread.
2. runs at most one line of code at any given time.
3. cannot do two things simultaneously

## How does it handle multiple events

- Browser/nodejs comes with web API that are able to handle certain tasks in the background
- The main thread continues executing the rest of the code without waiting for the timer to expire.
- The setTimeout function is called, and the callback function along with the specified delay is added to a data structure called the Web API provided by the browser or the Node.js runtime.
- When the specified delay has elapsed, the Web API marks the callback function as ready to be executed and pushes it to the event queue.
- The event loop, which continuously checks the event queue for available tasks, notices the callback function in the queue.
- Once the main thread has finished executing its current task and becomes available, the event loop takes the callback function from the event queue and pushes it to the main thread for execution.

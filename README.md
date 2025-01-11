# React Native Crash on Network Request Failure

This repository demonstrates a common bug in React Native applications where network requests are not handled properly, leading to crashes. The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description

The application crashes when a network request fails because there is insufficient error handling in the `fetch` call.  This is a common issue in React Native development.

## Solution

The solution in `bugSolution.js` adds comprehensive error handling using `try...catch` blocks and provides user-friendly feedback in case of network failures, preventing crashes.
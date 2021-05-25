# Software design pattern: Observer
## Introduction
This repository is an example of an implementation of the Observer design pattern in Node/TypeScript.

For more information about the Observer design pattern: https://refactoring.guru/design-patterns/observer

How to install and run: `npm i`, then `npm run build && npm run start`.

For unit test coverage: `npm run test`.

Example:
```
➜  observer-test git:(master) ✗ npm run start

> node-typescript-boilerplate@0.0.0 start
> node build/src/main.js

London: Tuesday, 25 May 2021, 09:51:24
Paris: mardi 25 mai 2021, 11:51:24
Los Angeles: Tuesday, May 25, 2021, 2:51:24 AM
Sydney: Tuesday, 25 May 2021, 7:51:25 pm
```

## Implementation
The publisher will contain a list of subscribers (clocks) and can update (notify) them. It contains little logic: storing and calling subscribers.

Subscribers may belong to a publisher and will contain logic for the subscriber only. In this example, subscribers are worldwide clocks and implement the same interface so that we can have a "contract" between the Publisher and the Subscribers: the Publisher will always know the shape of  Subscribers. The logic remains simple in this example and only displays current date and time for a location.

## Thoughts
* Observer pattern is great if we want a design where we can have a mechanism for objects (Subscribers) to "wait" to be called, and then be called (by the Publisher) only when necessary.
* A great example would be a notification:
  * Publisher would be sending notifications,
  * Subscribers would implement the same interface and can be: email, SMS, Slack message, etc.
  * the main program would call the Publisher to either add messages (Subscribers) or trigger notifications based on type (email, SMS, etc).

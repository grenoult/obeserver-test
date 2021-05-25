import Main from '../src/main';

// describe('greeter function', () => {return;
//   // Read more about fake timers
//   // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
//   jest.useFakeTimers();

//   const name = 'John';
//   let hello: string;

//   // Act before assertions
//   beforeAll(async () => {
//     const p: Promise<string> = greeter(name);
//     jest.runOnlyPendingTimers();
//     hello = await p;
//   });

//   // Assert if setTimeout was called properly
//   it('delays the greeting by 2 seconds', () => {
//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenLastCalledWith(
//       expect.any(Function),
//       Delays.Long,
//     );
//   });

//   // Assert greeter result
//   it('greets a user with `Hello, {name}` message', () => {
//     expect(hello).toBe(`Hello, ${name}`);
//   });
// });

describe('main class', () => {
    it('sets clocks', () => {
        const main = new Main();

        main.setClocks();

        expect(main.publisher.getSubscribers()).toHaveLength(4);
    });

    it('display clocks', () => {
        const main = new Main();
        main.publisher.update = jest.fn();
        main.displayClocks();

        expect(main.publisher.update).toBeCalled();
    });
})

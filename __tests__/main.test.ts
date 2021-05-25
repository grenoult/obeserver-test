import Main from '../src/main';

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

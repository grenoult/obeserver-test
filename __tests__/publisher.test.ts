import Publisher from '../src/publisher';

describe('publisher class', () => {

    it('insert and remove', () => {
        const publisher = new Publisher();

        expect(publisher.getSubscribers().length).toBe(0);

        // Test adding a subscriber
        publisher.addSubscriber(new Subscriber());
        expect(publisher.getSubscribers().length).toBe(1);

        // Test adding another subscriber
        publisher.addSubscriber(new Subscriber());
        expect(publisher.getSubscribers().length).toBe(2);

        // Test adding then removing
        const sub = new Subscriber();
        publisher.addSubscriber(sub);
        expect(publisher.getSubscribers().length).toBe(3);
        publisher.removeSubscriber(sub);
        expect(publisher.getSubscribers().length).toBe(2);
    });
});

import Publisher from '../src/publisher';
import ClockLondon from '../src/subscribers/clock-london';
import SubscriberInterface from '../src/subscribers/subscriber-interface';

describe('publisher class', () => {

    it('insert and remove', () => {
        const publisher = new Publisher();

        expect(publisher.getSubscribers().length).toBe(0);

        // Test adding a subscriber
        publisher.addSubscriber(new ClockLondon());
        expect(publisher.getSubscribers().length).toBe(1);

        // Test adding another subscriber
        publisher.addSubscriber(new ClockLondon());
        expect(publisher.getSubscribers().length).toBe(2);

        // Test adding then removing
        const sub = new ClockLondon();
        publisher.addSubscriber(sub);
        expect(publisher.getSubscribers().length).toBe(3);
        publisher.removeSubscriber(sub);
        expect(publisher.getSubscribers().length).toBe(2);
    });

    it ('update', () => {
        const clock = {} as SubscriberInterface;

        const publisher = new Publisher();
        publisher.addSubscriber(clock);
        publisher.update();
        expect(clock.displayNowDate).toBeCalled();
    })
});

import SubscriberInterface from "./subscribers/subscriber-interface";

class Publisher {
    private subscribers: SubscriberInterface[] = [];

    addSubscriber(subscriber: SubscriberInterface): void {
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber: SubscriberInterface): void {
        this.subscribers = this.subscribers.filter(record => record !== subscriber);
    }

    getSubscribers(): SubscriberInterface[] {
        return this.subscribers;
    }

    update() {
        this.subscribers.forEach((item: SubscriberInterface) => item.displayNowDate())
    }
}

export default Publisher;
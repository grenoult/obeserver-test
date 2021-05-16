import SubscriberInterface from "./subscriber-interface";

class ClockLosAngeles implements SubscriberInterface {
    displayNowDate() {
        console.log('Los Angeles: ' + new Date().toLocaleString(
            'en-US',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timeZone: 'America/Los_Angeles',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            }
        ));
    };
}

export default ClockLosAngeles;
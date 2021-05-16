import SubscriberInterface from "./subscriber-interface";

class ClockSydney implements SubscriberInterface {
    displayNowDate() {
        console.log('Sydney: ' + new Date().toLocaleString(
            'en-AU',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timeZone: 'Australia/Sydney',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            }
        ));
    };
}

export default ClockSydney;
import SubscriberInterface from "./subscriber-interface";

class ClockLondon implements SubscriberInterface {
    displayNowDate() {
        console.log('London: ' + new Date().toLocaleString(
            'en-gb',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timeZone: 'utc',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            }
        ));
    };
}

export default ClockLondon;
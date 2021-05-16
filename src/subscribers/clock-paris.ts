import SubscriberInterface from "./subscriber-interface";

class ClockParis implements SubscriberInterface {
    displayNowDate() {
        console.log('Paris: ' + new Date().toLocaleString(
            'fr-FR',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZone: 'Europe/Paris'
            }
        ));
    };
}

export default ClockParis;
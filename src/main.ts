import Publisher from "./publisher";
import ClockLondon from "./subscribers/clock-london";
import ClockLosAngeles from "./subscribers/clock-losangeles";
import ClockParis from "./subscribers/clock-paris";
import ClockSydney from "./subscribers/clock-sydney";

class Main {
  publisher: Publisher;

  constructor() {
    this.publisher = new Publisher();
  }

  setClocks() {
    const clockLondon = new ClockLondon();
    const clockParis = new ClockParis();
    const clockLosAngeles = new ClockLosAngeles();
    const clockSydney = new ClockSydney();

    this.publisher.addSubscriber(clockLondon);
    this.publisher.addSubscriber(clockParis);
    this.publisher.addSubscriber(clockLosAngeles);
    this.publisher.addSubscriber(clockSydney);
  }

  displayClocks() {
    this.publisher.update();
  }
}

const main = new Main();
main.setClocks();
// main.displayClocks();

export default Main;
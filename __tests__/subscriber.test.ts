import ClockLondon from "../src/subscribers/clock-london";
import ClockLosAngeles from "../src/subscribers/clock-losangeles";
import ClockParis from "../src/subscribers/clock-paris";
import ClockSydney from "../src/subscribers/clock-sydney";

describe('subscribers', () => {

    it('London Clock', () => {
        console.log = jest.fn();
        const clock = new ClockLondon();
        clock.displayNowDate();
        expect((console.log as jest.Mock).mock.calls[0][0]).not.toBeNull();
    });

    it('Los Angeles Clock', () => {
        console.log = jest.fn();
        const clock = new ClockLosAngeles();
        clock.displayNowDate();
        expect((console.log as jest.Mock).mock.calls[0][0]).not.toBeNull();
    });

    it('Paris Clock', () => {
        console.log = jest.fn();
        const clock = new ClockParis();
        clock.displayNowDate();
        expect((console.log as jest.Mock).mock.calls[0][0]).not.toBeNull();
    });

    it('Sydney Clock', () => {
        console.log = jest.fn();
        const clock = new ClockSydney();
        clock.displayNowDate();
        expect((console.log as jest.Mock).mock.calls[0][0]).not.toBeNull();
    });
});
import {
    longForwardPayoff,
    shortForwardPayoff,
    forwardPriceNoIncome,
    forwardPriceKnownIncome,
    forwardPriceKnownYield,
    valueOfForwardNoIncome,
    valueOfForwardKnownIncome,
    valueOfForwardKnownYield
} from '../forward';

describe('Forward Functions', () => {
    describe('Payoff Functions', () => {
        it('should calculate long forward payoff correctly', () => {
            expect(longForwardPayoff({ spotPrice: 110, deliveryPrice: 100 })).toBe(10);
        });

        it('should calculate short forward payoff correctly', () => {
            expect(shortForwardPayoff({ spotPrice: 110, deliveryPrice: 100 })).toBe(-10);
        });
    });

    describe('Forward Price Functions', () => {
        it('should calculate forward price with no income correctly', () => {
            expect(forwardPriceNoIncome({ spotPrice: 100, timeToMaturity: 1, riskFreeRate: 0.05 })).toBeCloseTo(105.127, 3);
        });

        it('should calculate forward price with known income correctly', () => {
            expect(forwardPriceKnownIncome({ spotPrice: 100, timeToMaturity: 1, riskFreeRate: 0.05, lifetimeIncome: 5 })).toBeCloseTo(99.871, 3);
        });

        it('should calculate forward price with known yield correctly', () => {
            expect(forwardPriceKnownYield({ spotPrice: 100, timeToMaturity: 1, riskFreeRate: 0.05, averageYieldPerAnnum: 0.02 })).toBeCloseTo(103.045, 3);
        });
    });

    describe('Value of Forward Functions', () => {
        it('should calculate value of forward with no income correctly', () => {
            expect(valueOfForwardNoIncome({ spotPrice: 100, timeToMaturity: 1, riskFreeRate: 0.05, deliveryPrice: 95 })).toBeCloseTo(9.633, 3);
        });

        it('should calculate value of forward with known income correctly', () => {
            expect(valueOfForwardKnownIncome({ spotPrice: 100, timeToMaturity: 1, riskFreeRate: 0.05, deliveryPrice: 95, lifetimeIncome: 5 })).toBeCloseTo(4.633, 3);
        });

        it('should calculate value of forward with known yield correctly', () => {
            expect(valueOfForwardKnownYield({ spotPrice: 100, timeToMaturity: 1, riskFreeRate: 0.05, deliveryPrice: 95, averageYieldPerAnnum: 0.02 })).toBeCloseTo(7.653, 3);
        });
    });
});

import {
    discreteCompound,
    annualCompound,
    semiAnnualCompound,
    quarterlyCompound,
    continuousCompound,
    discreteToContinuous,
    continuousToDiscrete
} from '../interest';

describe('interest.ts', () => {

    describe('discreteCompound', () => {
        it('calculates discrete compounding correctly', () => {
            const result = discreteCompound({
                amount: 1000,
                years: 5,
                interestRate: 0.05,
                annualCompoundFrequency: 8
            });
            expect(result).toBeCloseTo(1283.0268, 3);
        });
    });

    describe('annualCompound', () => {
        it('calculates annual compounding correctly', () => {
            const result = annualCompound({
                amount: 1000,
                years: 5,
                interestRate: 0.05,
                annualCompoundFrequency: 1
            });
            expect(result).toBeCloseTo(1276.28, 2);
        });
    });

    describe('semiAnnualCompound', () => {
        it('calculates semi-annual compounding correctly', () => {
            const result = semiAnnualCompound({
                amount: 1000,
                years: 5,
                interestRate: 0.05,
                annualCompoundFrequency: 2
            });
            expect(result).toBeCloseTo(1280.08, 2);
        });
    });

    describe('quarterlyCompound', () => {
        it('calculates quarterly compounding correctly', () => {
            const result = quarterlyCompound({
                amount: 1000,
                years: 5,
                interestRate: 0.05,
                annualCompoundFrequency: 4
            });
            expect(result).toBeCloseTo(1282.04, 2);
        });
    });

    describe('continuousCompound', () => {
        it('calculates continuous compounding correctly', () => {
            const result = continuousCompound({
                amount: 1000,
                years: 5,
                interestRate: 0.05
            });
            expect(result).toBeCloseTo(1284.03, 2);
        });
    });

    describe('continousToDiscrete', () => {
        it('converts per annum with continous to quarterly', () => {
            const result = continuousToDiscrete({
                continuousInterestRate: 0.08,
                annualCompoundFrequency: 4
            });
            expect(result).toBeCloseTo(0.0808, 4);
        });
    });

    describe('discreteToContinous', () => {
        it('converts per annum with semi-annual compounding to continous', () => {
            const result = discreteToContinuous({
                discreteInterestRate: 0.1,
                annualCompoundFrequency: 2
            });
            expect(result).toBeCloseTo(0.09758, 4);
        });
    });
});

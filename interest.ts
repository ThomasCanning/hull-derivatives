export type ContinuousCompoundParams = {
    amount: number;                     // A
    years: number;                      // n years
    interestRate: number;               // R (annual interest rate)
}

export type DiscreteCompoundParams = {
    amount: number;                     // A
    years: number;                      // n years
    interestRate: number;               // R (annual interest rate)
    annualCompoundFrequency: number;    // m times per annum
}

export type ContinuousToDiscreteParams = {
    continuousInterestRate: number; // R_C
    annualCompoundFrequency: number; // m times per annum
}

export type DiscreteToContinuousParams = {
    discreteInterestRate: number; // R_M
    annualCompoundFrequency: number; // m times per annum
}

export function discreteCompound({amount, annualCompoundFrequency, years, interestRate}: DiscreteCompoundParams): number{
    return amount * Math.pow(1 + (interestRate / annualCompoundFrequency), annualCompoundFrequency * years);
}

export function annualCompound({amount, years, interestRate}: DiscreteCompoundParams): number{
    return discreteCompound({amount: amount, annualCompoundFrequency: 1, years: years, interestRate: interestRate});
}

export function semiAnnualCompound({amount, years, interestRate}: DiscreteCompoundParams): number{
    return discreteCompound({amount: amount, annualCompoundFrequency: 2, years: years, interestRate: interestRate});
}

export function quarterlyCompound({amount, years, interestRate}: DiscreteCompoundParams): number{
    return discreteCompound({amount: amount, annualCompoundFrequency: 4, years: years, interestRate: interestRate});
}

export function continuousCompound({amount, years, interestRate}: ContinuousCompoundParams): number{
    return amount * Math.exp(interestRate * years);
}

export function continuousToDiscrete({continuousInterestRate, annualCompoundFrequency}: ContinuousToDiscreteParams): number{
    return annualCompoundFrequency * (Math.exp(continuousInterestRate / annualCompoundFrequency) - 1);
}

export function discreteToContinuous({discreteInterestRate, annualCompoundFrequency}: DiscreteToContinuousParams): number{
    return annualCompoundFrequency * Math.log(1+(discreteInterestRate / annualCompoundFrequency));
}
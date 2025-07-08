export type ForwardPayoffParams = {
    spotPrice: number;     // S_T
    deliveryPrice: number; // K
}

export function longForwardPayoff({spotPrice, deliveryPrice}: ForwardPayoffParams): number{
    return spotPrice - deliveryPrice;
}

export function shortForwardPayoff({spotPrice, deliveryPrice}: ForwardPayoffParams): number{
    return -longForwardPayoff({spotPrice, deliveryPrice});
}

//-----------------------------------

export type ForwardPriceNoIncomeParams = {
    spotPrice: number;     // S_0
    timeToMaturity: number; // T
    riskFreeRate: number;  // r
}

export function forwardPriceNoIncome({spotPrice, timeToMaturity, riskFreeRate}: ForwardPriceNoIncomeParams): number {
    return spotPrice * Math.exp(riskFreeRate * timeToMaturity);
}

export type ForwardPriceKnownIncomeParams = {
    spotPrice: number;     // S_0
    timeToMaturity: number; // T
    riskFreeRate: number;  // r
    lifetimeIncome: number; // I
}

export function forwardPriceKnownIncome({spotPrice, timeToMaturity, riskFreeRate, lifetimeIncome}: ForwardPriceKnownIncomeParams): number {
    return (spotPrice - lifetimeIncome) * Math.exp(riskFreeRate * timeToMaturity);
}

export type ForwardPriceKnownYieldParams = {
    spotPrice: number;     // S_0
    timeToMaturity: number; // T
    riskFreeRate: number;  // T-year risk free rate, r
    averageYieldPerAnnum: number; // q
}

export function forwardPriceKnownYield({spotPrice, timeToMaturity, riskFreeRate, averageYieldPerAnnum}: ForwardPriceKnownYieldParams): number {
    return spotPrice * Math.exp((riskFreeRate - averageYieldPerAnnum) * timeToMaturity);
}

//--------------------------------------

export type ValueOfForwardNoIncomeParams = {
    spotPrice: number;     // S_0
    timeToMaturity: number; // T
    riskFreeRate: number;  // r
    deliveryPrice: number // K
}

export function valueOfForwardNoIncome({spotPrice, timeToMaturity, riskFreeRate, deliveryPrice}: ValueOfForwardNoIncomeParams): number {
    return spotPrice - deliveryPrice * Math.exp(-riskFreeRate * timeToMaturity);
}

export type ValueOfForwardKnownIncomeParams = {
    spotPrice: number;     // S_0
    timeToMaturity: number; // T
    riskFreeRate: number;  // r
    deliveryPrice: number // K
    lifetimeIncome: number; // I
}

export function valueOfForwardKnownIncome({spotPrice, deliveryPrice, riskFreeRate, timeToMaturity, lifetimeIncome}: ValueOfForwardKnownIncomeParams): number {
    return valueOfForwardNoIncome({spotPrice, timeToMaturity, riskFreeRate, deliveryPrice}) - lifetimeIncome
}

export type ValueOfForwardKnownYieldParams = {
    spotPrice: number;     // S_0
    timeToMaturity: number; // T
    riskFreeRate: number;  // r
    deliveryPrice: number // K
    averageYieldPerAnnum: number; // q
}

export function valueOfForwardKnownYield({spotPrice, deliveryPrice, riskFreeRate, timeToMaturity, averageYieldPerAnnum}: ValueOfForwardKnownYieldParams): number {
    return spotPrice * Math.exp(-averageYieldPerAnnum * timeToMaturity) - deliveryPrice * Math.exp(-riskFreeRate * timeToMaturity);
}

export {
    longForwardPayoff as longFuturesPayoff,
    shortForwardPayoff as shortFuturesPayoff
};
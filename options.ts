export type OptionPayoffParams = {
  strikePrice: number; // K
  finalPrice: number;  // S_T
}

export type OptionProfitParams = OptionPayoffParams & {
  optionPrice: number; // premium paid for the option
};

export function longEuropeanCallPayoff({strikePrice, finalPrice}: OptionPayoffParams): number
{
  return Math.max(0, finalPrice - strikePrice);
}

export function longEuropeanCallProfit( params: OptionProfitParams): number
{
  return longEuropeanCallPayoff(params) - params.optionPrice;
}

export function shortEuropeanCallPayoff(params: OptionPayoffParams): number{
  return -longEuropeanCallPayoff(params)
}

export function shortEuropeanCallProfit( params: OptionProfitParams): number
{
  return params.optionPrice - longEuropeanCallPayoff(params);
}

export function longEuropeanPutPayoff({strikePrice, finalPrice}: OptionPayoffParams): number
{
  return Math.max(0, strikePrice - finalPrice);
}

export function longEuropeanPutProfit(params: OptionProfitParams): number
{
  return longEuropeanPutPayoff(params) - params.optionPrice;
}

export function shortEuropeanPutPayoff( params: OptionPayoffParams): number{
  return -longEuropeanPutPayoff(params)
}

export function shortEuropeanPutProfit(params: OptionProfitParams): number
{
  return params.optionPrice - longEuropeanPutPayoff(params)
}
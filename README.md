# hull-derivatives

npm typescript package that implements the formulas and models from John Hull's Options, Futures, and Other Derivatives book. 

This package is currently **alpha** and a missing the majority of features.

## Features (current)

The library provides utility functions for:

### Options
- **Payoff calculations** for European call and put options (long and short positions)
- **Profit calculations** for European call and put options

### Forwards and Futures
- Payoff and value functions for **forward contracts** (long and short)
- Forward pricing with:
    - No income
    - Known cash income
    - Known dividend yield

### Interest Rate Calculations
- Discrete and continuous compounding
- Conversion between discrete and continuous interest rates

## Installation

```bash
npm install hull-derivatives
```

## Usage

```typescript
import { longEuropeanCallPayoff, continuousCompound } from "hull-derivatives";

// Long European Call Payoff
const payoff = longEuropeanCallPayoff({
  strikePrice: 100,
  finalPrice: 120
});
console.log(payoff);

// Continuous Compounding
const futureValue = continuousCompound({
  amount: 1000,
  years: 3,
  interestRate: 0.05
});
console.log(futureValue);
```
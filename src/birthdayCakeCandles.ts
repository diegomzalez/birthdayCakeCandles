/**
 * Temporal complexity -> O( n^2 )
 * Spacial complexity -> O( n )
 * Auxiliar space -> O( 4 )
 * @param candlesMount Cake candles
 * @returns the mount of times that the tallest candle repets
 */
export function birthdayCakeCandles(...candlesMount: Array<number>): number { // O( n )
  let tallestCandle: number = 0; // O( 1 )
  let tallestCandles: number = 0; // O( 1 )
  for (let i = 0; i < candlesMount.length; i++) { // O( 1 )
    if (tallestCandle < candlesMount[i]) tallestCandle = candlesMount[i];
  }
  for (let j = 0; j < candlesMount.length; j++) { // O( 1 )
    if (tallestCandle === candlesMount[j]) tallestCandles++;
  }
  return tallestCandles;
}

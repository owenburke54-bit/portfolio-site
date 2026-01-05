type TickerInfo = { price: number; name?: string; sector?: string };

// Simple deterministic-ish PRNG for reproducible mock prices across sessions
function hashString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
}

function pseudoRandom(seed: number): () => number {
  let s = seed || 1;
  return () => {
    // xorshift
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 10000) / 10000;
  };
}

const KNOWN: Record<string, { name: string; sector?: string; base: number }> = {
  AAPL: { name: "Apple Inc.", sector: "Technology", base: 190 },
  MSFT: { name: "Microsoft Corp.", sector: "Technology", base: 370 },
  VOO: { name: "Vanguard S&P 500 ETF", sector: "ETF", base: 480 },
  TSLA: { name: "Tesla, Inc.", sector: "Consumer Discretionary", base: 250 },
  NVDA: { name: "NVIDIA Corp.", sector: "Technology", base: 500 },
  BTCUSD: { name: "Bitcoin USD", sector: "Crypto", base: 65000 },
  ETHUSD: { name: "Ethereum USD", sector: "Crypto", base: 3300 },
  BND: { name: "Vanguard Total Bond Market ETF", sector: "Bond", base: 72 },
};

export async function fetchPricesForTickers(
  tickers: string[],
): Promise<Record<string, TickerInfo>> {
  const out: Record<string, TickerInfo> = {};
  for (const t of tickers) {
    const key = t.replace("-", "").toUpperCase();
    const known = KNOWN[key];
    const rng = pseudoRandom(hashString(key));
    const base = known?.base ?? 50 + Math.floor(rng() * 200);
    const dailyVol = Math.max(0.005, (rng() * 0.03)); // 0.5%..3% daily move
    const drift = (rng() - 0.5) * dailyVol;
    const price = Math.max(0.5, base * (1 + drift));
    out[key] = {
      price: Number(price.toFixed(2)),
      name: known?.name,
      sector: known?.sector,
    };
  }
  // simulate network delay
  await new Promise((r) => setTimeout(r, 200));
  return out;
}


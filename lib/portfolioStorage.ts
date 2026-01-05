import { AccountType, AssetClass, PortfolioSnapshot, PortfolioState, Position } from "./types";

export const STORAGE_KEY = "portfolio-tracker-state-v1";

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function loadState(): PortfolioState | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return safeParse<PortfolioState>(raw);
}

export function saveState(state: PortfolioState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getInitialState(): PortfolioState {
  return {
    profile: null,
    positions: [],
    snapshots: [],
    lastUpdated: undefined,
  };
}

export function valueForPosition(p: Position): number {
  const unitPrice = typeof p.currentPrice === "number" ? p.currentPrice : p.costBasisPerUnit;
  return unitPrice * p.quantity;
}

export function computeSnapshot(state: PortfolioState): PortfolioSnapshot {
  const now = new Date().toISOString();

  const byAssetClass = {} as Record<AssetClass, number>;
  const byAccountType = {} as Record<AccountType, number>;

  let totalValue = 0;
  let totalCost = 0;
  for (const pos of state.positions) {
    const value = valueForPosition(pos);
    totalValue += value;
    totalCost += pos.costBasisPerUnit * pos.quantity;
    byAssetClass[pos.assetClass] = (byAssetClass[pos.assetClass] ?? 0) + value;
    byAccountType[pos.accountType] = (byAccountType[pos.accountType] ?? 0) + value;
  }
  const totalGainLossDollar = totalValue - totalCost;
  const totalGainLossPercent = totalCost > 0 ? (totalGainLossDollar / totalCost) * 100 : 0;

  return {
    timestamp: now,
    totalValue,
    totalGainLossDollar,
    totalGainLossPercent,
    byAssetClass,
    byAccountType,
  };
}

export function withSnapshot(state: PortfolioState): PortfolioState {
  const snap = computeSnapshot(state);
  return {
    ...state,
    snapshots: [...state.snapshots, snap],
    lastUpdated: snap.timestamp,
  };
}

export function upsertPosition(state: PortfolioState, position: Position): PortfolioState {
  const idx = state.positions.findIndex((p) => p.id === position.id);
  const positions =
    idx === -1
      ? [...state.positions, position]
      : state.positions.map((p, i) => (i === idx ? position : p));
  const next: PortfolioState = { ...state, positions };
  return withSnapshot(next);
}

export function deletePosition(state: PortfolioState, id: string): PortfolioState {
  const positions = state.positions.filter((p) => p.id !== id);
  const next: PortfolioState = { ...state, positions };
  return withSnapshot(next);
}


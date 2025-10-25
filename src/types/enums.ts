export enum Symbols {
  banana = 1,
  blackberry = 2,
  cherry = 3
}
export type SymbolName = keyof typeof Symbols;

export const SymbolNames: SymbolName[] = Object.keys(Symbols)
  .filter(key => isNaN(Number(key))) as SymbolName[];
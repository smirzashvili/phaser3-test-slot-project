export enum Symbols {
    banana = 1,
    blackberry = 2,
    cherry = 3
}

export const SymbolNames = Object.keys(Symbols)
    .filter((key) => isNaN(Number(key))); 
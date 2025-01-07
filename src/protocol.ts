export interface feeStructure {
    stepOne: number;
    stepTwo: number;
    feeDivisorOne: number;
    feeDivisorTwo: number;
    feeDivisorThree: number;
  }
  
  export interface Balance {
    tokens: BoxAsset[];
    value: string;
  }
  
  export interface ErgoAssetInfo {
    name: string; // the full case-insensitive name of the asset
    displayName: string; // the full case-sensitive name of the asset
    symbol?: string; // the shortened version of the name
    tokenId: string;
    decimals: number;
    logo: string;
    dexPriceId: string;
    dexNft: string;
  }
  
  export interface collateralSettings {
    collateral: ErgoAssetInfo;
    DEXNFT: string;
    liquidationPenalty: number;
    liquidationThreshold: number;
    serializedPenaltyThreshold?: string;
    loanExpiration?: number;
  }
  
  export interface Quote {
    quoteNFT: string;
    quoteScript: string;
    maximumBorrowable: number;
    primarySupportedCollateral: collateralSettings;
    secondarySupportedCollateral: collateralSettings[];
  }
  
  export interface Pool {
    version: number;
    name: string;
    displayName: string;
    isToken: boolean;
  
    // Values which are common amongst all pools
    feeAddress: string;
    BorrowTokenDenomination: string; // Big Int? Probs reprsent as string
    LendTokenMultiplier: string; // Big Int?
    LiquidationThresholdDenomination: number;
    defaultBufferHeight: number;
    fees: feeStructure;
    LendTokenSupply: number;
    BorrowTokenSupply: number;
    InitializedPoolAmount: number;
  
    proxyLendScript: string;
    proxyWithdrawScript: string;
    proxyBorrowScript: string; // Possibly will be unique to pool instances
    proxyPartialRepayScript: string;
    proxyRepayScript: string;
  
    // Values which are unique to pool instances
    poolScript: string;
    collateralScript: string;
    repaymentScript: string;
  
    pooledAsset: ErgoAssetInfo;
    poolNFT: string;
    lendTokenId: string;
    borrowTokenId: string;
    interestNFT: string;
    settingsNFT: string;
    currentQuote?: Quote;
    historicQuote?: Quote[];
    collateralSupported?: collateralSettings[]; // v1
  }
  
  export interface LendPosition {
    // Sort of an example object
    assetLent: ErgoAssetInfo;
    amountLent: string; // BigInt
    profit: string;
    projected: string;
  }
  
  export interface borrowPosition {
    spendingNFT: string;
    assetBorrowed: ErgoAssetInfo;
    amountBorrowed: string; // BigInt
    totalOwed: string;
    quote: Quote;
    collateralLent: Balance;
    collateralValue: number;
    averagedThreshold: number;
    averagedPenalty: number;
  }
  
  export interface User {
    // All dynamic but just to give an idea of what this looks like
    addresses: string[];
    balance: Balance;
    lendPositions: LendPosition[];
    borrowPositions: borrowPosition[];
  }
  
  interface BoxAsset {
    tokenId: string;
    amount: number | bigint;
    index?: number;
    name?: string;
    decimals?: number;
    type?: string; // Example: "EIP-004"
  }
  
  interface AdditionalRegisters {
    R4?: Register;
    R5?: Register;
    R6?: Register;
    R7?: Register;
    R8?: Register;
    R9?: Register;
  }
  
  interface Register {
    serializedValue: string;
    sigmaType?: string; // Example: "SBoolean", "SInt", etc.
    renderedValue?: string; // Human-readable value
  }
  
  export interface Box {
    boxId: string;
    transactionId: string;
    blockId: string;
    value: number | bigint; // Use `bigint` if handling large values
    index: number;
    globalIndex: number;
    creationHeight: number;
    settlementHeight: number;
    ergoTree: string;
    ergoTreeConstants?: string;
    ergoTreeScript?: string;
    address: string;
    assets: BoxAsset[];
    additionalRegisters: AdditionalRegisters;
    spentTransactionId: string | null;
    mainChain: boolean;
  }
  
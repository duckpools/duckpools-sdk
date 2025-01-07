# DuckPools SDK

TypeScript SDK for DuckPools protocol containing type definitions and interfaces.

## Interfaces

### Core Protocol Interfaces

#### `feeStructure`
Fee configuration for pools:
- `stepOne`: number
- `stepTwo`: number
- `feeDivisorOne`: number
- `feeDivisorTwo`: number
- `feeDivisorThree`: number

#### `Balance`
Represents a balance of tokens:
- `tokens`: BoxAsset[]
- `value`: string

#### `ErgoAssetInfo`
Information about an Ergo asset:
- `name`: string - Full case-insensitive name
- `displayName`: string - Full case-sensitive name
- `symbol?`: string - Shortened version of name
- `tokenId`: string
- `decimals`: number
- `logo`: string
- `dexPriceId`: string
- `dexNft`: string

#### `collateralSettings`
Collateral configuration:
- `collateral`: ErgoAssetInfo
- `DEXNFT`: string
- `liquidationPenalty`: number
- `liquidationThreshold`: number
- `serializedPenaltyThreshold?`: string
- `loanExpiration?`: number

#### `Quote`
Quote information for borrowing:
- `quoteNFT`: string
- `quoteScript`: string
- `maximumBorrowable`: number
- `primarySupportedCollateral`: collateralSettings
- `secondarySupportedCollateral`: collateralSettings[]

#### `Pool`
Pool configuration and state:
- `version`: number
- `name`: string
- `displayName`: string
- `isToken`: boolean
- Common pool values:
  - `feeAddress`: string
  - `BorrowTokenDenomination`: string
  - `LendTokenMultiplier`: string
  - `LiquidationThresholdDenomination`: number
  - `defaultBufferHeight`: number
  - `fees`: feeStructure
  - `LendTokenSupply`: number
  - `BorrowTokenSupply`: number
  - `InitializedPoolAmount`: number
- Proxy scripts:
  - `proxyLendScript`: string
  - `proxyWithdrawScript`: string
  - `proxyBorrowScript`: string
  - `proxyPartialRepayScript`: string
  - `proxyRepayScript`: string
- Instance-specific values:
  - `poolScript`: string
  - `collateralScript`: string
  - `repaymentScript`: string
- Assets and NFTs:
  - `pooledAsset`: ErgoAssetInfo
  - `poolNFT`: string
  - `lendTokenId`: string
  - `borrowTokenId`: string
  - `interestNFT`: string
  - `settingsNFT`: string
  - `currentQuote?`: Quote
  - `historicQuote?`: Quote[]
  - `collateralSupported?`: collateralSettings[]

#### `LendPosition`
Lending position details:
- `assetLent`: ErgoAssetInfo
- `amountLent`: string
- `profit`: string
- `projected`: string

#### `borrowPosition`
Borrowing position details:
- `spendingNFT`: string
- `assetBorrowed`: ErgoAssetInfo
- `amountBorrowed`: string
- `totalOwed`: string
- `quote`: Quote
- `collateralLent`: Balance
- `collateralValue`: number
- `averagedThreshold`: number
- `averagedPenalty`: number

#### `User`
User state and positions:
- `addresses`: string[]
- `balance`: Balance
- `lendPositions`: LendPosition[]
- `borrowPositions`: borrowPosition[]

### Ergo-Specific Interfaces

#### `BoxAsset`
Asset in an Ergo box:
- `tokenId`: string
- `amount`: number | bigint
- `index?`: number
- `name?`: string
- `decimals?`: number
- `type?`: string

#### `AdditionalRegisters`
Box registers:
- `R4?` to `R9?`: Register

#### `Register`
Register contents:
- `serializedValue`: string
- `sigmaType?`: string
- `renderedValue?`: string

#### `Box`
Ergo box structure:
- `boxId`: string
- `transactionId`: string
- `blockId`: string
- `value`: number | bigint
- `index`: number
- `globalIndex`: number
- `creationHeight`: number
- `settlementHeight`: number
- `ergoTree`: string
- `ergoTreeConstants?`: string
- `ergoTreeScript?`: string
- `address`: string
- `assets`: BoxAsset[]
- `additionalRegisters`: AdditionalRegisters
- `spentTransactionId`: string | null
- `mainChain`: boolean

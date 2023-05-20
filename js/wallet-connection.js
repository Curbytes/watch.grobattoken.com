const TOKENABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountBNB","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountBOG","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"BuybackMultiplierActive","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_maxHoldAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newPair","type":"address"}],"name":"addNewPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"newholders","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"airdropArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"airdropPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowtrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"approveMax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"canTrade","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charityFeeReciever","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"tokenAddress","type":"address"}],"name":"claimtokensback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"devFeeReciever","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"developmentfee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"contract ManualDividendDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeDenominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"groAmount","type":"uint256"}],"name":"getEstimatedBnbForgro","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bnbAmount","type":"uint256"}],"name":"getEstimatedgroForBnb","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardDistributionMinAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getrewardDistributionTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pairToRemove","type":"address"}],"name":"removePair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revertRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardtoken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardtokenFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"}],"name":"sellTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sellpremium","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"charityWallet","type":"address"}],"name":"setCharityWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ManualDividendDistributor","name":"dist","type":"address"}],"name":"setDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"setDistributorSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"},{"internalType":"address","name":"devWallet","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityFee","type":"uint256"},{"internalType":"uint256","name":"_reflectionFee","type":"uint256"},{"internalType":"uint256","name":"_marketingFee","type":"uint256"},{"internalType":"uint256","name":"_devFee","type":"uint256"},{"internalType":"uint256","name":"_charityFee","type":"uint256"},{"internalType":"uint256","name":"_feeDenominator","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsDividendExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsFeeExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTxLimitExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ctrct","type":"address"}],"name":"setPresaleContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"newrewardToken","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"premium","type":"uint256"}],"name":"setSellPremium","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"divisor","type":"uint256"}],"name":"setSwapThresholdDivisor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"uint256","name":"_denominator","type":"uint256"}],"name":"setTargetLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"percentage","type":"uint256"}],"name":"setmaxholdpercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const TOKENADDRESS = "0xc1802bebc3ff1408cc6324caf600e680c3f5e8b7";
const TOKEN_SYMBOL = '$GRBT'

const NFTABI=[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"mintPrice","type":"uint256"},{"internalType":"uint256","name":"storagePrice","type":"uint256"},{"internalType":"uint256","name":"mintReflect","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"},{"internalType":"address","name":"admin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NftCreator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"URI","type":"string"}],"name":"SetcontractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_contractMeta","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_tokenIdTracker","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contractIBEP20","name":"TokenToAdd","type":"address"},{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"addTokenToBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"artistFeeReciever","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"artistPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewardsInToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"contractIDividendDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"Adds","type":"address[]"}],"name":"excludeFromrewardMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedFromRewards","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxSupply","outputs":[{"internalType":"uint256","name":"max","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMintPrice","outputs":[{"internalType":"uint256","name":"mintPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinted","outputs":[{"internalType":"uint256","name":"minted","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPayableToken","outputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getReflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReflectionBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getServiceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStoragePrice","outputs":[{"internalType":"uint256","name":"storagePrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isAutostaking","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mintMany","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"}],"name":"mintMultiples","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payableToken","outputs":[{"internalType":"contractIBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contractIBEP20","name":"token","type":"address"}],"name":"recoverStuckToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reflectionBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contractIBEP20","name":"TokenToRemove","type":"address"}],"name":"removeTokenToBuy","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contractIDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"setAdditionalAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"reciever","type":"address"}],"name":"setFeeReciever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"Allowed","type":"bool"}],"name":"setMintingEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contractIBEP20","name":"token","type":"address"}],"name":"setPayableToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokensToBuy","outputs":[{"internalType":"contractIBEP20","name":"buyableToken","type":"address"},{"internalType":"uint256","name":"percentage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividend","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReflectionVolume","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalrewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const NFTADDRESS="0x855f18f9902FC8e9FF14f487EC305dE406Bb1800"

const min_token = 0;
const min_nft = 0;

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal
let provider;
let selectedAccount;

const internationalNumberFormat = new Intl.NumberFormat('en-US')

function init() {
  var providerOptions = {
    // walletconnect: {
    //   package: WalletConnectProvider,
    //   options: {
    //     rpc: {
    //       1: "https://mainnet.infura.io/v3/",
    //     },
    //     network: 'mainnet'
    //   }
    // }
  };

  web3Modal = new Web3Modal({
    network: "mainnet",
    theme: "dark",
    cacheProvider: true, // optional
    providerOptions, // required
  });

  $("#min_token").html(internationalNumberFormat.format(min_token));
  $("#token_symbol").html(TOKEN_SYMBOL);
  $("#min_nft").html(internationalNumberFormat.format(min_nft));
}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  const chainId = web3.utils.hexToNumber(await web3.shh.net.getId());
  const accounts = await web3.eth.getAccounts();

  selectedAccount = accounts[0];

  if(chainId != 56){
    swal({
      title: "Invalid Network!",
      text: "Please connect to BSC Mainnet to continue.",
      icon: "error",
      button: false,
      closeOnClickOutside: false
    });
    return
  }
  else{
    try{
      swal.close();
    }catch (error) {
      console.log('no open swal found');
    }
  }

  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    const tokenContract = new web3.eth.Contract(TOKENABI,TOKENADDRESS);
    const tokenBalance = web3.utils.fromWei(await tokenContract.methods.balanceOf(address).call());
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);

    const nftContract = new web3.eth.Contract(NFTABI,NFTADDRESS);
    const nftOwned = await nftContract.methods.balanceOf(address).call()

    console.log('NFT Owned: ', nftOwned)

    if(nftOwned == 0 || min_token > tokenBalance){
      if($("#wallet_address").length == 0 && $("#CurrentTime").length == 0){
        swal("Requirements does not met!", "Sorry, you did not met the requirements to access this site, Please check your wallet if you have enough tokens and NFT.", "error");
        $("#connectButton").html("Requirements does not met");
        return
      }

      else if($("#wallet_address").length >= 1 || $("#CurrentTime").length >= 1){
        $.ajax({
          type: "POST",
          url: "includes/ajax-control.php",
          dataType: "text",
          data: {
            action: 'logoutProcess'
          },
          success: function(response) {
            localStorage.removeItem('isshow');
            localStorage.removeItem('closed');
            window.location.href = 'index.php?loggedout';
          }
        });
      }
    }
    else{
      $("#connectButton").html("Connected");
      console.log('enough balance')

      if($("#wallet_address").length == 0 && $("#CurrentTime").length == 0){
        const message = "Connecting to the server, Please wait..."
        swal({
          title: "Do not close the browser",
          button: false,
          closeOnClickOutside: false,
          text: message
        });
        $.ajax({
          type: "POST",
          url: "includes/ajax-control.php",
          dataType: "text",
          data: {
            action: 'webtvlogin'
          },
          success: function(response) {
            var obj = jQuery.parseJSON(response);

            if(obj.result == 'success'){
              window.location.href = 'dashboard.php';
            }
            else{
              $('#connectButton').html("<i class='fa fa-undo' aria-hidden='true'></i> Try again");
              $('#connectButton').removeAttr("disabled");
              swal('Connection Error!', "Unable to connect to server, Please try again later.", 'warning');
            }
          }
        });
      }

      if($("#wallet_address").length > 0) {
        var wallet_address_strip = (selectedAccount.slice(0, 4) + '...' + selectedAccount.slice(-4))
        console.log(wallet_address_strip)
        $('#wallet_address').html(wallet_address_strip);
      }
    }

    // $('#connectButton').hide();
    // $('#disconnectButton').show();
  });


  await Promise.all(rowResolvers);
}


async function refreshAccountData() {
  await fetchAccountData(provider);
}


/**
 * Connect wallet button pressed.
 */
async function onConnect() {

  try {
    provider = await web3Modal.connect();
    $('#connectButton').html("<i class='fa fa-spin fa-spinner'></i> Connecting");
    $('#connectButton').attr("disabled", true);
  } catch(e) {
    swal("Connection Error!", "Could not get a wallet connection", "error");
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    console.log('accountsChanged', accounts)

    if(accounts.length == 0){
      if($("#wallet_address").length >= 1 || $("#CurrentTime").length >= 1){
        $.ajax({
          type: "POST",
          url: "includes/ajax-control.php",
          dataType: "text",
          data: {
            action: 'logoutProcess'
          },
          success: function(response) {
            localStorage.removeItem('isshow');
            localStorage.removeItem('closed');
            window.location.href = 'index.php?loggedout';
          }
        });
      }

      $("#connectButton").html("Connect Wallet");
      $("#connectButton").removeAttr("disabled");
    }
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
  console.log("Killing the wallet connection", provider);
  if(provider.close) {
    await provider.close();
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;
}

window.addEventListener('load', async () => {
  init();
  onConnect();

  
  $("#connectButton").on("click", function(){
    onConnect();
  });

  $("#disconnectButton").on("click", function(){
    onDisconnect();
  });
});


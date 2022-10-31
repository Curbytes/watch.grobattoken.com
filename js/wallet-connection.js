const NFTABI = [{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountPairToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"}],"name":"AutoLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"packName","type":"string"}],"name":"PackageSubbed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"SubWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"AllfeeDenominator","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"DtvPackages","outputs":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"durationDays","type":"uint256"},{"internalType":"uint256","name":"packageID","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"isOnlySpecial","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NftStakingContract","outputs":[{"internalType":"contract INFTREWARDS","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxHoldAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newPair","type":"address"}],"name":"addNewPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ppvID","type":"uint256"},{"internalType":"uint256","name":"_USDTPriceNoDecimals","type":"uint256"},{"internalType":"uint256","name":"_durationDays","type":"uint256"},{"internalType":"string","name":"packName","type":"string"},{"internalType":"bool","name":"onlyTopHolders","type":"bool"}],"name":"addTVPackage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowtrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"approveMax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"authorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoLiquidityReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canTrade","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ID","type":"uint256"},{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"changeTvPackagePrice","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenAddress","type":"address"}],"name":"claimtokensback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"discountPercentHigh","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discountPercentLow","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCirculatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"USDTAmount","type":"uint256"}],"name":"getEstimatedTokenForUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSubbedUsersLength","outputs":[{"internalType":"uint256","name":"SubbedUsersLength","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialBuyFee","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialSellFee","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialTaxesEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityFee","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFee","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingFeeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pairToRemove","type":"address"}],"name":"removePair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ID","type":"uint256"}],"name":"removeTvPackage","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IDEXRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"walletToBlacklistArray","type":"address[]"}],"name":"setBlacklistArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"walletToBlacklist","type":"address"},{"internalType":"bool","name":"isBlacklistedBool","type":"bool"}],"name":"setBlacklistedStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"percentLowerMul10","type":"uint8"},{"internalType":"uint8","name":"percentHigherMul10","type":"uint8"}],"name":"setDiscountPackPercentages","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_autoLiquidityReceiver","type":"address"},{"internalType":"address","name":"_marketingFeeReceiver","type":"address"}],"name":"setFeeReceivers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_liquidityFeeMul10","type":"uint8"},{"internalType":"uint8","name":"_marketingFeeMul10","type":"uint8"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_initialBuyFeePercentMul10","type":"uint8"},{"internalType":"uint8","name":"_initialSellFeePercentMul10","type":"uint8"}],"name":"setInitialfees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsFeeExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"bool","name":"exempt","type":"bool"}],"name":"setIsTxLimitExempt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract INFTREWARDS","name":"ctrct","type":"address"}],"name":"setNFTContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"percentLowerMul10","type":"uint8"},{"internalType":"uint8","name":"percentHigherMul10","type":"uint8"}],"name":"setSpecialPackPercentages","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setSwapBackSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"divisor","type":"uint256"}],"name":"setSwapThresholdDivisor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"percentageMul10","type":"uint256"}],"name":"setmaxholdpercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"specialPercentHigh","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"specialPercentLow","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopInitialTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_packageID","type":"uint256"},{"internalType":"uint256","name":"durationVariant","type":"uint256"}],"name":"subToPackage","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"subbedUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalFee","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSubs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"adr","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"unauthorize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userSubs","outputs":[{"internalType":"uint256","name":"subbedTime","type":"uint256"},{"internalType":"uint256","name":"expiration_time","type":"uint256"},{"internalType":"uint256","name":"packageID","type":"uint256"},{"internalType":"uint256","name":"packageVariant","type":"uint256"},{"internalType":"bool","name":"wasDiscounted","type":"bool"},{"internalType":"bool","name":"isSpecial","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
const NFTADDRESS = "0xfeb6d5238ed8f1d59dcab2db381aa948e625966d";

const TOKEN_SYMBOL = '$DGTV'
const internationalNumberFormat = new Intl.NumberFormat('en-US')
const min_token = 1;

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal
let provider;
let selectedAccount;


function init() {
  var providerOptions = {
    // walletconnect: {
    //   package: WalletConnectProvider,
    //   options: {
    //     infuraId: "0a8c43124e91442c9bb1c470499f2dc0",
    //   }
    // }
  };

  web3Modal = new Web3Modal({
    network: "mainnet",
    theme: "dark",
    cacheProvider: true, // optional
    providerOptions, // required
  });
  $("#min_token").html(internationalNumberFormat.format(min_token))
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

  if(chainId != 1 && chainId != 5){
    swal({
      title: "Invalid Network!",
      text: "Please connect to Ethereum Mainnet to continue.",
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
    const cwiAddress = new web3.eth.Contract(NFTABI,NFTADDRESS);
    const cwiBalance = web3.utils.fromWei(await cwiAddress.methods.balanceOf(address).call());
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);

    if(min_token > cwiBalance){
      if($("#wallet_address").length == 0 && $("#CurrentTime").length == 0){
        swal("Insufucient Balance!", "Sorry, you don't have enough "+TOKEN_SYMBOL+" token in your wallet. you need atlest " + internationalNumberFormat.format(min_token) + " tokens to access this site.", "error");
        $("#connectButton").html("Insufucient wallet balance");
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


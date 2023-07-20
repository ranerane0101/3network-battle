//deploy.js
const main = async () => {
  
  //これにより、`MyEpicGame`コントラクトがコンパイルされます。
  //コントラクトがコンパイルされたら、コントラクトを扱うために必要なファイルがartifactsディレクトリの直下に生成されます。
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  //HardhatがローカルのEthereumネットワークを、コントラクトのためだけに作成します。
  const gameContract = await gameContractFactory.deploy(
    ["ZORO", "NAMI", "USOPP"], //キャラクターの名前
    [
      "https://i.imgur.com/TZEhCTX.png", //キャラクターの画像
      "https://i.imgur.com/WVAaMPA.png",
      "https://i.imgur.com/pCMZeiM.png",
    ],
    [100, 200, 300], //キャラクターのHP
    [100, 50, 25],//キャラクターの攻撃力
    "CROCODILE",//Bossの名前
    "https://i.imgur.com/BehawOh.png",//Bossの画像
    10000,//Bossのhp
    50//Bossの攻撃力
  );
  //ここでは、`nftGame`コントラクトが、
  //ローカルのブロックチェーンにデプロイされるまで待つ処理を行なっている。
  const nftGame = await gameContract.deployed();

  console.log("Contract deployed to:", nftGame.address);

};
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runMain();
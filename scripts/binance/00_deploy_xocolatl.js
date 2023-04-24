const { 
  network,
  setDeploymentsPath,
  setPublishPath, 
  publishUpdates
} = require("../utils");

const { VERSION } = require("./utils_binance");

const { deployXocolatl } = require("../tasks/deployXocolatl");

const deployBackedAsset = async () => {
  console.log("\n\n 📡 Deploying...\n");
  const xoc = await deployXocolatl();
}

const main = async () => {
  if (network !== "binance") {
    throw new Error("Set 'NETWORK=binance' in .env file");
  }
  await setDeploymentsPath(VERSION);
  await setPublishPath(VERSION);
  await deployBackedAsset();
  await publishUpdates();
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(`\n${error}\n`);
    process.exit(1);
  });
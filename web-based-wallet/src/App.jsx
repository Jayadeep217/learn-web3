import EthereumWallet from "./components/ethereumWallet";
import SeedPhraseCreation from "./components/SeedCreation";
import SolanaWallet from "./components/solanaWallet";

function App() {
  return (
    <>
      <div className="main">
        <SeedPhraseCreation />
        <div className="divWallets">
          <EthereumWallet />
          <SolanaWallet />
        </div>
      </div>
    </>
  );
}

export default App;

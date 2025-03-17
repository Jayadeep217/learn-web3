import { useState } from "react";
import { generateMnemonic } from "bip39";

const SeedPhraseCreation = () => {
  const [mnemonic, setmnemonic] = useState("");

  return (
    <>
      <div className="cntSeedCreation">
        <button
          className="btnCreateSeed"
          onClick={async () => {
            const mnemonicPhrase = await generateMnemonic();
            setmnemonic(mnemonicPhrase);
          }}
        >
          Create Seed Phrase
        </button>
        <div
        className="divDisplaySeed"
        >
        {mnemonic}
        </div>
      </div>
    </>
  );
}

export default SeedPhraseCreation;

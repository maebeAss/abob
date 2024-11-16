import { useState } from 'react'
import './App.css'
import { getTrustWalletInjectedProvider } from './common/blockchain/wallets/trustwallet'
import { contract } from './common/blockchain/contract'

function App() {
  const [count, setCount] = useState(0)


  const handleConnect = async () => {
    console.log("faes");
    const injectedProvider = await getTrustWalletInjectedProvider();
    console.log(injectedProvider);

    try {
      const account = await injectedProvider.request({
        method: "eth_requestAccounts",
      });

      console.log(account);
    
      console.log(account); // => ['0x...']
    } catch (e) {
      console.log(e);
      if (e.code === 4001) {
        console.error("User denied connection.");
      }
    }
  }


  const handleContract = async () => {
    const injectedProvider = await getTrustWalletInjectedProvider();
    contract(injectedProvider);
  }

  return (
    <>
      <header>
        <div className='buttons-sec'>
          <button onClick={handleConnect} className="button">Connect</button>
          <button onClick={handleContract} className="button">ладно</button>
        </div>
      </header>
      <main>
        <div className='outputs'>
          <h1></h1>
        </div>
      </main>
    </>
  )
}

export default App

import { getTrustWalletInjectedProvider } from './common/blockchain/wallets/trustwallet'
import { changeYourNet } from './common/blockchain/contract'
import { walletConnection } from './common/blockchain/contract'
import { checkBalance } from './common/blockchain/contract'

function App() {

    const handleConnect = async () => {
    walletConnection();
  }

  const changeNet = async () => {
    const injectedProvider = await getTrustWalletInjectedProvider();
    changeYourNet(injectedProvider);
  }

  const BalanceCheck = async () => {
    const injectedProvider = await getTrustWalletInjectedProvider();
    checkBalance(injectedProvider);
  }

  return (
    <>
      <header>
        <div className='buttons-sec'>
          <button onClick={handleConnect} className="button">Connect</button>
          <button onClick={changeNet} className="button">Change Your Net</button>
          <button onClick={BalanceCheck} className="button">Check all tokens</button>
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

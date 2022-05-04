import { ConnectButton, CryptoLogos, Info, Button, Modal, useNotification } from 'web3uikit';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import styles from "../styles/Home.module.css"
import SelectZodiac from '../components/SelectZodiac';
import { useState } from "react";
import { abi } from "../constants/abi"


export default function Home() {

  const { isAuthenticated, account } = useMoralis()
  const [zodiacSign, setZodiacSign] = useState("")
  const dispatch = useNotification()

  const handleAddNotification = () => {
    dispatch({
      type: "success",
      message: "NFT successfully created",
      title: "Success",
      position: "topL"
    })
  }

  const handleErrorNotification = () => {
    dispatch({
      type: "error",
      message: "Something went wrong with your request",
      title: "Error",
      position: "topL"
    })
  }

  const { runContractFunction, error } = useWeb3Contract({
    abi: abi,
    contractAddress: "0xC3463f047B1Cbcd7F959Ad90e18c33f88d856dE7",
    functionName: "mintNFT",
    params: {
      recipient: String(account),
      zodiacSign: String(zodiacSign)
    },
  })

  return (
    <>
      <div className={styles.home}>
        <div className={styles.topBanner}>
          <div className={styles.ethLogo}>
            <CryptoLogos
              chain="ethereum"
              size="48px"
            />
            <text>Horoscope NFT</text>
          </div>
          <div className={styles.connect}>
            <ConnectButton />
          </div>
        </div>
        <div className={styles.selectionContainer}>
          <div className={styles.mintButton}>
            <Button size='large' text='Mint your NFT' icon="plus"
              iconLayout="trailing"
              color="blue"
              theme="colored"
              type="button"
              disabled={!isAuthenticated}
              onClick={async () => {
                await runContractFunction()
                if (error) {
                  handleErrorNotification()
                } else {
                  handleAddNotification()
                }
              }}>
            </Button>
          </div>
          <div className={styles.zodiacSelection}>
            <SelectZodiac setZodiacSign={setZodiacSign} />
          </div>
          <div className={styles.nftPreview}>
            <text>{zodiacSign}</text>
          </div>
        </div>
      </div>

    </>
  )
}

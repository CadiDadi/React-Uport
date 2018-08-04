
// //original file code
// import { Connect } from 'uport-connect'
// export let uport = new Connect('TruffleBox')
// export const web3 = uport.getWeb3()

//modified for react-uport trufflebox tutorial, using new uPort dApp i created. 
//this connects our Trufflebox with the uPort decentralized identity platform

//added import object: SimpleSigner from uPort library 
import { Connect, SimpleSigner } from 'uport-connect'

//export let uport = new Connect('TruffleBox')

//credentials from uPort dApp created on website (in it's GET CODE drop-down)
export let uport = new Connect('React-Uport Box', {
    //enter uPort ID
    clientId: '  xxxxxxxxxxxx  ',
    //specify uPort network
    network: 'rinkeby',
    //enter uPort address
    signer: SimpleSigner('   xxxxxxxxxxxxxxxxx     ')
  })

export const web3 = uport.getWeb3()




import Web3 from "web3";
import Caver from "caver-js";
import fs from "fs";
//ganache
let web3 = new Web3(
  "https://eth-mainnet.g.alchemy.com/v2/8N_5J6OmKd6JqWtJbjhISbZNnmfXkhFr"
);
const caver = new Caver();
console.log(caver.klay.accounts.create().address);
let statues = true;
let i = 0;
while (statues) {
  let csv;
  let account = caver.klay.accounts.create();
  let a = await web3.eth.getBalance(account.address);
  console.log(account.address);
  console.log(a);
  console.log(i++);
  if (a > 0) {
    csv += `퍼블릭키 ${account.address} \r\n`;
    csv += `프라이빗키 ${account.privateKey}`;
    console.log(a);
    console.log("비밀키", account.privateKey);
    fs.writeFileSync("값이있다", csv);
    break;
  }
}
// const privateKey = account.privateKey
// const 암호화 = web3.eth.accounts.encrypt(privateKey,'password')
// console.log(암호화);
// const 복호화 = web3.eth.accounts.decrypt(암호화,'password')
// console.log(복호화);

// const txResult = await web3.eth.accounts.signTransaction(
//     {
//         to:'0x7812a260dc94F1D2395e9b71849F0b926b7E99C6',
//         value:'1000',
//         gas:1000,
//         gasPrice:10,
//         gasLimit:1000000,
//     },
//     privateKey
// )
// console.log(txResult)

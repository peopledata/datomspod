//开发测试 
/*
在host name为{ datomSpaceServer }的datomSpaceServer上创建新的datom
*/

/*
使用方法： 
  1）先运行datomSpaceServer.js；
  2) 在新的客户端，运行此程序。
*/

const { Client: datomsClient } = require('datomspace') 
const crypto  = require('hypercore-crypto')
const datomSpaceServer = 'datompod_Server_x' //本datomspod


async function start () {
  const c = new datomsClient({
    host: datomSpaceServer
  })

  // Ask for the RPC server status to see that everything works
  console.log(`连接 ${datomSpaceServer} ....`)
  console.log(await c.status()) 

  const myStore = c.corestore()

  const datom = myStore.get({
    valueEncoding: 'json'
  })

  console.log('Step 1: create my contact datoms\n')

  //Append 1 new blocks to the daomspace.

  
  
  await datom.append({
      name: 'jerry zhang',
      bank: 'bank of china',
      account: '92892xxxx',
      balance: '82988292002'
  })

/*
//生产大量core
  for (let i =0; i < 100; i++) {  
    await datom.append({
          index: i,
          value: i*12345
        })
    }



  /*
  //创建戴签名的datoms

  await datom.append({
    "数据类型": "电商消费记录",
    "数据控制者": 
      {
        "法人登记证书":"78shs99s8s8",
        "公司名称":"京东电子商务股份有限公司",
        "数据解析规范url":"www.jd.com/schemma/v0.01"
      }，
    "数据块":[
      {
        //消费数据
      }
    ]
  }
  
  })




  */
  console.log('Create the datoms is:')


  datom.createReadStream()
        .on('data', console.log)
        .on('end', console.log.bind(console, '\n(end)'))
  
 
  console.log('the private key is:', datom.key.toString('hex'))

  console.log('the discovery key is:', crypto.discoveryKey(Buffer.from(datom.key)).toString('hex'))

  c.network.configure(datom.discoveryKey, { announce: true, lookup: true })
  
  
}



start()

//创建一个datomspace server示例程序
/*
1）远程客户端可以创建、管理和访问datoms.
2）拥有private key的用户可以访问、添加datoms.
*/

const { Server : datomsServer } = require('datomspace')
const datomSpaceServer = 'datomspod_Server_xx'  //命名


async function start () {

  const Server = new datomsServer( {
    storage: './datomspace',  //存储本地的目录，可以更换为IPFS或其他PDS
    host: datomSpaceServer
})

  await Server.ready()

  console.log(`${datomSpaceServer} are ready...`)

  //todo: 以后添加verboes功能
  // Print client connection/disconnection events.
  Server.on('client-open', () => {
    console.log('(local) A datomspaceClient has connected')
  })
  Server.on('client-close', () => {
    console.log('(local) A datomsspaceClient has disconnected')
  })

  Server.on('client-open', () => {
    console.log('(remote) A datomspaceClient has connected')
  })
  Server.on('client-close', () => {
    console.log('(remote) A datomspaceClient has disconnected')
  })

  process.on('SIGINT', cleanup)

  async function cleanup () {
    console.log('datomspace servers are shutting down...')
    await Server.close()
  }


}



start()

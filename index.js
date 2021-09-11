const RPC = require('discord-rpc')
const rpc = new RPC.Client({ transport: 'ipc' })
const [CLIENT_ID, GAME_TITLE] = process.argv.slice(2);

rpc.on('ready', () => {
  console.log('CONNECTED!');
  rpc.setActivity({
    details: GAME_TITLE,
    startTimestamp: new Date(),
    largeImageKey: 'switch_logo'
  })
})

rpc.login({ clientId: CLIENT_ID })

rpc.on('disconnected', () => {
  console.log('DISCONNECTED!');
  process.exit();
})

process.on('SIGINT', () => {
  console.log('');
  rpc.destroy();
});

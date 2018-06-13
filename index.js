const Command = require('command')

module.exports = function LobbyCommand(d) {
    const command = Command(d)
    
    command.add(['lobby', 'logout'], () => { d.send('C_RETURN_TO_LOBBY', 1, {}) })
}

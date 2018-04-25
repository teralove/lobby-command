const Command = require('command');

module.exports = function LobbyCommand(dispatch) {
    const command = Command(dispatch);
    
    command.add(['lobby', 'logout'], () => {
        dispatch.toServer('C_RETURN_TO_LOBBY', 1, {});
    });
}

module.exports = function LobbyCommand(mod) {

    command.add(['lobby', 'logout'], () => {
        mod.send('C_RETURN_TO_LOBBY', 1, {});
    });
}

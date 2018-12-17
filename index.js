module.exports = function LobbyCommand(mod) {

    mod.command.add(['lobby', 'logout'], () => {
        mod.send('C_RETURN_TO_LOBBY', 1, {});
    });
}

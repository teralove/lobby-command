//vers 1.0

const format = require('./format.js');

module.exports = function LobbyCommand(dispatch) {

    dispatch.hook('C_CHAT', 1, function(event) {
		let command = format.stripTags(event.message).split(' ');
		
		if (command[0].toLowerCase() === '!lobby') {
			returnToLobby();
			return false;
		}
	});	
	
	function returnToLobby() {
		dispatch.toServer('C_RETURN_TO_LOBBY', 1, {});
	}
	
	// slash support, thanks to wuaw for snippet
	try {
		const Slash = require('slash')
		const slash = new Slash(dispatch)
		slash.on('lobby', args => returnToLobby())
	} catch (e) {
		// do nothing because slash is optional
	}

}
function getData(channel){
}

const params = {
	response_type: 'id_token',
	client_id : 'me3nb73juxgc9tbs2ehaxi1tkvz6df',
	redirect_uri : 'https://iijoshjenkins.github.io/Twitch-Contraption/',
	scope : 'viewing_activity_read openid channel_subscriptions'
},
      url = 'https://id.twitch.tv/oauth2/authorize?' + $.param(params);
let window.authed  = false;
$(function(){
	if(!authed){
		window.location = url;
		window.authed = true;
	};
});

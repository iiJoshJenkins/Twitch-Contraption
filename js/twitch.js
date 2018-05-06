function getData(channel){
}

const params = {
	response_type: 'id_token',
	client_id : 'me3nb73juxgc9tbs2ehaxi1tkvz6df',
	redirect_uri : 'https://iijoshjenkins.github.io/Twitch-Contraption/',
	scope : 'viewing_activity_read openid channel_subscriptions'
};

$(function(){
	$('.auth-link')[0].attr('href') = 'https://id.twitch.tv/oauth2/authorize' + '?' + $.param(params);
});

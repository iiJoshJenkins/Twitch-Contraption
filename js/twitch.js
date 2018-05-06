function getData(channel){
}


$(function(){
	const params = {
		response_type: 'id_token',
		client_id : 'me3nb73juxgc9tbs2ehaxi1tkvz6df',
		redirect_uri : 'file:///C:/Users/Joshu/Documents/twitchTest/index.html',
		scope : 'viewing_activity_read openid channel_subscriptions'
	};

	$.ajax({
		url : 'https://id.twitch.tv/oauth2/authorize' + '?' + $.param(params)
	}).done(function(data){
		console.log(data);
	});
});

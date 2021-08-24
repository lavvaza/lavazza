let DOMAIN = window.location.origin;
// let URI = "RM/projects/lavazza5/server/server.php";
let URI = "LavazzaWeb/lavazza5/server/server.php";

function make_ajax_request(url,data,callback,error)
{
	$.ajax({
		headers: {
			'Accept':'application/json',
			'_token': $('meta[name="csrf-token"]').attr('content'),
			"X-CSRF-TOKEN" :jQuery(`meta[name="csrf-token"]`). attr("content")
		},
		url : DOMAIN +'/'+url, // The php page with the functions
		type: 'POST',
		data: data,
		success: function (response)
		{
			if(callback)
			{
				callback(response);
			}
		},
		error: function (response)
		{
			if(error)
			{
				error(response);
			}
		}
	});
}


function api_call(data)
{
    let url = URI;
    make_ajax_request(url,
    data,
    function(response)
    {

	},
    function(error)
    {

	})
}


let BLEND = getUrlVars();
function getUrlVars()
{
	var hashes = window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ).split( '=' );
	return hashes[1];
}


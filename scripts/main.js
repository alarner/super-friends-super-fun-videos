'use strict';

$(document).ready(function() {

var $viewVideos = $('#view');
var $superVideos = $('#superVideos');

$viewVideos.click(function() {
	$superVideos.css({display: 'block'});
	console.log('It works!');
})


}) 
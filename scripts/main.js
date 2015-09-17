'use strict';

$(document).ready(function() {

var $viewVideos = $('#view');
var $superVideos = $('#superVideos');
var $form = $('#form');


$viewVideos.click(function() {
	$form.hide();
	$superVideos.css({display: 'block'});
	console.log('It works!');
})


}) 

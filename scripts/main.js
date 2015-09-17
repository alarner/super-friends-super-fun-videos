'use strict';

$(document).ready(function() {

    var $viewVideos = $('#view');
    var $superVideos = $('#superVideos');
    var $form = $('#form');
    var $description = $('#description');
    var $add = $('#add');

    $viewVideos.click(function() {
        $form.hide();
        $superVideos.show();
    })

    $add.click(function() {
    	$form.show();
    	$superVideos.hide();
    })


})

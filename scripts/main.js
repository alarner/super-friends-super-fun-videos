'use strict';

$(document).ready(function() {

    var $viewVideos = $('#view');
    var $superVideos = $('#superVideos');
    var $form = $('#form');
    var $description = $('#description');
    var $title = $('#title');
    var $videoEmbed = $('#videoEmbed')
    var $add = $('#add');

    $viewVideos.click(function() {
        $form.hide();
        $superVideos.show();

    })

    $add.click(function() {
    	$form.show();
    	$superVideos.hide();
    })

    $form.submit(function(e){
        e.preventDefault();
        var newTitle = $title.val();
        var newVideo = $videoEmbed.val();
        var newDesc = $description.val();

        console.log(newTitle);
        console.log(newVideo);
        console.log(newDesc);


    })


})

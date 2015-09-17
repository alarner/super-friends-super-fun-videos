'use strict';

$(document).ready(function() {

    var $viewVideos = $('#view');
    var $superVideos = $('#superVideos');
    var $form = $('#form');
    var $description = $('#description');
    var $title = $('#title');
    var $videoEmbed = $('#videoEmbed')
    var $add = $('#add');

    var url = 'http://tiyfe.herokuapp.com/collections/sfsfv';

    $viewVideos.click(function() {
        $form.hide();
        $superVideos.show();
        $.get(
            url,
            function(response){
                console.log(response);
            },
            'json'
        );
    })

    $add.click(function() {
        $form.show();
        $superVideos.hide();
    })


    $form.submit(function(e) {
        e.preventDefault();
        var newTitle = $title.val();
        var newVideo = $videoEmbed.val();
        var newDesc = $description.val();

        console.log(newTitle);
        console.log(newVideo);
        console.log(newDesc);

        $.post(
            url, 
            {
            	title: newTitle,
            	video: newVideo,
            	description: newDesc
            },
            function(response) {
            	console.log(response);
            },
            'json'
        )

    })


})

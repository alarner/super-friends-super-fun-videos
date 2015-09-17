(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    var $viewVideos = $('#view');
    var $superVideos = $('#superVideos');
    var $form = $('#form');
    var $description = $('#description');
    var $title = $('#title');
    var $videoEmbed = $('#videoEmbed');
    var $add = $('#add');

    var url = 'http://tiyfe.herokuapp.com/collections/sfsfv';

    $viewVideos.click(function () {
        $form.hide();
        $superVideos.show();
        $.get(url, function (response) {

            response.forEach(function (response, index) {
                $superVideos.append("<div>" + response.title + "</div><div>" + response.video + "</div><div>" + response.description + "</div>");
            }), 'json';
        });
    });

    $add.click(function () {
        $form.show();
        $superVideos.hide();
    });

    $form.submit(function (e) {
        e.preventDefault();
        var newTitle = $title.val();
        var newVideo = $videoEmbed.val();
        var newDesc = $description.val();

        console.log(newTitle);
        console.log(newVideo);
        console.log(newDesc);

        $.post(url, {
            title: newTitle,
            video: newVideo,
            description: newDesc
        }, function (response) {
            console.log(response);
        }, 'json');
    });
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
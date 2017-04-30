"use strict";

/**
 * Initialize Disqus, navbar, and title then remove announcement div.
 * @function
 * @param {string} key - The page identifier.
 * @param {string} title - The title of the page.
 */
const initSystem = function (key, title) {
    //Load Disqus
    disqusLoader("z2pp2z", "https://jspenguin2017.github.io/z2p/ChatCore.html?page=" + key, key, title);
    $("#title").html(title);
    document.title = title + " - AoE: CS alliances ZeRo2PaNiC Chat Board";
    //Remove announcement div
    $("#announcementContainer").remove();
};

/**
 * When the document is ready, draw archive pages, then check if the requested page exists.
 * If no page is requested, General Chatting Page 1 is loaded.
 * If the requested page does not exist, show an error message, otherwise, load the page.
 * @function
 * @listens $(document).ready
 */
$(document).ready(function () {
    //Constants
    const keys = ["chatting", "management", "issue", "offtopic", "coc"];
    const elemID = ["listChatting", "listManagement", "listIssue", "listOffTopic", "listCOC"];
    const titles = ["General Chatting", "Alliance Management", "Report Issue", "Off-Topic", "Clash of Clans"];
    //Crates a dropdown menu from template
    const dropdownTemplate = function (title, id) {
        return `<li class="dropdown"><a class ="dropdown-toggle" data-toggle="dropdown">${title}<span class ="caret"></span></a>` +
               `<ul class="dropdown-menu" id="${id}"></ul></li>`;
    };
    //Draw archive list
    for (let i = 0; i < keys.length; i++) {
        //Create dropdown menu
        $("#listPlaceholder").before(dropdownTemplate(titles[i], elemID[i]));
        //Get pages
        const pages = db[keys[i]];
        //Check if we have at least one page
        if (pages["page1"]) {
            let page = null, j = 1;
            //Put pages into list div
            while (page = pages["page" + j.toString()]) {
                $("#" + elemID[i]).append(`<li><a href="Archive.html?page=${keys[i]}-page${j}">Page ${j}</a></li>`);
                j++;
            }
        } else {
            //No page at all, remove matching list div
            $("#" + elemID[i]).append(`<li class="disabled"><a>No archived page</a></li>`);
        }
    }
    //Remove placeholder
    $("#listPlaceholder").remove();
    //Add dropdown animation
    //http://stackoverflow.com/questions/12115833/adding-a-slide-effect-to-bootstrap-dropdown
    $(".dropdown").on("show.bs.dropdown", function () {
        $(this).find(".dropdown-menu").first().stop(true, true).slideDown(200);
    });
    $(".dropdown").on("hide.bs.dropdown", function (e) {
        e.preventDefault();
        $(this).find(".dropdown-menu").first().stop(true, true).slideUp(200, (function () {
            $(this).removeClass("open");
            $(this).find(".dropdown-toggle").attr("aria-expanded", "false");
        }).bind(this));
    });
    //Check requested page and load it
    let key, page;
    if ((/^\?page\=.*\-.*/).test(window.location.search)) {
        //We got something that might be valid
        const data = window.location.search.split(/=|-/);
        key = data[1];
        page = data[2];
    } else {
        //It's not valid at all, assume no page requested
        key = "chatting";
        page = "page1";
    }
    //Check and load the page
    let data;
    if (data = db[key] && db[key][page]) {
        initSystem(data[0], data[1]);
    } else {
        //Page not found
        document.title = "Page not found - AoE: CS alliances ZeRo2PaNiC Chat Board";
        $("#disqusContainer").remove();
        //Load error div
        $("#announcement").load("page-not-found.html", function () {
            //Set debug string when error div is ready
            let searchVar = window.location.search;
            if (searchVar === undefined) {
                searchVar = "undefined";
            } else if (searchVar === null) {
                searchVar = "null";
            }
            $("#debugBox").append($("<p>").html(searchVar));
        }).parent().show();
    }
});

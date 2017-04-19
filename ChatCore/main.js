"use strict";

/**
 * Initialize Disqus, navbar, and title; remove announcement div when needed.
 * @function
 * @param {string} key - The page identifier.
 * @param {string} title - The title of the page.
 * @param {boolean} delAnno - Announcement div will be deleted if this variable is true.
 */
const initSystem = function (key, title, delAnno) {
    //Load Disqus
    disqusLoader("z2pp2z", "https://jspenguin2017.github.io/z2p/ChatCore.html?page=" + key, key, title);
    //Temporary patch: handle archive
    if (key === "chatting-page2") {
        key = "chatting";
    } else if (key === "chatting") {
        key = "archive;
    }
    //Set navbar and title
    $("#" + key).addClass("active");
    $("#title").html(title);
    document.title = title + " - AoE: CS alliances ZeRo2PaNiC Chat Board";
    //Remove announcement div if needed
    if (delAnno) {
        $("#announcementContainer").remove();
    }
};

/**
 * When the document is ready, check if the page exists, then load the page or show error message depending on the situation.
 * @function
 * @listens $(document).ready
 */
$(document).ready(function () {
    //Show announcement div
    $("#announcementContainer").show();
    //Check if the page exists and load if it does
    switch (window.location.search) {
        case "?page=chatting":
            initSystem("chatting-page2", "General Chatting", true);
            break;
        case "?page=management":
            initSystem("management", "Alliance Management", true);
            break;
        case "?page=issue":
            initSystem("issue", "Report Issue", false);
            //Load issue help div
            $("#announcement").load("ChatCore/issue_help.html");
            break;
        case "?page=offtopic":
            initSystem("offtopic", "Off-Topic", true);
            break;
        case "?page=coc":
            initSystem("coc", "Clash of Clans", true);
            break;
        case "?page=archive":
            initSystem("chatting", "General Chatting", true);
            break;
        default:
            //Does not exist
            document.title = "Error! - AoE: CS alliances ZeRo2PaNiC Chat Board";
            $("#disqusContainer").remove();
            //Load error div
            $("#announcement").load("ChatCore/error.html", function () {
                //Set debug string when error div is ready
                let searchVar = window.location.search;
                if (searchVar === undefined) {
                    searchVar = "undefined";
                } else if (searchVar === null) {
                    searchVar = "null";
                } else if (searchVar === "") {
                    searchVar = "Empty String";
                }
                $("#debugBox").append($("<p>").html(searchVar));
            });
            break;
    }
});

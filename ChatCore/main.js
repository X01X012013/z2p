"use strict";

/**
 * Initialize Disqus, navbar, and title then remove announcement div when needed.
 * @function
 * @param {string} key - The page identifier.
 * @param {string} title - The title of the page.
 * @param {boolean} delAnno - Announcement div will be deleted if this variable is true.
 */
const initSystem = function (key, title, delAnno) {
    //Load Disqus
    disqusLoader("z2pp2z", "https://jspenguin2017.github.io/z2p/ChatCore.html?page=" + key, key, title);
    //Remove page number from key
    if (key.includes("-")) {
        key = key.split("-")[0];
    }
    //Set navbar and title
    $("#" + key).addClass("active");
    $("#title").text(title);
    document.title = title + " - AoE: CS alliances ZeRo2PaNiC Chat Board";
    //Remove announcement div
    if (delAnno) {
        $("#announcementContainer").remove();
    }
};

/**
 * When the document is ready, check if the requested page exists.
 * If no page is requested, General Chatting is loaded.
 * If the requested page does not exist, show an error message, otherwise, load the page.
 * @function
 * @listens $(document).ready
 */
$(document).ready(function () {
    //Show announcement div
    $("#announcementContainer").show();
    //Check if the page exists and load if it does
    switch (window.location.search) {
        case "":
        case "?page=chatting":
            initSystem("chatting-page2", "General Chatting", true);
            break;
        case "?page=management":
            initSystem("management-page2", "Alliance Management", true);
            break;
        case "?page=issue":
            initSystem("issue", "Report Issue", false);
            //Load issue help div
            $("#announcement").load("ChatCore/issue-help.html");
            break;
        case "?page=offtopic":
            initSystem("offtopic", "Off-Topic", true);
            break;
        case "?page=coc":
            initSystem("coc", "Clash of Clans", true);
            break;
        default:
            //Does not exist
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
                $("#debugBox").append($("<p>").text(searchVar));
            });
            break;
    }
});

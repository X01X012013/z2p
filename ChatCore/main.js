const initSystem = function (key, msg, delAnno) {
    //Load Disqus
    disqusLoader("z2pp2z", "https://x01x012013.github.io/z2p/ChatCore.html?page=" + key, key, msg);
    //Set navbar and title
    $("#" + key).addClass("active");
    $("#msgH1").html(msg);
    document.title = msg + " - AoE: CS alliances ZeRo2PaNiC Chat Board";
    //Remove announcement div if needed
    if (delAnno) {
        $("#announcementContainer").remove();
    }
};
//Initialization
$(document).ready(function () {
    //Show announcement div
    $("#announcementContainer").show();
    //Check if the page exists
    switch (window.location.search) {
        case "?page=chatting":
            initSystem("chatting", "General Chatting", true);
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

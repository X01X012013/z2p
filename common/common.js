"use strict";

/**
 * When the document is ready, initialize the footer and Jump to Top button.
 * @function
 * @listens $(document).ready
 */
$(document).ready(function () {
    // Set Discord link
    const discordInviteKey = "VtnmVms";
    const discordElement = document.getElementById("discordLink");
    discordElement.href = "https://discord.gg/" + discordInviteKey;
    discordElement.textContent = "discord.gg/" + discordInviteKey;
    // Set footer
    $("#footer").text("Community Chat Board v2.2 by Hugo Xu");
    // Set jump to top button animation
    $("#jumpToTop").click(function (e) {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        e.preventDefault();
    });
});

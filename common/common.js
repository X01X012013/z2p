"use strict";

/**
 * When the document is ready, initialize the footer and Jump to Top button.
 * @function
 * @listens $(document).ready
 */
$(document).ready(function () {
    //Set footer
    $("#footer").text("Community Chat Board v2.0 by jspenguin2017");
    //Set jump to top button animation
    $("#jumpToTop").click(function (e) {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        e.preventDefault();
    });
});

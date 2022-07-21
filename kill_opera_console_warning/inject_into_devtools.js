if (/^(?:chrome-|opera-)?devtools:$/gi.test(window.location.protocol) === true) {
    var red_console_warning__kill_GO = function red_console_warning__kill_TO(run_count_F = 0) {
        if (run_count_F > 20) {
            return;
        }

        var devtools_custom_css_selector_T = ".console-view > div[class^='console-warning-' i]";

        var garbage_TA = document.querySelectorAll(devtools_custom_css_selector_T);

        for (let one_piece_of_garbage_TH of garbage_TA) {
            one_piece_of_garbage_TH.style.setProperty("display", "none", "important");
        }

        if (garbage_TA.length > 0) {
            return;
        }

        setTimeout(red_console_warning__kill_TO.bind(null, run_count_F + 1), 500);
    };

    red_console_warning__kill_GO(0);
}
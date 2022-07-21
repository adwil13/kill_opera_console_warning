## Repo based on stack overflow answer: https://stackoverflow.com/a/72485455
### All credits go to Sesame Tastelikecheese https://stackoverflow.com/users/19261873/sesame-tastelikecheese

# Kill Opera Console Warning
Opera extension to kill console warning in developer tools.

### Mostly copied from stackoverflow:
##ADD THE EXTENSION YOU JUST DOWNLOADED TO OPERA
1. Open a new tab and go to: "opera://extensions"
1. "Developer mode" should be enabled (top_right_corner)
1. Click on the "Load unpacked" button (near top_left_corner)
1. A file picker should appear, go find the "kill_opera_console_warning" folder
1. Go inside the folder, click "Select Folder"
1. Your extension should load.
1. Go through your extensions and find "AAA: Kill Opera Console Warning"
1. Tick the "Allow in Incognito" checkbox
1. Tick the "Allow access to search page results" checkbox

##LASTLY WE CHANGE ONE SETTING IN DEVTOOLS, RESTART OPERA AND THEN TEST IT
At this point if you refresh the DevTools it will appear the extension you created is working and the problem is solved. This extension uses two methods, one is a hack and the other is more robust. The hack will stop working one day. The robust method requires a setting to be changed.
1. Close all instances of DevTools that you have open.
1. Open a new normal window (not an incognito window).
1. Go to "about:blank"
1. Open DevTools (Ctrl+Shift+I)
1. Press F1 to open the PROPER settings
1. There should now be an enormous amount of settings with checkboxes
1. Click on the "Experiments" tab (top_left_corner with the word "Settings" nearby)
1. Tick the checkbox for "Allow extensions to load custom stylesheets" so that it is ENABLED. Probably the first checkbox at the very start of the list. (If it is not the first checkbox then use the search box with the word "Filter" next to it. Type in "stylesheets".)
1. Close the settings and close the DevTools. Exit Opera so that all windows are closed.
1. Wait 5 seconds and restart Opera.
1. Open a new window
1. Go to "about:blank"
1. Open DevTools (Ctrl+Shift+I)
1. Go to Console tab.
1. You may see the red warning briefly for half a second but it should disappear. If you do not see it, congratulations!
1. If you still see the warning OR it comes back then "Allow extensions to load custom stylesheets" has probably DISABLED itself.
1. Go back to step 6 of these instructions and make sure the checkbox is enabled. If it has DISABLED itself, then you will need to ENABLE it again and go through all the instructions from step 6-19 again. It may require a few tries (browser restarts) to get it to stick.

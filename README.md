# Simple Landing Page
This is the first project in FWD Professional Web Developer Scholarship.
## Features
- Linking the app.js file to index.html
    The script tag is added as child to the head tag while in the app.js, the window is listening for a DocumentContentLoaded event to start running the main program.
- The HTML contains 5 sections by default and new sections can be added using the 'Add Section' Button found in the bottom of the page.
- The Navigation through the page smoothly is provided by the navigation bar. As by clicking any button on the bar the window scrolls to the opposite section. This functionality is set depending on the offsetTop property which returns the top position relative to the parent and the scroll function.
- The section in view is distinguished. This functionality depends on the getBoundingClientRect() property which can be used to detect the nearest section to the top of the view.
- A 'Top' button is provided which allow scrolling to the top of the page.
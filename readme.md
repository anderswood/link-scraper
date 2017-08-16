## Overview
The program uses the Nightmare library to scrape the specified page, looking for anchor (`<a></a>`) html elements. The program console logs all anchor tags with the associated html text. The console log has the form: `<html text>: <url>`. In the case of non-text html elements wrapped in an anchor tag, e.g. an image setup as a clickable link, the program outputs the entire html element.

## Installation and Setup
* clone repo
* ensure Node.js is installed
* execute `node link-scraper.js` in the terminal
* exercise patience while the specified wait time elapses (default = 3.5s)

// ==UserScript==
// @name         YouTube Fix Invisible Comment
// @namespace    https://github.com/Shark-vil/youtube-fix-invisible-comment-color
// @version      1.0
// @description  Fixes invisible comment text input
// @author       Shark_vil
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
        #contenteditable-root.yt-formatted-string {
            color: white !important;
        }
    `;
    document.head.appendChild(style);
})();

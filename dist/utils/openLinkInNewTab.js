"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openLinkInNewTab = void 0;

var openLinkInNewTab = function openLinkInNewTab(link) {
  return window.open(link, '_blank', 'noreferrer noopener');
};

exports.openLinkInNewTab = openLinkInNewTab;
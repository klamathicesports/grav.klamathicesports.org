/*!
 * froala_editor v2.7.1 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {
/**
 * Persian
 */

$.FE.LANGUAGE['fa'] = {
  translation: {
    // Place holder
    "Type something": "\u0686\u06cc\u0632\u06cc \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f",

    // Basic formatting
    "Bold": "\u0636\u062e\u06cc\u0645",
    "Italic": "\u062e\u0637 \u06a9\u062c",
    "Underline": "\u062e\u0637 \u0632\u06cc\u0631",
    "Strikethrough": "\u062e\u0637 \u062e\u0648\u0631\u062f\u0647",

    // Main buttons
    "Insert": "\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646",
    "Delete": "\u062d\u0630\u0641 \u06a9\u0631\u062f\u0646",
    "Cancel": "\u0644\u063a\u0648",
    "OK": "\u0628\u0627\u0634\u0647",
    "Back": "\u0628\u0647 \u0639\u0642\u0628",
    "Remove": "\u0628\u0631\u062f\u0627\u0634\u062a\u0646",
    "More": "\u0628\u06cc\u0634\u062a\u0631",
    "Update": "\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc",
    "Style": "\u0633\u0628\u06a9",

    // Font
    "Font Family": "\u0642\u0644\u0645",
    "Font Size": "\u0627\u0646\u062f\u0627\u0632\u0647 \u0642\u0644\u0645",

    // Colors
    "Colors": "\u0631\u0646\u06af",
    "Background": "\u0632\u0645\u06cc\u0646\u0647 \u0645\u062a\u0646",
    "Text": "\u0645\u062a\u0646",
    "HEX Color": "شصت رنگ",

    // Paragraphs
    "Paragraph Format": "\u0642\u0627\u0644\u0628",
    "Normal": "\u0637\u0628\u06cc\u0639\u06cc - Normal",
    "Code": "\u062f\u0633\u062a\u0648\u0631\u0627\u0644\u0639\u0645\u0644\u0647\u0627 - Code",
    "Heading 1": "\u0633\u0631\u200c\u0635\u0641\u062d\u0647 1",
    "Heading 2": "\u0633\u0631\u200c\u0635\u0641\u062d\u0647 2",
    "Heading 3": "\u0633\u0631\u200c\u0635\u0641\u062d\u0647 3",
    "Heading 4": "\u0633\u0631\u200c\u0635\u0641\u062d\u0647 4",

    // Style
    "Paragraph Style": "\u067e\u0627\u0631\u0627\u06af\u0631\u0627\u0641 \u0633\u0628\u06a9",
    "Inline Style": "\u062e\u0637\u06cc \u0633\u0628\u06a9",

    // Alignment
    "Align": "\u0631\u062f\u06cc\u0641 \u0628\u0646\u062f\u06cc \u0646\u0648\u0634\u062a\u0647",
    "Align Left": "\u0686\u067e \u0686\u06cc\u0646",
    "Align Center": "\u0648\u0633\u0637 \u0686\u06cc\u0646",
    "Align Right": "\u0631\u0627\u0633\u062a \u0686\u06cc\u0646",
    "Align Justify": "\u0645\u0633\u0627\u0648\u06cc \u0627\u0632 \u0637\u0631\u0641\u06cc\u0646",
    "None": "\u0647\u06cc\u0686",

    // Lists
    "Ordered List": "\u0644\u06cc\u0633\u062a \u0634\u0645\u0627\u0631\u0647 \u0627\u06cc",
    "Unordered List": "\u0644\u06cc\u0633\u062a \u062f\u0627\u06cc\u0631\u0647 \u0627\u06cc",

    // Indent
    "Decrease Indent": "\u06a9\u0627\u0647\u0634 \u062a\u0648 \u0631\u0641\u062a\u06af\u06cc",
    "Increase Indent": "\u0627\u0641\u0632\u0627\u06cc\u0634 \u062a\u0648 \u0631\u0641\u062a\u06af\u06cc",

    // Links
    "Insert Link": "\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0644\u06cc\u0646\u06a9",
    "Open in new tab": "\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u062f\u0631 \u0628\u0631\u06af\u0647 \u062c\u062f\u06cc\u062f",
    "Open Link": "\u0644\u06cc\u0646\u06a9 \u0647\u0627\u06cc \u0628\u0627\u0632",
    "Edit Link": "\u0644\u06cc\u0646\u06a9 \u0648\u06cc\u0631\u0627\u06cc\u0634",
    "Unlink": "\u062d\u0630\u0641 \u0644\u06cc\u0646\u06a9",
    "Choose Link": "\u0644\u06cc\u0646\u06a9 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",

    // Images
    "Insert Image": "\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u062a\u0635\u0648\u06cc\u0631",
    "Upload Image": "\u0622\u067e\u0644\u0648\u062f \u062a\u0635\u0648\u06cc\u0631",
    "By URL": "URL \u062a\u0648\u0633\u0637",
    "Browse": "\u0641\u0647\u0631\u0633\u062a",
    "Drop image": "\u062a\u0635\u0648\u06cc\u0631 \u0631\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0628\u06cc\u0646\u062f\u0627\u0632\u06cc\u062f",
    "or click": "\u06cc\u0627 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f",
    "Manage Images": "\u0645\u062f\u06cc\u0631\u06cc\u062a \u062a\u0635\u0627\u0648\u06cc\u0631",
    "Loading": "\u0628\u0627\u0631\u06af\u06cc\u0631\u06cc",
    "Deleting": "\u062d\u0630\u0641",
    "Tags": "\u0628\u0631\u0686\u0633\u0628 \u0647\u0627",
    "Are you sure? Image will be deleted.": ".\u0622\u06cc\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f \u062a\u0635\u0648\u06cc\u0631 \u062d\u0630\u0641 \u062e\u0648\u0627\u0647\u062f \u0634\u062f",
    "Replace": "\u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u06a9\u0631\u062f\u0646",
    "Uploading": "\u0622\u067e\u0644\u0648\u062f",
    "Loading image": "\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u062a\u0635\u0648\u06cc\u0631",
    "Display": "\u0646\u0634\u0627\u0646 \u062f\u0627\u062f\u0646",
    "Inline": "\u062e\u0637\u06cc",
    "Break Text": "\u0634\u06a9\u0633\u062a\u0646 \u0627\u0633\u062a\u0631\u0627\u062d\u062a",
    "Alternate Text": "\u0645\u062a\u0646 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646",
    "Change Size": "\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0646\u062f\u0627\u0632\u0647",
    "Width": "\u0639\u0631\u0636",
    "Height": "\u0627\u0631\u062a\u0641\u0627\u0639",
    "Something went wrong. Please try again.": "\u0686\u06cc\u0632\u06cc \u0631\u0627 \u0627\u0634\u062a\u0628\u0627\u0647 \u0631\u0641\u062a\u002e \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f\u002e",
    "Image Caption": "عنوان تصویر",
    "Advanced Edit": "ویرایش پیشرفته",

    // Video
    "Insert Video": "\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0641\u0627\u06cc\u0644 \u062a\u0635\u0648\u06cc\u0631\u06cc",
    "Embedded Code": "\u06a9\u062f \u062c\u0627\u0633\u0627\u0632\u06cc \u0634\u062f\u0647",

    // Tables
    "Insert Table": "\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u062c\u062f\u0648\u0644",
    "Table Header": "\u0647\u062f\u0631 \u062c\u062f\u0648\u0644",
    "Remove Table": "\u062d\u0630\u0641 \u062c\u062f\u0648\u0644",
    "Table Style": "\u0633\u0628\u06a9 \u062c\u062f\u0648\u0644",
    "Horizontal Align": "\u062a\u0646\u0638\u06cc\u0645 \u0627\u0641\u0642\u06cc",
    "Row": "\u0633\u0637\u0631",
    "Insert row above": "\u062f\u0631\u062c \u0631\u062f\u06cc\u0641 \u062f\u0631 \u0628\u0627\u0644\u0627",
    "Insert row below": "\u0633\u0637\u0631 \u0632\u06cc\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",
    "Delete row": "\u062d\u0630\u0641 \u0633\u0637\u0631",
    "Column": "\u0633\u062a\u0648\u0646",
    "Insert column before": "\u062f\u0631\u062c \u0633\u062a\u0648\u0646 \u0642\u0628\u0644",
    "Insert column after": "\u062f\u0631\u062c \u0633\u062a\u0648\u0646 \u0628\u0639\u062f",
    "Delete column": "\u062d\u0630\u0641 \u0633\u062a\u0648\u0646",
    "Cell": "\u0633\u0644\u0648\u0644",
    "Merge cells": "\u0627\u062f\u063a\u0627\u0645 \u0633\u0644\u0648\u0644\u200c\u0647\u0627",
    "Horizontal split": "\u062a\u0642\u0633\u06cc\u0645 \u0627\u0641\u0642\u06cc",
    "Vertical split": "\u062a\u0642\u0633\u06cc\u0645 \u0639\u0645\u0648\u062f\u06cc",
    "Cell Background": "\u067e\u0633 \u0632\u0645\u06cc\u0646\u0647 \u0647\u0645\u0631\u0627\u0647",
    "Vertical Align": "\u0631\u062f\u06cc\u0641 \u0639\u0645\u0648\u062f\u06cc",
    "Top": "\u0628\u0627\u0644\u0627",
    "Middle": "\u0645\u062a\u0648\u0633\u0637",
    "Bottom": "\u067e\u0627\u06cc\u06cc\u0646",
    "Align Top": "\u062a\u0631\u0627\u0632 \u0628\u0627\u0644\u0627\u06cc",
    "Align Middle": "\u062a\u0631\u0627\u0632 \u0648\u0633\u0637",
    "Align Bottom": "\u062a\u0631\u0627\u0632 \u067e\u0627\u06cc\u06cc\u0646",
    "Cell Style": "\u0633\u0628\u06a9 \u0647\u0627\u06cc \u0647\u0645\u0631\u0627\u0647",

    // Files
    "Upload File": "\u0622\u067e\u0644\u0648\u062f \u0641\u0627\u06cc\u0644",
    "Drop file": "\u0627\u0641\u062a \u0641\u0627\u06cc\u0644",

    // Emoticons
    "Emoticons": "\u0634\u06a9\u0644\u06a9 \u0647\u0627",
    "Grinning face": "\u0686\u0647\u0631\u0647 \u067e\u0648\u0632\u062e\u0646\u062f",
    "Grinning face with smiling eyes": "\u0686\u0647\u0631\u0647 \u067e\u0648\u0632\u062e\u0646\u062f \u0628\u0627 \u0686\u0634\u0645\u0627\u0646 \u062e\u0646\u062f\u0627\u0646",
    "Face with tears of joy": "\u0686\u0647\u0631\u0647 \u0628\u0627 \u0627\u0634\u06a9 \u0634\u0627\u062f\u06cc",
    "Smiling face with open mouth": "\u0686\u0647\u0631\u0647 \u062e\u0646\u062f\u0627\u0646 \u0628\u0627 \u062f\u0647\u0627\u0646 \u0628\u0627\u0632",
    "Smiling face with open mouth and smiling eyes": "\u0686\u0647\u0631\u0647 \u062e\u0646\u062f\u0627\u0646 \u0628\u0627 \u062f\u0647\u0627\u0646 \u0628\u0627\u0632 \u0648 \u062e\u0646\u062f\u0627\u0646 \u0686\u0634\u0645",
    "Smiling face with open mouth and cold sweat": "\u0686\u0647\u0631\u0647 \u062e\u0646\u062f\u0627\u0646 \u0628\u0627 \u062f\u0647\u0627\u0646 \u0628\u0627\u0632 \u0648 \u0639\u0631\u0642 \u0633\u0631\u062f",
    "Smiling face with open mouth and tightly-closed eyes": "\u0686\u0647\u0631\u0647 \u062e\u0646\u062f\u0627\u0646 \u0628\u0627 \u062f\u0647\u0627\u0646 \u0628\u0627\u0632 \u0648 \u0686\u0634\u0645 \u062f\u0631\u0628\u062f\u0627\u0631",
    "Smiling face with halo": "\u0686\u0647\u0631\u0647 \u062e\u0646\u062f\u0627\u0646 \u0628\u0627 \u0647\u0627\u0644\u0647",
    "Smiling face with horns": "\u0686\u0647\u0631\u0647 \u062e\u0646\u062f\u0627\u0646 \u0628\u0627 \u0634\u0627\u062e",
    "Winking face": "\u062d\u0631\u06a9\u062a \u067e\u0630\u06cc\u0631\u06cc",
    "Smiling face with smiling eyes": "\u0686\u0647\u0631\u0647 \u062e\u0646\u062f\u0627\u0646 \u0628\u0627 \u0686\u0634\u0645 \u0644\u0628\u062e\u0646\u062f",
    "Face savoring delicious food": "\u0686\u0647\u0631\u0647 \u0644\u0630\u06cc\u0630 \u063a\u0630\u0627\u06cc \u062e\u0648\u0634\u0645\u0632\u0647",
    "Relieved face": "\u0686\u0647\u0631\u0647 \u0631\u0647\u0627",
    "Smiling face with heart-shaped eyes": "\u0686\u0647\u0631\u0647 \u062e\u0646\u062f\u0627\u0646 \u0628\u0627 \u0686\u0634\u0645 \u0628\u0647 \u0634\u06a9\u0644 \u0642\u0644\u0628",
    "Smiling face with sunglasses": "\u0686\u0647\u0631\u0647 \u062e\u0646\u062f\u0627\u0646 \u0628\u0627 \u0639\u06cc\u0646\u06a9 \u0622\u0641\u062a\u0627\u0628\u06cc",
    "Smirking face": "\u067e\u0648\u0632\u062e\u0646\u062f \u0686\u0647\u0631\u0647",
    "Neutral face": "\u0686\u0647\u0631\u0647 \u0647\u0627\u06cc \u062e\u0646\u062b\u06cc",
    "Expressionless face": "\u0686\u0647\u0631\u0647 \u0646\u0627\u06af\u0648\u06cc\u0627",
    "Unamused face": "\u0686\u0647\u0631\u0647 \u062e\u0648\u0634\u062d\u0627\u0644 \u0646\u06cc\u0633\u062a",
    "Face with cold sweat": "\u0686\u0647\u0631\u0647 \u0628\u0627 \u0639\u0631\u0642 \u0633\u0631\u062f",
    "Pensive face": "\u0686\u0647\u0631\u0647 \u0627\u0641\u0633\u0631\u062f\u0647",
    "Confused face": "\u0686\u0647\u0631\u0647 \u0627\u0634\u062a\u0628\u0627\u0647",
    "Confounded face": "\u0686\u0647\u0631\u0647 \u0633\u0631 \u062f\u0631 \u06af\u0645",
    "Kissing face": "\u0628\u0648\u0633\u06cc\u062f\u0646 \u0635\u0648\u0631\u062a",
    "Face throwing a kiss": "\u0686\u0647\u0631\u0647 \u067e\u0631\u062a\u0627\u0628 \u06cc\u06a9 \u0628\u0648\u0633\u0647",
    "Kissing face with smiling eyes": "\u0628\u0648\u0633\u06cc\u062f\u0646 \u0686\u0647\u0631\u0647 \u0628\u0627 \u0686\u0634\u0645 \u0644\u0628\u062e\u0646\u062f",
    "Kissing face with closed eyes": "\u0628\u0648\u0633\u06cc\u062f\u0646 \u0635\u0648\u0631\u062a \u0628\u0627 \u0686\u0634\u0645\u0627\u0646 \u0628\u0633\u062a\u0647",
    "Face with stuck out tongue": "\u0686\u0647\u0631\u0647 \u0628\u0627 \u06af\u06cc\u0631 \u06a9\u0631\u062f\u0646 \u0632\u0628\u0627\u0646",
    "Face with stuck out tongue and winking eye": "\u0686\u0647\u0631\u0647 \u0628\u0627 \u0632\u0628\u0627\u0646 \u06af\u06cc\u0631 \u06a9\u0631\u062f\u0646 \u0648 \u062d\u0631\u06a9\u062a \u0686\u0634\u0645",
    "Face with stuck out tongue and tightly-closed eyes": "\u0635\u0648\u0631\u062a \u0628\u0627 \u0632\u0628\u0627\u0646 \u06af\u06cc\u0631 \u06a9\u0631\u062f\u0646 \u0648 \u0686\u0634\u0645 \u0631\u0627 \u0645\u062d\u06a9\u0645 \u0628\u0633\u062a\u0647",
    "Disappointed face": "\u0686\u0647\u0631\u0647 \u0646\u0627 \u0627\u0645\u06cc\u062f",
    "Worried face": "\u0686\u0647\u0631\u0647 \u0646\u06af\u0631\u0627\u0646",
    "Angry face": "\u0686\u0647\u0631\u0647 \u0639\u0635\u0628\u0627\u0646\u06cc",
    "Pouting face": "\u0628\u063a \u0686\u0647\u0631\u0647",
    "Crying face": "\u06af\u0631\u06cc\u0647 \u0686\u0647\u0631\u0647",
    "Persevering face": "\u067e\u0627\u06cc\u062f\u0627\u0631\u06cc \u0686\u0647\u0631\u0647",
    "Face with look of triumph": "\u0686\u0647\u0631\u0647 \u0628\u0627 \u0646\u06af\u0627\u0647\u06cc \u0627\u0632 \u067e\u06cc\u0631\u0648\u0632\u06cc",
    "Disappointed but relieved face": "\u0646\u0627 \u0627\u0645\u06cc\u062f \u0627\u0645\u0627 \u0622\u0633\u0648\u062f\u0647 \u0686\u0647\u0631\u0647",
    "Frowning face with open mouth": "\u0627\u062e\u0645 \u0635\u0648\u0631\u062a \u0628\u0627 \u062f\u0647\u0627\u0646 \u0628\u0627\u0632",
    "Anguished face": "\u0686\u0647\u0631\u0647 \u0646\u06af\u0631\u0627\u0646",
    "Fearful face": "\u0686\u0647\u0631\u0647 \u062a\u0631\u0633",
    "Weary face": "\u0686\u0647\u0631\u0647 \u062e\u0633\u062a\u0647",
    "Sleepy face": "\u0686\u0647\u0631\u0647 \u062e\u0648\u0627\u0628 \u0622\u0644\u0648\u062f",
    "Tired face": "\u0686\u0647\u0631\u0647 \u062e\u0633\u062a\u0647",
    "Grimacing face": "\u0627\u0634 \u0686\u0647\u0631\u0647",
    "Loudly crying face": "\u0646\u062f\u0627\u06cc\u06cc \u0631\u0633\u0627 \u06af\u0631\u06cc\u0647 \u0686\u0647\u0631\u0647",
    "Face with open mouth": "\u0686\u0647\u0631\u0647 \u0628\u0627 \u062f\u0647\u0627\u0646 \u0628\u0627\u0632",
    "Hushed face": "\u0686\u0647\u0631\u0647 \u0633\u06a9\u0648\u062a",
    "Face with open mouth and cold sweat": "\u0686\u0647\u0631\u0647 \u0628\u0627 \u062f\u0647\u0627\u0646 \u0628\u0627\u0632 \u0648 \u0639\u0631\u0642 \u0633\u0631\u062f",
    "Face screaming in fear": "\u0686\u0647\u0631\u0647 \u062c\u06cc\u063a \u062f\u0631 \u062a\u0631\u0633",
    "Astonished face": "\u0686\u0647\u0631\u0647 \u0634\u06af\u0641\u062a \u0632\u062f\u0647",
    "Flushed face": "\u0686\u0647\u0631\u0647 \u0628\u0631\u0627\u0641\u0631\u0648\u062e\u062a\u0647",
    "Sleeping face": "\u062e\u0648\u0627\u0628 \u0686\u0647\u0631\u0647",
    "Dizzy face": "\u0686\u0647\u0631\u0647 \u062f\u06cc\u0632\u06cc",
    "Face without mouth": "\u0686\u0647\u0631\u0647 \u0628\u062f\u0648\u0646 \u062f\u0647\u0627\u0646",
    "Face with medical mask": "\u0686\u0647\u0631\u0647 \u0628\u0627 \u0645\u0627\u0633\u06a9 \u0647\u0627\u06cc \u067e\u0632\u0634\u06a9\u06cc",

    // Line breaker
    "Break": "\u0634\u06a9\u0633\u062a\u0646",

    // Math
    "Subscript": "\u067e\u0627\u064a\u064a\u0646 \u0646\u0648\u064a\u0633",
    "Superscript": "\u0628\u0627\u0644\u0627 \u0646\u06af\u0627\u0634\u062a",

    // Full screen
    "Fullscreen": "\u062a\u0645\u0627\u0645 \u0635\u0641\u062d\u0647",

    // Horizontal line
    "Insert Horizontal Line": "\u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0646 \u0627\u0641\u0642\u06cc \u062e\u0637",

    // Clear formatting
    "Clear Formatting": "\u062d\u0630\u0641 \u0642\u0627\u0644\u0628 \u0628\u0646\u062f\u06cc",

    // Undo, redo
    "Undo": "\u0628\u0627\u0637\u0644 \u06a9\u0631\u062f\u0646",
    "Redo": "\u0627\u0646\u062c\u0627\u0645 \u062f\u0648\u0628\u0627\u0631\u0647",

    // Select all
    "Select All": "\u0627\u0646\u062a\u062e\u0627\u0628 \u0647\u0645\u0647",

    // Code view
    "Code View": "\u0645\u0634\u0627\u0647\u062f\u0647 \u06a9\u062f",

    // Quote
    "Quote": "\u0646\u0642\u0644 \u0642\u0648\u0644",
    "Increase": "\u0627\u0641\u0632\u0627\u06cc\u0634 \u062f\u0627\u062f\u0646",
    "Decrease": "\u0646\u0632\u0648\u0644 \u06a9\u0631\u062f\u0646",

    // Quick Insert
    "Quick Insert": "\u062f\u0631\u062c \u0633\u0631\u06cc\u0639",

    // Spcial Characters
    "Special Characters": "کاراکترهای خاص",
    "Latin": "لاتین",
    "Greek": "یونانی",
    "Cyrillic": "سیریلیک",
    "Punctuation": "نقطه گذاری",
    "Currency": "واحد پول",
    "Arrows": "فلش ها",
    "Math": "ریاضی",
    "Misc": "متاسفم",

    // Print.
    "Print": "چاپ",

    // Spell Checker.
    "Spell Checker": "بررسی کننده غلط املایی",

    // Help
    "Help": "کمک",
    "Shortcuts": "کلید های میانبر",
    "Inline Editor": "ویرایشگر خطی",
    "Show the editor": "ویرایشگر را نشان بده",
    "Common actions": "اقدامات مشترک",
    "Copy": "کپی کنید",
    "Cut": "برش",
    "Paste": "چسباندن",
    "Basic Formatting": "قالب بندی اولیه",
    "Increase quote level": "افزایش سطح نقل قول",
    "Decrease quote level": "کاهش میزان نقل قول",
    "Image / Video": "تصویر / ویدئو",
    "Resize larger": "تغییر اندازه بزرگتر",
    "Resize smaller": "تغییر اندازه کوچکتر",
    "Table": "جدول",
    "Select table cell": "سلول جدول را انتخاب کنید",
    "Extend selection one cell": "انتخاب یک سلول را گسترش دهید",
    "Extend selection one row": "یک ردیف را انتخاب کنید",
    "Navigation": "جهت یابی",
    "Focus popup / toolbar": "تمرکز پنجره / نوار ابزار",
    "Return focus to previous position": "تمرکز بازگشت به موقعیت قبلی",

    // Embed.ly
    "Embed URL": "آدرس جاسازی",
    "Paste in a URL to embed": "یک URL برای جاسازی کپی کنید",

    // Word Paste.
    "The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?": "محتوای جا به جا از یک سند Word Microsoft می آید. آیا می خواهید فرمت را نگه دارید یا پاک کنید؟",
    "Keep": "نگاه داشتن",
    "Clean": "پاک کن",
    "Word Paste Detected": "کلمه رب تشخیص داده شده است"
  },
  direction: "rtl"
};

}));

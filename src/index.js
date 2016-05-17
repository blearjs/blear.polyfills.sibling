'use strict';

if (typeof CLASSICAL !== 'undefined' && CLASSICAL === true) {
    exports.prevElement = function (el) {
        while (el = el.previousSibling) {
            if (el.nodeType === 1) {
                return el;
            }
        }

        return null;
    };
    var nextElement = exports.nextElement = function (el) {
        while (el = el.nextSibling) {
            if (el.nodeType === 1) {
                return el;
            }
        }

        return null;
    };
    exports.firstElementChild = function (el) {
        var firstChild = el.firstChild;

        if (!firstChild) {
            return firstChild;
        }

        if (firstChild.nodeType === 1) {
            return firstChild;
        }

        return nextElement(firstChild);
    };
} else {
    exports.prevElement = function (el) {
        return el.previousElementSibling;
    };
    exports.nextElemen = function (el) {
        return el.nextElementSibling;
    };
    exports.firstElementChild = function (el) {
        return el.firstElementChild;
    };
}
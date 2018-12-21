/**
 * @param  {String} textVal A text to copy to clipboard
 * @returns {boolean} true if succeeded. Otherwise false
 */
function copyTextToClipboard(textVal) {
    let copyFrom = document.createElement("textarea");
    copyFrom.textContent = textVal;

    let bodyElm = document.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);

    copyFrom.select();
    let retVal = document.execCommand('copy');
    bodyElm.removeChild(copyFrom);

    return retVal;
}

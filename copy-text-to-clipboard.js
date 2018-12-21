/**
 * @param  {String} textVal A text to copy to clipboard
 * @returns {boolean} true if succeeded. Otherwise false
 */
function copyTextToClipboard(doc, textVal) {
    let copyFrom = doc.createElement("textarea");
    copyFrom.textContent = textVal;

    let bodyElm = doc.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);

    copyFrom.select();
    let retVal = doc.execCommand('copy');
    bodyElm.removeChild(copyFrom);

    return retVal;
}

function removeIt(theInput, theIt) {
    var theRegex = new RegExp(theIt, "gi");
    return theInput.replace(theRegex, '');
}

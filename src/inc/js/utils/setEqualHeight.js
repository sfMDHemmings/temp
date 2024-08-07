export const setEqualHeight = className => {
    var elements = document.getElementsByClassName(className);
    var maxHeight = 0;

    // Reset the height for all elements in case of window resize
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = 'auto';
    }

    // Find the maximum height
    for (var i = 0; i < elements.length; i++) {
        var height = elements[i].offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    }

    // Set the maximum height for all elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = maxHeight + 'px';
    }
};

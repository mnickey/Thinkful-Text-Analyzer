// create a map of all the unique words
function uniqueWords(text) {
    var uniqueWords = [];
    text = wordsOnly(text).replace(/\s/g, ',').trim().split(',');
    for (i = 0; i < text.length; i++) {
        if (uniqueWords.indexOf(text[i]) <= -1) {
            if (text[i].length > 0) {
                uniqueWords.push(text[i]);
            }
        }
    }
    // console.log(uniqueWords);
    return uniqueWords.length;
}

// Create a count of all words by creating an array and counting the elements that are not blank.
function wordCount(enteredText) {
    var words = wordsOnly(enteredText).replace(/\s/g, ',').trim().split(',');
    count = 0;
    for (i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            count += 1;
        }
    }
    return count;
}

// find the average length of sentences entered
function averageSentenceLength(text) {
    var sentence = text.split('\n');
    return (letterCount(text) / sentence.length);
}

// find the average length of the text entered
function avgWords(text) {
    // console.log(letterCount(text).toFixed(2) / wordCount(text).toFixed(2));
    return (letterCount(text) / wordCount(text)).toFixed(2);
}

// HELPER FUNCTIONS
// Count the number of letters
function letterCount(text) {
    var letters = wordsOnly(text).replace(/\s/g, "");
    console.log(letters);
    return(letters.length);
}

// populate the html
function renderHtml(value, selector) {
    $(selector).text(value);
}

// create a string from text that has no punctuation
function wordsOnly(text) {
    return text.replace(/[(),^\n]/g, ' ');
}

// Main Function
// watch form submission
function submitForm() {
    $('.js-form').submit(function (event) {
        event.preventDefault();
        var enteredText = $(this).find('#user-text').val();
        renderHtml(wordCount(enteredText), '.js-word-count');
        renderHtml(uniqueWords(enteredText), '.js-unique-words');
        renderHtml(avgWords(enteredText), '.js-avg-word-length');
        renderHtml(averageSentenceLength(enteredText), '.js-avg-sentence-length');
        $("dl").removeClass("hidden");
    });
}

// initalize the document
$(document).ready(function () {
    submitForm();
});

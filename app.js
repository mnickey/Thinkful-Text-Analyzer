// split text into words array for word count
function splitText(text) {
    var regex = /[^a-zA-Z]\n/gmyu;
    var subst = ` `;
    text = text.replace(/[^a-zA-Z]\n/gmyu, ' ');
    console.log(text);
    return text.length;
}

function textToTokens(text) {
    console.log("Creating tokens...");
    text = text.toLowerCase().split(/[ ,!.";:-]+/).sort();
    console.log(text);
    console.log(text.toString().split( /(\r\n|\n|\r)/gm," " ));
    return text;
}

function uniqueWords(text) {
    var uniqueWord = new Set(cleanText(text));
    console.log('Unique Words: ' + uniqueWord.length);
    return uniqueWord;
}

// generate report
function report(text) {
    var wordCount = splitText(text);
    $('.js-report').find($(".js-word-count").text(wordCount));
    var tokens = textToTokens(text);
    var uniqueWord = uniqueWords(tokens);
    $('.js-report').find($('.js-unique-words').text(uniqueWord.length));
    $('.js-report').removeClass('hidden');
}

// clean entered text of newlines & carriage returns
function cleanText(text) {
    return text.toString().replace(/\r?\n|\r/g, "");
}

// watch form submission
function submitForm() {
    // console.log("In the submit form function");
    $('.js-form').submit(function (event) {
        event.preventDefault();
        // get text
        var enteredText = $(this).find('#user-text').val();
        enteredText = cleanText(enteredText);
        report(enteredText);
    });
}

// initalize the document
$(document).ready(function () {
    // console.log( "ready!" );
    submitForm();
});

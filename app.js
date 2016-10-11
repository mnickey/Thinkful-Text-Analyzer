// split text into words array for word count
function splitText(text) {
    var regex = /[^a-zA-Z]\n/gmyu;
    var subst = ` `;
    text = text.replace(regex, subst);
    // console.log(text);
    return text.length;
}


// function uniqueWords(text) {
//     var uniqueWord = [];
//     for (var i = 0; i < cleanText(text).length; i++) {
//         if (uniqueWord.indexOf(cleanText(text)[i]) === -1) {
//             uniqueWord.push(cleanText(text)[i]);
//         }
//     }
//     console.log("Unique words: " + uniqueWord);
// }

// generate report
function report(text) {
    var wordCount = splitText(text);
    // var uniqueWords = uniqueWords(text);
    $('.js-report').find($(".js-word-count").text(wordCount));
    $('.js-report').removeClass('hidden');
}

// clean entered text of newlines & carriage returns
function cleanText(text) {
    return text.replace(/\r?\n|\r/g, "");
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

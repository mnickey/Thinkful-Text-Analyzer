// generate report
function report(text) {
    $('.js-text-report'.removeClass('hidden'));
}

// clean entered text
function cleanText(text) {
    return text.replace(/\r?\n|\r/g, "");
}

// watch form submission
function submitForm() {
    $('.js-form').submit(function(event) {
        event.preventDefault();
        // get text
        var enteredText = $(this).find('#user-text').value();
        cleanText(enteredText);
        report(enteredText);
    });
}

// initalize the document
$( document ).ready(function() {
    // console.log( "ready!" );
    submitForm();
});

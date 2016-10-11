// generate report
function report(text) {
    $('.js-text-report'.removeClass('hidden'));
}

// clean entered text
function cleanText(text) {
    console.log("Here I am");
    return text.replace(/\r?\n|\r/g, "");
}

// watch form submission
function submitForm() {
    console.log("In the submit form function");
    $('.js-form').submit(function(event) {
        event.preventDefault();
        // get text
        var enteredText = $(this).find('#user-text').value();
        enteredText = cleanText(enteredText);
        report(enteredText);
    });
}

// initalize the document
$( document ).ready(function() {
    console.log( "ready!" );
    submitForm();
});

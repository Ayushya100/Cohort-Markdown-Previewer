// Document Selectors to manipulate DOM
const input = document.getElementById('markdownInput');
const preview = document.getElementById('preview');

marked.setOptions({
    gfm: true,
    breaks: true,
    highlight: function(code, lang) {
        return hljs.highlightAuto(code).value;
    }
});

// Function to be called to update the markdown data
const updatePreview = () => {
    const markdownInput = input.value;
    preview.innerHTML = marked.parse(markdownInput);
}

// Function to be called to clear the input & preview fields on page reload or user clicks the button
const clearText = () => {
    input.value = '';
    preview.innerHTML = '';
}

// Event emitter function to be called when user inputs the markdown data
input.addEventListener('input', updatePreview);

// Immediate execution of functions on loading the script
clearText();

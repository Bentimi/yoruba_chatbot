const chatInput = document.getElementById('chat-input');

document.addEventListener('DOMContentLoaded', function() {
    // const input = document.getElementById('chat-input');

    chatInput.addEventListener('keydown', function(event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default behavior (form submission)

            // Insert newline character at cursor position
            const { selectionStart, selectionEnd, value } = input;
            const newValue = value.substring(0, selectionStart)
                            + '\n'
                            + value.substring(selectionEnd);

            // Update input value and cursor position
            input.value = newValue;
            input.setSelectionRange(selectionStart + 1, selectionStart + 1);
        }
    });
});
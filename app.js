document.querySelector('.command-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = e.target.value.trim().toLowerCase();  // Convert to lowercase and trim spaces
        const terminal = document.querySelector('.terminal');
        const commandLine = document.querySelector('.command-line');
        
        // Create and append a new command output before the input
        const output = document.createElement('p');
        output.classList.add('output');
        output.textContent = `user@rrapp>> ${e.target.value}`;
        terminal.insertBefore(output, commandLine);

        if (command === 'clear') {
            // Remove all previous output elements except the welcome message
            const outputs = terminal.querySelectorAll('.output');
            outputs.forEach(output => {
                if (output !== terminal.querySelector('.welcome')) {
                    output.remove();
                }
            });

            // Clear the input field
            e.target.value = '';  
        } else {
            // Reset the input field after command is entered
            e.target.value = '';  // Clear the input field
        }

        // Keep the prompt always at the top of the command line and the input field below
        const promptMessage = document.querySelector('.prompt') || document.createElement('span');
        promptMessage.classList.add('prompt');
        promptMessage.textContent = 'user@rrapp>> ';
        commandLine.innerHTML = ''; // Clear the previous prompt
        commandLine.appendChild(promptMessage);
        commandLine.appendChild(e.target); // Re-append the input field

        // Keep focus on the input field to accept new commands
        e.target.focus();
    }
});
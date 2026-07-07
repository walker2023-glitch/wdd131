document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const input = document.getElementById('ai-input');
    const output = document.getElementById('chat-output');
    const button = document.getElementById('execute-btn');
    const suggestedBtns = document.querySelectorAll('.query-btn');

    // Function to handle the chat simulation
    const simulateResponse = (text) => {
        // Create User Message Div
        const userDiv = document.createElement('div');
        userDiv.className = 'chat-message';
        userDiv.innerHTML = `<span class="usr-tag">[USR]:</span><span>${text}</span>`;
        output.appendChild(userDiv);

        // Auto-scroll to bottom
        output.scrollTop = output.scrollHeight;

        // Simulate processing delay for System Message
        setTimeout(() => {
            const sysDiv = document.createElement('div');
            sysDiv.className = 'chat-message';
            sysDiv.innerHTML = `<span class="sys-tag">[SYS]:</span><span>Querying archive for "${text.substring(0, 15)}...". Analysis indicates high competency in low-level systems and statistical modeling at Stanford. Detailed module data available on request.</span>`;
            
            output.appendChild(sysDiv);
            output.scrollTop = output.scrollHeight; // Auto-scroll to bottom again
        }, 800);
    };

    // Execute Button Click
    button.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            simulateResponse(input.value);
            input.value = ''; // Clear input field
        }
    });

    // Pressing 'Enter' inside the input field
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            simulateResponse(input.value);
            input.value = ''; // Clear input field
        }
    });

    // Make the suggested query buttons functional
    suggestedBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove the quotes around the suggested text
            let text = e.target.innerText.replace(/"/g, ''); 
            simulateResponse(text);
        });
    });
});
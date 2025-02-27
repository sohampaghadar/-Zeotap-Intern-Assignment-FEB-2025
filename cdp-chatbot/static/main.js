function askQuestion() {
    const platform = document.getElementById("platform").value;
    const question = document.getElementById("question").value;
    const responseDiv = document.getElementById("response");

    if (!question.trim()) {
        responseDiv.innerHTML = "<p style='color: red;'>Please enter a question.</p>";
        return;
    }

    fetch("/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ platform: platform, query: question })
    })
    .then(response => response.json())
    .then(data => {
        responseDiv.innerHTML = `<p><strong>Chatbot:</strong> ${data.response}</p>`;
    })
    .catch(error => {
        responseDiv.innerHTML = "<p style='color: red;'>Error connecting to the chatbot.</p>";
    });
}

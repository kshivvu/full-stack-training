const API_KEY = "YOUR_API_KEY";

const chatBox = document.getElementById("chatBox");

async function sendMessage(){

    const input = document.getElementById("userInput");
    const userText = input.value;

    if(userText.trim() === "") return;

    chatBox.innerHTML += `<div class="user"><b>User:</b> ${userText}</div>`;

    input.value = "";

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                contents:[
                    {
                        parts:[{text:userText}]
                    }
                ]
            })
        }
    );

    const data = await response.json();

    const aiText = data.candidates[0].content.parts[0].text;

    chatBox.innerHTML += `<div class="bot"><b>Gemini:</b> ${aiText}</div>`;

}
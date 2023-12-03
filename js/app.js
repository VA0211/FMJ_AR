const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let messages = [];

app.post('/send-message', (req, res) => {
    const { sender, message } = req.body;

    if (sender && message) {
        messages.push({ sender, message });
        res.status(200).json({ success: true });
    } else {
        res.status(400).json({ success: false, error: 'Invalid data' });
    }
});

app.get('/download-messages', (req, res) => {
    const data = JSON.stringify(messages);

    fs.writeFile('messages.json', data, 'utf8', (err) => {
        if (err) {
            res.status(500).json({ success: false, error: 'Error writing to file' });
        } else {
            res.download('messages.json');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

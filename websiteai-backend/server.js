const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // CORS 허용
app.use(express.json());

app.post('/ask', async (req, res) => {
  const userInput = req.body.message;
  try {
    const response = await axios.post(
      'http://localhost:1234/v1/chat/completions',
      {
        model: 'deepseek',
        messages: [{ role: 'user', content: userInput }],
        temperature: 0.7,
        max_tokens: 500,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error communicating with DeepSeek API');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
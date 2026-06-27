const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

app.get('/', (req, res) => {
  res.send('Backend API is Running Successfully!');
});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success:false, message:'Name and Email are required' });
  }

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);

  res.status(201).json({
    success:true,
    message:'User Added Successfully',
    data:newUser
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

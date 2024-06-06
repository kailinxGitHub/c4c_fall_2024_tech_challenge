import express from 'express';
import cors from 'cors';
import { uploadData } from './firebase.js';

const app = express();
const port = 3000;

app.use(cors());

// TODO: temp, remove
app.get('/okk', (req, res) => {
    const data = { message: 'Hello from the backend!' };
    res.send(data);
});

// TODO: temp, remove
app.post('/test', async (req, res) => {
    const data1 = {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA'
    };

    await uploadData(data1);
    return 'Data uploaded';
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { uploadData } from './firebase.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO: temp, remove
app.get('/okk', (req, res) => {
    const data = { message: 'Hello from the backend!' };
    res.send(data);
});

app.post('/uploadData', async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        logoSource: req.body.logoSource,
        active: req.body.active,
    };
    console.log('Data:', data);
    await uploadData(data);
    return 'Data uploaded';
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

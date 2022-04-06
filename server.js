import app from './api/app.js';

const port = 9001;

app.listen(port, () => {
    console.log(`Server runnning at port ${port}`);
});
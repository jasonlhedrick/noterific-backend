const app = require('./app.js');
const port = 4000;

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})

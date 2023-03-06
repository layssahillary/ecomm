const app = require('./src/app.js');

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
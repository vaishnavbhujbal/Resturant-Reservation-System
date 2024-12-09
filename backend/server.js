import app from"./app.js";

app.listen(process.env.PORT, () => {
    console.log(`Server Runnng On Port ${process.env.PORT}`);
});
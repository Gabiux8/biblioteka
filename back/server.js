const mongoose = require("mongoose");
const app = require("./app");

const DB =
  "mongodb+srv://gabija:NT9yuUPGkc2WGKG@cluster0.ylccmhm.mongodb.net/library?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB connected");
  });

const port = 3005;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

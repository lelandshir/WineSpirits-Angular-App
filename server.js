const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const port = 3000;

app.use(express.json());
app.use(express.static(`public`));

mongoose.connect(`mongodb://localhost:27017/drinks`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false,
});

mongoose.connection.once(`open`, () => {
  console.log(`connected to mongod...`);
});

app.listen(port, () => {
  console.log(`MadShir is listening on ${port}`);
});

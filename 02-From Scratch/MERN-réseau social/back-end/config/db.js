const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.pgdxx.mongodb.net/mern-project",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    }
  )
  .then(() => console.log("connected to mongoDb"))
  .catch((err) => console.log("failed to connect to mongodb", err));

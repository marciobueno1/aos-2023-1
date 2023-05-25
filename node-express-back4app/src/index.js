import "dotenv/config";
import cors from "cors";
import express from "express";

import models, { sequelize } from "./models";
import routes from "./routes";

console.log("Hello Node.js project.");
console.log(process.env.MY_SECRET);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin("rwieruch"),
  };
  next();
});

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

const port = process.env.PORT || 3000;
const eraseDatabaseOnSync = process.env.ERASE_DATABASE_ON_SYNC === "true";

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    await createUsersWithMessages();
  }

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});

const createUsersWithMessages = async () => {
  await models.User.create(
    {
      username: "rwieruch",
      messages: [
        {
          text: "Published the Road to learn React",
        },
      ],
    },
    {
      include: [models.Message],
    }
  );

  await models.User.create(
    {
      username: "ddavids",
      messages: [
        {
          text: "Happy to release ...",
        },
        {
          text: "Published a complete ...",
        },
      ],
    },
    {
      include: [models.Message],
    }
  );
};

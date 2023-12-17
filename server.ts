import app from "./app";
import { sequelize } from "./config/db";

const port = process.env.PORT || 8080;

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Running on port ${port}
    to access the api docs go to http://localhost:${port}/api-docs
    `);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

import app from "./app";

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Running on port ${port}
  to access the api docs go to http://localhost:${port}/api-docs
  `);
});

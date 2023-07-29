// // src/app.ts
// import express from 'express';

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, TypeScript and Express!');
// });


// export default app;

import express from 'express'
const app = express()
const PORT = 3000
app.use(express.json())
app.get("/", (req, res) => {
  res.send("hello")
})
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
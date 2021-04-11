const express = require('express');

const router = express.Router();

router.get("/", async (request, response) => {
  return response.status(200).send('Hello, Devlink world!!');
});

module.exports = router;

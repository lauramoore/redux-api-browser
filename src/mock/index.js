const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.end('{"Hello": "World!"}');
});

const app = express();
app.use(router);
app.listen(3111);



module.exports = router;

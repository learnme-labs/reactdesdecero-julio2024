var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/:user', function(req, res, next) {
  let tweets = [
    {
      _id: "669ffb3cb0319f4861a92fa2",
      username: "@oskrmarolv",
      account: {
        firstname: "Oscar",
        lastname: "Marquez"
      },
      createAt: "01-01-2024",
      content: "Hola mundo !! Este es mi primer tweet 😎"
    },
    {
      _id: "669ffb3cb0319f4861a92fa4",
      username: "@oskrmarolv",
      account: {
        firstname: "Oscar",
        lastname: "Marquez"
      },
      createAt: "01-01-2024",
      content: "Hola mundo !! Este es mi segundo tweet 😱"
    }
  ];

  return res.json(tweets);
});

module.exports = router;

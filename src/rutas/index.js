const { Router } = require('express');

const router = new Router();



router.get('/' , (req , res) => {
    res.json({"titulo" :  "ejemplo de API REST con node.js"});
});

module.exports = router;
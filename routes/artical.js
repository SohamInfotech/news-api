const express = require('express');
const to = require('../controller/artical');
const au = require('../middlelware/Authchek');  // Corrected the spelling to "middleware"

const router = express.Router();

router.post('/createartical',au.tokenSecure,to.createartical);
router.get('/showartical',au.tokenSecure, to.showartical); 
router.delete('/delete/:id',to.delete);
router.patch('/updete/:id',to.updete);

module.exports = router;

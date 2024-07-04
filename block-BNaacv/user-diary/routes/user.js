const express = require('express');
let router = express.Router();
router.get('/new', (req, res) => {
  res.render('form');
});
router.post('/', (req, res) => {
  let userdata = req.body;
  res.send(userdata);
});
router.get("/:id",(req,res)=>{
    let userid = req.params.id;
    res.findById(userid);
    
})
module.exports = router;

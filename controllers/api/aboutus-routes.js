const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('aboutus', { layout: 'main' })
});
module.exports = router;
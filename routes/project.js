var express = require('express');
var router = express.Router();
require()

router.get('/', (req, res, next) => {
    res.render('projects/list-projects')
})

router.get('/project/:id', (req, res, next) => {
    const projectId = req.params.id
} )


module.exports = router
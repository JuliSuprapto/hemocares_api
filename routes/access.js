const router = require('express').Router()
const accessController = require('../controller/access.js')
const multer = require('multer')
const fs = require('fs')

var storage = multer.diskStorage({
    filename : function (req, file, cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        cb(null, Date.now() + ext);
    },
    destination : function (req, file, cb) {
        cb(null, './img')
    }
})

var upload = multer({storage : storage}).single("profilephoto")

router.post('/registrasi', (req, res) => {
    accessController.registrasi(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.post('/login', (req, res) => {
    accessController.login(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/completeData/:id", upload, (req, res) => {
    accessController.lengkapiDataUser(req.params.id, req.body, req.file.filename)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.put("/updateUser/:id", upload, (req, res) => {
    accessController.updateDataUser(req.params.id, req.body, req.file.filename)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/getdataUser", (req, res) => {
    accessController.getDataUser()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.get("/getdataUser/:id", (req, res) => {
    accessController.getDataUserId(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

module.exports = router
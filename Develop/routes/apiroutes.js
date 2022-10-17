const router = require('express').Router()
const store = require('../db/store')
const path = require('path')
const {notes} = require('../db/db.json')


router.get('/notes', (req,res) => {
    let allnotes = notes
    res.json(allnotes)
})

router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString()
    const note = postnote(req.body, notes)
    res.json(note)
})
const fortunes = require('./../data/fortunes.json');
const fs = require('fs');

const writeFortunes = json => fs.writeFile('./data/fortunes.json', JSON.stringify(json), err =>console.log(err));

module.exports = {
    getFortunes: (req, res) => {
        res.json(fortunes);
    },

    getFortune: (req, res) => {
        res.json(fortunes.find(f => f.id == req.params.id));
    },

    getRandomFortune: (req, res) => {
        res.json(fortunes[Math.floor(Math.rand(0,1) * fortunes.length)]);
    },

    addFortune : (req, res) => {
        const { message, lucky_number, spirit_animal } = req.body;

        const new_fortunes = fortunes.concat({ id: fortunes.length+1,  message, lucky_number, spirit_animal });

        writeFortunes(new_fortunes)

        res.json(new_fortunes);
    },

    updateFortune: (req, res) =>{
        const id = req.params.id;

        const old_fortune = fortunes.find(f => f.id == id);

        ['message','lucky_number','spirit_animal'].forEach(key => {
            if(req.body[key]) old_fortune[key] = req.body[key];
        });

        writeFortunes(fortunes);

        res.json(fortunes);
    },

    deleteFortune: (req, res) => {
        const { id } = req.params;

        const new_fortunes = fortunes.filter(f => f.id != id);

        writeFortunes(new_fortunes);

        res.json(new_fortunes);
    }
    
}
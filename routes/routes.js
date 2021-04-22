const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');


router.get('/datos', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM datos ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-dato',(req,res)=>{

const {riego, recirculacion, humedad, temperatura, temperaturaSustrato, volumenSustrato, conductividad, pH} = req.body;
let dato = [riego, recirculacion, humedad, temperatura, temperaturaSustrato, volumenSustrato, conductividad, pH];

let nuevoDato = `INSERT INTO datos(riego, recirculacion, humedad, temperatura, temperaturaSustrato, volumenSustrato, conductividad, pH)
                  VALUES(?,?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoDato, dato, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Dato guardado`, })
  });
});  

router.put('/dato/:id', (req, res) => {
  const {riego, recirculacion, humedad, temperatura, temperaturaSustrato, volumenSustrato, conductividad, pH} = req.body;
  const { id } = req.params;
  let dato = [riego, recirculacion, humedad, temperatura, temperaturaSustrato, volumenSustrato, conductividad, pH, id];

  let datoModificado=  `UPDATE datos SET riego = ?, recirculacion = ?, humedad = ?,temperatura = ?,temperaturaSustrato = ?,volumenSustrato = ?, conductividad = ?, pH =? WHERE id = ?`

  mysqlConnection.query(datoModificado, dato, (err, rows, fields) => {
    if(!err) {
      res.json({status: 'dato actualizado'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/dato/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM datos WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'dato eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
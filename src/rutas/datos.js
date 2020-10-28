const { Router } = require('express');

const router =  Router();


const datos = require('../datos.json');

const r = require('underscore');





router.get('/' , (req ,res) => {
  res.json(datos);
});


router.post('/' , (req ,res) => {
  const {id,nombre,apellido,nacionalidad} = req.body;
  if(id && nombre && apellido && nacionalidad )
  {
      const id = datos.length + 1 ;
      const nuevoDato = {...req.body};
      datos.push(nuevoDato);
      res.json(datos);

     res.json('guardado');
  }
  else
  {
    res.status(500).json({error: 'error interno en el servidor.'});
  }
});


router.put('/:id' , (req , res) =>{
        const {id} = req.params;
        const {nombre,apellido,nacionalidad} = req.body;
        if(nombre && apellido&& nacionalidad)
        {
            r.each(datos , (persona , i) =>{
                 if(persona.id == id)
                 {
                     persona.nombre = nombre;
                     persona.apellido = apellido;
                     persona.nacionalidad = nacionalidad;
                 }
            });
            console.log(req.params);
            console.log(id);
            res.json(datos);
            
        }else
        {
         
          res.status(500).json({error: 'error interno en el servidor.'});
        }
});

router.delete('/:id' , (req , res) =>{
     const {id} = req.params;
    r.each(datos, (persona , i) =>{
           if(persona.id == id)
           {
               datos.splice(i ,1);

           }

          
    });
    console.log(req.params);
    console.log(id);
   res.json(datos);

    
});



module.exports = router;
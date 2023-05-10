//Nombre: OVIEDO INSUASTI DAYANA SAMANTHA 
//TALLER 4
//Sexto "A"

//Usamos el framework Express.
const express=require("express")

const servidor=express()

const path=require("path")

servidor.use(express.json())


///Definimos 3 rutas GET con cada entidad
const urlIdioma=path.join(__dirname, "./Paginas/Idioma.html")
const urlInstructor=path.join(__dirname, "./Paginas/Instructor.html")
const urlAprendizaje=path.join(__dirname, "./Paginas/Aprendizaje.html")


//Agregar imágenes 
servidor.get("/idioma", (req, res)=>{

    res.status(200).sendFile(urlidioma)

})

servidor.get("/instructor", (req, res)=>{
    res.status(200).sendFile(urlInstructor)
})


servidor.get("/aprendizaje", (req, res)=>{
    res.status(200).sendFile(urlAprendizaje)
})

servidor.listen(3000, ()=>{
    console.log("Escuchando...")
})
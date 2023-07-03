const { response } = require('express');
const { Idioma, Instructor, Aprendizaje } = require('../models');

const getAprendizajes = async (req, res = response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { status: true };

    const [sum, aprendizajes] = await Promise.all([
        Aprendizaje.countDocuments(query),
        Aprendizaje.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
            .populate('idioma')
            .populate('instructor')
    ]);

    res.json({
        sum,
        aprendizajes
    });
};

const getAprendizaje = async (req, res = response) => {
    const { id } = req.params;
    const aprendizaje = await Aprendizaje.findById(id)
        .populate('idioma')
        .populate('instructor');

    res.json(aprendizaje);
};

const createAprendizaje = async (req, res = response) => {
    const { idioma, instructor, ...body } = req.body;

    const existeAprendizaje = await Aprendizaje.findOne({ idioma, instructor });

    if (existeAprendizaje) {
        return res.status(400).json({
            msg: 'El aprendizaje ya existe para este idioma e instructor'
        });
    }

    const data = {
        idioma,
        instructor,
        ...body
    };

    const aprendizaje = new Aprendizaje(data);

    const newAprendizaje = await aprendizaje.save();
    res.status(201).json(newAprendizaje);
};

const updateAprendizaje = async (req, res = response) => {
    const { id } = req.params;
    const { idioma, instructor, ...data } = req.body;
    const aprendizajeUpdate = await Aprendizaje.findByIdAndUpdate(id, data, { new: true })
        .populate('idioma')
        .populate('instructor');
    res.json(aprendizajeUpdate);
};

const deleteAprendizaje = async (req, res = response) => {
    const { id } = req.params;
    const deletedAprendizaje = await Aprendizaje.findByIdAndUpdate(id, { status: false }, { new: true })
        .populate('idioma')
        .populate('instructor');
    res.json(deletedAprendizaje);
};

module.exports = {
    createAprendizaje,
    getAprendizaje,
    getAprendizajes,
    updateAprendizaje,
    deleteAprendizaje
};

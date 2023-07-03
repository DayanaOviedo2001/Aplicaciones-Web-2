const { response } = require('express');
const { Idioma, Instructor, Aprendizaje } = require('../models');

const getCursosAprendizaje = async (req, res = response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { status: true };

    const [sum, cursos] = await Promise.all([
        Aprendizaje.countDocuments(query),
        Aprendizaje.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
            .populate('idioma')
            .populate('instructor')
    ]);

    res.json({
        sum,
        cursos
    });
};

const getCursoAprendizaje = async (req, res = response) => {
    const { id } = req.params;
    const curso = await Aprendizaje.findById(id)
        .populate('idioma')
        .populate('instructor');

    res.json(curso);
};

const createCursoAprendizaje = async (req, res = response) => {
    const { idioma, instructor, ...body } = req.body;

    const existeAprendizaje = await Aprendizaje.findOne({
        idioma,
        instructor
    });

    if (existeAprendizaje) {
        return res.status(400).json({
            msg: 'El curso de aprendizaje ya existe para este idioma e instructor'
        });
    }

    const cursoData = {
        idioma,
        instructor,
        ...body
    };

    const curso = new Aprendizaje(cursoData);

    const newCurso = await curso.save();

    res.status(201).json(newCurso);
};

const updateCursoAprendizaje = async (req, res = response) => {
    const { id } = req.params;
    const { idioma, instructor, ...data } = req.body;

    const cursoUpdate = await Aprendizaje.findByIdAndUpdate(id, data, { new: true })
        .populate('idioma')
        .populate('instructor');

    res.json(cursoUpdate);
};

const deleteCursoAprendizaje = async (req, res = response) => {
    const { id } = req.params;

    const deletedCurso = await Aprendizaje.findByIdAndUpdate(id, { status: false }, { new: true })
        .populate('idioma')
        .populate('instructor');

    res.json(deletedCurso);
};

module.exports = {
    createCursoAprendizaje,
    getCursoAprendizaje,
    getCursosAprendizaje,
    updateCursoAprendizaje,
    deleteCursoAprendizaje
};

const { response } = require('express');
const { Aprendizaje } = require('../models');

const getProducts = async (req, res = response) => {
  const { limit = 10, since = 0 } = req.query;
  const query = { status: true };

  const [sum, pagos] = await Promise.all([
    Aprendizaje.countDocuments(query),
    Aprendizaje.find(query)
      .populate('idioma', 'descripcion')
      .populate('instructor', 'nombre')
      .skip(Number(since))
      .limit(Number(limit)),
  ]);

  res.json({
    sum,
    pagos,
  });
};

const getProduct = async (req, res = response) => {
  const { id } = req.params;
  const pago = await Aprendizaje.findById(id)
    .populate('idioma', 'descripcion')
    .populate('instructor', 'nombre');
  res.json(pago);
};

const createProduct = async (req, res = response) => {
  const { status, user, ...body } = req.body;

  const existPago = await Aprendizaje.findOne({ nombre: body.nombre });

  if (existPago) {
    return res.status(400).json({
      msg: `El producto ${existPago.nombre} ya existe`,
    });
  }

  const data = {
    ...body,
    nombre: body.nombre,
  };

  const pago = new Aprendizaje(data);

  const newPago = await pago.save();
  res.status(201).json(newPago);
};

const updateProduct = async (req, res = response) => {
  const { id } = req.params;
  const { status, ...data } = req.body;

  const updatedPago = await Aprendizaje.findByIdAndUpdate(id, data, {
    new: true,
  });

  res.json(updatedPago);
};

const deleteProduct = async (req, res = response) => {
  const { id } = req.params;
  const deletedPago = await Aprendizaje.findByIdAndUpdate(
    id,
    { status: false },
    { new: true }
  );
  res.json(deletedPago);
};

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

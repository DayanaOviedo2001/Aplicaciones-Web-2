const { model, Schema } = require('mongoose');

const ConceptoSchema = Schema(
    {
        descripcion:{
            type: String,
            required: [ true, 'El nombre del concepto es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Concepto', ConceptoSchema );
const { Schema, model } = require('mongoose');

const citaSchema = new Schema({
    doctor: {
        type: String,
        required: true
    },
    paciente: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

module.exports = model('Cita', citaSchema)
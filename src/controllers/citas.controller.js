const citasCtrl = {};

const CitaModel = require('../model/Cita');


citasCtrl.getCitas = async (req,res) => {
    const citas = await CitaModel.find();
    res.json(citas)
}

citasCtrl.crearCita = async (req,res) => {
    const {paciente, doctor, direccion, cedula, date} = req.body;
    const newCita = new CitaModel({
        doctor,
        paciente,
        direccion,
        cedula,
        date
    });
    await newCita.save();
    res.json({message: 'Cita Creada'})
}

citasCtrl.getCita = async (req,res) => {
    const cita = await CitaModel.findById(req.params.id);
    res.json(cita)
}

citasCtrl.actualizarCita = async (req,res) => {
    const {paciente, doctor, direccion, cedula, date} = req.body;
    await CitaModel.findOneAndUpdate({_id: req.params.id}, {
        doctor,
        paciente,
        cedula,
        direccion,
        date
    })
    res.json({message: 'Cita Actualizada'})
}

citasCtrl.borrarCita = async (req,res) => {
    await CitaModel.findByIdAndDelete(req.params.id)
    res.json({message: 'Cita Eliminada'})
}

module.exports = citasCtrl;
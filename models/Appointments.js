const mongoose = require ("mongoose");
const appointment = new mongoose.Schema(
    {
        name: String,
        email: String,
        idade: String,
        cpf: String,
        telefone: String,
        origem: String,
        date: Date,
        time: String,
        finished: Boolean
    }
);

module.exports = appointment;
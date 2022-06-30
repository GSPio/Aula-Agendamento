var appointment = require("../models/Appointments");
var mongoose = require("mongoose");
var AppointmentFactory = require("../factories/AppointmentFactory")
const Appo = mongoose.model("Appointment", appointment)
class AppointmentService
{
    async Create(name, email, idade, cpf, telefone, origem, date, time)
    {
        var newAppo = new Appo(
            {
                name, email, idade, cpf, telefone, origem, date, time, finished: false
            }
        );
        try{
            await newAppo.save();
            return true;
        }
        catch(err){
            console.log(err);
            return false;
        }
        
    }

    async GetAll(showFinished)
    {
        if(showFinished)
        {
            return await Appo.find();
        }
        else
        {
            var appos = await Appo.find({"finished": false});
            var appointments = [];
            appos.forEach(appointment =>
                {
                    appointments.push(AppointmentFactory.Build(appointment))
                });
            return appointments;
        }
    }

}

module.exports = new AppointmentService();
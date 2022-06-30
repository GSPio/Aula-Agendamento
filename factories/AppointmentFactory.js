// Gera e retorna as consultas para o calendário

class AppointmentFactory
{
    Build(simpleAppointment)
    {
    var minutes = Number.parseInt(simpleAppointment.time.split(":")[1]);        //Retorna um array somente com os minutos
    var hour = Number.parseInt(simpleAppointment.time.split(":")[0]);           //Retorna um array somente com as horas
    var day = simpleAppointment.date.getDate()+1;                               //Retorna o valor do dia à meia noite, por isso o +1
    var month = simpleAppointment.date.getMonth();
    var year = simpleAppointment.date.getFullYear();
    var startDate = new Date(year, month, day, hour, minutes, 0, 0);            //0, 0 = minutos, segundos
    //startDate.setHours(startDate.getHours()-3)                                  //Converte o horário p/ UTC-3
    var appo = 
    {
    id: simpleAppointment._id,
    title: simpleAppointment.name + "-",
    start: startDate,
    end: startDate
    }        
    return appo;
    }
}

module.exports = new AppointmentFactory();


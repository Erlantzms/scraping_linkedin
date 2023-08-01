const cleanId = (id) => {
    idSplited = id.split(":");
    return idSplited[idSplited.length-1]
}

const stringToDate = (str) => {
    const [number, unity] = !str.includes("ahora") ? (str).match(/\((.*?)\)/)[1].replace("hace ","").split(" ") : [0,"ahora"];
  
    const now = new Date();
    const newDate = new Date(now);
  
    switch (unity) {
        case "ahora":
            newDate;
            break;
        case "segundos":
        case "segundo":
            newDate.setSeconds(now.getSeconds() - parseInt(number));
            break;
        case "minutos":
        case "minuto":
            newDate.setMinutes(now.getMinutes() - parseInt(number));
            break;
        case "horas":
        case "hora":
            newDate.setHours(now.getHours() - parseInt(number));
            break;
        case "días":
        case "día":
            newDate.setDate(now.getDate() - parseInt(number));
            break;
        case "semanas":
        case "semana":
            newDate.setDate(now.getDate() - parseInt(number) * 7);
            break;
        default:
            throw new Error("Unidad de tiempo desconocida");
    }

    return newDate;
}

module.exports = {
    cleanId: cleanId,
    stringToDate: stringToDate
}
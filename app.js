const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.Lat, coors.Lng);

        return `La temperatura en ${coors.direccion} es de ${temp} °C`;

    } catch (e) {
        return `No se pudo determinar la temperatura en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
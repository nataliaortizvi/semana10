//instancio 
const ids = document.getElementById('ids');
const nombres = document.getElementById('nombres');
const btRegistrar = document.getElementById('btRegistrar');
const idDos = document.getElementById('idDos');
const btVotar = document.getElementById('btVotar');
const btCandidatos = document.getElementById('btCandidatos');
const btVotaciones = document.getElementById('btVotaciones');

var database = firebase.database();

//declarar functions
meter = () => {
    let d = ids.value;
    let n = nombres.value;
    let r = btRegistrar.value;
    let i = idDos.value;
    let v = btVotar.value;
    let bc = btCandidatos.value;
    let bv = btVotaciones.value;

    let obUsuario = {
        Nombre: n,
        ID: d,
    }
    console.log(obUsuario);
    database.ref('Candidatos').push().set(obUsuario);
}
btRegistrar.addEventListener('click',meter);


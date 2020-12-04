const jourSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] ;
const dayWeek = ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] ;

let ajd = new Date();
let options = {weekday: 'long'} ;
let jourActuel = ajd.toLocaleDateString('fr-FR', options) ;

//console.log(jourActuel);

jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1) ;

let tabJoursEndOrdre = jourSemaine.slice(jourSemaine.indexOf(jourActuel)).concat(jourSemaine.slice(0, jourSemaine.indexOf(jourActuel)));


/* *************** English version ************ */

let jcurrentDay = ajd.toLocaleDateString('en-EN', options) ;
let dayOrder = dayWeek.slice(dayWeek.indexOf(jourActuel)).concat(dayWeek.slice(0, dayWeek.indexOf(jourActuel)));


/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Alexis Frésard
 * @version 0.1
 * @since   2022-08-23
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let a = 'Bonjour';

  const celcius = prompt('Entrez une température :');
  let far  = celcius * 9 / 5 + 32;
  alert(` ${celcius} = ${far}`);

  console.log(a);
}()); // Main IIFE


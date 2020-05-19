//mover input range (pantalla options)



document.getElementById("tirador_distancia").addEventListener('input' ,functionRanger);
function functionRanger(){
  document.getElementById("rangernumber").innerHTML = tirador_distancia.value;
}

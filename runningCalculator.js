// Javascript for Tom's Running Calculator //

window.onload = function(){

document.getElementById('calculateTime').onclick = function(){

  // Collect pace values
  var paceHours = Number(document.getElementById('paceHours').value);
  var paceMinutes = Number(document.getElementById('paceMinutes').value);
  var paceSeconds = Number(document.getElementById('paceSeconds').value);
  var paceUnit = document.getElementById('paceUnit').selectedIndex;

  // Convert pace values to seconds
  var totalPaceSeconds = (paceHours * 3600) + (paceMinutes * 60) + paceSeconds;
  var totalDistance = Number(document.getElementById('distance').value);
  var distanceUnit = document.getElementById('distanceUnit').selectedIndex;

  // Need to work out the conversions for miles and kilometers mismatches

  // Convers pace to miles if in KM
  if (paceUnit === 1 && distanceUnit === 0) {
    totalDistance = totalDistance * 1.60934
  }
  else if (paceUnit === 0 && distanceUnit === 1) {
    totalDistance = totalDistance / 1.60934
  }


  var totalSeconds = totalDistance * totalPaceSeconds;
  var totalMinutes = totalSeconds / 60;
  var totalHours = totalMinutes / 60;

  var timeHours = totalHours;
  var timeMinutes = totalMinutes % 60;
  var timeSeconds = totalSeconds % 60;

  // Populate time values
  document.getElementById('timeHours').value = Math.floor(Number(timeHours));
  document.getElementById('timeMinutes').value = Math.floor(Number(timeMinutes));
  document.getElementById('timeSeconds').value = Number(timeSeconds);
}



document.getElementById('calculateDistance').onclick = function(){

  // Collect pace  and distance unit values
  var paceHours = Number(document.getElementById('paceHours').value);
  var paceMinutes = Number(document.getElementById('paceMinutes').value);
  var paceSeconds = Number(document.getElementById('paceSeconds').value);
  var paceUnit = document.getElementById('paceUnit').selectedIndex;
  var distanceUnit = document.getElementById('distanceUnit').selectedIndex;

  // Collect time values
  var timeHours = Number(document.getElementById('timeHours').value);
  var timeMinutes = Number(document.getElementById('timeMinutes').value);
  var timeSeconds = Number(document.getElementById('timeSeconds').value);

  // Convert pace and time values to seconds
  var totalPaceSeconds = (paceHours * 3600) + (paceMinutes * 60) + paceSeconds;
  var totalTimeSeconds = (timeHours *3600) + (timeMinutes * 60) + timeSeconds;

  var totalDistance = totalTimeSeconds / totalPaceSeconds;

  // Pace and distance unit conversions
  if (paceUnit === 1 && distanceUnit === 0) {
    totalDistance = totalDistance / 1.60934
  }
  else if (paceUnit === 0 && distanceUnit === 1) {
    totalDistance = totalDistance * 1.60934
  }

  // Populate distance value
  document.getElementById('distance').value = Number(totalDistance);
}

document.getElementById('calculatePace').onclick = function(){

  // Collect time values
  var timeHours = Number(document.getElementById('timeHours').value);
  var timeMinutes = Number(document.getElementById('timeMinutes').value);
  var timeSeconds = Number(document.getElementById('timeSeconds').value);

  // Collect distance and pace unit values
  var totalDistance = Number(document.getElementById('distance').value);
  var distanceUnit = document.getElementById('distanceUnit').selectedIndex;
  var paceUnit = document.getElementById('paceUnit').selectedIndex;

  // Convert time values to seconds
  var totalTimeSeconds = (timeHours *3600) + (timeMinutes * 60) + timeSeconds;

  // Pace and distance unit conversions
  if (paceUnit === 1 && distanceUnit === 0) {
    totalDistance = totalDistance * 1.60934
  }
  else if (paceUnit === 0 && distanceUnit === 1) {
    totalDistance = totalDistance / 1.60934
  }

  var totalPaceSeconds = totalTimeSeconds / totalDistance;
  var totalPaceMinutes = totalPaceSeconds / 60;
  var totalPaceHours = totalPaceMinutes / 60;

  var paceHours = totalPaceHours;
  var paceMinutes = totalPaceMinutes % 60;
  var paceSeconds = totalPaceSeconds % 60;

  // Populate time values
  document.getElementById('paceHours').value = Math.floor(Number(paceHours));
  document.getElementById('paceMinutes').value = Math.floor(Number(paceMinutes));
  document.getElementById('paceSeconds').value = Number(paceSeconds);

}

// Quick Distance Buttons //


document.getElementById('threeMile').onclick = function(){
  document.getElementById('distance').value = 3
  document.getElementById('distanceUnit').selectedIndex = 0
}

document.getElementById('fiveMile').onclick = function(){
  document.getElementById('distance').value = 5
  document.getElementById('distanceUnit').selectedIndex = 0
}

document.getElementById('tenMile').onclick = function(){
  document.getElementById('distance').value = 10
  document.getElementById('distanceUnit').selectedIndex = 0
}


document.getElementById('fiveK').onclick = function(){
  document.getElementById('distance').value = 5
  document.getElementById('distanceUnit').selectedIndex = 1
}

document.getElementById('tenK').onclick = function(){
  document.getElementById('distance').value = 10
  document.getElementById('distanceUnit').selectedIndex = 1
}

document.getElementById('halfMarathon').onclick = function(){
  document.getElementById('distance').value = 13.1
  document.getElementById('distanceUnit').selectedIndex = 0
}

document.getElementById('marathon').onclick = function(){
  document.getElementById('distance').value = 26.2
  document.getElementById('distanceUnit').selectedIndex = 0
}
}

const distanceFromNow = (tDate: number, ignoreHours: boolean = false) => {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = tDate - now;
  let days = "" + Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours =
    "" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = "" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = "" + Math.floor((distance % (1000 * 60)) / 1000);

  if (+days < 10) {
    days = "0" + days;
  }
  if (+hours < 10) {
    hours = "0" + hours;
  }
  if (+minutes < 10) {
    minutes = "0" + minutes;
  }
  if (+seconds < 10) {
    seconds = "0" + seconds;
  }

  let output = "";

  if (!ignoreHours) {
    output += hours + ":";
  }

  output += minutes + ":" + seconds;

  return { output, days, hours, minutes, seconds };
};

export default distanceFromNow;

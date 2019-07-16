// On click event that launch the mainFunction
document.getElementById('btnStart').onclick = function mainFunction() {

    // Get the value from the input
    let year = document.getElementById("yearInput").value;

    // Checker function that contains conditional statemens
    let checkFunction = function (year) {

      // Check if the given year is a leap year
      if (year % 100 === 0 && year % 400 !== 0) {
        return year + " is not a leap year";
      } else if (year % 4 === 0) {
        return year + " is a leap year";
      } else if (year % 4 !== 0) {
        return year + " is not a leap year";
      }
    }

    // Adding animation class
    function addAnimation() {
      document.getElementById('demo').innerHTML = checkFunction(year);
      document.getElementById('demo'  ).classList.add("animated", "fadeInUp");

      // Remove animation class
      setTimeout(function () {
        document.getElementById('demo').classList.remove("animated", "fadeInUp");
      }, 1000);
    }
    addAnimation();

  }
/*On an infinite plane, a robot initially stands at (0, 0) and faces north.  
The robot can receive one of three instructions:
"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degress to the right.
The robot performs the instructions given in order, and repeats them forever.
Return true if and only if there exists a circle in the plane such that the robot never leaves the circle. */

/*
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let x = 0;
  let y = 0;
  let orientation = 0;
  //array to save locations, and later compare them, if they repeat, robot is bound to the circle
  let locationHistory = [];
  let repeatedLocations = [];
  for (let i = 0; i < instructions.length; i++) {
    if (instructions.charAt(i) == 'R' && orientation == 3) {
      orientation - 3;
    } else if (instructions.charAt(i) == 'R') {
      orientation++;
    } else if (instructions.charAt(i) == 'L' && orientation == 0) {
      orientation + 3;
    } else if (instructions.charAt(i) == 'L') {
      orientation--;
    } else if (instructions.charAt(i) == 'G' && orientation == 0) {
      y++;
      locationHistory.push([x, y]);
    } else if (instructions.charAt(i) == 'G' && orientation == 1) {
      x++;
      locationHistory.push([x, y]);
    } else if (instructions.charAt(i) == 'G' && orientation == 2) {
      y--;
      locationHistory.push([x, y]);
    } else if (instructions.charAt(i) == 'G' && orientation == 3) {
      x--;
      locationHistory.push([x, y]);
    }
  }
  for (let q = 0; q < locationHistory.length; q++) {
    for (let w = 0; w < locationHistory.length; w++) {
      if (locationHistory[q] === locationHistory[w]) {
        repeatedLocations.push(locationHistory[q]);
      }
    }
  }
  console.log(locationHistory)
  console.log(repeatedLocations)
};

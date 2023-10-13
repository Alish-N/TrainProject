const peopleCountElement = document.getElementById('people-count');
const spaceCountElement = document.getElementById('space-count');
const addPersonButton = document.getElementById('add-person');
const removePersonButton = document.getElementById('remove-person');

let peopleCount = 0;
let availableSpace = 100;

addPersonButton.addEventListener('click', function() {
  if (availableSpace > 0) {
    peopleCount++;
    availableSpace--;
    updateCounts();
  }
});

removePersonButton.addEventListener('click', function() {
  if (peopleCount > 0) {
    peopleCount--;
    availableSpace++;
    updateCounts();
  }
});

function updateCounts() {
  peopleCountElement.innerHTML = `People Count: ${peopleCount}`;
  spaceCountElement.innerHTML = `Available Space: ${availableSpace}`;
}
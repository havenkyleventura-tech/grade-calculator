document.getElementById('calculateButton').addEventListener('click', () => {
  const read = id => parseFloat(document.getElementById(id).value);
  const grades = [read('prelim'), read('midterm'), read('final')];
  const result = document.getElementById('result');
  const remarks = document.getElementById('remarks');

  if (grades.some(g => isNaN(g) || g < 0 || g > 100)) {
    result.textContent = 'Average: 0';
    remarks.textContent = 'Remarks: Enter valid grades (0-100)';
    return;
  }
  const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
  result.textContent = 'Average: ' + avg.toFixed(2);
  remarks.textContent = 'Remarks: ' + (avg >= 75 ? 'Passed' : 'Failed');
});

window.filterByYear = function () {
  const startYear = parseInt(document.getElementById("startYear").value);
  const endYear = parseInt(document.getElementById("endYear").value);
  const items = document.querySelectorAll('#timeline .timeline-item');

  items.forEach(item => {
    const year = parseInt(item.getAttribute('data-year'));
    if (year >= startYear && year <= endYear) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};

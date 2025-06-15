function filterByYear() {
  const startYear = parseInt(document.getElementById("startYear").value);
  const endYear = parseInt(document.getElementById("endYear").value);
  const items = document.querySelectorAll('#timeline .timeline-item');

  items.forEach(item => {
    const year = parseInt(item.getAttribute('data-year'));
    if (!isNaN(startYear) && !isNaN(endYear)) {
      item.style.display = (year >= startYear && year <= endYear) ? 'block' : 'none';
    } else {
      item.style.display = 'block';
    }
  });
}

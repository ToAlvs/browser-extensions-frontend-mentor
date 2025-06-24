const btnTema = document.getElementById('switch-theme');
const imageTheme = document.getElementById('image-theme');
const extensions = document.querySelectorAll('.extensions');
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const filterActive = document.getElementById('filter-active');
const filterAll = document.getElementById('filter-all');
const filterInactive = document.getElementById('filter-inactive');

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  body.setAttribute('data-theme', newTheme);

  const icon = newTheme === 'dark' ? './assets/images/icon-sun.svg' : './assets/images/icon-moon.svg';
  imageTheme.setAttribute('src', icon);
}

function toggleFilter(filterToShow) {
  [filterAll, filterActive, filterInactive].forEach(filter => {
    filter.classList.remove('show');
  });

  filterToShow.classList.add('show');
}

function applyFilter(filterType) {
  checkboxes.forEach((checkbox, i) => {
    const extension = extensions[i];
    if (filterType === 'all') {
      extension.classList.remove('ocult');
    } else if (filterType === 'active') {
      checkbox.checked ? extension.classList.remove('ocult') : extension.classList.add('ocult');
    } else if (filterType === 'inactive') {
      checkbox.checked ? extension.classList.add('ocult') : extension.classList.remove('ocult');
    }
  });
}

btnTema.addEventListener('click', toggleTheme);

filterAll.addEventListener('click', () => {
  toggleFilter(filterAll);
  applyFilter('all');
});

filterActive.addEventListener('click', () => {
  toggleFilter(filterActive);
  applyFilter('active');
});

filterInactive.addEventListener('click', () => {
  toggleFilter(filterInactive);
  applyFilter('inactive');
});

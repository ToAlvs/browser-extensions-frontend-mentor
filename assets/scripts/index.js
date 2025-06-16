const btnTema = document.getElementById('switch-theme')
const imageTema = document.getElementById('image-theme')
const extensions = document.querySelectorAll('.extensions')
const checkboxes = document.querySelectorAll("input[type='checkbox']")

const filterActive = document.getElementById('filter-active')
const filterAll = document.getElementById('filter-all')
const filterInactive = document.getElementById('filter-inactive')

btnTema.addEventListener('click', function () {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'ligth' : 'dark';
    body.setAttribute('data-theme', newTheme)
    if (newTheme === 'dark') {
        imageTema.setAttribute('src', './assets/images/icon-sun.svg') 
    }else{
        imageTema.setAttribute('src', './assets/images/icon-moon.svg')        
    }
})

filterAll.addEventListener('click', function () {
    filterActive.classList.remove('show')
    filterInactive.classList.remove('show')
    filterAll.classList.add('show')
    checkboxes.forEach((checkbox, i) => {
        extensions[i].classList.remove('ocult')
    })
})

filterActive.addEventListener('click', function () {
    filterInactive.classList.remove('show')
    filterAll.classList.remove('show')
    filterActive.classList.add('show')
    checkboxes.forEach((checkbox, i) => {
        if(!checkbox.checked){
             extensions[i].classList.add('ocult');
        }
        if (checkbox.checked) {
            extensions[i].classList.remove('ocult')
        }
    })
})

filterInactive.addEventListener('click', function () {
    filterActive.classList.remove('show')
    filterAll.classList.remove('show')
    filterInactive.classList.add('show')
    checkboxes.forEach((checkbox, i) => {
        if(checkbox.checked){
             extensions[i].classList.add('ocult');
        }
        if (!checkbox.checked) {
            extensions[i].classList.remove('ocult')
        }
    })
})
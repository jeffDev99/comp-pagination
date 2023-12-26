const userArr = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'reza', family: 'Saeedi Rad' },
    { id: 7, name: 'ghafour', family: 'Zehtab' },
    { id: 8, name: 'majid', family: 'Yolme' },
    { id: 9, name: 'hamid', family: 'Mohammadi' },
    { id: 10, name: 'shakib', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },

];

let $ = document;
let listEl = $.querySelector("#list")
let paginationEl = $.querySelector("#pagination")

let currentPage = 1;
let itemPerPage = 5;

function displayUser(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = ""
    let end = rowsPerPage * page;
    let start = end - rowsPerPage;
    let pagendUser = items.slice(start, end)
    pagendUser.forEach(user => {
        wrapper.insertAdjacentHTML("beforeend", `<div class="item"">${user.name} ${user.family}</div>`)
    });
}
function changePage(i) {
    currentPage = i
    displayUser(userArr, listEl, itemPerPage, currentPage)
    paginationElements(paginationEl, itemPerPage, userArr)
}

function paginationElements(paginationWrapper, rowsCount, arrayUser) {
    paginationWrapper.innerHTML = ""
    let paegCount = arrayUser.length / rowsCount
    for (let i = 1; i < paegCount; i++) {
        let activeClass;
        if (i == currentPage) {
            activeClass = "active"
        }
        paginationWrapper.insertAdjacentHTML("beforeend", `<button class="${activeClass}" onclick="changePage(${i})">${i}</button>`)

    }
}
displayUser(userArr, listEl, itemPerPage, currentPage)
paginationElements(paginationEl, itemPerPage, userArr)
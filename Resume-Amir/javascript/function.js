async function getRandQuote() {
    const api_url = 'https://api.quotable.io/random'
    const test = ('../javascript/test.json');
    const response = await fetch(api_url, {
        method: 'GET',
    });
    const result = await response.json();
    const myQuote = document.getElementById('generated-quote');
    const myAuthor = document.getElementById('author')
    const quote = result.content;
    const author = result.author;

    myQuote.textContent = (`"${quote}"`);
    myAuthor.textContent = ("―" + author);
}

async function fillTextToDiv(text, htmlLocation) {
    const textFile = (`../other/${text}.txt`);
    const response = await fetch(textFile, {
        method: 'GET',
    });
    const result = await response.text();
    const textDiv = document.getElementById(htmlLocation);

    textDiv.textContent = result;
}

window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
    })
}

window.addEventListener("DOMContentLoaded", function () {
   

    var form = document.getElementById("my-form");
    
    var status = document.getElementById("status");
    var submitbtn = document.getElementById("submit-btn");

    

    function success() {
        form.reset();
        status.classList.add("success");
        status.style.display = ("block");
        status.innerHTML = ("Successfully Submitted !! We Will Contact You Shortly");

    }

    function error() {
        status.classList.add("error");
        status.innerHTML = ("Oops! There was a problem.");
        status.style.display = ("block");
    }

    

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});



function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
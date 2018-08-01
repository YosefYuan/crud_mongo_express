// main.js
let update = document.getElementById('update');

update.addEventListener('click', function () {
    // Send PUT Request here
    // console.log('click')
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'name': 'aug1_3',
            'quote': 'aug1_3_2'
        })
    })
        .then(res => {
            console.log(123);
            if (res.ok) return res.json();
        })
        .then(data => {
            console.log(data);
            // window.location.reload(true);
        })
})

let del = document.getElementById('delete');

del.addEventListener('click', function () {
    fetch('/quotes', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': 'aug1_2'
        })
    })
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(data => {
            console.log(data);
            window.location.reload(true);
        })
})
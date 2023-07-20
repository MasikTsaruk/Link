const form = document.getElementById('shortForm');

form.onsubmit = function (e){
    e.preventDefault();

    const link = document.getElementById('link');

    fetch('/links/short', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({link: link.value})})
        .then((res)=>res.json())
        .then((res)=>{
        const ul = document.getElementById('linksSS');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`Short Link : ${res.short} , Original : ${res.source}`));
        ul.appendChild(li);
    }).catch(err=>console.log(err))

}
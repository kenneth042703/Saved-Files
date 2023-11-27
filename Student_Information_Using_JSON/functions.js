import collection from './database.json' assert {type : 'json'};



document.querySelector("#button").addEventListener('click', ()=>{
    document.getElementById("paragraph").textContent = JSON.stringify(collection.Students[1].name);
});


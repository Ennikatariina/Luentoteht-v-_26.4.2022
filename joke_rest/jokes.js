fetch("https://api.jokes.one/jod")
    .then(response => response.json())
    .then(
        data =>{ document.getElementById("joke").innerHTML= data.contents.jokes.text});
        console.log(data.jokes);
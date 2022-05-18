fetch("https://api.jokes.one/jod")
    .then(response => response.json())
    .then(
        data =>{ document.getElementById("joke").innerHTML= data.contents.jokes[0].joke.title; 
        document.getElementById("joke").innerHTML+=data.contents.jokes[0].joke.text;}
        );
        console.log()
       
fetch("https://futuramaapi.herokuapp.com/api/quotes")
    .then(response => response.json())
    .then(
        data =>{
            //Data haettu ->käsittele
            //luodaan ul-elementti
            let ul =document.createElement('ul');
            //Loppaa array läpi
            data.forEach(quote =>{
                //Luo li-elementti
                let li =document.createElement('li');
                //Aseta sisältö li-elementti
                li.innerHTML=quote.character + " " + "'" + quote.quote + "'";
                //Lisää li-elementti ul-elementille
                ul.appendChild(li);
            });
            //Lisää ul-elemantti domiin
            document.getElementById("print-here").appendChild(ul);
            
        });


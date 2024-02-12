let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let span = document.querySelector('.span1');
let h2 = document.querySelector('.heading2');
let cat = document.querySelector('.cat');
let photo = document.querySelector('.photo');
let click = document.querySelector('.click');


btn2.addEventListener('click',function(){
    span.textContent = "will you be my lover?"
    photo.innerHTML =  `<img class='cat' src="cat5.jfif" alt="cat5">`;
   
    btn2.addEventListener('click',function(){
        span.textContent = "I'm handsome:("
        photo.innerHTML =  `<img class='cat' src="handsome.jfif" alt="handsome">`;

        btn2.addEventListener('click',function(){
            span.textContent = "Just gib me a chance"
            photo.innerHTML =  `<img class='cat' src="please.jfif" alt="please">`;

            btn2.addEventListener('click',function(){
                span.textContent = "I'll treat you like a queen"
                photo.innerHTML =  `<img class='cat' src="queen.jfif" alt="queen">`;

                btn2.addEventListener('click',function(){
                    span.textContent = "I'm sad"
                    photo.innerHTML =  `<img class='cat' src="sad.jfif" alt="sad">`;

                    btn2.addEventListener('click',function(){
                        span.textContent = "Why? Please uwu"
                        photo.innerHTML =  `<img class='cat' src="uwu.jfif" alt="uwu">`;

                        btn2.addEventListener('click',function(){
                            span.textContent = "that's your last chance"
                            photo.innerHTML =  `<img class='cat' src="last.jfif" alt="last">`;

                            btn2.addEventListener('click',function(){
                                span.textContent = "died from reject"
                                span.style.color = 'red';
                                photo.innerHTML = `<img class='cat' src="cat4.jfif" alt="cat4">`;
                                btn2.style.display = 'none'
                            })
                        })
                    })
                })
            })
        })
    })
})


btn1.addEventListener('click',function(){
    h2.textContent = 'Yayy'
    span.textContent = "I love you too"
    span.style.color = 'red';
    photo.innerHTML =  `<img class='cat' src="cat2.jfif" alt="cat2">`;
    click.style.display = 'none';
})
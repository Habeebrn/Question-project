
// Using selectors inside the element

const questions = document.querySelectorAll(".question") ;

questions.forEach(function (habeeb) {
    const btn = habeeb.querySelector('.question-btn')


    btn.addEventListener("click" , function () {

        questions.forEach(function(item) {
            if (item !== habeeb) {
                item.classList.remove("show-text")
            }
        })

        habeeb.classList.toggle("show-text")
    })
})














// traversing the dom

const btns = document.querySelectorAll('.question-btn');

    btns.forEach(function (btn) {

        btn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement.parentElement;
        console.log(question);

        question.classList.toggle(".show-text") ;

    
    })
})


document.getElementById("main-button").addEventListener("click", () => {
        const text = document.getElementById("main-text");
        if (text.style.color === "blue") {
            text.style.color = "red";
        } else {
            text.style.color = "blue";
        }
        // змінна текст = документ.отриматиЕлементЗаІдентифікатором("main-text")
        // якщо (текст.стиль.колір === 'синій') {
        //     текст.стиль.колір = 'червоний';
        // } інакше {
        //     текст.стиль.колір = 'синій';
        // }
    }
);



// text: {
//     style: {
//         color: 'red',
//         backround-color: 'white',
//         padding: '3px',
//         font-size: 10,
//         margin: 4,
//         abc: 2
//         test: 3
//     },
//     style2: {
//         color: 'green',
//         backround-color: 'white',
//         padding: '3px',
//         font-size: 10,
//         margin: 4,
//         abc: 2
//         test: 3
//     }
// }

// style.color = "green"
// style.backgound-color = "white"
// style.font-size = 10
// style.margin = 4
// style.abc = 2
// style.test = 3




// text = {
//     style: {
//         color: 'red',
//         backround-color: 'white',
//         padding: '3px'
//     }
// }
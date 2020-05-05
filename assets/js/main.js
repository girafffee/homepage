changeThemeBtn = document.querySelector('#change-theme-btn');

changeThemeBtn.addEventListener('click', function () {
    divPage = document.querySelector('div.page');
    main = document.querySelector('main');
    
    if(divPage.classList.contains("page-dark") || main.classList.contains("main-dark")) {
        divPage.classList.remove("page-dark");
        divPage.style.borderColor = "midnightblue";
        
        main.classList.remove("main-dark");

        changeThemeBtn.style.color = "whitesmoke"
        changeThemeBtn.style.backgroundColor = "grey"
    } else {
        divPage.classList.add("page-dark");
        divPage.style.borderColor = "whitesmoke";

        main.classList.add("main-dark");

        changeThemeBtn.style.color = "grey"
        changeThemeBtn.style.backgroundColor = "whitesmoke"
    }
    // whitesmoke
});
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');

        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        });
    }, 100);
});

function showPromptAfterLoading() {
    swal({
        title: "Let's Get Acquainted!",
        text: "What is your name?",
        type: "input",
        showCancelButton: false,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Your Name"
    }, function(name) {
        if (name === false || name === "") {
            swal.showInputError("You need to write something!");
            return false;
        }

        swal.close();

        const options = {
            strings: ["Welcome " + name + "!", "How are you?", "Have a nice day.", "Hi " + name + "!"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: false,
        };

        const typed = new Typed("#type", options);
    });
}

window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        showPromptAfterLoading();
    }, 1000);
});
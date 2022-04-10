document.querySelector(".command-btn").addEventListener("click", function () {
    document.querySelector(".command-list").classList.add("active");
    this.style.display = "none";
})

document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".command-list").classList.remove("active");
    document.querySelector(".command-btn").style.display = "block"; 
})


if ("webkitSpeechRecognition" in window) {
    const d = new Date() // today, now

    // setInterval(function name1(){
    //     var time = d.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')
    // }, 1000)
    

    // console.log(name1())


    //  time = d.toLocaleTimeString();
    // Timezone zero UTC offset
    var date = d.toISOString().slice(0, 10) // YYYY-MM-DD


    // Speech Recognition Stuff goes here
    const btn = document.querySelector(".sound-icon");
    // const content = document.querySelector(".content");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onstart = function () {
        console.log("voice is activated, you can to microphonne");
    }


    recognition.onresult = function (event) {
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;

        // content.textContent = transcript;
        readOut(transcript);
        console.log(transcript)
    }

    // add the listener to the btn

    btn.addEventListener("click", () => {
        btn.classList.add("active");
        recognition.start();
    })
    var synth = window.speechSynthesis;
    function readOut(massage) {
        btn.classList.remove("active");

        let speech = new SpeechSynthesisUtterance();

        if (massage.includes("how are you")) {
            speech.text = "I am fine";
        }
        else if (massage.includes("what is your name")) {
            speech.text = "my name is mr. recorder";
        }
        else if (massage.includes("who made you")) {
            speech.text = "I was created by Tanjim, He is a full-stack web developer.";
        }
        else if (massage.includes("Assalamu") || massage.includes("Walaikum")) {
            speech.text = "Waalaykumu s-salam. How can I help you?";
        }

        else if (massage.includes("what are you doing")) {
            speech.text = "I am talking to you right now";
        }
        else if (massage.includes("your birthday")) {
            speech.text = "Saturday, March 09, 2022";
        }
        else if (massage.includes("good night")) {
            speech.text = "Good Night. Have a sweet dream";
        }
        else if (massage.includes("good morning")) {
            speech.text = "Good Morning.";
        }
        else if (massage.includes("thank you")) {
            speech.text = "You are most welcome";
        }
        else if (massage.includes("love you")) {
            speech.text = "I love you too but as a friend";
        }
        else if (massage.includes("who is your boss")) {
            speech.text = "my boss name is Tanjim";
        }
        else if (massage.includes("I want you")) {
            speech.text = "ok I redirect you to my boss Facebook account";
            window.open("https://www.facebook.com/profile.php?id=100077282573324", "_blank");
        }
        else if (massage.includes("who is your best friend")) {
            speech.text = "Md Jubayer Ahmed";
        }
        else if (massage.includes("take care")) {
            speech.text = "allah hafez";
        }
        else if (massage.includes("today date")) {
            speech.text = `${date}`;
        }
        // else if (massage.includes("time")) {
        //     speech.text = `${time}`;
        // }
        else {
            speech.text = "Sorry I didn't understand Please repeat again.";
        }



        speech.pitch = 1;
        speech.volume = 1;
        speech.rate = 1;

        window.speechSynthesis.speak(speech);
        console.log(speech)
    }
} else {
    console.log("Speech Recognition Not Available")
}
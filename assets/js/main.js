const zodiacInputEl = document.getElementById("sign-of-the-zodiac");
const showBtn = document.getElementById("show-zodiac-btn");
const zodiacName = document.getElementById("zodiac-name");
const zodiacDes = document.getElementById("zodiac-des");
const image = document.createElement('img');
const output = document.getElementById("output");

showBtn.addEventListener("click", () => {
    switch (zodiacInputEl.value) {
        case "January":
            image.src = 'assets/img/icons8-aquarius-100.png';
            zodiacName.innerText = "AQUARIUS"
            zodiacDes.innerText = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
            output.appendChild(image);
            break;
        case "February":
            image.src = 'assets/img/icons8-pisces-100.png';
            zodiacName.innerText = "PISCES"
            zodiacDes.innerText = "Communication is very important today—written, spoken, and even nonverbal body language will all…"
            output.appendChild(image);
            break;
        case "March":
            image.src = 'assets/img/icons8-aries-100.png';
            zodiacName.innerText = "ARIES"
            zodiacDes.innerText = "Today your patience might be tested when one or more of your projects gets put on hold by someone…"
            output.appendChild(image);
            break;
        case "April":
            image.src = 'assets/img/icons8-taurus-100.png';
            zodiacName.innerText = "TAURUS"
            zodiacDes.innerText = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…"
            output.appendChild(image);
            break;
        case "May":
            image.src = 'assets/img/icons8-gemini-100.png';
            zodiacName.innerText = "GEMINI"
            zodiacDes.innerText = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…"
            output.appendChild(image);
            break;
        case "June":
            image.src = 'assets/img/icons8-cancer-100.png';
            zodiacName.innerText = "CANCER"
            zodiacDes.innerText = "Too many different elements in your life are overlapping with each other right now—and it's your…"
            output.appendChild(image);
            break;
        case "July":
            image.src = 'assets/img/icons8-leo-100.png';
            zodiacName.innerText = "LEO"
            zodiacDes.innerText = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…"
            output.appendChild(image);
            break;
        case "August":
            image.src = 'assets/img/icons8-virgo-100.png';
            zodiacName.innerText = "VIRGO"
            zodiacDes.innerText = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…"
            output.appendChild(image);
            break;
        case "September":
            image.src = 'assets/img/icons8-libra-100.png';
            zodiacName.innerText = "LIBRA"
            zodiacDes.innerText = "Pick a cultural event that's coming up and get some tickets for it today."
            output.appendChild(image);
            break;
        case "October":
            image.src = 'assets/img/icons8-scorpio-100.png';
            zodiacName.innerText = "SCORPIO"
            zodiacDes.innerText = "Someone will challenge a belief that you've held for a very long time today—and they will say an…"
            output.appendChild(image);
            break;
        case "November":
            image.src = 'assets/img/icons8-sagittarius-100.png';
            zodiacName.innerText = "SAGITTARIUS"
            zodiacDes.innerText = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to..."
            output.appendChild(image);
            break;
        case "December":
            image.src = 'assets/img/icons8-capricorn-100.png';
            zodiacName.innerText = "CAPRICORN"
            zodiacDes.innerText = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity."
            output.appendChild(image);
            break;
        default:                   
            zodiacName.innerText = "You must enter your birth month!"
            zodiacDes.innerText = "";
            output.removeChild(image);
    }
});
// https://github.com/kraaden/autocomplete

let signOfTheZodiac  = [
    { label: 'January', value: 'Aquarius' },
    { label: 'February', value: 'Pisces' },
    { label: 'March', value: 'Aries' },
    { label: 'April', value: 'Taurus' },
    { label: 'May', value: 'Gemini' },
    { label: 'June', value: 'Cancer' },
    { label: 'July', value: 'Leo' },
    { label: 'August', value: 'Virgo' },
    { label: 'September', value: 'Libra' },
    { label: 'October', value: 'Scorpio' },
    { label: 'November', value: 'Sagittarius' },
    { label: 'December', value: 'Capricorn' },
];

var input = document.getElementById("sign-of-the-zodiac");

autocomplete({
    input: input,
    fetch: function(text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = signOfTheZodiac.filter(n => n.label.toLowerCase().startsWith(text))
        update(suggestions);
    },
    onSelect: function(item) {
        input.value = item.label;
    }
});
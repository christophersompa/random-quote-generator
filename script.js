let quotes = 
[
    'Failing does not give you a reason to give up',
    'Those who break Rules are scum but those who abandon their friends are worse than scum', 
    'So, I was born with a whole lot of Natural Talent… But I work hard and I never give up. That is my gift. That is my Ninja Way!',
    'A true measure of a Shinobi is not how he lives but how he dies.'
];

document.getElementById('random-quote').innerHTML = '';
document.getElementById('show-quote').addEventListener('click', function ()
{
    let rand = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').innerHTML = "\'" + quotes[rand] + "\'";
    document.getElementById('random-quote').style.fontStyle = "italic";
});

document.getElementById('add-quote').addEventListener('click', function()
{
    function userInput(){
        let input = prompt("Enter new quote:");
        if(input == null || input == "")
        {
            alert("Please enter a quote!");
        } 
        else 
        {
            quotes.push(input);
        }
    }
    userInput();
});
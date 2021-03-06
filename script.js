/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


var quotes = [

	{
		'quote': 'We have pain,but not as great as his name',
		'source': 'Jamie Grace',
		'citation': 'AZ Quotes',
		'tag': 'Gospel Singers',
	},

	{
		'quote': 'Focusing on the negative only makes a difficult journey more difficult.',
		'source': 'TobyMac',
		'citation': 'AZ Quotes',
		'tag': 'Gospel Singers',
	},

	{
		'quote': 'You lead me and keep me from falling.You carry me close to Your heart.And surely Your goodness and mercy will follow me.',
		'source': 'Chris Tomlin',
		'citation': 'AZ Quotes',
		'tag': 'Gospel Singers',
	},

	{
		'quote': 'I will walk by faith, even when I cannot see',
		'source': 'Jeremy Camp',
		'citation': 'AZ Quotes',
		'tag': 'Gospel Singers',
	},

	{
		'quote': 'Give me open hands and open doors.',
		'source': 'Matthew West',
		'citation': 'AZ Quotes',
		'tag': 'Gospel Singers',
	},

	{
		'quote': 'In the middle of my little mess,I forget how BIG i`m blessed!'
		'source': 'Francesca Battistelli',
		'citation': 'AZ Quotes',
		'tag': 'Gospel Singers',
	},

	{
		'quote': 'The area where we struggle the most is often the area of our greatest effectiveness.',
		'source': 'Mandisa',
		'citation': 'AZ Quotes',
		'tag': 'Gospel Singers',
	},
];

function getRandomQuote(){
	var randomNumber = Math.floor(Math.random()*7) + 1;
	return quotes[randomNumber];
}
console.log(getRandomQuote() );

function printQuote(){
	var pullQuote = getRandomQuote(){
	var HTML = '';
	HTML +="<p class="quote">"	+ [pullQuote.quote] + "</p>";
	HTML +="<p class="source">" + [pullQuote.source];
	if(pullQuote.citation) {
		HTML += "<span class="citation">" + [pullQuote.citation] + "</span>"
	if (pullQuote.tag){
		HTML += "<span class="tag">" +[pullQuote.tag] + "</span>"
		"</p>"

	}
}

console.log(printQuote() );




	/***
	 * click event listener for the print quote button
	 * DO NOT CHANGE THE CODE BELOW!!
	 ***/

	document.getElementById('load-quote').addEventListener("click", printQuote, false);
# Introduction

Ever wanted to type at 400+ WPM? Well, at least you can fool the website into believing that you really can.<br>
And how would you do that? By the method of _automation_.

# How it works

The bot observes the currently highlighted word (has a class of _'currentword'_), stores the words that ensue (having class of _'nextword'_) and accordingly sends keyboard input. <br>
It performs memoisation by storing the next words in a list, to reduce the time taken to type in the words.

# To clone

`$ git clone https://github.com/AdityaBhattacharya1/typing-test-bot` <br>
`cd` into the directory <br>
`npm install` <br>
`node index.js`

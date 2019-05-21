const fetch = require('node-fetch');
var encodeUrl = require('encodeurl')

const p1 = `
  <speak> <prosody rate="60%"> Ahhhhhh stranger… </prosody> <break time="2s"/> haven’t met any other being in this bare land in years! What are you doing here<break time="1s"/> and what is your login ID? 
  I am a scholar, we don’t engage in dehydration since we are trying to observe different natural phenomena to predict the sun's movement. Yesterday we saw two falling stars, and we are certain that this means the beginning of a stable era. The king says that this event brought about a 200 year stable era in the past, and therefore predicts a 50 year stable era ahead. 
`



const text = encodeUrl(`
  <speak>
    <prosody rate="50%">Ah stranger… </prosody> <break time="1.5s"/> I haven’t met any other being in this bare land in years! <break time="1s"/>
    Last time I had an encounter like this was during the Warring states period. I'm afraid the young one was exiled for burning dried bodies. 
    <break time="1s"/> Nowadays, I also resort to such unruly behavior to start a fire, <break time="0.3s"/>its a desperate measure to keep warm that I am not proud of.
    <break time="1s"/> Anyways, you must be careful here. <break time="0.5s"/> I think that the sun is going to rise very soon <break time="0.3s"/> but <break time="0.4s"/> we are in the midst of Chaotic Era, so it's nothing more than my personal speculation <break time="0.3s"/>.
  </speak>
`);

const text2 = encodeUrl(`
  <speak>
    <prosody rate="90%">You see... </prosody>, the problem is that our solar system has three suns. Their motion is unpredictable due to the gravitational interaction. <break time="0.5s"/>
    Chaotic eras can last as short as a day or as long as a century. <break time="1s"/>According to historical records, the Zhou Dynasty experienced a Stable Era lasting two centuries. 
    Very lucky to be born during such a time.
    <break time="3s"/>
    Do you have any dried fish?
  </speak>
`);

const text3 = encodeUrl(`
  <speak>
    Our whole civilization exists because of our ability to dehydrate. We purge the water from our bodies to be effortlessly stored for centuries. <break time="1s"/>
    When a Stable Era arrives, the king makes a decision,<break time="0.3s"/> based on intuition <break time="0.3s"/> as to whether the people should engage in a mass rehydration. <break time="1s"/>
    Often, the people are rehydrated and revived, crops are planted, cities begin construction, life has just started <break time="0.3s"/> and then the Stable Era ends. <break time="1s"/> 
    Extreme cold and heat then destroy everything.
  </speak>
`);

const text4= encodeUrl(`
  <speak>
    I am a scholar,<break time="0.3s"/> we don’t engage in dehydration since we are trying to observe different natural phenomena to predict the sun's movement. <break time="1s"/>
    Yesterday we saw two falling stars, and we are certain that this means the beginning of a stable era. <break time="1s"/>
    The king says that this event brought about a 200 year stable era in the past,<break time="0.3s"/> and therefore predicts a 50 year stable era ahead. 
    I believe that it is morning <break time="0.5s"/> But the sun doesn’t always rise in the morning. <break time="2s"/>
    I just hope that all of the three suns wont rise at the same time…

  </speak>
`);


const data = {
  "credentials": "include",
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "accept-language": "en-US,en;q=0.9,la;q=0.8",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://notevibes.com/",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": `content=${text4}&time=1558236755&voice=en-GB-Wavenet-D&speed=1&pitch=-10`,
  "method": "POST",
  "mode": "cors"
};

fetch("https://notevibes.com/", data)
  .then(res => res.text()).then(body => {
    console.log(body)
  });
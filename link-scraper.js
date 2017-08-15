let Nightmare = require('nightmare');
let nightmare = Nightmare({ show: true });

nightmare
  .goto('http://zingstudios.com/')
  .wait(3500)
  .evaluate(function() {
    let links = document.querySelectorAll('a');
    let linkArr = [];
    links.forEach(link => {
      linkArr.push({description: link.innerHTML, url: link.href});
    })
    return linkArr;
  })
  .end()
  .then(function (result) {
    result.forEach( link => {
      console.log(link.description,' [',link.url,']')
    })
  })
  .catch(function (error) {
    console.error('scrape failed: ', error);
  });

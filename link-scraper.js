let Nightmare = require('nightmare');
let nightmare = Nightmare({ show: true });

nightmare
  .goto('http://zingstudios.com/')
  .wait(3500)
  .evaluate( () => {
    let links = document.querySelectorAll('a');
    let linkArr = [];
    links.forEach(link => {
      linkArr.push({description: link.innerHTML, url: link.href});
    })
    return linkArr;
  })
  .end()
  .then( (result) => {
    result.forEach( link => {
      console.log(link.description,' [',link.url,']')
    })
  })
  .catch( (error) => {
    console.error('scrape failed: ', error);
  });

fetch('/quote')
  // console.log('hello')
  // .then(r => console.log('response =>', r))
  .then((r) => {
    return r.json()
  })

  .then(data => {
    document.getElementById('quote').innerText = data.quote;
  });



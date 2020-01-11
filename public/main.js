fetch('/public/quote')
  // console.log('hello')
  .then(r => r.json())
  .then(data => {
    document.getElementById('quote').innerText = data.quote;
  });

function fetchChuckJokeJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const jokeId = "";
    const url = `https://api.chucknorris.io/jokes/random/${jokeId}`;
    
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(random) {
        console.log('data decoded from JSON:', random);
  
        // Build a block of HTML
        const jokeHtml = `
            <img src="${random.icon_url}" />
            <p><strong>${random.value}</strong></p>
          
        `;
        document.querySelector('#chuck-norris').innerHTML = jokeHtml;
      });
  }
  
  fetchChuckJokeJSON();
  
  
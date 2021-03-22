fetch('http://localhost:8080')
    .then(responseStream => responseStream.json())
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', err);
    });
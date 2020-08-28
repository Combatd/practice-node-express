const bodyElement = document.querySelector('body');

const data = axios
.get('localhost:5000')
.then(({data}) => {
    data.map( (singleData) => {
        const divElement = document.createElement('div');
        divElement.innerHTML = `<h1>${singleData}</h1>`
        return bodyElement.appendChild(divElement);
    });
    
});



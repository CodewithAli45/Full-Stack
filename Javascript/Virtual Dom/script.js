function setTimer() {
    const element1 = `
        <div>
            <p> Java Script </p>
            <input type="text" />
            <p>${new Date().toLocaleTimeString()} </p>
        </div>
    `
    document.getElementById('container1').innerHTML = element1;

   const element2 = React.createElement('div',
        null,
        React.createElement('h1', null, 'React'),
        React.createElement('div', null, 
        React.createElement('input', {type : 'text'})),
        React.createElement('p', null, new Date().toLocaleTimeString()) 
   );

   ReactDOM.render(element2, document.getElementById('container2'));
}
p = new Date().toLocaleDateString
setInterval(setTimer, 1000);
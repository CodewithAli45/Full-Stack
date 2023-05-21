

function handleDate(){
    const start = new Date (document.getElementById("startDate").value);
    const end = new Date (document.getElementById("endDate").value);
    const display = document.getElementById("display");

    const result = Math.floor((end - start) / (1000*24*60*60));
    console.log(result);

    display.innerHTML = result;
}
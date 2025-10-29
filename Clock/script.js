function clockCounter(){
    const date = new Date();
    let hours = date.getHours();
    const meridien = hours >=12 ? "PM" : "AM";
    hours = hours % 12
    hours = hours.toString().padStart(2,0);

    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${minutes}:${seconds} ${meridien}`;
    document.getElementById("clock").textContent = time;

}

clockCounter();
setTimeout(clockCounter,1000)
const track = document.getElementById("img-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt == "0") return;



    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2 ;

    const percentage = (mouseDelta/maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.lastPercentage) + percentage;
    
    nextPercentage = Math.max(-270,Math.min(0,nextPercentage));

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.lastPercentage = track.dataset.percentage;
}
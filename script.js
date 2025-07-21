const track = document.getElementById("img-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt == "0")return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2 ;

    const percentage = (mouseDelta/maxDelta) * -100;

    track.style.transform = `translate(${percentage}%)`;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
}
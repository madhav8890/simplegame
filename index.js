score = 0
function lw(e) {
    rh = Math.floor(Math.random() * document.documentElement.offsetHeight);
    rw = Math.floor(Math.random() * document.documentElement.offsetWidth);
    const d = document.getElementById("d1");
    const btnn = document.getElementById("btn");
    d1.style.visibility =  "visible"
    d1.style.left = `${rw }px`
    d1.style.top = `${rh + 250}px`

    setTimeout(lw, 1000);
    btnn.innerHTML = "SCROE : " + score;
};
const inc = ()=>{
    score++;
}
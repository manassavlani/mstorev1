var imgimg = document.getElementById('imgimg');
var LMButton1 = document.getElementById('LDMode1');
var LMButton2 = document.getElementById('LDMode2');
var body = document.body;
var glow = document.getElementById('glow')

function toggleDark() {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem("theme", "light");
      imgimg.style.backgroundColor = '#dddddd';
      LMButton1.setAttribute('src', 'media/light.png');
      glow.style.color = 'black';
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem("theme", "dark-mode");
      imgimg.style.backgroundColor = '#000000';
      LMButton1.setAttribute('src', 'media/dark.png')
      glow.style.color = 'white';
    }
    
}

if (localStorage.getItem("theme") === "dark-mode") {
    body.classList.add('dark-mode');
    imgimg.style.backgroundColor = '#000000';
    LMButton1.setAttribute('src', 'media/dark.png')
    glow.style.color = 'white';
}


LMButton1.addEventListener('click', toggleDark);


class Text {
    constructor(obj) {
        this.text = document.querySelector(obj.text);
        this.fullText = this.text.innerHTML;
        this.text.innerHTML = '';
        this.str();
    }

    str(k = 0) {
        this.text.innerHTML += this.fullText[k];
        k++;

        if (k < this.fullText.length) {
            setTimeout(() => {
                this.str(k);
            }, 200)
        }

    }

}

const text = new Text({
    text: '.header__title',
});


//

class Parallax {
    constructor(obj) {
        this.clouds = document.querySelectorAll(obj.clouds);
        this.extraEl = document.querySelector(obj.extraEl);
        this.background = document.querySelector(obj.background);

        window.addEventListener('scroll', () => { // Метод addEventlistener используется для прослушивания событий на элементах DOM-дерева

            this.moveElements(

            );

        })
    }
    moveElements() {
        this.clouds.forEach(cloud => { // forEach - метод анимации
            const speed = cloud.getAttribute('data-speed');
            cloud.style = `transform:translateX(${window.scrollY * speed}px)`; // translate - движение обьекта
        });
        this.extraEl.style = `transform:translateX(${window.scrollY * -.9}px)`;

    }
}

const parallax = new Parallax({
    clouds: '.header__cloud',
    extraEl: '.header__boat',
    background: '.header__fantasy',
});

class Balls {
    constructor(obj) {
        this.balls = document.querySelectorAll(obj.balls); // quarySelectorAll - we r usin it if there r more than one obj
        window.addEventListener('mousemove', (e) => {
            this.moveItems(e);
        });
    }

    moveItems(e) {
        this.balls.forEach(ball => {
            const speed = ball.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX * speed) / 50;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            ball.style = `transform:translate(${x}px,${y}px)`;
        });
    }

}

const balls = new Balls({
    balls: '.parallax__ball',
});


const image = document.getElementById('bubble');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  image.style.left = x + 'px';
  image.style.top = y + 'px';

  
})

document.addEventListener('scroll', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    image.style.left = x + 'px';
    image.style.top = y + 'px';
    image.style.transition = '.05s';
    
  });
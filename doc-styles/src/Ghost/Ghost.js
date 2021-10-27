import './GhostElement.js';

function rangeMap(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

class GhostController {
  constructor() {
    this.ghostEl = document.createElement('ghost-element');
    document.documentElement.prepend(this.ghostEl);

    window.addEventListener('load', () => {
      requestAnimationFrame(() => {
        this.init();
      });
    });

    setTimeout(() => {}, 5000);
  }

  get frameWidth() {
    return document.documentElement.getBoundingClientRect().width;
  }

  get frameHeight() {
    return document.documentElement.getBoundingClientRect().height;
  }

  get x() {
    return parseFloat(
      getComputedStyle(this.ghostEl).getPropertyValue('left').replace('px', '')
    );
  }

  set x(value) {
    this.ghostEl.style.setProperty('left', `${value}px`);

    if (value > this.frameWidth - this.ghostEl.getBoundingClientRect().width) {
      this.boundaryHit('right');
    }

    if (value < 0) {
      this.boundaryHit('left');
    }
  }

  get y() {
    return parseFloat(
      getComputedStyle(this.ghostEl).getPropertyValue('top').replace('px', '')
    );
  }

  set y(value) {
    this.ghostEl.style.setProperty('top', `${value}px`);

    if (
      value >
      this.frameHeight - this.ghostEl.getBoundingClientRect().height
    ) {
      this.boundaryHit('bottom');
    }

    if (value < 0) {
      this.boundaryHit('top');
    }
  }

  init() {
    const xMiddle = this.frameWidth / 2;
    const yMiddle = document.documentElement.clientHeight / 2;

    this.x = xMiddle;
    this.y = yMiddle;
    this.randomizeVelocity();
    this.move();

    document.documentElement.addEventListener('mousemove', (ev) => {
      this.mouseY = ev.pageY;
      this.mouseX = ev.pageX;
      this.checkDistance();
    });
  }

  randomizeVelocity(forced = {}) {
    const { x: _x, y: _y } = forced;
    const x = _x || rangeMap(Math.random(), 0, 1, -1, 1);
    const y = _y || rangeMap(Math.random(), 0, 1, -1, 1);
    this.velocity = { x, y };
    this.ghostEl.xDirection = x > 0 ? 'right' : 'left';
  }

  move() {
    this.hidden = false;
    this.ghostEl.hide = false;
    this.startVelocityInterval();

    this.moveInterval = setInterval(() => {
      this.x = this.x + this.velocity.x;
      this.y = this.y + this.velocity.y;
    }, 1);
  }

  hide() {
    clearInterval(this.moveInterval);
    clearInterval(this.velocityInterval);
    this.hidden = true;
    this.ghostEl.hide = true;
  }

  startVelocityInterval() {
    this.velocityInterval = setInterval(() => this.randomizeVelocity(), 5000);
  }

  boundaryHit(side) {
    clearInterval(this.velocityInterval);

    switch (side) {
      case 'right':
        this.randomizeVelocity({ x: rangeMap(Math.random(), 0, 1, -0.5, -1) });
        break;
      case 'left':
        this.randomizeVelocity({ x: rangeMap(Math.random(), 0, 1, 0.5, 1) });
        break;
      case 'top':
        this.randomizeVelocity({ y: rangeMap(Math.random(), 0, 1, 0.5, 1) });
        break;
      case 'bottom':
        this.randomizeVelocity({ y: rangeMap(Math.random(), 0, 1, -0.5, -1) });
        break;
    }

    this.startVelocityInterval();
  }

  checkDistance() {
    const xDistance = Math.abs(
      this.x + this.ghostEl.getBoundingClientRect().width / 2 - this.mouseX
    );
    const yDistance = Math.abs(
      this.y + this.ghostEl.getBoundingClientRect().height / 2 - this.mouseY
    );

    const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
    if (distance < 100) {
      this.hide();
    } else if (this.hidden) {
      this.randomizeVelocity();
      this.move();
    }
  }
}

new GhostController();

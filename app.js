function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.showElement = function(position) {
        let elem;
        if (this.selector[0] === '.') {
            elem = document.createElement('div');
            elem.classList.add(this.selector.slice(1));
        } else if (this.selector[0] === '#') {
            elem = document.createElement('p');
            elem.id = this.selector.slice(1);
        }
        elem.style.cssText = `height: ${this.height};
                        width: ${this.width};
                        background: ${this.bg};
                        font-size: ${this.fontSize};
                        position: ${position};
                        left: 20px;
                        top: 20px;`;
        elem.textContent = Math.random();
        let left = parseFloat(elem.style.left),
             top = parseFloat(elem.style.top);
        document.addEventListener('keyup', (e) => {
            switch (e.code) {
                case 'ArrowLeft':
                    left -= 10;
                    elem.style.left = `${left}px`;
                    break;
                case 'ArrowRight':
                    left += 10;
                    elem.style.left = `${left}px`;
                    break;
                case 'ArrowUp':
                    top -= 10;
                    elem.style.top = `${top}px`;
                    break;
                case 'ArrowDown':
                    top += 10;
                    elem.style.top = `${top}px`;
                    break;
            }
        });
        document.addEventListener('DOMContentLoaded', () => {
            document.body.append(elem);
        });
    };
};

const newEl = new DomElement('.square', '100px', '100px', 'yellow', '0px');

newEl.showElement('absolute');


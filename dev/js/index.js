
let visible = false;
let menuIcono = document.getElementById('menuicono');
let navegacionPrincipal = document.getElementById('navegacion-principal');

menuIcono.addEventListener('click', () => {
    if (!visible) {
        navegacionPrincipal.style.display = 'block';
        visible = true;
    } else {
        navegacionPrincipal.style.display = 'none';
        visible = false;
    }
});

class Accordion {
    constructor(selector, multiple = true) {
        this.accordion = document.querySelector(selector);
        this.multiple = multiple;
        this.bindEvents();
    }

    bindEvents() {
        this.accordion.querySelectorAll(".item header").forEach(itemHeader => {
            itemHeader.addEventListener('click', () => {
                let item = itemHeader.parentElement;
                this.validateMultiple(item);
                item.classList.toggle('active');
            })
        })
    }

    validateMultiple(selectedItem) {
        if (this.multiple) return;

        this.accordion.querySelectorAll('.item').forEach(item => {
            if (selectedItem === item) return;
            item.classList.remove('active');
        })
    }
}

(function () {
    new Accordion('.servicios__acordeon', false)
})();



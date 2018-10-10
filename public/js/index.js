(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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
            });
        });
    }

    validateMultiple(selectedItem) {
        if (this.multiple) return;

        this.accordion.querySelectorAll('.item').forEach(item => {
            if (selectedItem === item) return;
            item.classList.remove('active');
        });
    }
}

(function () {
    new Accordion('.servicios__acordeon', false);
})();

},{}]},{},[1]);

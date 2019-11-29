window.onload = function(){
    document.getElementById("a").onclick = function(){
        const main = document.getElementById('style');
        main.classList.add('a');
        main.classList.remove('b','c');
    }
    document.getElementById("b").onclick = function(){
        const main = document.getElementById('style');
        main.classList.add('b');
        main.classList.remove('a','c');
    }
    document.getElementById("c").onclick = function(){
        const main = document.getElementById('style');
        main.classList.add('c');
        main.classList.remove('a','b');
    }
}

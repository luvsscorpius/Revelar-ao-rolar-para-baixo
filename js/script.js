const target = document.querySelectorAll('[data-anime]')

const animationClss = 'animate'

function animeScroll() {
    // precisamos saber o tamanho do scroll até o topo do site
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)

    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {

            // se for maior eu quero que ele adicione uma classe a esse elemento especifico
            element.classList.add(animationClss)
        } else {
            element.classList.remove(animationClss)
        }

        console.log(element.offsetTop)
    })
}

animeScroll()

if (target.length) {
    window.addEventListener('scroll', function () {
        animeScroll()
    })
}

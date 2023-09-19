const counters = document.querySelectorAll('.number');
let scrollStarted = false;

const countUp = () => {
    counters.forEach((counter) => {
        counter.innerHTML = '0';

        const updateCounter = () => {
            let target = Number.parseInt(counter.getAttribute('data-target'));
            let currentVal = Number.parseInt(counter.innerHTML);
            let increament = target / 12;

            if (currentVal < target) {
                // update counter
                counter.innerHTML = `${Math.ceil(currentVal + increament)}`+ "+";
                setTimeout(updateCounter, 75);
            } else {
                // stop
                counter.innerHTML = target + "+";
            }
        }
        updateCounter();
    })
}

const scrollPagePosition = () => {
    let currentPos = window.scrollY;

    if (currentPos > 320 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (currentPos < 320 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

const reset = () => {
    counters.forEach((counter) => {
        counter.innerHTML = '0';
    })
}


document.addEventListener('scroll', scrollPagePosition);
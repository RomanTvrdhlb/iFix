const counters = document.querySelectorAll('.counter');

counters.forEach(function(item) {
    let elementHeight = item.offsetHeight;
    const end = +item.dataset.max;

    function startInterval(intervalValue,startValue){
        const interval = setInterval(function() {
            startValue++;
    
            if (startValue === end) {
                clearInterval(interval);
            }
    
            item.innerHTML = startValue;
        }, intervalValue);  
    }

    window.addEventListener('scroll', function onScroll() {
        var elementTop = item.getBoundingClientRect().top;
        var elementVisibleHeight = window.innerHeight - elementTop;
        var visiblePercentage = (elementVisibleHeight / elementHeight) * 100;

        if (visiblePercentage >= 30) {
            window.removeEventListener('scroll', onScroll);

            const startValue = end > 150 ? end - 150 : 0;

            setTimeout(function() {

                if (end > 150) {
                    startInterval(100, startValue);
                } else if (end > 50) {
                    startInterval(130, startValue);
                } else {
                    startInterval(160, startValue);
                }
            }, 1250);
        }
    });
});


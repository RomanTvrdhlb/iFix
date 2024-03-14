const counters = document.querySelectorAll('.counter');

counters.forEach(function(item) {
    var elementHeight = item.offsetHeight;
    var start = +item.innerHTML;
    var end = +item.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        var elementTop = item.getBoundingClientRect().top;
        var elementVisibleHeight = window.innerHeight - elementTop;
        var visiblePercentage = (elementVisibleHeight / elementHeight) * 100;

        if (visiblePercentage >= 30) {
            window.removeEventListener('scroll', onScroll);
            setTimeout(function() {

                var startValue = end > 50 ? end - 50 : 0;
                var interval = setInterval(function() {
                    startValue++;

                    if (startValue === end) {
                        clearInterval(interval);
                    }

                    item.innerHTML = startValue;
                }, 10);
            }, 1250);
        }
    });
});


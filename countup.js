document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.c-p');
    
    // Initialize all counters to 0
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        counter.textContent = '0+';
        counter.setAttribute('data-target', target);
    });
    
    function runCounterSequentially(index = 0) {
        if (index >= counters.length) return;
        
        const counter = counters[index];
        const target = parseInt(counter.getAttribute('data-target'));
        
        let count = 0;
        const increment = target / 100;
        
        const updateCount = () => {
            if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count) + '+';
                setTimeout(updateCount, 100);
            } else {
                counter.textContent = target + '+';
                runCounterSequentially(index + 1);
            }
        };
        
        updateCount();
    }
    
    // Start the sequence
    setTimeout(runCounterSequentially, 1000);
});
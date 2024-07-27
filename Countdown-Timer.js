// Countdown Timer
function startCountdown(endTime) {
    const moment = require('moment');
    
    const interval = setInterval(() => {
        const now = moment();
        const end = moment(endTime);
        
        if (now >= end) {
            clearInterval(interval);
            console.log('Countdown finished!');
        } else {
            const duration = moment.duration(end - now);
            const days = duration.days();
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();
            
            console.log(`Time remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        }
    }, 1000); // Update every second
}

// Example usage:
const endTime = '2024-12-31 23:59:59'; // End time for the countdown

console.log('Starting countdown...');
startCountdown(endTime);

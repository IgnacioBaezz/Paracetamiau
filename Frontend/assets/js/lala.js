let completedHabits = 0;
const totalHabits = 3;
let selectedMood = null;
const habits = {
    water: false,
    exercise: false,
    sleep: false
};

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    updateProgress();
    initializeMoodSelector();
    initializeCalendar();
});

function toggleHabit(element, habitType) {
    const toggle = element.querySelector('.habit-toggle');
    const isActive = toggle.classList.contains('active');

    if (isActive) {
        toggle.classList.remove('active');
        habits[habitType] = false;
        completedHabits--;
    } else {
        toggle.classList.add('active');
        habits[habitType] = true;
        completedHabits++;

        // Animate the habit item
        element.style.transform = 'scale(1.05)';
        setTimeout(() => {
            element.style.transform = '';
        }, 300);
    }

    updateProgress();

    if (completedHabits === totalHabits) {
        celebrate();
    }
}

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressMessage = document.getElementById('progressMessage');

    const percentage = (completedHabits / totalHabits) * 100;

  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${completedHabits}/${totalHabits}`;

    const messages = [
        '¡Comienza tu día saludable!',
        '¡Buen comienzo! Sigue así',
        '¡Casi lo logras! Un paso más',
        '¡Felicitaciones! Día perfecto 🎉'
    ];

    progressMessage.textContent = messages[completedHabits];
}

function initializeMoodSelector() {
    const moodIcons = document.querySelectorAll('.mood-icon');
    moodIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            moodIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            selectedMood = this.dataset.mood;

            // Animate selection
            this.style.transform = 'scale(1.3)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

function initializeCalendar() {
    const calendarDays = document.querySelectorAll('.calendar-day:not(.other-month)');
    calendarDays.forEach(day => {
        day.addEventListener('click', function () {
            calendarDays.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function celebrate() {
    const celebration = document.getElementById('celebration');
    celebration.style.display = 'block';

    // Create confetti
    for (let i = 0; i < 80; i++) {
        createConfetti();
    }

    // Vibrate if supported
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }

    setTimeout(() => {
        celebration.style.display = 'none';
        celebration.innerHTML = '';
    }, 4000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.getElementById('celebration').appendChild(confetti);
}

function getRandomColor() {
    const colors = ['#ff6f61', '#ffa29a', '#ffc8c3', '#c3e8ea', '#9acbd0', '#47bfcc'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showEncouragement() {
    const messages = [
        '¡Tú puedes hacerlo! 🐾',
        '¡Un día a la vez! 💪',
        '¡Cuidarte es importante! ❤️',
        '¡Sigue así, campeón! 🌟',
        '¡Tu bienestar importa! 🌸'
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Create temporary message
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
                position: fixed;
                bottom: 90px;
                right: 20px;
                background: var(--coral);
                color: white;
                padding: 10px 15px;
                border-radius: 20px;
                font-size: 0.9rem;
                z-index: 1001;
                animation: fadeInOut 3s ease;
                box-shadow: 0 5px 15px rgba(255,111,97,0.4);
            `;
    messageDiv.textContent = randomMessage;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        document.body.removeChild(messageDiv);
    }, 3000);
}

// Add CSS animation for encouragement message
const style = document.createElement('style');
style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(20px); }
                20%, 80% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-10px); }
            }
        `;
document.head.appendChild(style);
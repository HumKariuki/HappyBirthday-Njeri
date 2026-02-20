// Wait for everything to load
window.addEventListener('load', function() {
    console.log('Page loaded - Starting app...');
    
    // Get elements
    const intro = document.getElementById('introScreen');
    const mainApp = document.getElementById('mainApp');
    const enterBtn = document.getElementById('enterBtn');
    
    // Check if elements exist
    if (!intro || !mainApp || !enterBtn) {
        console.error('Required elements not found!');
        return;
    }
    
    // ENTER BUTTON - DIRECT CLICK HANDLER
    enterBtn.onclick = function() {
        console.log('Enter button clicked!');
        
        // Hide intro
        intro.style.display = 'none';
        
        // Show main app
        mainApp.style.display = 'block';
        
        // Initialize everything
        initApp();
    };
    
    // Initialize app
    function initApp() {
        console.log('Initializing app...');
        
        // Create photo grid
        createPhotoGrid();
        
        // Setup love counter
        setupLoveCounter();
        
        // Setup message changer
        setupMessageChanger();
        
        // Setup celebrate button
        setupCelebrateButton();
        
        // Setup secret modal
        setupSecretModal();
    }
    
    // Create photo grid
    function createPhotoGrid() {
        const grid = document.getElementById('photoGrid');
        if (!grid) return;
        
        // Clear grid
        grid.innerHTML = '';
        
        // Add 9 photo items
        for (let i = 1; i <= 9; i++) {
            const item = document.createElement('div');
            item.className = 'photo-item';
            
            // Different emoji for each
            const emojis = ['💖', '✨', '🌟', '💕', '💗', '💓', '💘', '💝', '💞'];
            item.textContent = emojis[i-1];
            
            // Add click handler
            item.onclick = function() {
                createMiniConfetti();
                alert(`Beautiful memory ${i} 💖`);
            };
            
            grid.appendChild(item);
        }
    }
    
    // Setup love counter
    function setupLoveCounter() {
        const loveBox = document.getElementById('loveBox');
        const loveCount = document.getElementById('loveCount');
        let count = 0;
        
        if (loveBox && loveCount) {
            loveBox.onclick = function() {
                count++;
                loveCount.textContent = count;
                
                // Create heart pop
                createHeart();
            };
        }
    }
    
    // Setup message changer
    function setupMessageChanger() {
        const btn = document.getElementById('newMessageBtn');
        const message = document.getElementById('mainMessage');
        
        const messages = [
            "You make work feel lighter ✨",
            "Your smile changes everything 💖",
            "You are rare and unforgettable 🌹",
            "Every day with you is a blessing 🌺",
            "You bring sunshine to the office ☀️",
            "Your kindness knows no bounds 💝"
        ];
        
        if (btn && message) {
            btn.onclick = function() {
                const random = Math.floor(Math.random() * messages.length);
                message.textContent = messages[random];
                createMiniConfetti();
            };
        }
    }
    
    // Setup celebrate button
    function setupCelebrateButton() {
        const btn = document.getElementById('celebrateBtn');
        
        if (btn) {
            btn.onclick = function() {
                createConfetti();
            };
        }
    }
    
    // Setup secret modal
    function setupSecretModal() {
        const secretBtn = document.getElementById('secretBtn');
        const modal = document.getElementById('secretModal');
        const closeBtn = document.getElementById('closeModal');
        
        if (secretBtn && modal) {
            secretBtn.onclick = function() {
                modal.style.display = 'flex';
            };
        }
        
        if (closeBtn && modal) {
            closeBtn.onclick = function() {
                modal.style.display = 'none';
            };
            
            // Close when clicking outside
            modal.onclick = function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            };
        }
    }
    
    // Create confetti
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createConfettiPiece();
            }, i * 20);
        }
    }
    
    function createMiniConfetti() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createConfettiPiece();
            }, i * 30);
        }
    }
    
    function createConfettiPiece() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
    
    // Create heart pop
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = '40px';
        heart.style.zIndex = '10000';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'fall 1s ease-out';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
    
    console.log('App ready - waiting for Enter button...');
});            
            // Hide intro screen
            if (intro) {
                intro.style.display = "none";
            }
            
            // Show app container
            if (app) {
                app.classList.remove("hidden");
            }
            
            // Play music
            if (music) {
                music.volume = 0.3;
                music.play().catch(e => console.log("Audio play failed:", e));
            }
            
            // Start typewriter effect
            setTimeout(typeWriter, 500);
        });
    }

    // ================= DARK MODE TOGGLE =================
    if (darkToggle) {
        darkToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
        });
    }

    // ================= TYPEWRITER EFFECT =================
    const text = "To the most caring, loving, intelligent and beautiful woman I know 💖";
    let charIndex = 0;
    
    function typeWriter() {
        if (typewriterEl && charIndex < text.length) {
            typewriterEl.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    }

    // ================= SLIDER FUNCTIONS =================
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        if (currentSlideSpan) {
            currentSlideSpan.textContent = index + 1;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Slider event listeners
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Auto advance slides every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-advance when user interacts with slider
    const sliderContainer = document.getElementById("sliderContainer");
    if (sliderContainer) {
        sliderContainer.addEventListener("touchstart", () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        sliderContainer.addEventListener("mousedown", () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    // ================= LOVE COUNTER =================
    let love = parseInt(localStorage.getItem("love")) || 0;
    if (loveCountEl) loveCountEl.textContent = love;

    if (loveCounter) {
        loveCounter.addEventListener("click", (e) => {
            e.preventDefault();
            love++;
            if (loveCountEl) loveCountEl.textContent = love;
            localStorage.setItem("love", love);
            
            // Add a small heart animation
            const heart = document.createElement("span");
            heart.textContent = "❤️";
            heart.style.position = "fixed";
            heart.style.left = (e.clientX || window.innerWidth/2) + "px";
            heart.style.top = (e.clientY || window.innerHeight/2) + "px";
            heart.style.fontSize = "30px";
            heart.style.pointerEvents = "none";
            heart.style.zIndex = "1000";
            heart.style.animation = "fadeUp 1s ease";
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 1000);
        });
    }

    // ================= RANDOM MESSAGES =================
    const messages = [
        "You make work feel lighter ✨",
        "Your smile changes everything 💖",
        "You are rare and unforgettable 🌹",
        "Ann, you are appreciated more than you know 💫",
        "Every day with you is a blessing 🌺",
        "You bring sunshine to the office ☀️",
        "Your kindness knows no bounds 💝",
        "You're not just a colleague, you're family 💕"
    ];

    if (newMessageBtn) {
        newMessageBtn.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * messages.length);
            if (dynamicMessage) {
                dynamicMessage.style.opacity = "0";
                
                setTimeout(() => {
                    dynamicMessage.textContent = messages[randomIndex];
                    dynamicMessage.style.opacity = "1";
                }, 200);
            }
        });
    }

    // ================= CONFETTI =================
    function createConfetti() {
        const colors = ["#ff2e63", "#ff6b81", "#ffd700", "#ff1493", "#00ff00", "#00ffff"];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement("div");
                confetti.style.position = "fixed";
                confetti.style.width = Math.random() * 10 + 5 + "px";
                confetti.style.height = Math.random() * 10 + 5 + "px";
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
                confetti.style.left = Math.random() * 100 + "vw";
                confetti.style.top = "-20px";
                confetti.style.zIndex = "1000";
                confetti.style.pointerEvents = "none";
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.transition = `top ${Math.random() * 2 + 2}s linear`;
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.style.top = "120vh";
                }, 10);
                
                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    }

    if (confettiBtn) {
        confettiBtn.addEventListener("click", createConfetti);
    }

    // ================= SECRET MODAL =================
    const modal = document.createElement("div");
    modal.id = "secretModal";
    modal.innerHTML = `
        <div class="modalContent">
            <h2>For You 💖</h2>
            <p>You are not just the best colleague...<br><br>
            You are someone truly special to me.<br><br>
            Your presence makes every day brighter.<br><br>
            💕 Happy Birthday Ann! 💕</p>
            <button id="closeModal">Close</button>
        </div>
    `;
    document.body.appendChild(modal);

    if (secretBtn) {
        secretBtn.addEventListener("click", () => {
            modal.classList.add("active");
        });
    }

    // Close modal when clicking on close button or outside
    modal.addEventListener("click", (e) => {
        if (e.target.id === "closeModal" || e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
        }
    });

    // ================= TOUCH GESTURES FOR SLIDER =================
    let touchStartX = 0;
    let touchEndX = 0;

    if (sliderContainer) {
        sliderContainer.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        sliderContainer.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
        }
    }

    // ================= INITIAL SETUP =================
    // Set initial slide
    showSlide(0);
    
    // Make sure intro is visible and app is hidden initially
    if (intro) {
        intro.style.display = "flex";
    }
    if (app) {
        app.classList.add("hidden");
    }
    
    // Handle orientation change
    window.addEventListener("orientationchange", () => {
        setTimeout(() => {
            document.body.style.height = window.innerHeight + "px";
        }, 100);
    });
});            
            // Play music with fade in
            if (music) {
                music.volume = 0;
                music.play().catch(e => console.log("Audio play failed:", e));
                
                const fadeInterval = setInterval(() => {
                    if (music.volume < 0.5) {
                        music.volume = Math.min(0.5, music.volume + 0.05);
                    } else {
                        clearInterval(fadeInterval);
                    }
                }, 200);
            }
            
            // Start typewriter effect after entering
            setTimeout(typeWriter, 500);
        }, 800);
    });

    // ================= DARK MODE TOGGLE =================
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        // Update emoji based on mode
        darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });

    // ================= TYPEWRITER EFFECT =================
    const text = "To the most caring, loving, intelligent and beautiful woman I know 💖";
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < text.length) {
            typewriterEl.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    }

    // ================= SLIDER FUNCTIONS =================
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        if (currentSlideSpan) {
            currentSlideSpan.textContent = index + 1;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Slider event listeners
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Auto advance slides every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-advance when user interacts with slider
    const sliderContainer = document.getElementById("sliderContainer");
    if (sliderContainer) {
        sliderContainer.addEventListener("touchstart", () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    // ================= LOVE COUNTER =================
    let love = parseInt(localStorage.getItem("love")) || 0;
    loveCountEl.textContent = love;

    loveCounter.addEventListener("click", (e) => {
        e.preventDefault();
        love++;
        loveCountEl.textContent = love;
        localStorage.setItem("love", love);
        
        // Add a small heart animation
        const heart = document.createElement("span");
        heart.textContent = "❤️";
        heart.style.position = "absolute";
        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        heart.style.fontSize = "20px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "fadeUp 1s ease";
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 1000);
    });

    // Keyboard/touch accessibility for love counter
    loveCounter.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            loveCounter.click();
        }
    });

    // ================= RANDOM MESSAGES =================
    const messages = [
        "You make work feel lighter ✨",
        "Your smile changes everything 💖",
        "You are rare and unforgettable 🌹",
        "Ann, you are appreciated more than you know 💫",
        "Every day with you is a blessing 🌺",
        "You bring sunshine to the office ☀️",
        "Your kindness knows no bounds 💝",
        "You're not just a colleague, you're family 💕"
    ];

    newMessageBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        dynamicMessage.style.opacity = "0";
        
        setTimeout(() => {
            dynamicMessage.textContent = messages[randomIndex];
            dynamicMessage.style.opacity = "1";
        }, 200);
        
        // Add haptic feedback if supported (mobile)
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }
    });

    // ================= CONFETTI =================
    function createConfetti() {
        const colors = ["#ff2e63", "#ff6b81", "#ffd700", "#ff1493", "#00ff00", "#00ffff"];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement("div");
                confetti.style.position = "fixed";
                confetti.style.width = Math.random() * 10 + 5 + "px";
                confetti.style.height = Math.random() * 10 + 5 + "px";
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
                confetti.style.left = Math.random() * 100 + "vw";
                confetti.style.top = "-20px";
                confetti.style.zIndex = "1000";
                confetti.style.pointerEvents = "none";
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.transition = `top ${Math.random() * 2 + 2}s linear, left ${Math.random() * 2 + 2}s linear, transform ${Math.random() * 2 + 2}s linear`;
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.style.top = "120vh";
                    confetti.style.left = Math.random() * 100 + "vw";
                    confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
                }, 10);
                
                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    }

    confettiBtn.addEventListener("click", () => {
        createConfetti();
        
        // Add haptic feedback if supported
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate([50, 50, 50]);
        }
    });

    // ================= SECRET MODAL =================
    const modal = document.createElement("div");
    modal.id = "secretModal";
    modal.innerHTML = `
        <div class="modalContent">
            <h2>For You 💖</h2>
            <p>You are not just the best colleague...<br><br>
            You are someone truly special to me.<br><br>
            Your presence makes every day brighter.<br><br>
            💕 Happy Birthday Ann! 💕</p>
            <button id="closeModal">Close</button>
        </div>
    `;
    document.body.appendChild(modal);

    secretBtn.addEventListener("click", () => {
        modal.classList.add("active");
        
        // Add haptic feedback
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }
    });

    // Close modal when clicking on close button or outside
    modal.addEventListener("click", (e) => {
        if (e.target.id === "closeModal" || e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
        }
    });

    // ================= TOUCH GESTURES FOR SLIDER =================
    let touchStartX = 0;
    let touchEndX = 0;

    if (sliderContainer) {
        sliderContainer.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        sliderContainer.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next
            nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous
            prevSlide();
        }
    }

    // ================= INITIAL SETUP =================
    // Set initial slide
    showSlide(0);
    
    // Handle orientation change
    window.addEventListener("orientationchange", () => {
        setTimeout(() => {
            // Recalculate any layout issues
            document.body.style.height = window.innerHeight + "px";
        }, 100);
    });

    // Fix for mobile viewport height
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    
    // Prevent zoom on double tap for buttons
    document.querySelectorAll('button, .love-counter').forEach(el => {
        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
        }, { passive: false });
    });

    // Preload images for better performance
    const preloadImages = () => {
        slides.forEach(slide => {
            const img = new Image();
            img.src = slide.src;
        });
    };
    
    // Start preloading after page load
    window.addEventListener('load', preloadImages);
});document.getElementById("next").onclick=()=>{
    index=(index+1)%slides.length;
    showSlide(index);
};

document.getElementById("prev").onclick=()=>{
    index=(index-1+slides.length)%slides.length;
    showSlide(index);
};

setInterval(()=>{
    index=(index+1)%slides.length;
    showSlide(index);
},5000);

// LOVE COUNTER
let love=localStorage.getItem("love")||0;
document.getElementById("loveCount").innerText=love;

document.querySelector(".love-counter").onclick=()=>{
    love++;
    document.getElementById("loveCount").innerText=love;
    localStorage.setItem("love",love);
};

// RANDOM MESSAGES
const msgs=[
"You make work feel lighter ✨",
"Your smile changes everything 💖",
"You are rare and unforgettable 🌹",
"Ann, you are appreciated more than you know 💫"
];

document.getElementById("newMessage").onclick=()=>{
    let rand=Math.floor(Math.random()*msgs.length);
    document.getElementById("dynamicMessage").innerText=msgs[rand];
};

// CONFETTI
document.getElementById("confettiBtn").onclick=()=>{
    for(let i=0;i<150;i++){
        let conf=document.createElement("div");
        conf.style.position="fixed";
        conf.style.width="8px";
        conf.style.height="8px";
        conf.style.background=`hsl(${Math.random()*360},100%,50%)`;
        conf.style.left=Math.random()*100+"vw";
        conf.style.top="-10px";
        conf.style.opacity="1";
        conf.style.transition="4s linear";
        document.body.appendChild(conf);
        setTimeout(()=>{
            conf.style.top="100vh";
            conf.style.opacity="0";
        },10);
        setTimeout(()=>conf.remove(),4000);
    }
};

// SECRET MODAL
const modal=document.createElement("div");
modal.id="secretModal";
modal.innerHTML=`
<div class="modalContent">
<h2>For You 💖</h2>
<p>You are not just the best colleague...  
You are someone truly special to me.</p>
<button id="closeModal">Close</button>
</div>
`;
document.body.appendChild(modal);

document.getElementById("secretBtn").onclick=()=>{
    modal.classList.add("active");
};

document.addEventListener("click",e=>{
    if(e.target.id==="closeModal"||e.target.id==="secretModal"){
        modal.classList.remove("active");
    }
});

});




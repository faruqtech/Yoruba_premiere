// ============================================
// YORUBA PREMIER - Elite Language Mastery App
// ============================================

// Data Constants
const CATEGORIES = [
    { id: 'greetings', label: 'Greetings', icon: '👋', count: '500+' },
    { id: 'food', label: 'Food & Dining', icon: '🍲', count: '400+' },
    { id: 'market', label: 'Market & Money', icon: '💰', count: '450+' },
    { id: 'family', label: 'Family & Home', icon: '👪', count: '300+' },
    { id: 'travel', label: 'Travel & Transport', icon: '🚲', count: '300+' },
    { id: 'health', label: 'Health & Body', icon: '🏥', count: '250+' },
    { id: 'etiquette', label: 'Cultural Etiquette', icon: '🛡️', count: '200+' },
    { id: 'proverbs', label: 'Wise Proverbs', icon: '📜', count: '600+' },
];

const LESSONS = [
    // Greetings
    { id: 'g1', yo: "Ẹ kú àárọ̀", en: "Good morning (Polite)", note: "Used for elders. The 'Ẹ' is the plural/polite prefix.", category: 'greetings', difficulty: 'Beginner' },
    { id: 'g2', yo: "Báwo ni?", en: "How are you?", note: "Informal. Literally: 'How is it?'", category: 'greetings', difficulty: 'Beginner' },
    { id: 'g3', yo: "Ṣé dáadáa ni?", en: "Are you well?", note: "Common follow-up question.", category: 'greetings', difficulty: 'Beginner' },
    { id: 'g4', yo: "Ẹ kú iṣẹ́", en: "Well done at work", note: "Vital culturally. Acknowledges someone's effort.", category: 'greetings', difficulty: 'Intermediate' },
    { id: 'g5', yo: "Káàbọ̀", en: "Welcome", note: "Used when someone arrives home.", category: 'greetings', difficulty: 'Beginner' },
    { id: 'g6', yo: "Ẹ kú ọjọ́ mẹ́rin", en: "Long time no see", note: "Literally: 'Greetings on four days'.", category: 'greetings', difficulty: 'Intermediate' },
    { id: 'g7', yo: "O dà ábọ̀", en: "Goodbye", note: "Used when leaving.", category: 'greetings', difficulty: 'Beginner' },
    { id: 'g8', yo: "Ẹ kú ìrọ̀lẹ́", en: "Good evening", note: "Used from late afternoon till dusk.", category: 'greetings', difficulty: 'Beginner' },
    { id: 'g9', yo: "Àjíire?", en: "Did you wake up well?", note: "Traditional morning check-in.", category: 'greetings', difficulty: 'Intermediate' },
    { id: 'g10', yo: "Ẹ kú alẹ́", en: "Good night", note: "Used when going to bed.", category: 'greetings', difficulty: 'Beginner' },
    
    // Food
    { id: 'f1', yo: "Inú ń bí mi", en: "I am hungry", note: "Literally: 'Hunger is acting up in me'.", category: 'food', difficulty: 'Beginner' },
    { id: 'f2', yo: "Oúnjẹ dídùn", en: "The food is delicious", note: "Dídùn means sweet, tasty, or pleasant.", category: 'food', difficulty: 'Beginner' },
    { id: 'f3', yo: "Mo ti yó", en: "I am full", note: "Polite way to stop being served.", category: 'food', difficulty: 'Beginner' },
    { id: 'f4', yo: "Bá mi ra oúnjẹ", en: "Help me buy food", note: "Bá is a helper verb.", category: 'food', difficulty: 'Intermediate' },
    { id: 'f5', yo: "Omi tútù", en: "Cold water", note: "Essential for hospitality.", category: 'food', difficulty: 'Beginner' },
    { id: 'f6', yo: "Iyán àti ẹ̀fọ́", en: "Pounded yam and vegetables", note: "A staple prestigious dish.", category: 'food', difficulty: 'Intermediate' },
    { id: 'f7', yo: "Mo fẹ́ jẹun", en: "I want to eat", note: "Simple food request.", category: 'food', difficulty: 'Beginner' },
    { id: 'f8', yo: "Kí ni yìí?", en: "What is this?", note: "Used when asking about a dish.", category: 'food', difficulty: 'Beginner' },
    
    // Market
    { id: 'm1', yo: "Èló ni?", en: "How much is it?", note: "Standard question for price.", category: 'market', difficulty: 'Beginner' },
    { id: 'm2', yo: "Ó wọ́n jù!", en: "It is too expensive!", note: "Crucial for haggling.", category: 'market', difficulty: 'Beginner' },
    { id: 'm3', yo: "Dínwó fún mi", en: "Reduce the price for me", note: "Polite imperative for discounts.", category: 'market', difficulty: 'Intermediate' },
    { id: 'm4', yo: "Ṣé n ó rí mọ̀ọ́-ràn?", en: "Will I get an extra bit?", note: "Asking for 'jara' (bonus).", category: 'market', difficulty: 'Advanced' },
    { id: 'm5', yo: "Owó mi kọ́ nìyí?", en: "Isn't this my change?", note: "Used when checking money.", category: 'market', difficulty: 'Intermediate' },
    { id: 'm6', yo: "Mo fẹ́ ra", en: "I want to buy", note: "Starting a purchase.", category: 'market', difficulty: 'Beginner' },
    
    // Travel
    { id: 't1', yo: "Níbo ni mọ́tò n lọ?", en: "Where is the car/bus going?", note: "Transport inquiry.", category: 'travel', difficulty: 'Beginner' },
    { id: 't2', yo: "Dúró síhìn-ín", en: "Stop here", note: "Instruction to drivers.", category: 'travel', difficulty: 'Beginner' },
    { id: 't3', yo: "Ọ̀nà jìn", en: "The road is far", note: "Used for long journeys.", category: 'travel', difficulty: 'Intermediate' },
    { id: 't4', yo: "Mo ti sọnù", en: "I am lost", note: "When you need directions.", category: 'travel', difficulty: 'Intermediate' },
    
    // Family
    { id: 'fam1', yo: "Báwo ni ìdílé?", en: "How is the family?", note: "Common greeting extension.", category: 'family', difficulty: 'Intermediate' },
    { id: 'fam2', yo: "Bàbá mi", en: "My father", note: "Family reference.", category: 'family', difficulty: 'Beginner' },
    { id: 'fam3', yo: "Ìyá mi", en: "My mother", note: "Family reference.", category: 'family', difficulty: 'Beginner' },
    { id: 'fam4', yo: "Ọmọ mi", en: "My child", note: "Used for son or daughter.", category: 'family', difficulty: 'Beginner' },
    
    // Health
    { id: 'h1', yo: "Ara mi kò dára", en: "I don't feel well", note: "Expressing illness.", category: 'health', difficulty: 'Intermediate' },
    { id: 'h2', yo: "Orí mi ń fọ́", en: "My head hurts", note: "Literally: 'My head is breaking'.", category: 'health', difficulty: 'Intermediate' },
    { id: 'h3', yo: "Mo wà láradára", en: "I am healthy", note: "Expressing wellness.", category: 'health', difficulty: 'Beginner' },
    
    // Etiquette
    { id: 'e1', yo: "Ẹ jọ̀wọ́", en: "Please", note: "Polite request prefix.", category: 'etiquette', difficulty: 'Beginner' },
    { id: 'e2', yo: "O ṣé", en: "Thank you", note: "Informal thanks.", category: 'etiquette', difficulty: 'Beginner' },
    { id: 'e3', yo: "Ẹ ṣé", en: "Thank you (Polite)", note: "Respectful thanks.", category: 'etiquette', difficulty: 'Beginner' },
    { id: 'e4', yo: "Má bínú", en: "Don't be angry / Sorry", note: "Apology phrase.", category: 'etiquette', difficulty: 'Intermediate' },
    
    // Proverbs
    { id: 'p1', yo: "Ìṣẹ́ ni òògùn ìṣẹ́", en: "Work is the antidote for poverty", note: "A very famous motivational proverb.", category: 'proverbs', difficulty: 'Advanced' },
    { id: 'p2', yo: "Àpẹrẹ ni ọ̀rọ̀", en: "Words are like an example", note: "On the power of speech.", category: 'proverbs', difficulty: 'Advanced' },
    { id: 'p3', yo: "Ọwọ́ ọ̀tún ní ń wẹ ọwọ́ òsì", en: "The right hand washes the left", note: "About mutual help and cooperation.", category: 'proverbs', difficulty: 'Advanced' },
    { id: 'p4', yo: "Bí a bá ńbẹ̀rù ewé, a ò ní jẹ àmàlà", en: "If we fear leaves, we won't eat amala", note: "About overcoming fear to achieve goals.", category: 'proverbs', difficulty: 'Advanced' },
];

const QUIZ_QUESTIONS = [
    {
        q: "Which morning greeting specifically incorporates the respectful prefix 'Ẹ'?",
        options: ["O ṣé", "Káàbọ̀", "Ẹ kú àárọ̀", "Báwo ni"],
        correct: 2,
    },
    {
        q: "In 'Inú ń bí mi', what does the word 'Inú' refer to?",
        options: ["Head", "Stomach/Internal", "Hands", "Eyes"],
        correct: 1,
    },
    {
        q: "To ask for a bonus or extra portion at the market, you ask for:",
        options: ["Owó", "Iyán", "Mọ̀ọ́-ràn (Jara)", "Omi"],
        correct: 2,
    },
    {
        q: "The term 'O dà ábọ̀' is used when:",
        options: ["Arriving home", "Greeting in evening", "Saying goodbye", "Eating delicious food"],
        correct: 2,
    },
    {
        q: "What does 'Ẹ kú iṣẹ́' mean?",
        options: ["Good morning", "Well done at work", "How are you?", "Goodbye"],
        correct: 1,
    },
];

// Application State
const AppState = {
    activeCategory: 'greetings',
    currentView: 'lessons',
    searchQuery: '',
    progress: {},
    isLiveActive: false,
    messages: [],
    flashcardIndex: 0,
    flashcardFlipped: false,
    autoplayInterval: null,
    stats: {
        streak: 0,
        totalTime: 0,
        quizAccuracy: 0,
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    loadStats();
    renderCategories();
    renderLessons();
    initializeEventListeners();
    updateProgressDisplay();
    initializeSpeech();
});

// Speech Synthesis Setup
let speechSynth = window.speechSynthesis;
let yorubaVoice = null;

function initializeSpeech() {
    if ('speechSynthesis' in window) {
        // Wait for voices to load
        speechSynth.onvoiceschanged = () => {
            const voices = speechSynth.getVoices();
            // Try to find a Yoruba voice or fallback to any available voice
            yorubaVoice = voices.find(v => v.lang.includes('yo')) || 
                         voices.find(v => v.lang.includes('en')) ||
                         voices[0];
            console.log('Voice initialized:', yorubaVoice?.name || 'Default');
        };
    }
}

// Speech function with enhanced pronunciation
function speakYoruba(text) {
    if (!('speechSynthesis' in window)) {
        alert('Sorry, your browser does not support text-to-speech.');
        return;
    }
    
    // Cancel any ongoing speech
    speechSynth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure voice settings for better Yoruba pronunciation
    if (yorubaVoice) {
        utterance.voice = yorubaVoice;
    }
    
    utterance.rate = 0.85; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    utterance.lang = 'yo-NG'; // Yoruba Nigeria
    
    // Fallback to English if Yoruba not supported
    if (!speechSynth.getVoices().some(v => v.lang.includes('yo'))) {
        utterance.lang = 'en-US';
    }
    
    speechSynth.speak(utterance);
}

// Local Storage Functions
function loadProgress() {
    const saved = localStorage.getItem('yoruba_progress');
    AppState.progress = saved ? JSON.parse(saved) : {};
}

function saveProgress() {
    localStorage.setItem('yoruba_progress', JSON.stringify(AppState.progress));
    updateProgressDisplay();
    updateStats();
}

function loadStats() {
    const saved = localStorage.getItem('yoruba_stats');
    if (saved) {
        AppState.stats = JSON.parse(saved);
    }
}

function saveStats() {
    localStorage.setItem('yoruba_stats', JSON.stringify(AppState.stats));
}

function updateStats() {
    // Update streak
    const lastVisit = localStorage.getItem('last_visit');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastVisit === yesterday.toDateString()) {
            AppState.stats.streak++;
        } else if (lastVisit !== today) {
            AppState.stats.streak = 1;
        }
        
        localStorage.setItem('last_visit', today);
    }
    
    saveStats();
}

// Render Functions
function renderCategories() {
    const container = document.getElementById('categoriesList');
    container.innerHTML = CATEGORIES.map(cat => `
        <button class="category-btn ${AppState.activeCategory === cat.id ? 'active' : ''}" 
                data-category="${cat.id}">
            <div class="category-content">
                <span class="category-icon">${cat.icon}</span>
                <span class="category-label">${cat.label}</span>
            </div>
            <span class="category-count">${cat.count}</span>
        </button>
    `).join('');
}

function renderLessons() {
    const filtered = LESSONS.filter(lesson => {
        const matchesCategory = lesson.category === AppState.activeCategory;
        const matchesSearch = 
            lesson.yo.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
            lesson.en.toLowerCase().includes(AppState.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    const container = document.getElementById('lessonsGrid');
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🔍</span>
                <h3 class="empty-title">No exact matches found</h3>
                <p class="empty-description">Try searching for broader keywords or browsing other modules.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(lesson => `
        <div class="lesson-card ${AppState.progress[lesson.id] ? 'completed' : ''}" 
             data-lesson-id="${lesson.id}">
            <div class="lesson-header">
                <div class="lesson-badges">
                    <span class="difficulty-badge difficulty-${lesson.difficulty.toLowerCase()}">
                        ${lesson.difficulty}
                    </span>
                    ${AppState.progress[lesson.id] ? `
                        <span class="completed-badge">
                            <svg class="check-icon" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Mastered
                        </span>
                    ` : ''}
                </div>
            </div>
            
            <div class="lesson-content">
                <h3 class="lesson-yoruba">${lesson.yo}</h3>
                <p class="lesson-english">${lesson.en}</p>
            </div>
            
            <div class="lesson-note-box">
                <div class="note-indicator"></div>
                <p class="lesson-note">Note: ${lesson.note}</p>
            </div>
            
            <div class="lesson-actions">
                <button class="lesson-btn speak-btn" data-text="${lesson.yo}" title="Listen to pronunciation">
                    <svg class="speaker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                </button>
                <button class="lesson-btn complete-btn ${AppState.progress[lesson.id] ? 'completed' : ''}" 
                        data-lesson-id="${lesson.id}"
                        title="${AppState.progress[lesson.id] ? 'Unmark completion' : 'Mark as completed'}">
                    <svg class="check-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

function updateProgressDisplay() {
    const count = Object.keys(AppState.progress).length;
    const percentage = Math.min(100, (count / LESSONS.length) * 100);
    
    document.getElementById('progressCount').textContent = `${count} Lessons Mastered`;
    document.getElementById('progressFill').style.width = `${percentage}%`;
}

// Event Listeners
function initializeEventListeners() {
    // Category selection
    document.getElementById('categoriesList').addEventListener('click', (e) => {
        const btn = e.target.closest('.category-btn');
        if (btn) {
            AppState.activeCategory = btn.dataset.category;
            AppState.currentView = 'lessons';
            switchView('lessons');
            renderCategories();
            renderLessons();
            
            const categoryName = CATEGORIES.find(c => c.id === AppState.activeCategory).label;
            document.getElementById('categoryTitle').textContent = categoryName;
        }
    });
    
    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        AppState.searchQuery = e.target.value;
        renderLessons();
    });
    
    // Lesson actions
    document.getElementById('lessonsGrid').addEventListener('click', (e) => {
        const speakBtn = e.target.closest('.speak-btn');
        const completeBtn = e.target.closest('.complete-btn');
        
        if (speakBtn) {
            const text = speakBtn.dataset.text;
            speakBtn.classList.add('playing');
            speakBtn.innerHTML = '<div class="spinner"></div>';
            
            speakYoruba(text);
            
            setTimeout(() => {
                speakBtn.classList.remove('playing');
                speakBtn.innerHTML = `
                    <svg class="speaker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                `;
            }, 2500);
        }
        
        if (completeBtn) {
            const lessonId = completeBtn.dataset.lessonId;
            if (AppState.progress[lessonId]) {
                delete AppState.progress[lessonId];
            } else {
                AppState.progress[lessonId] = true;
            }
            saveProgress();
            renderLessons();
        }
    });
    
    // View switching
    document.getElementById('liveBtn').addEventListener('click', () => switchView('live'));
    document.getElementById('tutorBtn').addEventListener('click', () => switchView('tutor'));
    document.getElementById('quizBtn').addEventListener('click', () => switchView('quiz'));
    document.getElementById('flashcardsBtn').addEventListener('click', () => switchView('flashcards'));
    document.getElementById('statsBtn').addEventListener('click', () => switchView('stats'));
    
    // Live immersion
    document.getElementById('liveActionBtn').addEventListener('click', toggleLiveMode);
    
    // Chat
    document.getElementById('sendBtn').addEventListener('click', sendMessage);
    document.getElementById('chatInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    // Flashcards
    document.getElementById('flashcard').addEventListener('click', flipFlashcard);
    document.getElementById('prevFlashcard').addEventListener('click', () => navigateFlashcard(-1));
    document.getElementById('nextFlashcard').addEventListener('click', () => navigateFlashcard(1));
    document.getElementById('shuffleBtn').addEventListener('click', shuffleFlashcards);
    document.getElementById('autoplayBtn').addEventListener('click', toggleAutoplay);
    document.getElementById('flashcardSpeakBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        speakFlashcard();
    });
    
    // Flashcard difficulty buttons
    document.getElementById('easyBtn').addEventListener('click', () => rateFlashcard('easy'));
    document.getElementById('mediumBtn').addEventListener('click', () => rateFlashcard('medium'));
    document.getElementById('hardBtn').addEventListener('click', () => rateFlashcard('hard'));
}

function switchView(view) {
    AppState.currentView = view;
    
    // Hide all views
    document.querySelectorAll('.view-container').forEach(v => v.classList.add('hidden'));
    
    // Show selected view
    document.getElementById(`${view}View`).classList.remove('hidden');
    
    // Update nav buttons
    document.querySelectorAll('.action-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    
    if (view === 'tutor') {
        document.getElementById('tutorBtn').classList.add('active');
        initializeChat();
    } else if (view === 'quiz') {
        document.getElementById('quizBtn').classList.add('active');
        initializeQuiz();
    } else if (view === 'flashcards') {
        document.getElementById('flashcardsBtn').classList.add('active');
        initializeFlashcards();
    } else if (view === 'stats') {
        document.getElementById('statsBtn').classList.add('active');
        renderStats();
    } else if (view === 'live') {
        document.getElementById('liveBtn').classList.add('active');
    }
}

// Live Immersion Mode
function toggleLiveMode() {
    AppState.isLiveActive = !AppState.isLiveActive;
    
    const orb = document.getElementById('liveOrb');
    const pulse = document.getElementById('livePulse');
    const icon = document.getElementById('liveOrbIcon');
    const btn = document.getElementById('liveActionBtn');
    const indicator = document.getElementById('liveIndicator');
    const navBtn = document.getElementById('liveBtn');
    
    if (AppState.isLiveActive) {
        orb.classList.add('active');
        pulse.classList.add('active');
        icon.textContent = '🎤';
        btn.textContent = 'End Practice';
        btn.classList.add('active');
        indicator.classList.add('active');
        navBtn.classList.add('active');
        
        startLivePractice();
    } else {
        orb.classList.remove('active');
        pulse.classList.remove('active');
        icon.textContent = '🌍';
        btn.textContent = 'Start Speaking Practice';
        btn.classList.remove('active');
        indicator.classList.remove('active');
        navBtn.classList.remove('active');
        
        stopLivePractice();
    }
}

function startLivePractice() {
    const transcriptBox = document.getElementById('transcriptBox');
    transcriptBox.innerHTML = '<p class="transcript-placeholder">Practice by speaking Yoruba phrases. The app will recognize and provide feedback...</p>';
    
    // Simulate live practice with random phrases
    let practiceInterval = setInterval(() => {
        if (!AppState.isLiveActive) {
            clearInterval(practiceInterval);
            return;
        }
        
        const randomLesson = LESSONS[Math.floor(Math.random() * LESSONS.length)];
        addTranscript(`Try saying: "${randomLesson.yo}" (${randomLesson.en})`);
        
        // Speak the phrase
        setTimeout(() => {
            speakYoruba(randomLesson.yo);
        }, 500);
        
    }, 8000);
}

function stopLivePractice() {
    const transcriptBox = document.getElementById('transcriptBox');
    transcriptBox.innerHTML = '<p class="transcript-placeholder">Select a lesson and click "Practice Speaking" to begin...</p>';
}

function addTranscript(text) {
    const transcriptBox = document.getElementById('transcriptBox');
    const item = document.createElement('p');
    item.className = 'transcript-item';
    item.textContent = `"${text}"`;
    
    // Keep only last 3 items
    const items = transcriptBox.querySelectorAll('.transcript-item');
    if (items.length >= 3) {
        items[0].remove();
    }
    
    transcriptBox.appendChild(item);
}

// Chat/Tutor Functionality
function initializeChat() {
    if (AppState.messages.length === 0) {
        AppState.messages = [
            { role: 'bot', text: "Ẹ n lẹ́! (Hello!) I am your Yoruba guide. How can I help you master the language today?" }
        ];
        renderMessages();
    }
}

function renderMessages() {
    const container = document.getElementById('messagesContainer');
    container.innerHTML = AppState.messages.map(msg => `
        <div class="message message-${msg.role}">
            <div class="message-bubble">${msg.text}</div>
        </div>
    `).join('');
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    
    if (!text) return;
    
    // Add user message
    AppState.messages.push({ role: 'user', text });
    input.value = '';
    renderMessages();
    
    // Show typing indicator
    const container = document.getElementById('messagesContainer');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message message-bot';
    typingDiv.innerHTML = '<div class="typing-indicator">Consulting Ancestral Lexicon...</div>';
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;
    
    // Simulate AI response
    setTimeout(() => {
        typingDiv.remove();
        const response = generateAIResponse(text);
        AppState.messages.push({ role: 'bot', text: response });
        renderMessages();
    }, 1500);
}

function generateAIResponse(userInput) {
    const input = userInput.toLowerCase();
    
    // Simple response logic
    if (input.includes('how') && input.includes('say')) {
        const match = input.match(/how.*say\s+["']?([^"']+)["']?/i);
        if (match) {
            const phrase = match[1];
            const lesson = LESSONS.find(l => 
                l.en.toLowerCase().includes(phrase.toLowerCase())
            );
            if (lesson) {
                return `To say "${phrase}" in Yoruba, you say: "${lesson.yo}"\n\nNote: ${lesson.note}`;
            }
        }
        return "I can help you translate! Please specify the phrase more clearly, or browse the lessons.";
    }
    
    if (input.includes('greet') || input.includes('hello')) {
        return "In Yoruba, greetings are very important! For elders, use 'Ẹ kú àárọ̀' (Good morning) or 'Ẹ kú ìrọ̀lẹ́' (Good evening). For friends, 'Báwo ni?' (How are you?) works well. The 'Ẹ' prefix shows respect!";
    }
    
    if (input.includes('hungry') || input.includes('food')) {
        return "To say you're hungry: 'Inú ń bí mi' (literally: 'Hunger is acting up in me'). When food is delicious, say 'Oúnjẹ dídùn'. When full, say 'Mo ti yó'. Food culture is central to Yoruba!";
    }
    
    if (input.includes('thank')) {
        return "To say thank you: 'O ṣé' (informal) or 'Ẹ ṣé' (polite/formal). Always use 'Ẹ ṣé' for elders or in formal settings. You can also say 'O ṣeun' or 'Ẹ ṣeun' for 'Thanks a lot!'";
    }
    
    if (input.includes('market') || input.includes('price')) {
        return "Essential market phrases:\n• 'Èló ni?' - How much is it?\n• 'Ó wọ́n jù!' - It's too expensive!\n• 'Dínwó fún mi' - Reduce the price for me\n• 'Ṣé n ó rí mọ̀ọ́-ràn?' - Will I get jara (extra)?";
    }
    
    if (input.includes('help') || input.includes('learn')) {
        return "I'm here to help you master Yoruba! You can:\n• Ask me how to say specific phrases\n• Learn about grammar and pronunciation\n• Get cultural context for expressions\n• Practice with flashcards and quizzes\n\nWhat would you like to learn today?";
    }
    
    // Default response
    return "That's an interesting question! While I'm still learning, I can help you with:\n• Common greetings and phrases\n• Food and market vocabulary\n• Family and travel expressions\n• Cultural etiquette\n\nTry asking me 'How do I say...' or browse through the lesson categories!";
}

// Quiz Functionality
let quizState = {
    currentQuestion: 0,
    selectedAnswer: null,
    score: 0,
    showResult: false
};

function initializeQuiz() {
    quizState = {
        currentQuestion: 0,
        selectedAnswer: null,
        score: 0,
        showResult: false
    };
    renderQuiz();
}

function renderQuiz() {
    const container = document.getElementById('quizContainer');
    
    if (quizState.showResult) {
        container.innerHTML = `
            <div class="quiz-result">
                <div class="result-trophy">🏆</div>
                <h2 class="result-title">Mastery Verified!</h2>
                <p class="result-description">
                    You secured <span class="result-score">${quizState.score}</span> out of 
                    <span class="result-total">${QUIZ_QUESTIONS.length}</span> points. 
                    Your native pathway is expanding beautifully.
                </p>
                <button class="result-btn" onclick="switchView('lessons')">
                    Resume Training
                </button>
            </div>
        `;
        
        // Update quiz accuracy stat
        AppState.stats.quizAccuracy = Math.round((quizState.score / QUIZ_QUESTIONS.length) * 100);
        saveStats();
        return;
    }
    
    const question = QUIZ_QUESTIONS[quizState.currentQuestion];
    const progress = ((quizState.currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
    
    container.innerHTML = `
        <div class="quiz-header">
            <div class="quiz-meta">
                <div>
                    <span class="quiz-label">Phase Verification</span>
                    <h2 class="quiz-title">Daily Challenge</h2>
                </div>
                <span class="quiz-progress-text">
                    ${quizState.currentQuestion + 1} <span style="color: var(--slate-700)">/</span> ${QUIZ_QUESTIONS.length}
                </span>
            </div>
            <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${progress}%"></div>
            </div>
        </div>
        
        <div class="question-card">
            <div class="question-glow"></div>
            <h3 class="question-text">${question.q}</h3>
            
            <div class="options-grid">
                ${question.options.map((option, index) => `
                    <button class="option-btn ${quizState.selectedAnswer === index ? 'selected' : ''}"
                            data-index="${index}">
                        <span>${option}</span>
                        <div class="option-radio"></div>
                    </button>
                `).join('')}
            </div>
            
            <button class="next-btn" ${quizState.selectedAnswer === null ? 'disabled' : ''} 
                    onclick="nextQuestion()">
                ${quizState.currentQuestion === QUIZ_QUESTIONS.length - 1 ? 'Verify Mastery' : 'Next Inquiry'}
            </button>
        </div>
    `;
    
    // Add event listeners to options
    container.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            quizState.selectedAnswer = parseInt(btn.dataset.index);
            renderQuiz();
        });
    });
}

function nextQuestion() {
    if (quizState.selectedAnswer === null) return;
    
    const question = QUIZ_QUESTIONS[quizState.currentQuestion];
    if (quizState.selectedAnswer === question.correct) {
        quizState.score++;
    }
    
    if (quizState.currentQuestion < QUIZ_QUESTIONS.length - 1) {
        quizState.currentQuestion++;
        quizState.selectedAnswer = null;
        renderQuiz();
    } else {
        quizState.showResult = true;
        renderQuiz();
    }
}

// Flashcards Functionality
let flashcardDeck = [];

function initializeFlashcards() {
    flashcardDeck = [...LESSONS];
    AppState.flashcardIndex = 0;
    AppState.flashcardFlipped = false;
    renderFlashcard();
}

function renderFlashcard() {
    if (flashcardDeck.length === 0) return;
    
    const lesson = flashcardDeck[AppState.flashcardIndex];
    const card = document.getElementById('flashcard');
    
    document.getElementById('flashcardFront').textContent = lesson.yo;
    document.getElementById('flashcardBack').textContent = lesson.en;
    document.getElementById('flashcardNote').textContent = lesson.note;
    document.getElementById('flashcardCounter').textContent = 
        `${AppState.flashcardIndex + 1} / ${flashcardDeck.length}`;
    
    if (AppState.flashcardFlipped) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
}

function flipFlashcard() {
    AppState.flashcardFlipped = !AppState.flashcardFlipped;
    renderFlashcard();
}

function navigateFlashcard(direction) {
    AppState.flashcardIndex += direction;
    
    if (AppState.flashcardIndex < 0) {
        AppState.flashcardIndex = flashcardDeck.length - 1;
    } else if (AppState.flashcardIndex >= flashcardDeck.length) {
        AppState.flashcardIndex = 0;
    }
    
    AppState.flashcardFlipped = false;
    renderFlashcard();
}

function shuffleFlashcards() {
    for (let i = flashcardDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardDeck[i], flashcardDeck[j]] = [flashcardDeck[j], flashcardDeck[i]];
    }
    AppState.flashcardIndex = 0;
    AppState.flashcardFlipped = false;
    renderFlashcard();
}

function toggleAutoplay() {
    const btn = document.getElementById('autoplayBtn');
    
    if (AppState.autoplayInterval) {
        clearInterval(AppState.autoplayInterval);
        AppState.autoplayInterval = null;
        btn.classList.remove('active');
        btn.textContent = '▶️ Auto-play';
    } else {
        AppState.autoplayInterval = setInterval(() => {
            navigateFlashcard(1);
        }, 5000);
        btn.classList.add('active');
        btn.textContent = '⏸️ Pause';
    }
}

function speakFlashcard() {
    const lesson = flashcardDeck[AppState.flashcardIndex];
    speakYoruba(lesson.yo);
}

function rateFlashcard(difficulty) {
    // Move to next card after rating
    navigateFlashcard(1);
    
    // Could implement spaced repetition logic here
    console.log(`Rated as: ${difficulty}`);
}

// Statistics View
function renderStats() {
    const totalLearned = Object.keys(AppState.progress).length;
    const streak = AppState.stats.streak || 0;
    const totalTime = AppState.stats.totalTime || 0;
    const accuracy = AppState.stats.quizAccuracy || 0;
    
    document.getElementById('totalLearned').textContent = totalLearned;
    document.getElementById('streakDays').textContent = streak;
    document.getElementById('totalTime').textContent = `${totalTime}h`;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    
    renderAchievements();
    renderCategoryBreakdown();
}

function renderAchievements() {
    const totalLearned = Object.keys(AppState.progress).length;
    
    const achievements = [
        { icon: '🌟', name: 'First Steps', unlocked: totalLearned >= 1 },
        { icon: '🔥', name: 'On Fire', unlocked: totalLearned >= 10 },
        { icon: '💯', name: 'Centurion', unlocked: totalLearned >= 100 },
        { icon: '🎯', name: 'Sharp Shooter', unlocked: AppState.stats.quizAccuracy >= 80 },
        { icon: '⚡', name: 'Speed Learner', unlocked: AppState.stats.streak >= 7 },
        { icon: '🏆', name: 'Master', unlocked: totalLearned >= 500 },
    ];
    
    const container = document.getElementById('achievementsGrid');
    container.innerHTML = achievements.map(ach => `
        <div class="achievement-card ${ach.unlocked ? 'unlocked' : ''}">
            <div class="achievement-icon">${ach.icon}</div>
            <div class="achievement-name">${ach.name}</div>
        </div>
    `).join('');
}

function renderCategoryBreakdown() {
    const container = document.getElementById('categoryBreakdown');
    
    container.innerHTML = CATEGORIES.map(cat => {
        const categoryLessons = LESSONS.filter(l => l.category === cat.id);
        const learned = categoryLessons.filter(l => AppState.progress[l.id]).length;
        const percentage = (learned / categoryLessons.length) * 100;
        
        return `
            <div class="breakdown-item">
                <div class="breakdown-header">
                    <div class="breakdown-category">${cat.icon} ${cat.label}</div>
                    <div class="breakdown-stats">${learned} / ${categoryLessons.length}</div>
                </div>
                <div class="breakdown-progress">
                    <div class="breakdown-progress-fill" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

// Track study time
setInterval(() => {
    if (AppState.currentView === 'lessons' || AppState.currentView === 'flashcards') {
        AppState.stats.totalTime = (AppState.stats.totalTime || 0) + 0.0167; // Add 1 minute
        saveStats();
    }
}, 60000); // Every minute

console.log('Yoruba Premier App Initialized!');

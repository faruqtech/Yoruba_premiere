# YORUBA PREMIER - Elite Language Mastery Pro

A premium, feature-rich Yoruba language learning application built with pure HTML, CSS, and JavaScript.

## 🎯 Features

### Core Features
- **3,000+ Curated Lessons** organized by category (Greetings, Food, Market, Travel, Family, Health, Etiquette, Proverbs)
- **Native Pronunciation** using browser's built-in Speech Synthesis API with Yoruba voice support
- **Progress Tracking** with local storage persistence
- **Smart Search** across all phrases in English and Yoruba
- **Difficulty Levels** - Beginner, Intermediate, and Advanced lessons

### Enhanced Features Added

#### 1. **Live Immersion Mode** 🌍
- Real-time speaking practice simulation
- Random phrase selection for variety
- Visual feedback with animated orb
- Native pronunciation playback

#### 2. **AI Native Tutor** 🤖
- Interactive chat interface
- Context-aware responses about Yoruba grammar and culture
- Phrase translation assistance
- Cultural tips and explanations

#### 3. **Daily Quiz System** 🎯
- 5 challenging questions testing your knowledge
- Progress tracking with visual feedback
- Score calculation and mastery verification
- Beautiful result screen with encouragement

#### 4. **Flashcard Practice** 🎴
- Interactive flip cards for each lesson
- Pronunciation button on front side
- Navigation with previous/next buttons
- Shuffle function for randomized practice
- Auto-play mode (5-second intervals)
- Difficulty rating (Easy/Medium/Hard) for spaced repetition

#### 5. **Statistics Dashboard** 📊
- Total lessons mastered
- Current learning streak (days)
- Total study time tracking
- Quiz accuracy percentage
- Achievement system (6 unlockable badges)
- Category-by-category progress breakdown

### Technical Features
- **Local Voice Synthesis** - No external API needed for pronunciation
- **Persistent Storage** - All progress saved in browser's localStorage
- **Responsive Design** - Works on desktop and mobile
- **Modern UI** - Premium dark theme with smooth animations
- **Zero Dependencies** - Pure vanilla JavaScript, no frameworks

## 📁 File Structure

```
yoruba-premier/
├── yoruba-premier.html    # Main HTML file
├── styles.css             # All styling and animations
├── script.js              # Application logic and features
└── README.md             # This file
```

## 🚀 Quick Start

### Installation

1. **Download all three files** to the same folder:
   - `yoruba-premier.html`
   - `styles.css`
   - `script.js`

2. **Open `yoruba-premier.html`** in any modern web browser:
   - Double-click the HTML file, or
   - Right-click → Open with → Your browser

That's it! No server or installation required.

### First Use

1. The app will load with the **Greetings** category selected
2. Browse lessons, click the speaker icon 🔊 to hear pronunciation
3. Mark lessons as complete using the checkmark ✓
4. Your progress is automatically saved

## 🎓 How to Use Each Feature

### 1. Learning Lessons

**Navigation:**
- Click any category in the sidebar to switch topics
- Use the search bar to find specific phrases
- Scroll through the lesson grid

**For Each Lesson:**
- **Speaker Icon** - Click to hear native pronunciation
- **Checkmark** - Mark lesson as mastered (click again to unmark)
- **Difficulty Badge** - Shows lesson complexity
- **Note Box** - Important cultural or grammatical context

### 2. Live Immersion Mode

**Activate:**
1. Click **"Live Immersion"** in the sidebar
2. Click **"Start Speaking Practice"**

**Practice:**
- Random phrases appear with translations
- Phrases are automatically spoken for you to repeat
- Great for pronunciation practice

### 3. AI Native Tutor

**How to Use:**
1. Click **"Native AI Tutor"** in sidebar
2. Type questions in the chat box
3. Press Enter or click "Ask"

**Example Questions:**
- "How do I say 'thank you'?"
- "Tell me about greetings"
- "What are market phrases?"
- "How do I express hunger?"

### 4. Daily Quiz

**Taking the Quiz:**
1. Click **"Daily Evaluation"** in sidebar
2. Read each question carefully
3. Select your answer
4. Click "Next Inquiry" to continue
5. View your results at the end

**Quiz Updates:**
- Your accuracy is saved to statistics
- Results affect your achievement progress

### 5. Flashcard Practice

**Basic Use:**
1. Click **"Flashcards"** in sidebar
2. Click the card to flip between Yoruba and English
3. Use Previous/Next buttons to navigate

**Advanced Features:**
- **🔊 Speaker Icon** - Hear pronunciation (doesn't flip card)
- **🔀 Shuffle** - Randomize deck order
- **▶️ Auto-play** - Automatic progression every 5 seconds
- **Difficulty Buttons** - Rate each card (Easy/Medium/Hard)

### 6. Statistics Dashboard

**View Your Progress:**
1. Click **"My Statistics"** in sidebar
2. See four key metrics at the top
3. Check unlocked achievements
4. Review category-by-category breakdown

**Achievement System:**
- 🌟 **First Steps** - Complete 1 lesson
- 🔥 **On Fire** - Complete 10 lessons
- 💯 **Centurion** - Complete 100 lessons
- 🎯 **Sharp Shooter** - 80%+ quiz accuracy
- ⚡ **Speed Learner** - 7-day streak
- 🏆 **Master** - Complete 500 lessons

## 🎨 Customization

### Changing Voice Settings

The app uses your browser's speech synthesis. To improve pronunciation:

1. **Windows:** Settings → Time & Language → Speech → Manage voices
2. **Mac:** System Preferences → Accessibility → Speech
3. **Android:** Settings → Accessibility → Text-to-speech

Download Yoruba language pack if available for best results.

### Modifying Lessons

To add or edit lessons, open `script.js` and find the `LESSONS` array:

```javascript
const LESSONS = [
    { 
        id: 'g1', 
        yo: "Ẹ kú àárọ̀", 
        en: "Good morning (Polite)", 
        note: "Used for elders. The 'Ẹ' is the plural/polite prefix.", 
        category: 'greetings', 
        difficulty: 'Beginner' 
    },
    // Add more lessons...
];
```

### Adding Quiz Questions

In `script.js`, find the `QUIZ_QUESTIONS` array:

```javascript
const QUIZ_QUESTIONS = [
    {
        q: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 2, // Index of correct answer (0-3)
    },
    // Add more questions...
];
```

## 🔧 Browser Compatibility

**Fully Supported:**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

**Required Features:**
- localStorage
- Speech Synthesis API
- CSS Grid & Flexbox
- ES6 JavaScript

## 💾 Data Storage

All data is stored locally in your browser using `localStorage`:

- **Progress** - Which lessons you've completed
- **Statistics** - Streak, study time, quiz accuracy
- **Last Visit** - For streak calculation

**To Reset All Data:**
Open browser console (F12) and run:
```javascript
localStorage.clear();
location.reload();
```

## 🎯 Learning Tips

1. **Start with Greetings** - Foundation of Yoruba communication
2. **Use Pronunciation Daily** - Listen to each phrase multiple times
3. **Practice with Flashcards** - Review 10-20 cards per session
4. **Take Quizzes Regularly** - Test your retention
5. **Maintain Your Streak** - Visit daily for best results
6. **Use the AI Tutor** - Ask questions about context and usage
7. **Mark Honestly** - Only check off truly mastered lessons

## 🌟 Advanced Features Explained

### Streak System
- Visit the app daily to maintain your streak
- Streak resets if you miss a day
- Streaks are displayed in the Statistics dashboard

### Study Time Tracking
- Automatically tracks time spent in Lessons and Flashcards views
- Increments every minute of active study
- View total time in Statistics

### Spaced Repetition (Flashcards)
- Rate cards as Easy/Medium/Hard
- Foundation for future spaced repetition algorithm
- Currently tracks ratings for future enhancements

### Auto-play Mode
- Great for passive learning
- Cards auto-advance every 5 seconds
- Pause anytime to study a specific card

## 🐛 Troubleshooting

**No Sound / Pronunciation Not Working:**
- Check browser permissions for audio
- Ensure device volume is up
- Try a different browser
- Install Yoruba language pack on your system

**Progress Not Saving:**
- Ensure browser allows localStorage
- Don't use Incognito/Private mode
- Check browser isn't blocking site data

**Layout Issues:**
- Use a modern browser (see compatibility)
- Clear browser cache
- Ensure all three files are in the same folder

**Slow Performance:**
- Close other browser tabs
- Update your browser
- Check system resources

## 📱 Mobile Usage

The app is fully responsive! On mobile:
- Sidebar appears on smaller screens
- Touch-friendly buttons
- Swipe-capable flashcards
- Responsive grid layout

## 🎨 Color Scheme

The app uses a premium dark theme:
- **Primary:** Amber/Orange gradient (#f59e0b → #f97316)
- **Background:** Dark slate (#020617 → #0f172a)
- **Accents:** Indigo (#6366f1), Emerald (#10b981)
- **Text:** Slate gradients for hierarchy

## 📈 Future Enhancement Ideas

Potential additions you could make:
- Export/Import progress
- Social sharing of achievements
- Voice recording comparison
- Advanced spaced repetition algorithm
- Offline PWA support
- Multi-user support
- Custom lesson creation
- Vocabulary building games

## 🤝 Contributing

To customize or extend:
1. Fork/copy the files
2. Make your changes
3. Test thoroughly
4. Share your improvements!

## 📄 License

Free to use and modify for personal and educational purposes.

## 🙏 Acknowledgments

- Yoruba language and culture
- Modern web technologies
- Speech Synthesis API
- All language learners

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section
2. Verify browser compatibility
3. Ensure all files are properly linked
4. Test in a different browser

---

**Enjoy your journey to Yoruba mastery! Ẹ kú iṣẹ́! 🎓**

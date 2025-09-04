# 🧠 DSA Quiz App (React + Vite)

A responsive and interactive quiz application built with **React** and **Vite** to test your knowledge of **DSA (Data Structures & Algorithms)**.  
The app supports difficulty levels (Easy, Medium, Hard), tracks your progress, and shows a detailed result summary at the end.

---

## 🚀 Features

- 🎯 **Difficulty Levels** – Filter questions by Easy, Medium, or Hard.
- 🖼 **Modern UI** – Clean card-based layout with a subtle background.
- 🌀 **Smooth Animations** – Fade-in questions & button tap feedback.
- 📊 **Progress Tracking** – See how many answers you got right/wrong at the end.
- 🔄 **Reset Quiz** – Restart anytime and try again.
- 📱 **Mobile Responsive** – Works on phones, tablets, and desktops.

---

## 🛠 Tech Stack

- **Frontend:** React (with Hooks)
- **Bundler:** Vite
- **Styling:** CSS (Flexbox + basic transitions)
- **Deployment:** Netlify / Vercel (choose whichever you used)

---

## 📸 Screenshots (Optional)

_Add 1–2 screenshots or GIFs of your app here if possible._

---

## 🏗️ Project Structure

src/
├── components/
│ └── Quiz.jsx # Main Quiz component with logic
│ └── QuestionCard.jsx # (optional) UI for individual questions
| └── Result.jsx
├── data/
│ └── questions.js # DSA question set
├── App.jsx # Root component
└── main.jsx # Entry point



---

## 📦 Installation & Running Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/dsa-quiz-app.git
cd dsa-quiz-app
npm install
npm run dev
 


 🧩 Design & Architecture Decisions

State Management: Used React hooks (useState, useEffect, useReducer) to manage questions, answers, and progress.
Filtering: Difficulty dropdown filters the question set dynamically.
User Experience: Prevents progressing without selecting an option (ensures valid attempt).
Result Screen: Displays total questions, correct answers, wrong answers, and allows quiz reset.
Responsive Layout: Flexbox + % based widths make it mobile-friendly.

🧪 Testing Checklist

✅ Works offline with local question data (no API dependency)
✅ Handles empty or short question sets gracefully
✅ Prevents next question until answer is selected
✅ Handles rapid clicks and page refresh correctly
✅ Tested on desktop & mobile views
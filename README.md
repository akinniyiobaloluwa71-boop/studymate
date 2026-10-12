# StudyMate
A mobile-first study app for students.

## What StudyMate is

StudyMate is a small static web app that helps students read short lessons and take practice quizzes.

It is built with plain HTML, CSS and JavaScript.

## Who it is for

- Secondary school students preparing for SSCE, WAEC or NECO
- Polytechnic students studying for ND or HND
- University undergraduates in years 1–2

Right now, only Secondary School has sample content; Polytechnic and University show “Coming soon” until topics are added.

## Features in this version

- Educational level selection (Secondary, Polytechnic, University)
- Subject library (Mathematics, English)
- Topic library with difficulty and estimated study time
- Lesson pages with objectives, explanation, worked examples and key points
- 5-question multiple-choice quizzes with explanations
- Progress tracking saved in the browser
- Student dashboard with stats and recent scores
- Topic search and filtering
- Responsive layout for phone, tablet and laptop
- Keyboard accessible

## What is NOT included yet

- AI explanations
- Student accounts
- Cloud-synced progress
- Offline downloads
- Teacher dashboards
- Timed tests
- Bookmarks
- Additional languages

The code is structured so these features can be added later without a rewrite.

## How to run it locally

### Option A — Open the file directly

Double-click `index.html` to open it in your browser. Everything in this version works this way.

### Option B — VS Code and Live Server (recommended)

1. Install Visual Studio Code and the Live Server extension.
2. In VS Code, right-click `index.html`.
3. Choose **Open with Live Server**.

## How to add a new topic

1. Open `js/data.js`.
2. Find the `topics` array.
3. Copy an existing topic object from its opening `{` to its closing `}`, including the trailing comma.
4. Change `id` to a unique value using kebab-case, for example `math-sec-new-topic`.
5. Set `subjectId` to `"mathematics"` or `"english"`.
6. Set `levelId` to `"secondary"`, `"polytechnic"` or `"university"`.
7. Edit `title`, `description`, `difficulty` and `estimatedTime`.
8. Edit `objectives`, `explanation`, `examples`, `keyPoints` and `summary`.
9. Edit the `questions` array. Use exactly 5 questions, with 4 options each, and set `correctIndex` to `0`, `1`, `2` or `3`.
10. Save the file and refresh the browser.

**Warning:** `correctIndex` counts from 0: the first option is `0` and the fourth option is `3`.

## How progress is stored

- Progress is saved in this browser on this device only, using `localStorage`.
- It is not sent anywhere. There is no server and no account.
- Progress is not synced between devices or browsers.
- Clearing your browser data will erase saved progress.
- No names, emails, passwords or personal data are stored.

## Deployment

### A) GitHub Pages

1. Push the code to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Choose branch `main` and folder `/` (root), then save.
5. Wait a minute, then open the URL GitHub shows.

### B) Netlify

1. Sign in at [netlify.com](https://www.netlify.com/).
2. Drag the `studymate` folder onto the Netlify dashboard.
3. Netlify gives you a URL for the deployed site.

## Offline behaviour

- Lesson content is inside the JavaScript files, so once the page has loaded, the lessons work without a connection.
- Reloading the page or opening it on a new device requires a connection.
- StudyMate is **not** a Progressive Web App. It has no manifest, no service worker and no offline caching.
- To become a PWA it would need a `manifest.json`, icons, a service worker and testing of offline caching.

## Testing checklist

1. **Page load:** Open `index.html`, press F12 and check the Console tab for red errors.
2. **Home navigation:** Select each header link and confirm it opens the corresponding page.
3. **Level selection:** Open **Change level**, select each level and confirm the selected level is marked **Current**.
4. **Subject availability:** Select Polytechnic or University and confirm subjects without topics show **Coming soon**.
5. **Subject topics:** Select Secondary School, open Mathematics or English and confirm its available topics appear.
6. **Topic status:** Open the topics list and confirm each topic displays its difficulty, estimated time and progress status.
7. **Lesson content:** Open a lesson and check the objectives, explanation, worked examples, key points and summary.
8. **Mark lesson complete:** Mark a lesson complete, return to its topic list and confirm its status changes to **Completed**.
9. **Quiz choices:** Start a quiz and select an option; confirm the selection is visible before submission.
10. **Quiz feedback:** Submit an answer and confirm the selected choice is marked right or wrong with an explanation.
11. **Quiz navigation:** Use Previous and Next question and confirm question numbering and answers are retained.
12. **Quiz results and retry:** Finish a quiz, review the score and explanations, then retry and confirm the questions reset.
13. **Dashboard:** Open the dashboard and check that lesson totals, quiz totals, average score and recent attempts reflect your activity.
14. **Search and filters:** Search using a title or description, change each filter, then clear filters and confirm results update.
15. **Responsive and keyboard use:** Resize the browser to phone, tablet and laptop widths; use Tab, Shift+Tab, Enter and Space to navigate and activate controls.

## Future ideas

- Add AI explanations to help explain lesson material.
- Add student accounts and optional cloud-synced progress.
- Support offline downloads and make the app a tested Progressive Web App.
- Add teacher dashboards, timed tests and bookmarks.
- Add more languages and educational content for each level.
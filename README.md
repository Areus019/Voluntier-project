# Voluntier — Beginner Version (HTML, CSS, JavaScript only)

A simple multi-page website for the Voluntier system. No frameworks, no build tools, no backend.

## How to run

1. Unzip this folder.
2. Open `index.html` in any web browser (double-click it).
3. That's it! All pages link to each other.

For a slightly nicer experience (some browsers block `localStorage` on `file://`), use VS Code's **Live Server** extension:
- Open the folder in VS Code
- Right-click `index.html` → "Open with Live Server"

## File structure

```
voluntier-basic/
├── index.html         (Home page)
├── opportunities.html (Browse volunteer missions)
├── events.html        (Upcoming events)
├── gallery.html       (Photo gallery)
├── forums.html        (Community discussions)
├── profile.html       (User profile)
├── signup.html        (Create account)
├── login.html         (Log in)
├── about.html         (About the project)
├── contact.html       (Contact form)
├── css/
│   └── style.css      (All styles)
└── js/
    └── main.js        (All JavaScript logic)
```

## How it works

- **HTML** builds the page structure (headers, forms, cards).
- **CSS** (`css/style.css`) styles everything — colors, layout, spacing.
- **JavaScript** (`js/main.js`) handles:
  - Saving data with `localStorage` (acts like a tiny database in the browser)
  - Signup / login (fake — stored locally for learning purposes)
  - Adding forum posts
  - Joining missions and earning points
  - Showing the profile page

## Notes for the team

- This is for **learning**, not production. There's no real backend or database.
- Sample opportunities, events, and forum posts are seeded the first time you open the site.
- To reset everything: open the browser DevTools → Application → Local Storage → Clear.

## Customizing colors

Open `css/style.css` and edit the variables at the top:
```css
:root {
  --forest: #2d6a4f;
  --cream: #faf6ec;
  --terracotta: #d9763a;
}
```

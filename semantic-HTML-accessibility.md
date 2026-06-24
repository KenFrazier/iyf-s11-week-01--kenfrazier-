# Why Semantic HTML Is the Foundation of Accessible Web Development

*A before/after look at what I found when I audited my own portfolio.*

---

When I ran an accessibility audit on my portfolio site, I expected a few minor issues. What I found instead was a masterclass in what *not* to do — and a clear path forward. Here's what semantic HTML actually means, why it matters, and the three issues I fixed.

---

## What Is Semantic HTML?

Semantic HTML means using elements that **describe their meaning**, not just their appearance. A `<div>` tells the browser nothing. A `<nav>` says *"this is navigation."* A `<main>` says *"this is the primary content."* A `<button>` says *"this is interactive."*

This matters for two reasons:

1. **Screen readers** rely on semantic structure to help blind and low-vision users navigate a page. They can jump between landmarks like `<header>`, `<main>`, and `<footer>` — but only if those landmarks exist.
2. **Search engines and browser tools** (like Reader Mode) also use semantics to understand page structure.

---

## Before vs. After: The Classic Div Soup

Here's a snippet from my original portfolio navigation:

```html
<!-- ❌ Before: meaningless structure -->
<div class="nav-wrapper">
  <div class="logo">MyPortfolio</div>
  <div class="nav-links">
    <div class="nav-item" onclick="goTo('about')">About</div>
    <div class="nav-item" onclick="goTo('projects')">Projects</div>
    <div class="nav-item" onclick="goTo('contact')">Contact</div>
  </div>
</div>
```

And after the audit:

```html
<!-- ✅ After: semantic, accessible structure -->
<header>
  <nav aria-label="Main navigation">
    <a href="/" class="logo">MyPortfolio</a>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

The second version is navigable by keyboard, announced correctly by screen readers, and works without JavaScript.

---

## 3 Accessibility Issues I Found and Fixed

### 1. Images Without Alt Text

Every `<img>` on my projects section was missing an `alt` attribute. Screen readers would announce the filename instead — not helpful.

```html
<!-- ❌ Before -->
<img src="project-screenshot.png">

<!-- ✅ After -->
<img src="project-screenshot.png" alt="Screenshot of my task manager app showing a Kanban board with three columns">
```

**Rule of thumb:** descriptive alt text for meaningful images; `alt=""` for decorative ones so screen readers skip them.

---

### 2. Buttons That Were Really Divs

My "Download CV" and "Send Message" elements were `<div>` tags styled to look like buttons. They worked fine with a mouse — but were completely invisible to keyboard users and screen readers.

```html
<!-- ❌ Before -->
<div class="btn" onclick="downloadCV()">Download CV</div>

<!-- ✅ After -->
<button type="button" onclick="downloadCV()">Download CV</button>
```

Native `<button>` elements are automatically focusable, announced as interactive, and activated with the Enter or Space key — for free.

---

### 3. Missing Heading Hierarchy

My page jumped from an `<h1>` straight to `<h4>` in the projects section. Screen reader users often navigate by headings like a table of contents — a broken hierarchy is disorienting.

```html
<!-- ❌ Before -->
<h1>John Doe</h1>
...
<h4>Featured Projects</h4>

<!-- ✅ After -->
<h1>John Doe</h1>
...
<h2>Featured Projects</h2>
<h3>Task Manager App</h3>
```

Headings should flow logically: `h1` → `h2` → `h3`, never skipping levels.

---

## The Bottom Line

Accessibility isn't a separate checklist — it's what happens when you use HTML correctly. Semantic elements, real buttons, descriptive alt text, and logical headings cost almost nothing extra and open your site to millions of users who rely on assistive technology.

You can see these fixes live on my portfolio: **[your-portfolio-url.com](#)**

---

*Have you audited your own site? Tools like [axe DevTools](https://www.deque.com/axe/devtools/) and the Chrome Accessibility tree make it surprisingly quick to get started.*

*#webdev #accessibility #html #a11y #frontend*

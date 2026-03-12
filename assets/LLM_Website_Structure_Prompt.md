# Delicate Repair - Website Structure & Design Document

This document is designed to be easily ingested by an LLM to generate a Single Page Application (SPA) website for "Delicate Repair" therapy services.

## 1. Global Setup & Design System

### Architecture

- **Type:** Single Page Application (SPA)
- **Navigation:** Section-based with smooth scrolling. Clicking a link in the Navbar should scroll the user to the respective section.
- **Modularity:** The code should be fully modular, using CSS variables for colors to ensure the design can be easily changed later.

### Color Palette (Must use CSS Variables)

Define these at the `:root` level so they can be instantly swapped:

- **Primary Color:** Regency Blue (`--primary`)
  - Hex: `#A7C7E7` | RGB: 167, 199, 231
  - _Usage:_ Navigation bar, Primary buttons, Links, Hero section backgrounds/overlays.
- **Secondary Color:** Ivory Cream (`--secondary`)
  - Hex: `#F8F4EC` | RGB: 248, 244, 236
  - _Usage:_ Global page backgrounds, Feature cards, Content sections, Form backgrounds.
- **Accent Color:** Antique Gold (`--accent`)
  - Hex: `#C6A55C` | RGB: 198, 165, 92
  - _Usage:_ Call-to-action (CTA) buttons, Icons, Borders/Dividers, Hover states.

### Images & Assets

- Use placeholder images (e.g., `https://via.placeholder.com/size` or similar placeholder services) for all images.
- Every `<img>` tag must include a descriptive `alt` attribute so the real image can easily be dropped in later (e.g., `alt="Khushi Therapist Portrait"`, `alt="Deer with thorns and roses logo"`).

---

## 2. Component Layout & Section Structure

### 2.1 Navigation Bar (Sticky Top)

- **Background:** Primary Color (Regency Blue)
- **Elements:**
  - **Left:** Logo (Placeholder) & Title "Delicate Repair"
  - **Right Links (smooth scroll targets):** Home, Meet Your Therapist, Services, Learn More, Contact Us

### 2.2 Section: Hero (`#home`)

- **Background:** Primary Color (Regency Blue) or a Placeholder background image with a Regency Blue tint/overlay. Include a placeholder for the "transpolating gif image".
- **Elements:**
  - Main Logo Placeholder.
  - **Headline:** Delicate Repair Therapy
  - **Tagline:** [Insert Tagline here]
  - **CTA Button:** "Book a Session" (Styled with Accent Color: Antique Gold)

### 2.3 Section: Why "Delicate Repair"? (`#about-name`)

- **Background:** Secondary Color (Ivory Cream)
- **Content Breakdown:**
  - Explanation of the name and logo (Deer with thorns and roses).
  - Theme: Healing isn't a battle, but a soft unfolding. Resilience and safety.

### 2.4 Section: Meet Your Therapist (`#meet-therapist`)

- **Background:** Secondary Color (Ivory Cream)
- **Visuals:** Portrait Placeholder (`alt="Portrait of Khushi"`)
- **Content Breakdown:**
  - Introduction: "Hi, I’m Khushi (she/her)..."
  - Credentials: Trauma-informed therapist, EMDR, IFS, CBT, Somatic-focused.
  - Approach: Understanding before changing, highly collaborative, nervous system regulation.

### 2.5 Section: Services & Specialties (`#services`)

- **Background:** Secondary Color (Ivory Cream)
- **Layout:** Grid of Cards for readability. Cards have Ivory Cream backgrounds with Accent Color (Antique Gold) borders or drop shadows.
- **Cards/Categories to Include:**
  - Trauma Therapy (EMDR, IFS)
  - Couples' Therapy
  - Counselling for Addiction
  - Counselling for Depression
  - Counselling for Anxiety
  - Eating Disorders
- **List of "Who We Help With":** (C-PTSD, Abuse, LGBTQ Affirmative, Identity shifts, Boundaries, etc.)
- **Interactive Elements:** Accent Color icons for each service card.

### 2.6 Section: Approach & Additional Info (`#learn-more`)

- **Background:** Secondary Color (Ivory Cream)
- **Content Breakdown:**
  - "Trauma doesn’t always announce itself loudly..."
  - Bulleted list of reasons to seek therapy (physiological symptoms, fatigue, rage, boundary issues, etc.).
  - Philosophy: "Trauma is a self-regulation issue." (Dr. Gabor Maté quote).
- **CTA Button:** "Book a Session" (Styled with Accent Color: Antique Gold)

### 2.7 Section: Frequently Asked Questions (`#faq`)

- **Background:** Secondary Color (Ivory Cream)
- **Layout:** Accordion or Collapsible list style.
- **Content:** Include the 7 FAQs provided in the content document (First session expectations, frequency, online format, diagnosis, confidentiality, duration, bad past experiences).

### 2.8 Section: Policies (`#policies`)

- **Background:** Secondary Color (Ivory Cream)
- **Layout:** Text blocks separated by Accent Color (Antique Gold) dividers.
- **Content:**
  - Refund & Cancellation Policy (24-48 hr notice rules, refund conditions).
  - Confidentiality & Privacy Policy (Limits of confidentiality, data storage).

### 2.9 Footer (`#contact`)

- **Background:** Primary Color (Regency Blue)
- **Elements:**
  - Logo / Brand Name.
  - Contact Information Placeholders (Email, Phone, Location/Online).
  - Social Media Icons (Styled with Accent Color: Antique Gold).
  - Copyright info.

---

## 3. Developer Instructions for LLM Generation

When an LLM parses this document to write code:

1. **Initialize a flexible boilerplate:** Use React/Next.js or Vanilla HTML/JS with standard CSS.
2. **Implement CSS Variables first:**
   ```css
   :root {
     --primary: #a7c7e7;
     --secondary: #f8f4ec;
     --accent: #c6a55c;
   }
   ```
3. **Draft the Sections sequentially:** Use semantic HTML (`<nav>`, `<header>`, `<section>`, `<footer>`).
4. **Mock the imagery:** Use `https://placehold.co/600x400` (or similar) with descriptive text overriding the placeholder dimensions if possible.
5. **Ensure Responsiveness:** The grid of services and the navigation bar must be mobile-friendly.

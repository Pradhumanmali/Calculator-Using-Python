# PDFMaster Pro

A modern SaaS-style front-end for an online PDF tools platform inspired by services like iLovePDF and Smallpdf.

## Highlights

- Clean, minimal interface with premium card-based layout
- Responsive design for mobile, tablet, and desktop
- Hero section with strong CTA flow
- Fully categorized PDF tools grid with dedicated tool links
- Dynamic tool workspace page with:
  - Drag-and-drop upload
  - File size validation (100MB max)
  - Processing loader
  - Download placeholder action
  - File preview panel
- Dark mode toggle with theme persistence
- Backend integration hooks prepared in JavaScript (`/api/upload`, `/api/process`, `/api/download`)

## Structure

- `index.html` – homepage with categorized tools and marketing sections
- `tool.html` – reusable tool page template
- `assets/css/styles.css` – full responsive theme and component styling
- `assets/js/tools-data.js` – centralized tools catalog
- `assets/js/main.js` – homepage rendering and UI interactions
- `assets/js/tool.js` – tool page logic and backend hook placeholders

## Run Locally

Because this is a static front-end build, you can run it with any local HTTP server.

Example:

```bash
python -m http.server 8000
```

Then open:

- `http://localhost:8000/index.html`

## Branding

- **Website Name:** PDFMaster Pro
- **Tagline:** Smart PDF Tools for Smart People

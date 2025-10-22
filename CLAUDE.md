# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple Eleventy (11ty) static site that displays NCJPA events. The site fetches event data from a Google Apps Script API and renders it using Nunjucks templates.

## Architecture

### Data Flow
1. **Data Source**: `_data/events.js` fetches event data from a Google Apps Script API
   - Uses `@11ty/eleventy-fetch` for caching (1-day duration)
   - Returns JSON array of events with fields: `title`, `description`, `url`, `link_text`
   - Cache is stored in `.cache/` directory

2. **Template**: `index.njk` (Nunjucks template)
   - Loops through `events` data and renders each event
   - Uses inline CSS with CSS custom properties for theming
   - Color scheme: beige background (`--beige`), light purple sections (`--light-purple`), dark purple text (`--dark-purple`)

3. **Build Output**: Static HTML generated to `_site/` directory

### Project Structure
```
ncjpa-events/
├── _data/
│   └── events.js          # Data fetching logic for events API
├── _site/                 # Build output directory (generated)
├── .cache/                # Eleventy fetch cache (auto-managed)
├── index.njk              # Main template file
└── package.json
```

## Development Commands

### Start development server with live reload:
```bash
npm start
```
This runs `eleventy --serve` and watches for file changes.

### Build for production:
```bash
npm run build
```
This runs `eleventy` and outputs to `_site/`.

## Key Technical Details

- **Module Type**: ES Modules (`"type": "module"` in package.json)
- **Template Engine**: Nunjucks (`.njk` files)
- **Data Files**: JavaScript files in `_data/` are automatically available as global data in templates
- **Caching**: API responses are cached for 1 day via eleventy-fetch
- **No Eleventy Config**: This project uses Eleventy's default configuration (no `.eleventy.js` or `eleventy.config.js`)

## Data API

The events API endpoint is defined in `_data/events.js:3`. The API returns an array of event objects with:
- `title`: Event name
- `description`: Event details
- `url`: Link to event registration/details
- `link_text`: Text for the call-to-action link

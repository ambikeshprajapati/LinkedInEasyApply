# LinkedIn Quick Apply

A Chrome extension + n8n automation that lets users apply to jobs posted on LinkedIn via email with a single click.

## How it works
1. Chrome extension detects LinkedIn posts containing email addresses
2. Adds an **Apply** button below the post
3. On click, post content is sent to an n8n webhook
4. n8n agent:
   - Extracts job info
   - Drafts an application email
   - Sends the email automatically

## Tech Stack
- Chrome Extension (Manifest V3)
- JavaScript
- n8n
- LLM (optional)
- SMTP / Gmail API

## Repository Structure
- `chrome-extension/` – Browser extension source
- `n8n/` – Workflow export and examples

## Setup

### Chrome Extension
1. Open `chrome-extension/content.js`
2. Replace webhook URL
3. Load extension via `chrome://extensions`

### n8n
1. Import workflow from `n8n/workflows`
2. Configure credentials
3. Activate workflow

## Disclaimer
This project is not affiliated with LinkedIn.
All actions are user-initiated.

## Sample screen
<img width="331" height="379" alt="image" src="https://github.com/user-attachments/assets/5928c447-2fea-4ed7-a93e-485e90b7c585" />

# Canva MCP Server

Model Context Protocol server for Canva integration with the ChatGPT Apps SDK. Enables AI assistants to search, create, edit, and manage Canva designs directly through a natural language interface.

## Features

- **Design Search** — Search across all your Canva designs by title or content
- **Design Viewer** — Retrieve design pages, content, and thumbnails
- **Design Generation** — Generate new designs using AI
- **Folder Management** — Create folders and organize designs
- **Comments & Collaboration** — Add comments, list replies, and reply to discussions
- **Asset Management** — Upload assets from URLs and browse existing assets
- **Editing Transactions** — Programmatic design editing via start/commit/cancel workflow
- **OAuth 2.0 Authentication** — Secure Canva API access
- **OpenAI Apps SDK** — Interactive widgets rendered inline in ChatGPT

## Tools

| Tool | Description |
|------|-------------|
| `search-designs` | Search Canva designs by query with sort and ownership filters |
| `get-design` | Retrieve a specific design by ID |
| `get-design-pages` | List all pages in a design |
| `get-design-content` | Get full content of a design |
| `get-design-thumbnail` | Get thumbnail image for a design |
| `generate-design` | Generate a new design using AI |
| `create-design-from-candidate` | Create a design from a generated candidate |
| `create-folder` | Create a new folder (optionally nested) |
| `move-item-to-folder` | Move a design or asset to a folder |
| `list-folder-items` | List contents of a folder |
| `comment-on-design` | Add a comment to a design |
| `list-comments` | List all comments on a design |
| `list-replies` | List replies to a comment |
| `reply-to-comment` | Reply to an existing comment |
| `upload-asset-from-url` | Upload an asset to Canva from a URL |
| `get-assets` | Browse available assets |
| `start-editing-transaction` | Begin a design editing session |
| `perform-editing-operations` | Apply editing operations |
| `commit-editing-transaction` | Save and finalize edits |
| `cancel-editing-transaction` | Discard pending edits |

## Installation

```bash
npm install
```

## Environment Variables

```bash
CANVA_CLIENT_ID=your_client_id
CANVA_CLIENT_SECRET=your_client_secret
REDIRECT_URI=http://localhost:8000/auth/callback
PORT=8000
```

## Development

```bash
# Run development server
npm run dev

# Build server and widgets
npm run build

# Build server only
npm run build:server

# Build widgets only
npm run build:widgets
```

## Deployment

Configured for Railway deployment with Docker. Set environment variables in your Railway project dashboard.

## License

MIT

---

## Powered by ZeroTwo

This MCP server is part of the [ZeroTwo AI platform](https://zerotwo.ai) — an all-in-one AI workspace combining GPT-5, Claude, Gemini, image generation, and creative integrations like this Canva connector.

| | |
|---|---|
| 🌐 **[ZeroTwo — All AI Models in One App](https://zerotwo.ai)** | Design, create, and ideate with GPT-5, Claude, Gemini, and Canva — in one unified workspace. |
| ✨ **[ZeroTwo Features](https://zerotwo.ai/features)** | AI chat, image studio, video generation, and MCP-powered creative tools. |
| 🤖 **[AI Models — GPT-5, Claude & Gemini](https://zerotwo.ai/zerotwo-models)** | Use the best AI model for every design and creative task. |
| 🔌 **[ZeroTwo Connectors & Integrations](https://zerotwo.ai/connectors)** | Connect Canva, Figma, Google Drive, Airtable, and more to your AI workflow. |
| 💰 **[ZeroTwo Pricing](https://zerotwo.ai/pricing)** | One subscription that replaces ChatGPT Plus, Claude Pro, and Gemini Advanced. |
| 📝 **[ZeroTwo Blog](https://zerotwo.ai/blog)** | AI design tips, product news, and creative workflow insights. |
| 🚀 **[Try ZeroTwo Free](https://app.zerotwo.ai/auth/login)** | Create stunning designs with AI assistance — get started free. |

> **Built for ZeroTwo** — Use this Canva MCP server with [ZeroTwo's AI assistant](https://zerotwo.ai) to search, generate, and edit Canva designs directly from your AI chat interface.

# Canva MCP Server

A comprehensive Model Context Protocol (MCP) server for Canva integration with ChatGPT Apps SDK. This server enables AI assistants to interact with Canva's design platform, including searching designs, generating AI designs, editing content, managing folders, and collaborating through comments.

## Features

### 🎨 Design Management
- **Search Designs**: Search docs, presentations, videos, whiteboards, sheets, and other designs
- **Get Design Details**: Retrieve detailed information about specific designs
- **Get Design Pages**: List all pages in a design with thumbnails
- **Get Design Content**: Extract text content from designs

### ✨ AI Design Generation
- **Generate Designs**: Create AI-generated design candidates from natural language descriptions
- **Create from Candidate**: Convert AI-generated candidates into editable Canva designs

### ✏️ Design Editing
- **Start Editing Transaction**: Begin an editing session for a design
- **Perform Operations**: Update titles, replace text, and replace media
- **Commit Changes**: Save all changes made during an editing transaction
- **Cancel Transaction**: Discard all changes
- **Get Thumbnails**: Retrieve updated page thumbnails during editing

### 📁 Folder Management
- **Create Folders**: Organize designs with folders (root or nested)
- **Move Items**: Move designs, folders, and images between folders
- **List Folder Items**: Browse folder contents with filtering

### 💬 Collaboration
- **Comment on Designs**: Add comments to designs
- **List Comments**: View all comments with resolution filtering
- **Reply to Comments**: Participate in design discussions
- **List Replies**: View all replies to a comment thread

### 🖼️ Asset Management
- **Upload from URL**: Import images and videos from URLs
- **Get Assets**: Retrieve asset metadata including thumbnails

## Prerequisites

- Node.js 18 or later
- A Canva Developer account
- Canva API credentials (Client ID and Client Secret)

## Getting Canva API Credentials

1. Visit the [Canva Developers Portal](https://www.canva.com/developers/apps)
2. Create a new app or select an existing one
3. Navigate to the "Authentication" section
4. Note your **Client ID** and **Client Secret**
5. Add `http://localhost:8001/auth/callback` to your redirect URIs

### Required OAuth Scopes

The server requests the following scopes:
- `asset:read` - Read access to user's assets
- `asset:write` - Upload and manage assets
- `comment:read` - Read comments on designs
- `comment:write` - Create and reply to comments
- `design:content:read` - Read design content
- `design:content:write` - Edit design content
- `design:meta:read` - Read design metadata
- `folder:read` - Read folder structure
- `folder:write` - Create and manage folders
- `profile:read` - Read user profile information

## Installation

### Quick Start

```bash
chmod +x quick-start.sh
./quick-start.sh
```

### Manual Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set environment variables:**
   ```bash
   export CANVA_CLIENT_ID='your_client_id_here'
   export CANVA_CLIENT_SECRET='your_client_secret_here'
   export CANVA_REDIRECT_URI='http://localhost:8001/auth/callback'  # Optional
   ```

4. **Build the project:**
   ```bash
   npm run build
   ```

5. **Start the server:**
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

## Usage

### Server Endpoints

Once running, the server provides:

- **SSE Endpoint**: `http://localhost:8001/mcp`
- **Message Post**: `http://localhost:8001/mcp/messages?sessionId={sessionId}`
- **OAuth Callback**: `http://localhost:8001/auth/callback`

### Authentication Flow

1. When a tool is first called without authentication, the server returns an OAuth authorization URL
2. The user visits this URL and authorizes the app
3. Canva redirects back to the callback URL with an authorization code
4. The server exchanges the code for access and refresh tokens
5. Subsequent requests use the stored access token (automatically refreshed when expired)

### Available Tools

#### 1. upload-asset-from-url
Upload assets from URLs into Canva.

```json
{
  "name": "My Image",
  "url": "https://example.com/image.jpg"
}
```

#### 2. search-designs
Search for designs by title or content.

```json
{
  "query": "Marketing Presentation",
  "sortBy": "relevance",
  "ownershipFilter": "any"
}
```

#### 3. get-design
Get detailed information about a specific design.

```json
{
  "designId": "DAGQqAoFpJI"
}
```

#### 4. get-design-pages
List all pages in a design.

```json
{
  "designId": "DAGQqAoFpJI",
  "offset": 0,
  "limit": 10
}
```

#### 5. get-design-content
Extract text content from a design.

```json
{
  "designId": "DAGQqAoFpJI"
}
```

#### 6. create-folder
Create a new folder.

```json
{
  "name": "Marketing Materials",
  "parentFolderId": "FABCdef123"
}
```

#### 7. move-item-to-folder
Move items to a folder.

```json
{
  "itemId": "DAGQqAoFpJI",
  "folderId": "FABCdef123"
}
```

#### 8. list-folder-items
List items in a folder.

```json
{
  "folderId": "FABCdef123",
  "itemType": "design"
}
```

#### 9. comment-on-design
Add a comment to a design.

```json
{
  "designId": "DAGQqAoFpJI",
  "message": "Great work on this design!"
}
```

#### 10. list-comments
List all comments on a design.

```json
{
  "designId": "DAGQqAoFpJI",
  "commentResolution": "unresolved"
}
```

#### 11. list-replies
List replies to a comment.

```json
{
  "designId": "DAGQqAoFpJI",
  "threadId": "CTHvwx789"
}
```

#### 12. reply-to-comment
Reply to an existing comment.

```json
{
  "designId": "DAGQqAoFpJI",
  "threadId": "CTHvwx789",
  "message": "Thanks for the feedback!"
}
```

#### 13. generate-design
Generate AI design candidates.

```json
{
  "query": "Create a modern social media post for a coffee shop with warm colors and minimalist design",
  "assetIds": ["ASTxyz123", "ASTabc456"]
}
```

**Important**: Always include full context in the query parameter, as the tool doesn't have access to previous requests.

#### 14. create-design-from-candidate
Convert an AI-generated candidate into an editable design.

```json
{
  "jobId": "JOB123abc",
  "candidateId": "CAN456def"
}
```

#### 15. start-editing-transaction
Start an editing session for a design.

```json
{
  "designId": "DAGQqAoFpJI"
}
```

Returns a `transaction_id` that must be used in subsequent editing operations.

#### 16. perform-editing-operations
Make changes to a design.

```json
{
  "transactionId": "TXNabc123",
  "operations": [
    {
      "type": "update_title",
      "title": "New Design Title"
    },
    {
      "type": "replace_text",
      "page_index": 0,
      "element_id": "ELMxyz789",
      "text": "Updated text content"
    }
  ]
}
```

#### 17. commit-editing-transaction
Save all changes made during an editing transaction.

```json
{
  "transactionId": "TXNabc123"
}
```

**Critical**: Always ask for user approval before committing changes.

#### 18. cancel-editing-transaction
Discard all changes made during an editing transaction.

```json
{
  "transactionId": "TXNabc123"
}
```

#### 19. get-design-thumbnail
Get thumbnail for a specific page during editing.

```json
{
  "transactionId": "TXNabc123",
  "pageIndex": 0
}
```

#### 20. get-assets
Retrieve metadata for multiple assets.

```json
{
  "assetIds": ["ASTxyz123", "ASTabc456"]
}
```

### UI Widgets

The server includes three interactive UI widgets:

1. **Search Designs Widget** (`canva-search-designs.html`)
   - Displays search results with thumbnails
   - Interactive design cards
   - Pagination support
   - Click to open designs in Canva

2. **Design Generator Widget** (`canva-design-generator.html`)
   - Shows AI-generated design candidates
   - Preview and selection interface
   - One-click design creation

3. **Design Editor Widget** (`canva-design-editor.html`)
   - Shows editable content and thumbnails
   - Transaction management UI
   - Commit/cancel controls

## Development

### Project Structure

```
canva-mcp-server/
├── src/
│   └── server.ts           # Main server implementation
├── ui-components/
│   ├── canva-search-designs.html
│   ├── canva-design-generator.html
│   └── canva-design-editor.html
├── package.json
├── tsconfig.json
├── quick-start.sh
└── README.md
```

### Building

```bash
npm run build
```

### Type Checking

```bash
npm run typecheck
```

### Running in Development

```bash
npm run dev
```

## API Reference

### Canva Connect API

This server uses the [Canva Connect API](https://www.canva.com/developers/docs/connect-api/). Key endpoints:

- **Designs**: `/v1/designs` - Design management
- **Assets**: `/v1/assets`, `/v1/url-asset-uploads` - Asset operations
- **Folders**: `/v1/folders` - Folder management
- **Comments**: `/v1/designs/{id}/comments` - Collaboration
- **Design Generation**: `/v1/designs/generate` - AI generation
- **Design Editing**: `/v1/designs/{id}/edit` - Content editing

### OAuth 2.0 with PKCE

The server implements OAuth 2.0 with Proof Key for Code Exchange (PKCE) for enhanced security:

1. Generate code verifier and challenge
2. Redirect user to authorization URL
3. Receive authorization code via callback
4. Exchange code for access and refresh tokens
5. Automatically refresh expired tokens

## Security Considerations

- **Token Storage**: Tokens are stored in memory. For production, use a secure database.
- **State Management**: OAuth state is validated to prevent CSRF attacks.
- **Token Refresh**: Access tokens are automatically refreshed with a 5-minute buffer.
- **PKCE**: Uses PKCE for enhanced OAuth security.

## Troubleshooting

### "Missing scopes: [asset:write]" Error

If you receive this error:
1. Disconnect the integration from Canva
2. Reconnect by visiting the OAuth URL again
3. The new token will include the required scope

### OAuth Callback Issues

Ensure your redirect URI matches exactly:
- Server default: `http://localhost:8001/auth/callback`
- Must be added to your Canva app settings
- Use the same URI in your environment variable

### Port Already in Use

If port 8001 is in use, change it:
```bash
export PORT=8002
npm start
```

### Token Expiration

Access tokens expire after a certain period. The server automatically refreshes them using the refresh token. If you see authentication errors:
1. Clear the session
2. Re-authenticate by calling any tool

## Rate Limits

Canva API has rate limits:
- **Asset Uploads**: 30 requests per minute per user
- Other endpoints have their own limits (refer to Canva API documentation)

The server doesn't implement rate limiting - consider adding this for production use.

## Examples

### Example 1: Search and Edit a Design

```javascript
// 1. Search for designs
{
  "name": "search-designs",
  "arguments": {
    "query": "Marketing Presentation",
    "sortBy": "relevance"
  }
}

// 2. Start editing transaction
{
  "name": "start-editing-transaction",
  "arguments": {
    "designId": "DAGQqAoFpJI"
  }
}

// 3. Perform edits
{
  "name": "perform-editing-operations",
  "arguments": {
    "transactionId": "TXNabc123",
    "operations": [
      {
        "type": "update_title",
        "title": "Updated Marketing Presentation"
      }
    ]
  }
}

// 4. Commit changes (after user approval)
{
  "name": "commit-editing-transaction",
  "arguments": {
    "transactionId": "TXNabc123"
  }
}
```

### Example 2: Generate and Create AI Design

```javascript
// 1. Generate design candidates
{
  "name": "generate-design",
  "arguments": {
    "query": "Create a vibrant Instagram post for a summer sale with beach themes, bright colors, and bold typography. Include space for a discount percentage and call-to-action button."
  }
}

// 2. Create design from selected candidate
{
  "name": "create-design-from-candidate",
  "arguments": {
    "jobId": "JOB123abc",
    "candidateId": "CAN456def"
  }
}
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - See LICENSE file for details

## Resources

- [Canva Developers Portal](https://www.canva.com/developers/)
- [Canva Connect API Documentation](https://www.canva.com/developers/docs/connect-api/)
- [Canva Apps SDK](https://www.canva.com/developers/docs/apps-sdk/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [ChatGPT Apps SDK](https://platform.openai.com/docs/apps)

## Support

For issues and questions:
- Canva API: [Canva Developers Community](https://www.canva.com/developers/community/)
- This Server: Create an issue in the repository

## Changelog

### Version 1.0.0
- Initial release
- Full Canva Connect API integration
- OAuth 2.0 with PKCE support
- 20 tools covering all major Canva operations
- 3 interactive UI widgets
- Automatic token refresh
- Comprehensive error handling

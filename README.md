# Modsen Doggy Server

GraphQL server for the Modsen Doggy Spa application, deployed on Netlify.

## 🚀 Features

- GraphQL API for dog information
- Serverless deployment on Netlify
- Apollo Server with Lambda integration
- TypeScript support
- CORS enabled for cross-origin requests

## 📋 Prerequisites

- Node.js 18 or higher
- Yarn package manager
- Netlify account (for deployment)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd modsen-doggy-server
```

2. Install dependencies:
```bash
yarn install
```

## 🏃‍♂️ Development

### Local Development

Start the development server:
```bash
yarn dev
```

The server will be available at `http://localhost:4000`

### Build

Build the project for production:
```bash
yarn build
```

### Linting and Formatting

```bash
# Lint code
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format
```

## 🚀 Deployment

### Netlify Deployment

1. **Connect to Netlify:**
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Set the build command: `yarn build`
   - Set the publish directory: `public`
   - Set the functions directory: `netlify/functions`

2. **Environment Variables (Optional):**
   - `NODE_ENV`: Set to `production` for production builds

3. **Deploy:**
   - Netlify will automatically deploy on every push to the main branch

### Manual Deployment

1. Build the project:
```bash
yarn build
```

2. Deploy to Netlify using the Netlify CLI:
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 📡 API Endpoints

### GraphQL Playground
- **URL:** `https://your-site.netlify.app/graphql`
- **Description:** Interactive GraphQL playground for testing queries

### GraphQL API
- **URL:** `https://your-site.netlify.app/.netlify/functions/graphql`
- **Description:** Main GraphQL endpoint

## 🔍 Available Queries

### Dogs Query
Search for dog information by name.

**Query:**
```graphql
query GetDogs($name: String!) {
  dogs(name: $name) {
    name
    image_link
    energy
    min_life_expectancy
    good_with_strangers
    good_with_other_dogs
  }
}
```

**Variables:**
```json
{
  "name": "Golden Retriever"
}
```

## 🏗️ Project Structure

```
modsen-doggy-server/
├── src/
│   └── index.ts              # Main server file
├── netlify/
│   └── functions/
│       └── graphql.ts        # Netlify function export
├── public/
│   └── index.html            # Static landing page
├── dist/                     # Build output
├── package.json
├── tsconfig.json
├── netlify.toml             # Netlify configuration
└── README.md
```

## 🔧 Configuration

### TypeScript Configuration
- Target: ES2020
- Module: CommonJS
- Strict mode enabled
- Source maps enabled

### ESLint Configuration
- TypeScript support
- Prettier integration
- Strict linting rules

### Netlify Configuration
- Functions directory: `netlify/functions`
- Publish directory: `public`
- Build command: `yarn build`
- Node version: 18

## 🧪 Testing

Run tests:
```bash
yarn test
```

## 📝 Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn test` - Run tests
- `yarn lint` - Lint code
- `yarn lint:fix` - Fix linting issues
- `yarn format` - Format code
- `yarn type-check` - Type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [GraphQL Documentation](https://graphql.org/) 
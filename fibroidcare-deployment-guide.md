# FibroidCare Deployment Guide

## Overview
FibroidCare is a complete AI/ML-based fibroid risk assessment application with a React frontend and Flask backend. This guide will help you deploy it on your own infrastructure.

## Project Structure
```
fibroidcare-backend/          # Flask backend with integrated frontend
├── src/
│   ├── main.py              # Main Flask application
│   ├── routes/
│   │   ├── prediction.py    # ML prediction API endpoints
│   │   └── user.py          # User management (template)
│   ├── models/              # Database models
│   ├── static/              # Built React frontend files
│   └── database/            # SQLite database
├── venv/                    # Python virtual environment
├── requirements.txt         # Python dependencies
└── README.md

fibroidcare-frontend/         # React frontend source
├── src/
│   ├── components/          # React components
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── package.json            # Node.js dependencies
└── vite.config.js          # Build configuration
```

## Prerequisites
- Python 3.11+
- Node.js 20+
- npm or pnpm

## Local Development Setup

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd fibroidcare-backend
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask server:
   ```bash
   python src/main.py
   ```
   The backend will be available at http://localhost:5000

### Frontend Development Setup
1. Navigate to the frontend directory:
   ```bash
   cd fibroidcare-frontend
   ```

2. Install dependencies:
   ```bash
   pnpm install  # or npm install
   ```

3. Start development server:
   ```bash
   pnpm run dev  # or npm run dev
   ```
   The frontend will be available at http://localhost:5173

## Production Deployment

### Option 1: Integrated Deployment (Recommended)
The Flask backend serves the built React frontend from its static directory.

1. Build the React frontend:
   ```bash
   cd fibroidcare-frontend
   pnpm run build
   ```

2. Copy built files to Flask static directory:
   ```bash
   cp -r dist/* ../fibroidcare-backend/src/static/
   ```

3. Deploy the Flask application:
   ```bash
   cd fibroidcare-backend
   source venv/bin/activate
   python src/main.py
   ```

### Option 2: Separate Deployment
Deploy frontend and backend separately with proper CORS configuration.

#### Frontend (Static Hosting)
1. Build the frontend:
   ```bash
   cd fibroidcare-frontend
   pnpm run build
   ```

2. Deploy the `dist/` folder to any static hosting service:
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - GitHub Pages

#### Backend (Server Hosting)
1. Deploy Flask app to:
   - Heroku
   - AWS EC2
   - DigitalOcean
   - Google Cloud Platform

2. Update frontend API calls to point to your backend URL

## Environment Variables
Set these environment variables for production:

```bash
FLASK_ENV=production
SECRET_KEY=your-secret-key-here
```

## Database Configuration
The app uses SQLite by default. For production, consider:
- PostgreSQL
- MySQL
- MongoDB

Update the database configuration in `src/main.py`.

## API Endpoints

### Health Check
- `GET /api/health` - Check API status

### Prediction
- `POST /api/predict` - Submit user data for fibroid risk prediction

Example request:
```json
{
  "age": 35,
  "bmi": 28.5,
  "menstrual_irregularities": "Heavy Bleeding",
  "pelvic_pain": true,
  "pcos_history": false,
  "family_history": true,
  "number_of_children": 1,
  "frequent_urination": false
}
```

## Security Considerations
1. Change the default SECRET_KEY in production
2. Use HTTPS for all communications
3. Implement rate limiting for API endpoints
4. Add input validation and sanitization
5. Consider adding user authentication if needed

## Customization

### ML Model
The current implementation uses a rule-based mock model in `src/routes/prediction.py`. To integrate a real ML model:

1. Replace the `calculate_fibroid_risk()` function
2. Add model loading and prediction logic
3. Update dependencies in `requirements.txt`

### UI Styling
The frontend uses Tailwind CSS. Customize:
- Colors in `src/App.css`
- Components in `src/components/`
- Layout in `src/App.jsx`

### Content
Update medical content in:
- `src/components/AboutFibroids.jsx`
- `src/routes/prediction.py` (recommendations)

## Monitoring and Logging
Consider adding:
- Application monitoring (e.g., Sentry)
- Performance monitoring
- Error logging
- Analytics tracking

## Legal and Medical Disclaimers
⚠️ **Important**: This application is for demonstration purposes only. For production use with real medical data:

1. Ensure HIPAA compliance if handling PHI
2. Add proper medical disclaimers
3. Implement data encryption
4. Follow medical software regulations
5. Consult with medical professionals for accuracy

## Support
For technical issues or questions about the implementation, refer to the source code comments and documentation within each component.


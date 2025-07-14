# FibroidCare - AI-Powered Fibroid Risk Assessment

A comprehensive web application for assessing fibroid risk using AI/ML technology. Built with React frontend and Flask backend.

## Features

- **Educational Content**: Information about uterine fibroids
- **Risk Assessment**: AI-powered prediction based on user health data
- **Personalized Recommendations**: Tailored advice based on risk level
- **Responsive Design**: Works on desktop and mobile devices
- **Professional UI**: Clean, medical-grade interface

## Technology Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Flask, Python
- **Database**: SQLite (configurable)
- **Deployment**: Integrated Flask + React build

## Quick Start

1. **Install Dependencies**:
   ```bash
   source venv/bin/activate
   pip install -r requirements.txt
   ```

2. **Run Application**:
   ```bash
   python src/main.py
   ```

3. **Access Application**:
   Open http://localhost:5000 in your browser

## API Documentation

### Prediction Endpoint
```
POST /api/predict
Content-Type: application/json

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

### Health Check
```
GET /api/health
```

## Medical Disclaimer

⚠️ **This application is for demonstration and educational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns.**

## License

This project is provided as-is for educational and demonstration purposes.


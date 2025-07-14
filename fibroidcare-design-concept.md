# FibroidCare App Design Concept

## Overview
FibroidCare is an AI/ML-based web application designed to help women assess their potential risk of developing uterine fibroids. The application provides educational content, collects user health data, and delivers personalized risk predictions with actionable recommendations.

## Visual Style

### Color Palette
- **Primary Purple**: #6366F1 (vibrant purple for buttons and highlights)
- **Background**: #FFFFFF (clean white background)
- **Text Primary**: #1F2937 (dark gray for main text)
- **Text Secondary**: #9CA3AF (light gray for secondary text)
- **Success/Low Risk**: #10B981 (green for positive outcomes)
- **Warning/High Risk**: #EF4444 (red for urgent recommendations)
- **Info**: #3B82F6 (blue for informational elements)

### Typography
- **Primary Font**: System fonts (San Francisco, Segoe UI, Roboto)
- **Headings**: Bold, large sizes (32px-48px for main titles)
- **Body Text**: Regular weight, 16px-18px for readability
- **Buttons**: Medium weight, 16px

### Layout Principles
- **Clean and minimal**: Plenty of white space for medical professionalism
- **Card-based design**: Information grouped in clean containers
- **Responsive**: Mobile-first approach with desktop enhancements
- **Accessibility**: High contrast ratios, clear focus states

## User Experience Flow

1. **Welcome Page**: Introduction and call-to-action
2. **About Fibroids**: Educational content to build trust
3. **User Details**: Progressive form collection
4. **Prediction**: Clear risk assessment display
5. **Recommendations**: Actionable next steps

## Technical Architecture

### Frontend (React)
- **React Router**: For navigation between pages
- **Component Structure**: Reusable components for forms, buttons, cards
- **State Management**: React hooks for form data and navigation
- **Styling**: CSS modules or styled-components for component-scoped styles

### Backend (Flask)
- **API Endpoints**: 
  - POST /api/predict - Process user data and return risk prediction
  - GET /api/recommendations - Get recommendations based on risk level
- **Mock ML Model**: Simple rule-based logic for demonstration
- **CORS**: Enable cross-origin requests from frontend

### Data Flow
1. User fills out forms on frontend
2. Data sent to Flask backend via API
3. Backend processes data through ML model
4. Prediction and recommendations returned to frontend
5. Results displayed to user

## Key Features

### Interactive Elements
- **Smooth transitions** between pages
- **Form validation** with helpful error messages
- **Progress indicators** for multi-step forms
- **Hover effects** on interactive elements
- **Loading states** during prediction processing

### Accessibility
- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** text and backgrounds
- **Clear focus indicators**
- **Semantic HTML** structure

### Responsive Design
- **Mobile-first** approach
- **Flexible layouts** that adapt to screen size
- **Touch-friendly** buttons and form elements
- **Readable text** at all screen sizes

## Content Strategy

### Medical Disclaimer
Clear disclaimers that the tool is for informational purposes only and should not replace professional medical advice.

### Educational Content
Comprehensive but accessible information about fibroids, symptoms, and risk factors.

### Personalized Recommendations
Risk-appropriate guidance ranging from general wellness tips to urgent medical consultation advice.


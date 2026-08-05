# 🧠 CelebLens AI - Celebrity Image Classifier

<p align="center">

AI-powered Celebrity Image Recognition using **Machine Learning**, **OpenCV**, **Wavelet Transform**, **Flask**, and a modern responsive web interface.

</p>

---

## 🚀 Overview

CelebLens AI is a Machine Learning web application that identifies celebrities from uploaded images.

The application detects faces using OpenCV Haar Cascade, extracts facial features using Wavelet Transform, and predicts the celebrity using a trained Scikit-Learn model.

The frontend provides a modern AI-inspired interface while the Flask backend performs real-time image classification.

---

# ✨ Features

- 🎯 Celebrity Image Classification
- 🧠 Machine Learning Prediction
- 👤 Face Detection using OpenCV
- 🌊 Wavelet Feature Extraction
- 📊 Confidence Score
- 📈 Prediction Progress Bar
- 🖼 Image Preview
- 🖱 Drag & Drop Upload
- 📱 Responsive UI
- ⚡ Flask REST API

---

# 📸 Screenshots

## Home Page

<img width="1910" height="972" alt="Screenshot 2026-08-05 175537" src="https://github.com/user-attachments/assets/5cfd9d2a-700c-422c-87f3-76c9551fd0b5" />


---

## Prediction Example (Kiara Advani)

<img width="1687" height="902" alt="Screenshot 2026-08-05 175703" src="https://github.com/user-attachments/assets/5b7cab70-db4b-4e6b-b663-e5652a0d2223" />


---

## Prediction Example (Salman Khan)

<img width="1813" height="897" alt="Screenshot 2026-08-05 175643" src="https://github.com/user-attachments/assets/92e3b213-47f1-43c3-a758-04f2db3438c5" />

---

# 🧠 Machine Learning Workflow

```text
Upload Image
      │
      ▼
Face Detection (OpenCV Haar Cascade)
      │
      ▼
Image Cropping
      │
      ▼
Wavelet Transform
      │
      ▼
Feature Extraction
      │
      ▼
Scikit-Learn Model
      │
      ▼
Celebrity Prediction
```

---

# 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Flask
- Python

### Machine Learning

- OpenCV
- Haar Cascade
- Wavelet Transform
- NumPy
- Scikit-Learn
- Joblib

---

# 📂 Project Structure

```text
Celebrity-Classifier/

│

├── model/

│ ├── dataset/

│ ├── cropped/

│ ├── saved_model.pkl

│ ├── class_dictionary.json

│

├── server/

│ ├── server.py

│ ├── util.py

│

├── ui/

│ ├── app.html

│ ├── app.css

│ ├── app.js

│

└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Abbasbaniyan/Celebrity-Classifier.git
```

Move into project directory

```bash
cd Celebrity-Classifier
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run Flask server

```bash
cd server
python server.py
```

Open

```
ui/app.html
```

in your browser.

---

# 🧪 Technologies Used

| Technology | Purpose |
|------------|---------|
| Python | Backend |
| Flask | REST API |
| OpenCV | Face Detection |
| Wavelet Transform | Feature Extraction |
| Scikit-Learn | Machine Learning |
| HTML/CSS | UI |
| JavaScript | Frontend Logic |

---

# 🔮 Future Improvements

- 📷 Camera Capture
- 🌐 Image URL Prediction
- 👥 More Celebrity Classes
- ☁ AWS Deployment
- 🐳 Docker Support
- 🔄 CI/CD Pipeline
- 🤖 Deep Learning Model (CNN)

---

# 👨‍💻 Author

**Abbas Baniyan**
**Abbas Tati**

AWS & DevOps Engineer

GitHub

https://github.com/Abbasbaniyan

---

⭐ If you found this project useful, consider giving it a star.

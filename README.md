<<<<<<< HEAD
# Books REST API + Frontend

## Backend
Run:
```
pip install flask
python app.py
```

## Frontend
Open:
```
frontend/index.html
```

## Input (PowerShell)
```
Invoke-WebRequest -Uri "http://127.0.0.1:5000/books" -Method POST -Headers @{
    "Content-Type" = "application/json"
} -Body '{"title":"Atomic Habits","author":"James Clear","year":2018}'
```
=======
🔥 Features

REST API built with Flask

Supports GET, POST, PUT, and DELETE operations

Frontend built with HTML + CSS + JavaScript

Allows users to add, view, update, and delete books

Clean UI with message popups and responsive buttons

Fully beginner-friendly, great for learning full-stack basics

🛠 Technologies Used

Python (Flask)

HTML

CSS

JavaScript

Fetch API

CORS support

🎯 Purpose

This project helps you understand:

How REST APIs work

How frontend and backend communicate

Using JSON in real applications

CRUD operations

Basic full-stack development workflow
>>>>>>> 0355e8bff6ca91092404c681b0776f899ff0a090

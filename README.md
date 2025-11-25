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

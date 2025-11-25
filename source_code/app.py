from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

books = []
next_id = 1

# ------------------------- GET ALL BOOKS -------------------------
@app.route('/books', methods=['GET'])
def get_books():
    return jsonify(books), 200

# ------------------------- ADD BOOK ------------------------------
@app.route('/books', methods=['POST'])
def add_book():
    global next_id
    data = request.get_json()

    if not data or not all(k in data for k in ("title", "author", "year")):
        return jsonify({"error": "Missing fields"}), 400

    book = {
        "id": next_id,
        "title": data["title"],
        "author": data["author"],
        "year": data["year"]
    }
    books.append(book)
    next_id += 1
    return jsonify(book), 201

# ------------------------- UPDATE BOOK ---------------------------
@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    data = request.get_json()

    for book in books:
        if book["id"] == book_id:
            book["title"] = data.get("title", book["title"])
            book["author"] = data.get("author", book["author"])
            book["year"] = data.get("year", book["year"])
            return jsonify(book), 200

    return jsonify({"error": "Book not found"}), 404

# ------------------------- DELETE BOOK ---------------------------
@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    global books
    books = [book for book in books if book["id"] != book_id]
    return jsonify({"message": "Book deleted"}), 200


if __name__ == "__main__":
    app.run(debug=True)

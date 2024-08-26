<<<<<<< HEAD
=======
// Books.js
>>>>>>> e4aee19 (Modified code and added delete button)
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
    const [books, setBooks] = useState([]);
<<<<<<< HEAD

=======
>>>>>>> e4aee19 (Modified code and added delete button)
    const navigate = useNavigate();

    const handleUpdate = (book) => {
        navigate('/update', { state: { book } });
<<<<<<< HEAD
    }
=======
    };

    const handleDelete = (bookId) => {
        axios.delete(`http://localhost:3030/delete/${bookId}`)
            .then(() => {
                setBooks(books.filter(book => book.id !== bookId));
            })
            .catch(err => console.log(err));
    };
>>>>>>> e4aee19 (Modified code and added delete button)

    useEffect(() => {
        axios.get('http://localhost:3030')
            .then(res => {
<<<<<<< HEAD
                console.log(res.data); // Log the response data
=======
>>>>>>> e4aee19 (Modified code and added delete button)
                if (Array.isArray(res.data)) {
                    setBooks(res.data);
                } else {
                    console.error('Expected an array but got:', res.data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container'>
            <Link to='/create' className='btn btn-success'>Create Link</Link>
            {books.length !== 0 ?
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Publisher</th>
                            <th scope='col'>Book</th>
                            <th scope='col'>Date</th>
<<<<<<< HEAD
=======
                            <th scope='col'>Actions</th>
>>>>>>> e4aee19 (Modified code and added delete button)
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book =>
                            <tr key={book.id}>
                                <td>{book.publisher}</td>
                                <td>{book.name}</td>
                                <td>{book.date}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => handleUpdate(book)}>
                                        Update
                                    </button>
<<<<<<< HEAD
=======
                                    <button className="btn btn-danger ms-2" onClick={() => handleDelete(book.id)}>
                                        Delete
                                    </button>
>>>>>>> e4aee19 (Modified code and added delete button)
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
<<<<<<< HEAD
                : <h2>NO records</h2>
=======
                : <h2>No records</h2>
>>>>>>> e4aee19 (Modified code and added delete button)
            }
        </div>
    );
}

<<<<<<< HEAD
export default Books;
=======
export default Books;
>>>>>>> e4aee19 (Modified code and added delete button)

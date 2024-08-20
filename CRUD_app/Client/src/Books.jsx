import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    const handleUpdate = (book) => {
        navigate('/update', { state: { book } });
    }

    useEffect(() => {
        axios.get('http://localhost:3030')
            .then(res => {
                console.log(res.data); // Log the response data
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
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                : <h2>NO records</h2>
            }
        </div>
    );
}

export default Books;

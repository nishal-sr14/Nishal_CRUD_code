import express from 'express'  // If you want to import like this, you need to add a entry "type" : "module" in package,json file
import mysql from 'mysql'
import cors from 'cors'  //These are used for cors origin to access our server side app from frontend

const app = express()
app.use(express.json())   //This will convert the data we transfer to the JSON format
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'crud'
})

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

//'req' variable we pass it from frontend 'res' : whatever we return back to the frontend
app.get('/', (req, res) => {
    const sql = "SELECT * FROM book";
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err); // Log the actual error
            return res.json({ Error: 'Error' });
        }
        return res.json(data);
    });
});

//Insert data to the mysql database
<<<<<<< HEAD
app.post('/create', (req, res) => {
=======

app.post('/create', (req, res) => {
    // Define SQL query with placeholders
>>>>>>> e4aee19 (Modified code and added delete button)
    const sql = "INSERT INTO book (publisher, name, date) VALUES (?)";

    const values = [
        req.body.publisher,
        req.body.name,
        req.body.date
<<<<<<< HEAD
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json({ Error: 'Error' })
        }
        return res.json(data)
    })
})
=======
    ];

    db.query(sql, [values], (err, result) => {
        if (err) {
            return res.status(500).json({ Error: 'Error inserting data' });
        }

        // Retrieve the ID of the newly inserted row
        const lastInsertedId = result.insertId;

        const selectSql = "SELECT * FROM book WHERE id = ?";

        db.query(selectSql, [lastInsertedId], (err, rows) => {
            if (err) {
                return res.status(500).json({ Error: 'Error retrieving data' });
            }
            return res.json(rows[0]);
        });
    });
});

>>>>>>> e4aee19 (Modified code and added delete button)

//To update the code    //whenever updating a record we need to pass ID
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE book SET publisher = ?, name = ?, date = ? WHERE id = ?";

    const values = [
        req.body.publisher,
        req.body.name,
<<<<<<< HEAD
        req.body.date
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            return res.json({ Error: 'Error' })
        }
        return res.json(data)
    })
})

//To delete a record
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM book WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json({ Error: 'Error' })
        }
        return res.json(data)
    })
})
=======
        req.body.date,
        req.params.id  
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ Error: 'Error updating data' });
        }

        // Check if any row was actually updated
        if (result.affectedRows === 0) {
            return res.status(404).json({ Error: 'Record not found' });
        }

        const selectSql = "SELECT * FROM book WHERE id = ?";
        db.query(selectSql, [req.params.id], (err, rows) => {
            if (err) {
                return res.status(500).json({ Error: 'Error retrieving updated data' });
            }
            return res.json(rows[0]);
        });
    });
});


//To delete a record
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM book WHERE id = ?";
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ Error: 'Error deleting data' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ Error: 'Record not found' });
        }

        return res.json({ message: 'Record deleted successfully' });
    });
});

>>>>>>> e4aee19 (Modified code and added delete button)

app.listen(3030, () => {
    console.log("App is running")
})


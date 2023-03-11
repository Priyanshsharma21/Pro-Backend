import { getAllBooks, getSingleCourse, createBook, updateBook, deleteBook, } from '../controllers/book.js'


const routes = [
    {
        method : 'GET',
        url : '/api/v1/all-books',
        handler : getAllBooks,
    },
    {
        method : 'GET',
        url : '/api/v1/book/:bookId',
        handler : getSingleCourse,
    },
    {
        method : 'POST',
        url : '/api/v1/create-book',
        handler : createBook,
    },
    {
        method : 'PUT',
        url : '/api/v1/book/:bookId',
        handler : updateBook,
    },
    {
        method : 'DELETE',
        url : '/api/v1/book/:bookId',
        handler : deleteBook,
    },
]


export default routes
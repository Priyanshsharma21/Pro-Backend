import Book from '../models/book.js'



// Read - All Book
export const getAllBooks = async(request,reply)=>{
        try {
            const books = await Book.find()

            return {status : 200, books : books}

        } catch (error) {
            throw error
        }
}


// READ - Single Book
export const getSingleCourse = async(request,reply)=>{
    try {
        const bookId = request.params.bookId
        console.log(bookId)
        const book = await Book.findById(bookId)

        return {status : 200, book : book}
    } catch (error) {
        throw error
    }
}



// CREATE - Book
export const createBook = async(request,reply)=>{
    try {
        const { name, description,price,photo } = request.body;

        if(!name || !description || !price || !photo) return {message : "Please enter all the details"}

        const newBook = await Book.create({
            name,
            description,
            price,
            photo,
        })

        console.log(newBook)

        return {status : 200, newBook : newBook}
    } catch (error) {
        throw error
    }
}


// UPDATE - Existing Book.
export const updateBook = async(req,reply)=>{
    try {
        const bookId = req.params.bookId
        const { name,description,price,photo } = req.body;
        const updatedBookData = { name,description,price,photo }

        const updatedBook = await Book.findByIdAndUpdate(bookId,updatedBookData,{new : true})

        console.log(updatedBook)

        return {status : 200, updatedBook : updatedBook}
    } catch (error) {
        throw error
    }
}


// DELETE - Existing Book
export const deleteBook = async(req,reply)=>{
    try {
        const bookId = req.params.bookId

        const book = await Book.findByIdAndDelete(bookId)
       
        return {status : 200, message : "Book Deleted", book : book}
    } catch (error) {
        throw error
    }
}
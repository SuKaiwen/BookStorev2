import React, {useState, useEffect} from 'react'
import axios from 'axios'

const BooksAPI = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
            setBooks(res.data.results.books)
            console.log(res.data.results.books)
        }
        fetchBooks()
    }, [])

    return (
        <div>
            <h1 className = "font-bold text-center text-4xl py-5 lg:text-6xl">Best Sellers</h1>
            <section className = "grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {books.map((book) => {
                    const{author, book_image, buy_links,
                    description, primary_isbn10, publisher, rank,
                    title} = book

                    return (
                        <article key = {rank} className="bg-gray-100 py-5 px-5">
                            <div>
                                <img src={book_image} alt={title}
                                className = "block mx-auto w-6/12"/>
                            </div>
                            <div>
                                <h3 className="font-bold mt-2 mb-4 mr-2 text-2xl">{title}</h3>
                                <p className = "font-bold">Author: {author}</p>
                                <p className = "mb-4">{description}</p>
                                <p className = "font-bold">Publisher: {publisher}</p>
                                <p className = "font-bold">ISBN: {primary_isbn10}</p>
                                <p>Rank: {rank}</p>
                                <p className = "mb-4 font-bold text-xl">Buy Now On: </p>
                                <div style = {{textAlign:"center"}}>
                                    <i class="fas fa-book fa-2x" style ={{padding:"20px", color:"#366251"}}></i>
                                    <i class="fab fa-amazon fa-2x" style ={{padding:"20px", color:"#FF9900"}}></i>
                                    <i class="fab fa-apple fa-2x" style ={{padding:"20px", color:"#555555"}}></i>
                                </div>

                            </div>
                        </article>
                    )
                })}

            </section>
        </div>
    )
}

export default BooksAPI
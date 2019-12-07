import React, {Component} from "react";
import bookService, {BookService} from "../../services/BookService";
import Book from "../../interfaces/book";

export interface BookListProperties {

}


export interface BookListState {
    books: Book[]
}

export class BookList extends Component<BookListProperties, BookListState> {

    constructor(private bookService: BookService, props: BookListProperties) {
        super(props);
        this.setState({
            books: []
        });
    }

    componentDidMount(): void {
        this.bookService.getBooks().then((data: Book[]) => {
            this.setState({
                books: data
            });
        });
    }

    render() {
        return (
            <ul>
                {this.state.books.map(book =>
                    <li>
                        {book.title}
                    </li>
                )}
            </ul>
        );
    }
}


export const bookList = new BookList(bookService, {});


import Book from "../interfaces/book";
import restService, {RestService} from "./RestService";
import {books} from "../paths";

export class BookService {

    constructor(private restService: RestService){
    }

    getBooks(): Promise<Book[]>{
        return this.restService.get(books);
    }

    getBook(id: number): Promise<Book>{
        return this.restService.get(`${books}/${id}`);
    }
}

const bookService = new BookService(restService);

export default bookService;

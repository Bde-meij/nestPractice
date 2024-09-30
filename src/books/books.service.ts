import { Injectable } from '@nestjs/common';
// import {Book} from './books.controller';

export interface Book 
{
    id: number;
    title: string;
    author: string;
}

@Injectable()
export class BooksService 
{
    private books: Book[] = [];

    getAllBooks(): Book[]
    {
        return this.books;
    }

    getBook(id: number)
    {
        return this.books.find(book => book.id === +id);
    }

    addBook(book: Book)
    {
        this.books.push(book); // push to add
        return ('Book ' + book.title + ' added');
    }

    updateBookByID(id:number, updBook: Book)
    {
        var index = this.books.findIndex(book => book.id === id); // position of obj
        if (index < 0)
            return ('false book id');
        this.books[index] = updBook;
        return ('book '+ index +' updated');
    }

    deleteBookByID(id: number)
    {
        this.books = this.books.filter(book => book.id !== id); // returns all books meeting condition. this would be a memory leak
        return ('book '+ id +' deleted');
    }

}

import { Controller, Get, Put, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { BooksService } from './books.service';

export interface Book 
{
    id: number;
    title: string;
    author: string;
}

@Controller('books')
export class BooksController 
{
    // private books: Book[] = [];

    constructor(private readonly bs: BooksService){}

    @Get()
    getAllBooks(): Book[]
    {
        return this.bs.getAllBooks();
    }

    @Get(':id') //get request when on path id
    getBookByID(@Param('id', ParseIntPipe) id: number): Book
    {
        return this.bs.getBook(id);
    }

    @Post()
    addBook(@Body() book: Book): string
    {
       return this.bs.addBook(book);
    }

    @Put(':id')
    updateBook(@Param('id', ParseIntPipe) id: number, @Body() updBook: Book): string
    { 
        return this.bs.updateBookByID(id, updBook);
    }

    @Delete(':id') 
    deleteBookByID(@Param('id', ParseIntPipe) id: number): string
    {
        return this.deleteBookByID(id);
    }
}

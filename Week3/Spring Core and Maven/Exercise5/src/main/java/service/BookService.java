package com.library.service;

import com.library.repository.BookRepository;
import java.util.List;

public class BookService {

    private BookRepository bookRepository;

    // Setter for DI
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // New method with a different message
    public void printAvailableBooks() {
        List<String> books = bookRepository.listBooks();
        System.out.println("Currently we have these books in stock:");
        for (String book : books) {
            System.out.println(" * " + book);
        }
    }
}

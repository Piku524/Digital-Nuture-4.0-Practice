package com.library.service;

import com.library.repository.BookRepository;
import java.util.List;

public class BookService {

    private String libraryName;              // injected via constructor
    private BookRepository bookRepository;   // injected via setter

    // Constructor Injection
    public BookService(String libraryName) {
        this.libraryName = libraryName;
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBooks() {
        System.out.println("Welcome to " + libraryName + " Library!");
        List<String> books = bookRepository.findAllBooks();
        System.out.println("Available books:");
        for (String book : books) {
            System.out.println(" - " + book);
        }
    }
}


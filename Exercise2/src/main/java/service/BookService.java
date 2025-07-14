package com.library.service;

import com.library.repository.BookRepository;
import java.util.List;

public class BookService {

    private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Method that uses BookRepository
    public void displayBooks() {
        List<String> books = bookRepository.listBooks();
        System.out.println("Books available in the library:");
        for (String book : books) {
            System.out.println("- " + book);
        }
    }
}

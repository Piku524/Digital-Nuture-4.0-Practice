package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private BookRepository bookRepository;

    // Constructor-based injection (or use setter if preferred)
    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showBookList() {
        List<String> books = bookRepository.findAllBooks();
        System.out.println("Books available (annotation config):");
        for (String book : books) {
            System.out.println(">> " + book);
        }
    }
}

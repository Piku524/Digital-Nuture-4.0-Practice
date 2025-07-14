package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public void showBooks() {
        List<String> books = bookRepository.findAllBooks();
        System.out.println("📚 Book List:");
        books.forEach(book -> System.out.println(" • " + book));
    }
}


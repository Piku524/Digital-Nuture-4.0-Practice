package com.library.repository;

import java.util.Arrays;
import java.util.List;

public class BookRepository {
    public List<String> listBooks() {
        return Arrays.asList("Spring in Action", "Java Concurrency", "Effective Java");
    }
}

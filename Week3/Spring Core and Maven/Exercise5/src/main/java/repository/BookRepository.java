package com.library.repository;

import java.util.Arrays;
import java.util.List;

public class BookRepository {

    public List<String> listBooks() {
        return Arrays.asList("Clean Code", "Design Patterns", "Refactoring");
    }
}

package org.example.service;

import org.example.model.User;

import java.util.List;

public interface UserService {
    List<User> findAll();

    User findById(Long id);

    boolean save(User user);

    boolean update(User user);

    boolean deleteById(Long id);
}
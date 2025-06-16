package org.example.controller;

import org.example.model.User;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    // 视图控制器 - 返回JSP页面
    @GetMapping("/")
    public String index() {
        return "userList";
    }

    // REST API 控制器
    @ResponseBody
    @GetMapping("/api/users")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @ResponseBody
    @GetMapping("/api/users/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @ResponseBody
    @PostMapping("/api/users")
    public boolean createUser(@RequestBody User user) {
        return userService.save(user);
    }

    @ResponseBody
    @PutMapping("/api/users/{id}")
    public boolean updateUser(@PathVariable Long id, @RequestBody User user) {
        user.setId(id);
        return userService.update(user);
    }

    @ResponseBody
    @DeleteMapping("/api/users/{id}")
    public boolean deleteUser(@PathVariable Long id) {
        return userService.deleteById(id);
    }
}
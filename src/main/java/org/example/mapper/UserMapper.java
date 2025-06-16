package org.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.example.model.User;

import java.util.List;

@Mapper
public interface UserMapper {
    List<User> selectAll();

    User selectById(Long id);

    int insert(User user);

    int update(User user);

    int deleteById(Long id);
}
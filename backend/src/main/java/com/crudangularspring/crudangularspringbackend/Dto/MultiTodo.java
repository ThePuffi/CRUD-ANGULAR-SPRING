package com.crudangularspring.crudangularspringbackend.Dto;

import java.util.List;

import lombok.Data;

/**
 * @author Lufthansa Industry Solutions
 */

@Data
public class MultiTodo {

    private List<TodoDto> todoList;
}

package com.crudangularspring.crudangularspringbackend.Service;

import java.util.ArrayList;
import java.util.List;

import com.crudangularspring.crudangularspringbackend.Dto.MultiTodo;
import com.crudangularspring.crudangularspringbackend.Dto.TodoDto;
import com.crudangularspring.crudangularspringbackend.Entity.TodoEntity;
import com.crudangularspring.crudangularspringbackend.Repository.TodoRepository;

import org.springframework.stereotype.Service;

import com.crudangularspring.crudangularspringbackend.Mapper.TodoMapper;

import lombok.RequiredArgsConstructor;

/**
 * @author Erik Meinardus
 */
@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository repository;
    private final TodoMapper mapper;

    public TodoDto addTodo(TodoDto todoDto) {
        if(todoDto.getTitle().isEmpty() || todoDto.getContent().isEmpty()) {
            throw new IllegalArgumentException("Title and Content are required!");
        }
        TodoEntity todoEntity = repository.save(mapper.toEntity(todoDto));
        return mapper.toDto(todoEntity);
    }

    public List<TodoDto> getAllTodos() {
        List<TodoEntity> todoEntities = repository.findAll();
        List<TodoDto> dtoList = new ArrayList<>();
        todoEntities.forEach(todoEntity -> dtoList.add(mapper.toDto(todoEntity)));
        return dtoList;
    }

    public TodoDto updateTodo(TodoDto todoDto) {
        if(todoDto.getId().isEmpty()) {
            throw new IllegalArgumentException("No ID was found!");
        }
        TodoEntity todoEntity = repository.save(mapper.toEntity(todoDto));
        return mapper.toDto(todoEntity);
    }

    public void deleteTodo(String id) {
        if(repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Todo does not exist!");
        }
    }
    public void multipleDelete(MultiTodo itemList) {
        for (TodoDto item : itemList.getTodoList()
             ) {
            if(repository.existsById(item.getId())) {
                repository.deleteById(item.getId());
            } else {
                throw new IllegalArgumentException("Todo does not exist!");
            }
        }

    }
}

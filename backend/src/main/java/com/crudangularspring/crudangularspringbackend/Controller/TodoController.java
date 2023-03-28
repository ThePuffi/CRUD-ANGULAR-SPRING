package com.crudangularspring.crudangularspringbackend.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.crudangularspring.crudangularspringbackend.Dto.MultiTodo;
import com.crudangularspring.crudangularspringbackend.Dto.TodoDto;
import com.crudangularspring.crudangularspringbackend.Service.TodoService;

import lombok.RequiredArgsConstructor;

/**
 * @author Erik Meinardus
 */
@Controller
@CrossOrigin
@RequiredArgsConstructor
public class TodoController {

    private final TodoService service;

    @PostMapping("/create")
    public ResponseEntity<TodoDto> create(@RequestBody TodoDto dto) {
        try {
            return new ResponseEntity<>(service.addTodo(dto), HttpStatus.CREATED);
        } catch(IllegalArgumentException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<TodoDto>> getAll() {
        try{
            return new ResponseEntity<>(service.getAllTodos(), HttpStatus.OK);
        } catch(IllegalArgumentException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<TodoDto> update(@RequestBody TodoDto dto) {
        try{
            return new ResponseEntity<>(service.updateTodo(dto), HttpStatus.OK);
        } catch(IllegalArgumentException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<TodoDto> delete(@PathVariable String id) {
        try{
            service.deleteTodo(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(IllegalArgumentException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/multiDelete")
    public ResponseEntity<MultiTodo> multiDelete(@RequestBody MultiTodo deleteItems) {
        try{
            service.multipleDelete(deleteItems);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(IllegalArgumentException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

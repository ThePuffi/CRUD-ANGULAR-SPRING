package com.crudangularspring.crudangularspringbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crudangularspring.crudangularspringbackend.Entity.TodoEntity;

/**
 * @author Erik Meinardus
 */
@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String> {
}

package com.marciobueno.spring002postgresql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
    //@EntityScan(basePackages = {
    //        "com.marciobueno.spring002postgresql.model"
    //})
    //@EnableJpaRepositories(basePackages = {
    //        "com.marciobueno.spring002postgresql.repository"
    //})
public class Spring002PostgresqlApplication {
    public static void main(String[] args) {
        SpringApplication.run(Spring002PostgresqlApplication.class, args);
    }
}

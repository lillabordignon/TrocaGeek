package com.generation.trocageek;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

@SpringBootApplication
@EnableSpringDataWebSupport
@EnableCaching
public class TrocageekApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrocageekApplication.class, args);
	}

}

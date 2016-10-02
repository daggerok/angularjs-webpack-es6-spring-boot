package daggerok;

import daggerok.config.RestRepositoryConfig;
import daggerok.data.admin.Admin;
import daggerok.data.admin.AdminRestRepository;
import daggerok.data.user.User;
import daggerok.data.user.UserRestRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import java.util.stream.Stream;

@Slf4j
@SpringBootApplication
@Import(RestRepositoryConfig.class)
public class Ng15App {

    @Bean
    public CommandLineRunner testData(UserRestRepository userRestRepository, AdminRestRepository adminRestRepository) {

        Stream.of("Max@useremail.com", "Bax@useremail.com")
                .map(User::of).forEach(userRestRepository::save);

        Stream.of("Max@adminemail.com", "Bax@adminemail.com")
                .map(Admin::of).forEach(adminRestRepository::save);

        return args -> Stream.concat(userRestRepository.findAll().stream(), adminRestRepository.findAll().stream())
                .map(String::valueOf)
                .forEach(log::info);
    }

    public static void main(String[] args) {
        SpringApplication.run(Ng15App.class, args);
    }
}

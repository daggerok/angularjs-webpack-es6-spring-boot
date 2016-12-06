package daggerok;

import daggerok.config.RestRepositoryConfig;
import daggerok.domain.admin.Admin;
import daggerok.domain.admin.AdminRestRepository;
import daggerok.domain.user.User;
import daggerok.domain.user.UserRestRepository;
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

    public static void main(String[] args) {
        SpringApplication.run(Ng15App.class, args);
    }

    @Bean
    public CommandLineRunner testData(final UserRestRepository userRestRepository,
                                      final AdminRestRepository adminRestRepository) {

        if (userRestRepository.count() < 1) {

            Stream.of("Max", "Bax")
                    .map(name -> name + "@user.email.com")
                    .map(User::of)
                    .forEach(userRestRepository::save);
        }

        if (adminRestRepository.count() < 1) {

            Stream.of("Max", "Bax")
                    .map(name -> name + "@user.email.com")
                    .map(Admin::of)
                    .forEach(adminRestRepository::save);
        }

        return args -> Stream.concat(userRestRepository.findAll().stream(), adminRestRepository.findAll().stream())
                .map(String::valueOf)
                .forEach(log::info);
    }
}

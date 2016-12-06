package daggerok.domain.admin;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AdminRestRepository extends MongoRepository<Admin, String> {}

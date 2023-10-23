package com.Long.McQuade.SchedulingSystem.repositories;

import com.Long.McQuade.SchedulingSystem.entities.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityRepo extends JpaRepository<Authority, Integer> {

    public Authority findByAuthority(String authority);
}

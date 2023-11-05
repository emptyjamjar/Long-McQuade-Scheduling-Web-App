package com.Long.McQuade.SchedulingSystem.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.provisioning.JdbcUserDetailsManager;
//import org.springframework.security.provisioning.UserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;


@Configuration
public class ProjectSecurityConfig {



    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource) {

        JdbcUserDetailsManager userDetailsManager = new JdbcUserDetailsManager(dataSource);

        userDetailsManager.setUsersByUsernameQuery("select identifiernumber, pwd, enabled from users where identifiernumber=?");

        userDetailsManager.setAuthoritiesByUsernameQuery("select identifiernumber, authority from authorities where identifiernumber=?");

        return userDetailsManager;
    }



    @Bean
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {


        http.authorizeHttpRequests(configurer ->
                configurer
                        .requestMatchers(HttpMethod.GET, "/homepage/").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.GET, "/users/").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.GET, "/users/**").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.POST, "/users/addadmin").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.PUT, "/users/updateadmin").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.DELETE, "/users/deleteadmin/**").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")

                        .requestMatchers(HttpMethod.GET, "/users/students/").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.GET, "/users/students/s").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.GET, "/users/students/*").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.GET, "/users/students/*/").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.POST, "/users/students/addstudent").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.PUT, "/users/students/updatestudent").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.DELETE, "/users/students/deletestudents/**").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")

                        .requestMatchers(HttpMethod.GET, "/users/teachers/").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.GET, "/users/teachers/**").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.POST, "/users/teachers/addteacher").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.PUT, "/users/teachers/updateteacher").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.DELETE, "/users/teachers/deleteteacher/**").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")

                        .requestMatchers(HttpMethod.GET, "/lessons/").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.GET, "/lessons/**").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.POST, "/lessons/newlesson").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.PUT, "/lessons/updatelesson").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.DELETE, "/lessons/deletelesson/**").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")

                        .requestMatchers(HttpMethod.GET, "/lessonCentres/").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.GET, "/lessonCentres/**").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.POST, "/lessonCentres/addcentre").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.PUT, "/lessonCentres/updatecentre").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.DELETE, "/lessonCentre/deletecentre/**").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")

                        .requestMatchers(HttpMethod.GET, "/users/students/requestLessonChange").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.GET, "/users/requests").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT")
                        .requestMatchers(HttpMethod.DELETE, "/users/deleteRequest/*").hasAnyAuthority("ADMIN", "TEACHER", "STUDENT"))

        ;

        http.csrf(csrf -> csrf.disable());

        http.httpBasic(Customizer.withDefaults());

        http.formLogin();

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }



}


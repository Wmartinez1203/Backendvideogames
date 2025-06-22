package com.project.passwordchange.service;

import com.project.passwordchange.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class PasswordService {

    private static final Logger logger = LoggerFactory.getLogger(PasswordService.class);

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public boolean changePassword(Long userId, String oldPassword, String newPassword) {
        return userRepository.findById(userId).map(user -> {
            logger.info("Attempting password change for userId {}", userId);

            boolean matches = encoder.matches(oldPassword, user.getContraseña());
            logger.info("Old password match result: {}", matches);

            if (matches) {
                String newHashedPassword = encoder.encode(newPassword);
                user.setContraseña(newHashedPassword);
                userRepository.save(user);
                logger.info("Password updated successfully for userId {}", userId);
                return true;
            } else {
                logger.warn("Old password does not match for userId {}", userId);
                return false;
            }
        }).orElseGet(() -> {
            logger.warn("User not found with id {}", userId);
            return false;
        });
    }
}

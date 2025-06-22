package com.project.passwordchange.controller;

import com.project.passwordchange.dto.PasswordChangeRequest;
import com.project.passwordchange.service.PasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/password")
public class PasswordController {

    @Autowired
    private PasswordService passwordService;

    @PutMapping("/change")
    public String changePassword(@RequestBody PasswordChangeRequest request) {
        boolean updated = passwordService.changePassword(
                request.getUserId(),
                request.getOldPassword(),
                request.getNewPassword()
        );

        if (updated) {
            return "Password updated successfully";
        } else {
            return "Invalid credentials or user not found";
        }
    }
}

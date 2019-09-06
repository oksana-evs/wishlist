package com.evseeva.wishlist.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(maxAge = 3600)
public class MainController {
    @RequestMapping("/")
    public void start() {
        System.out.println("Entered on the main page");
    }
    @RequestMapping(value ="/here")
    public String index() {
        return "You are here";
    }
}

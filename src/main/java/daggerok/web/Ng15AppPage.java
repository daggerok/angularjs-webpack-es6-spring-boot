package daggerok.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Ng15AppPage {

    @GetMapping({
            "",
            "/" })
    public String app() {
        return "/index.html";
    }
}

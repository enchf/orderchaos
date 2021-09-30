package j4g.orderchaos.chaos

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class LogisticEquationController {

    @GetMapping("/chaos")
    fun plotLogisticEquation(@RequestParam ratio: Double,
                             @RequestParam x0: Double,
                             @RequestParam iterations: Int) = LogisticEquation(ratio, x0).plot(iterations)
}

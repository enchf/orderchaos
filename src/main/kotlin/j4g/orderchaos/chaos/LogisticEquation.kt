package j4g.orderchaos.chaos

data class LogisticEquation(val ratio: Double,
                            val x0: Double) {

    fun plot(n: Int) = generateSequence(x0) { x -> equation(x) }.take(n)

    // Logistic equation for f(x) = rx(1-x).
    private fun equation(x: Double) = ratio * x * (1.0 - x)
}

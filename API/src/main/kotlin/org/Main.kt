package org
import io.javalin.Javalin
import io.javalin.apibuilder.ApiBuilder.*
import org.system.PPTLSSystem
import org.content.controller.UserController

fun main() {
    val pptlsSystem = PPTLSSystem()
    val userController = UserController(pptlsSystem)
    val app = Javalin.create {
        it.enableCorsForAllOrigins()
    }.start(3001)

    app.before {
        it.header("Access-Control-Expose-Headers", "*")
    }

    app.routes {
        path("setPlayer") {
            post(userController::setPlayer)
        }
        path("registerNewWin") {
            post(userController::registerNewWin)
        }
    }
}
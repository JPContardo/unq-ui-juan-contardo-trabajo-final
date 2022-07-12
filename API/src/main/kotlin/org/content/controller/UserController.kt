package org.content.controller
import io.javalin.core.validation.ValidationException
import io.javalin.http.Context
import org.dto.*
import org.system.PPTLSSystem

class UserController(private val pptlsSystem: PPTLSSystem) {
    fun setPlayer(ctx: Context) { validationJSONBody(ctx, this::validarPlayerDTO) }
    fun registerNewWin(ctx: Context) { validationJSONBody(ctx, this::recordNewVictory) }

    private fun validationJSONBody(ctx : Context, function: (Context) -> Unit) {
        try {
            function(ctx)
        } catch (exc: Error) {
            ctx.status(404)
            ctx.json(ErrorDTO(exc.message!!))
        } catch (c: ValidationException) {
            ctx.status(400)
            ctx.json(ErrorDTO(c.errors["REQUEST_BODY"]!!.first().message))
        }
    }

    private fun validarPlayerDTO(ctx: Context) {
        val playerDTO = ctx.bodyValidator<PlayerDTO>()
            .check({ it.name.isNotBlank()}, "Player name cannot be blank")
            .get()
        val players = pptlsSystem.getPlayers(playerDTO)
        ctx.json(players).status(200)
    }

    private fun recordNewVictory(ctx: Context) {
        val playerDTO = ctx.bodyValidator<PlayerDTO>()
            .check({ it.name.isNotBlank()}, "Player name cannot be blank")
            .get()
        val players = pptlsSystem.registerNewWin(playerDTO)
        ctx.json(players).status(200)
    }
}
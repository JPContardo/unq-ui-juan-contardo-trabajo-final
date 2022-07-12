package org.content

class Player(val name : String, var score : Int) {

    fun addVictory(): Player {
        score += 1
        return this
    }
}
package org.system
import org.content.Player
import org.dto.PlayerDTO

class PPTLSSystem() {
    private var players : MutableList<Player> = mutableListOf()

    fun getPlayers(player: PlayerDTO) : MutableList<Player> {
        val listWithPlayer = players.filter { registeredPlayer -> registeredPlayer.name == player.name }.toMutableList()

        if(listWithPlayer.isEmpty()) {
            players.add(Player(player.name, 0))
            players.reverse()
            return players
        }
        listWithPlayer.addAll(players.filter { registeredPlayer -> registeredPlayer.name != player.name })
        return listWithPlayer
    }

    fun registerNewWin(player: PlayerDTO) : MutableList<Player> {
            val listWithPlayer = mutableListOf(players.filter { registeredPlayer -> registeredPlayer.name == player.name }[0].addVictory())
            listWithPlayer.addAll(players.filter { registeredPlayer -> registeredPlayer.name != player.name })
            players = listWithPlayer
            return listWithPlayer
    }
}
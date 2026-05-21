const Game = require('../models/Game');

class GameController {
    static async create(req, res) {
        try {
            const { name, genre, year } = req.body;
            if (!name || !genre || !year) {
                return res.status(400).json({ message: "Dados inválidos." });
            }

            const gameData = {
                name,
                genre,
                year
            };
            const newGame = await Game.create(gameData);
            return res.status(201).json({ message: 'Jogo criado com sucesso', data: newGame });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar jogo', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const games = await Game.find();
            return res.status(200).json({ data: games });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar jogos', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const game = await Game.findById(id);
            if (!game) {
                return res.status(404).json({ message: 'Jogo não encontrado' });
            }
            return res.status(200).json({ data: game });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar jogo', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, genre, year } = req.body;
            const updatedData = {
                name,
                genre,
                year
            };
            const updatedGame = await Game.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedGame) {
                return res.status(404).json({ message: 'Jogo não encontrado' });
            }
            return res.status(200).json({ message: 'Jogo atualizado com sucesso', data: updatedGame });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar jogo', error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedGame = await Game.findByIdAndDelete(id);
            if (!deletedGame) {
                return res.status(404).json({ message: 'Jogo não encontrado' });
            }
            return res.status(200).json({ message: 'Jogo deletado com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar jogo', error: error.message });
        }
    }
}

module.exports = GameController;
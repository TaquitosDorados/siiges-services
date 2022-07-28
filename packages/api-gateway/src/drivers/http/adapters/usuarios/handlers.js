const errorHandler = require('../../utils/errorHandler');
const { Logger } = require('@siiges-services/shared');

// usuario services
async function findAllUsuarios(req, reply) {
	try {
		Logger.info(`[usuarios]: Getting usuarios list`);
		const usuarios = await this.usuarioServices.findAllUsuarios();

		return reply
			.code(200)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send({ data: usuarios });
	} catch (error) {
		return errorHandler(error, reply);
	}
}

async function findOneUsuario(req, reply) {
	try {
		const { usuarioId } = req.params;

		Logger.info(`[usuarios]: Getting usuario ${usuarioId}`);
		const usuario = await this.usuarioServices.findOneUsuario(usuarioId);

		return reply
			.code(200)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send({ data: usuario });
	} catch (error) {
		return errorHandler(error, reply);
	}
}

async function findOneDetailedUsuario(req, reply) {
	try {
		const { usuarioId } = req.params;

		Logger.info(`[usuarios]: Getting usuario: ${usuarioId}`);
		const usuario = await this.usuarioServices.findOneUsuarioDetailed(
			usuarioId
		);

		return reply
			.code(200)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send({ data: usuario });
	} catch (error) {
		return errorHandler(error, reply);
	}
}

async function createUsuario(req, reply) {
	try {
		const { body } = req;

		Logger.info(`[usuarios]: Creating usuario`);
		const newUsuario = await this.usuarioServices.createUsuario(body);

		return reply
			.code(201)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send({ data: newUsuario });
	} catch (error) {
		return errorHandler(error, reply);
	}
}

async function updateUsuario(req, reply) {
	try {
		const { usuarioId } = req.params;
		const { body } = req;

		Logger.info(`[usuarios]: Updating usuario`);
		const usuarioUpdated = await this.usuarioServices.updateUsuario(
			usuarioId,
			body
		);

		return reply
			.code(201)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send({ data: usuarioUpdated });
	} catch (error) {
		return errorHandler(error, reply);
	}
}

async function deleteUsuario(req, reply) {
	try {
		const { usuarioId } = req.params;

		Logger.info(`[usuarios]: Deleting usuario: ${usuarioId}`);
		const usuarioDeleted = await this.usuarioServices.deleteUsuario(usuarioId);

		return reply
			.code(201)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send({ data: usuarioDeleted });
	} catch (error) {
		return errorHandler(error, reply);
	}
}

module.exports = {
	findAllUsuarios,
	findOneUsuario,
	findOneDetailedUsuario,
	createUsuario,
	updateUsuario,
	deleteUsuario,
};

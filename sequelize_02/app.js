const express = require("express");
const { endsWith } = require("lodash");
const { sequelize, User, Post } = require("./models");

const app = express();
app.use(express.json());
app.post("/users", async (req, res) => {
	const { name, email, role } = req.body;

	try {
		const user = await User.create({ name, email, role });
		return res.json(user);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});

app.get("/users", async (req, res) => {
	try {
		const users = await User.findAll();
		return res.json(users);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: "Something went wrong" });
	}
});

app.get("/users/:uuid", async (req, res) => {
	const uuid = req.params.uuid;
	try {
		const user = await User.findOne({
			//where: {uuid:uuid}
			where: { uuid },
			include: "posts",
		});
		return res.json(user);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: "Something went wrong" });
	}
});

app.delete("/users/:uuid", async (req, res) => {
	const uuid = req.params.uuid;
	try {
		const user = await User.findOne({ where: { uuid } });
		await user.destroy();
		return res.json({ message: "User deleted!" });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: "Something went wrong" });
	}
});

app.put("/users/:uuid", async (req, res) => {
	const uuid = req.params.uuid;
	const { name, email, role } = req.body;
	try {
		const user = await User.findOne({ where: { uuid } });

		user.name = name;
		user.email = email;
		user.role = role;

		await user.save();
		return res.json(user)
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: "Something went wrong" });
	}
});

app.post("/post", async (req, res) => {
	const { userUUID, body } = req.body;
	try {
		const user = await User.findOne({ where: { uuid: userUUID } });
		const post = await Post.create({ body, userId: user.id });
		return res.json(post);
	} catch (err) {
		return res(500).json({ error: err });
	}
});

app.get("/post", async (req, res) => {
	try {
		//const posts = await Post.findAll();
		//const posts = await Post.findAll({include: [User]});
		//const posts = await Post.findAll({include: [{model: User, as: 'user'}] }); //Add in Posts.model association "as"
		//const posts = await Post.findAll({include: ['user']})
		const posts = await Post.findAll({ include: "user" });
		return res.json(posts);
	} catch (err) {
		return res(500).json({ err });
	}
});

/*
async function main() {
	await sequelize.sync({ force: true });
}
main();
*/
app.listen({ port: 5000 }, async () => {
	console.log("Server up on http://localhost:5000");
	//await sequelize.sync({ force: true });
	await sequelize.authenticate();
	console.log("Database Connected");
});

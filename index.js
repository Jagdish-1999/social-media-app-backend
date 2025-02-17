import app from "./src/app.js";
import { connectToDB } from "./src/config/db.config.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`[Server] is listening at http://localhost:${PORT}`);
	connectToDB();
});

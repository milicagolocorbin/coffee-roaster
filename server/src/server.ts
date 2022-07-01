import { connect } from "mongoose";
import app from "./app";

// connect to mongodb
const port: Number = Number(process.env.PORT) || 8000;
async function bootstrap() {
  // you have to use a template string and interpolate the environment variable or you'll get error
  await connect(`${process.env.DB_CONNECTION}`);
  console.log("🚀 DB connected successfully.");
  app.listen(port, () => {
    console.log(`⚡️ Server is running at http://localhost:${port}.`);
  });
}
bootstrap();

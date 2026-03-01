import { app } from "./app.js";
import { port } from "./src/config/env.js";

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});

import app from "./app.js"

import postsRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";

app.use("/posts", postsRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));

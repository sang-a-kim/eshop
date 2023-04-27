import './db.js'
import app from './server.js';

const PORT = 3000

const handleListening = () => console.log(`Server is listening on http://localhost:${PORT} 🚀`)

// Listen the app
app.listen(PORT, handleListening);
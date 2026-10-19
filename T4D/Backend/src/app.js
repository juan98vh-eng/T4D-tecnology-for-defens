const verificarApiKey = require("./src/middlewares/apiKey");
const verificarToken   = require("./src/middlewares/auth.middleware");

const authRoutes            = require("./src/routes/auth.routes");
const productosRoutes       = require("./src/routes/productos.routes");
const categoriasRoutes      = require("./src/routes/categorias.routes");
const movimientosRoutes     = require("./src/routes/movimientos.routes");
const proveedoresRoutes     = require("./src/routes/proveedores.routes");
const asignacionesRoutes    = require("./src/routes/asignaciones.routes");
const rolesRoutes           = require("./src/routes/roles.routes");
const sucursalesRoutes      = require("./src/routes/sucursales.routes");
const usuariosRoutes        = require("./src/routes/usuarios.routes");
const reportesRoutes        = require("./src/routes/reportes.routes");
const historialPreciosRoutes = require("./src/routes/historialprecios.routes");
const notificacionesRoutes  = require("./src/routes/notificaciones.routes");
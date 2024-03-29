const { Router } = require('express');
const { NotFound } = require('http-errors');
const morgan = require('morgan');

const logger = require('../config/logger');

const router = Router();

/**
 * Import de las rutas de los modelos
 */

//const tipoanimalsRouter = require('./routes/tipoanimalroutes');
const categoriasRouter = require('./routes/categoriaroutes');
const clientesRouter = require('./routes/clienteroutes');
const facturasRouter = require('./routes/facturaroutes');
const productosRouter = require('./routes/productoroutes');
const proveedorsRouter = require('./routes/proveedorroutes');
const ventasRouter = require('./routes/ventaroutes');

/**
 * Router configuration
 */
router.use(
  morgan(':status - [:method :url - :remote-addr] :response-time ms', {
    stream: {
      write: message => logger.info(message),
    },
    skip: (req, res) => res.statusCode >= 400,
  })
);

/**
 * API routes
 */
//router.use('/tipoanimals', tipoanimalsRouter);
router.use('/categorias', categoriasRouter);
router.use('/clientes', clientesRouter);
router.use('/facturas', facturasRouter);
router.use('/productos', productosRouter);
router.use('/proveedors', proveedorsRouter);
router.use('/ventas', ventasRouter);


/**
 * 
 */
router.get('/', (req, res) => res.sendStatus(200));

/**
 * 404 error handling
 */
router.use((req, res, next) => {
  const { baseUrl, url, method } = req;

  next(new NotFound(`The route '${method} ${baseUrl}${url}' doesn't exist.`));
});

module.exports = router;

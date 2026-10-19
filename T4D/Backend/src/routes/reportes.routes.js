const express = require('express');
const router = express.Router();

// Importación directa absoluta basada en la estructura estándar de src
const reportesService = require('../services/reportes.service');

const responder = (res, data) =>
  res.status(200).json({ ok: true, data });

const errorHandler = (res, error) =>
  res.status(500).json({ ok: false, mensaje: error.message });

// ─── VENTAS ────────────────────────────────────────────────────────────────
router.get('/ventas/resumen', async (req, res) => {
  try { responder(res, await reportesService.getResumenVentas()); } catch (e) { errorHandler(res, e); }
});
router.get('/ventas/por-sucursal', async (req, res) => {
  try { responder(res, await reportesService.getVentasPorSucursal()); } catch (e) { errorHandler(res, e); }
});
router.get('/ventas/por-metodo-pago', async (req, res) => {
  try { responder(res, await reportesService.getVentasPorMetodoPago()); } catch (e) { errorHandler(res, e); }
});

// ─── INVENTARIO ────────────────────────────────────────────────────────────
router.get('/inventario/stock-bajo', async (req, res) => {
  try { responder(res, await reportesService.getStockBajo()); } catch (e) { errorHandler(res, e); }
});
router.get('/inventario/movimientos', async (req, res) => {
  try { responder(res, await reportesService.getMovimientosInventario()); } catch (e) { errorHandler(res, e); }
});
router.get('/inventario/valorizacion', async (req, res) => {
  try { responder(res, await reportesService.getValorizacionInventario()); } catch (e) { errorHandler(res, e); }
});

// ─── CLIENTES ──────────────────────────────────────────────────────────────
router.get('/clientes/top', async (req, res) => {
  try { responder(res, await reportesService.getTopClientes()); } catch (e) { errorHandler(res, e); }
});

// ─── EMPLEADOS ─────────────────────────────────────────────────────────────
router.get('/empleados/rendimiento', async (req, res) => {
  try { responder(res, await reportesService.getRendimientoEmpleados()); } catch (e) { errorHandler(res, e); }
});

// ─── FINANCIERO ────────────────────────────────────────────────────────────
router.get('/financiero/balance', async (req, res) => {
  try { responder(res, await reportesService.getBalancePeriodo()); } catch (e) { errorHandler(res, e); }
});

// ─── PRODUCTOS ─────────────────────────────────────────────────────────────
router.get('/productos/mas-vendidos', async (req, res) => {
  try { responder(res, await reportesService.getMasVendidos()); } catch (e) { errorHandler(res, e); }
});

module.exports = router;
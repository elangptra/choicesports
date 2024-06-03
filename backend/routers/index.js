import express from "express";
import lapangan_router from "./lapangan.js";
import kecamatan_router from "./kecamatan.js";
import pengelola_router from "./pengelola.js";

const route = express();

route.use(kecamatan_router);
route.use(lapangan_router);
route.use(pengelola_router);

export default route

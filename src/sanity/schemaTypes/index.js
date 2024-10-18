import categoria from "./categoria";
import color from "./color";
import fabricante from "./fabricante";
import producto from "./producto";
import fit from './fit';
import suscriptor from "./suscriptor";
import user from './user'
import venta from "./venta";
import cupones from "./cupones";

export const schema = {
  types: [producto, categoria, fabricante, fit, color, suscriptor, user, venta ],
};
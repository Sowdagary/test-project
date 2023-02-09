//Internal import
import common from "./common.json"
import routes from "./routes.json"
import sections from "./sections.json"
import validation from "./validation.json"
/**
 * All different namespaces (each will be stored in a separate file) are loaded and exported from here
 * @example common,etc.
 */
const enResourses = {
  common,
  routes,
  validation,
  sections
}

export default enResourses

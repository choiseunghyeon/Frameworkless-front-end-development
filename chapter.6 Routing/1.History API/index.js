import createRouter from "./rotuer.js.js.js";
import createPages from "./pages.js";

const container = document.querySelector("main");

const pages = createPages(container);

const router = createRouter();

router.addRoute("/", pages.home).addRoute("/list", pages.list).addRoute("/list/:id", pages.detail).addRoute("/list/:id/:anotherId", pages.anotherDetail).setNotFound(pages.notFound).start();

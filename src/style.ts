import { CrimsonStyle } from "./lib/main"
/**
* @desc untuk menginstall dan menyiapkan library kita agar bisa digunakkan oleh developer website
* @return void
* @desc to install and prepare our library so that can used by developer website
* @return void
*/
const setup = () =>new CrimsonStyle().install()

document.addEventListener("DOMContentLoaded", () => {
    setup()
})

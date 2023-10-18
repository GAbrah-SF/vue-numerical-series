import {onlyNumber} from "@/js/function/only_number";
import {encontrarPrimo} from "@/js/function/prime_number";
import {triangular} from "@/js/function/triangular_number"
import {fibonacci} from "@/js/function/fibonacci_sequence"
import {showAlert} from "@/js/alert/alert1"
import {showAlert2} from "@/js/alert/alert2"
import ShowResult from "@/components/ShowResult";


let form_number = {
    components: {
        ShowResult,
    },
    data() {
        return {
            serie: null,
            serieResult: null,
        };
    },
    name: 'FormNumber',
    props: {
        msg: String,
    },
    methods: {
        showAlert,
        showAlert2,
        onlyNumber,
        Serie() {
            let number = document.getElementById("number_to_calculate").value

            if (number === "") {
                this.showAlert()

            } else if ([1, 2].includes(parseInt(number))) {
                this.showAlert2()

            } else {
                number = parseInt(number);

                let numero_primo = encontrarPrimo(number)
                let numero_triangular = triangular(number)
                let numero_fibonacci = fibonacci(number - 2)

                this.serie = (3 * numero_primo * numero_triangular) / numero_fibonacci
                this.serieResult = `serie(n) = ${Number(this.serie.toFixed(2))}`

                // console.log(`En la posición ${numeroEntero} se encuentra el número: ${numero_primo}`)
                // console.log(`El Triangular del número ${numeroEntero} es: ${numero_triangular}`)
                // console.log(`La Secuencia Fibonacci de ${numeroEntero - 2} es: ${numero_fibonacci}`)
                // console.log(`El resultado de la Serie es: ${this.serie}`)

                document.getElementById("resultado_serie").value = this.serieResult
            }
        }
    }
}
export default form_number

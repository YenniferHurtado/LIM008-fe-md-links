
import UIKit

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        saludarPersona(nombre: "Pepe")
        holaMundo()
        suma(a: 4, b: 2)
        saludo(nombre: "Maria")
        siguienteDos(numero: 10)
    }
    //Con parámetros y valor de retorno
    func saludarPersona(nombre:String) -> String{
        let saludo = "Que tal \(nombre)"
        return saludo
    }
    //Sin parámetros
    func holaMundo() -> String{
        return "Hey you"
    }
    //Múltiples prámetros
    func suma(a:Int, b:Int) -> Int{
        return a + b
    }
    //Sin valor de retorno
    func saludo(nombre:String){
        print("Hola \(nombre)")
    }
    //Multiples valores de retorno
    func siguienteDos(numero:Int) -> (primero:Int, segundo:Int){
        return(numero + 1, numero + 2)
    }
}


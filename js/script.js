var textAlertVacio = "";
var textAlertFormat = "";

function nombrevacio() {
    if ($('#nombre').val() == "") {
        textAlertVacio += "El nombre no puede estar vacio\n";
        //alert("El nombre no puede estar vacio");
        return false;
    }
    return true;
}

function apellidoVacio() {
    if ($('#apellido').val() == "") {
        textAlertVacio += "El apellido no puede estar vacio\n";
        //alert("El apellido no puede estar vacio");
        return false;
    }
    return true;
}

function nacimientoVacio() {
    if ($('#nac').val() == "") {
        textAlertVacio += "La fecha de nacimiento no puede estar vacio\n";
        //alert("El nacimiento no puede estar vacio");
        return false;
    }
    return true;
}

function sexoVacio() {
    if (!document.querySelector('input[name="sexo"]:checked')) {
        textAlertVacio += "Debe seleccionar el sexo\n";
        //alert("El sexo no puede estar vacio");
        return false;
    }
    return true;
}

function valoracionVacia() {
    if ($('#valoracion').val() == "") {
        textAlertVacio += "La valoracion no puede estar vacio\n";
        //alert("La valoracion no puede estar vacio");
        return false;
    }
    return true;
}

function emailVacio() {
    if ($('#email').val() == "") {
        textAlertVacio += "El email no puede estar vacio\n";
        //alert("El email no puede estar vacio");
        return false;
    }
    return true;
}

function validarNombre() {
    var reg = /^[a-zA-Z]+$/;
    if ($('#nombre').val().match(reg)) {
        console.log("Nombre validado");
        return true;
    } else {
        textAlertFormat += "Este nombre es incorrecto\n";
        //alert("Este nombre es incorrecto");
        return false;
    }
}

function validarApellido() {
    var reg = /^[a-zA-Z]+$/;
    if ($('#apellido').val().match(reg)) {
        console.log("Apellido validado");
        return true;
    } else {
        textAlertFormat += "Este apellido es incorrecto\n";
        //alert("Este apellido es incorrecto");
        return false;
    }
}

function validarCorreo() {
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ($('#email').val().match(reg)) {
        console.log("Email validado");
        return true;
    } else {
        textAlertFormat += "Correo incorrecto\n";
        //alert("Correo incorrecto");
        return false;
    }
}

function validadordeVacios() {
    var nac = nacimientoVacio();
    var nom = nombrevacio();
    var ape = apellidoVacio();
    var val = valoracionVacia();
    var sexo = sexoVacio();
    var email = emailVacio();

    if (nac == true && nom == true && ape == true && val == true && sexo == true && email == true) {
        return true;
    } else {
        alert(textAlertVacio);//alert con todas las validaciones que fallaron
        return false;
    }
}

function validadordeFormatos() {
    var valNom = validarNombre();
    var valApe = validarApellido();
    var valCor = validarCorreo();
    if (valApe == true && valCor == true && valNom == true) {
        return true;
    } else {
        alert(textAlertFormat);//alert con los formtos que fallaron
        return false;
    }
}

function mostrarDatos() {
    alert(
        "Nombre:\t" + $('#nombre').val() +
        "\nApellido:\t" + $('#apellido').val() +
        "\nNacimiento:\t" + $('#nac').val() +
        "\nSexo:\t" + document.querySelector('input[name="sexo"]:checked').value +
        "\nValoracion:\t" + $('#valoracion').val() +
        "\nCorreo:\t" + $('#email').val()
    );

}

function cancelar() {
    var decision = confirm("¿Desea volver al menu principal?");
    if (decision == true) {
        window.location.href = "./Index.html";
    } else {
        return false;
    }
}

function restablecer() {
    $('#form-general')[0].reset();
    //document.getElementById("form-general").reset();
}

//Funcion principal
$(document).ready(function () {
    //click en boton enviar
    $("#enviar").click(function () {
        console.log("ingresando a la funcion de validacion de valores nulos");
        var vacios = validadordeVacios();
        console.log("Validación de nombre y apellido");
        console.log("Validando correo...");
        var formatos = validadordeFormatos();
        if (vacios == true && formatos == true) {
            mostrarDatos();
        }
    });
    //click en boton cancelar
    $("#cancelar").click(function () {
        cancelar();
    });
    //click en boton restablecer
    $("#restablecer").click(function () {
        restablecer();
    });
    //carrito (click en un articulo)
    var carrito = 0;
    $('#sec-cen article').click(function (evento) {
        $(this).toggleClass('articleclick');
        if ($(evento.currentTarget).hasClass('articleclick')) {
            carrito += 250;
            $('#costo').html("Carrito: $" + carrito);
        } else {
            carrito -= 250;
            $('#costo').html("Carrito: $" + carrito);
        }
    });

});

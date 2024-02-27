document.addEventListener("DOMContentLoaded", function() {
    console.log("Olá tutor!");
  });
  
  function validarFormulario() {
    var valorCampoA = document.getElementById("campoA").value;
    var valorCampoB = document.getElementById("campoB").value;
  
    var numeroCampoA = parseFloat(valorCampoA);
    var numeroCampoB = parseFloat(valorCampoB);
  
    var campoA = document.getElementById("campoA");
    var campoB = document.getElementById("campoB");
  
    if (numeroCampoB > numeroCampoA) {
      document.getElementById("mensagem").innerText = "Formulário válido!";
      campoA.classList.remove("campo-invalido");
      campoB.classList.remove("campo-invalido");
    } else {
      document.getElementById("mensagem").innerText = "Número B deve ser maior que número A.";
      campoA.classList.add("campo-invalido");
      campoB.classList.add("campo-invalido");
    }
  }
  
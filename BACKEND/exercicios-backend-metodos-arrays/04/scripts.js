const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function processo(pacientes, tipoDeOperacao, nomePaciente) {
    if (tipoDeOperacao === "agendar") {
        pacientes.push(nomePaciente);
    } else {
        pacientes.unshift(nomePaciente);
    }
    console.log(pacientes.join(", "));
}

processo(pacientes, "atender", "Junior");
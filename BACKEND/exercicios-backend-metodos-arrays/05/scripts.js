const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function fila(pacientes, tipoOperação, nomePaciente) {
    if (tipoOperação === 'agendar') {

    } else {
        atenderPaciente(pacientes)
    }
}
function agendarPaciente(pacientes) {
    pacientes.unshift(nomePaciente)
    pacientes.push(nomePaciente)
    console.log(pacientes.join(', '))
}

function atenderPaciente(pacientes) {
    pacientes.shift()
    console.log(pacientes.join(', '))
}

function cancelarAtendimento(pacientes, paciente) {
    let index = pacientes.indexOf(paciente)
    pacientes.splice(index)
    console.log(pacientes.join(', '))
}

cancelarAtendimento(pacientes, 'Joana');

fila(pacientes, 'atender', 'Juninho')
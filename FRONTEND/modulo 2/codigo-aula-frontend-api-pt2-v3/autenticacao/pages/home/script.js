const token = getLocalStorage("token");
const namePerfilInput = document.querySelector("[name='namePerfil']");
const emailPerfilInput = document.querySelector("[name='emailPerfil']");
const verifyToken = () => {
  try {
    const splitToken = token.split(".");
    return splitToken.length == 3;
  } catch (error) {
    return false;
  }
};

if (!verifyToken()) {
  location.href = "/index.html";
}

function logout() {
  removeLocalStorage("token");
  location.href = "/index.html";
}

async function pegarDadosUsuario() {
  const response = await api.get("/usuarios", {
    headers: {
      Authorization: token,
    },
  });
  namePerfilInput.value = response.data.nome;
  emailPerfilInput.value = response.data.email;
  console.log(response);
}

pegarDadosUsuario();

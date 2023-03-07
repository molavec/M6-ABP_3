const countries = {
  "localidad 1": {
    "Continente": "África",
    "Pais": "Angola",
    "Capital": "Luanda",
    "Bandera": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg"
  },
  "localidad 2": {
    "Continente": "América del Norte",
    "Pais": "Estados Unidos",
    "Capital": "Washington DC",
    "Bandera": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
  },
  "localidad 3": {
    "Continente": "América Central",
    "Pais": "México",
    "Capital": "Ciudad de México",
    "Bandera": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"
  },
  "localidad 4": {
    "Continente": "América del Sur",
    "Pais": "Brasil",
    "Capital": "Brasilia",
    "Bandera": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
  },
  "localidad 5": {
    "Continente": "Europa",
    "Pais": "España",
    "Capital": "Madrid",
    "Bandera": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
  },
  "localidad 6": {
    "Continente": "Europa",
    "Pais": "Alemania",
    "Capital": "Berlín",
    "Bandera": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
  },
  "localidad 7": {
    "Continente": "Oceanía",
    "Pais": "Australia",
    "Capital": "Camberra",
    "Bandera": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg"
  },
  "localidad 8": {
    "Continente": "Asia",
    "Pais": "Japón",
    "Capital": "Tokio",
    "Bandera": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"
  }
};

const getCountryInfo = (index) => {
  return countries[`localidad ${index}`];
}

module.exports = getCountryInfo;


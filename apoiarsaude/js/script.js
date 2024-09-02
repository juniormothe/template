var map = L.map('map').setView([-22.7295835, -43.1242251],10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Cidades e informações
var cities = {
    rio: { lat: -22.9068, lng: -43.1729, info: "Atendimento completo no Rio de Janeiro." },
    niteroi: { lat: -22.8833, lng: -43.1034, info: "Atendimento especializado em Niterói." },
    saogoncalo: { lat: -22.8268, lng: -43.0634, info: "Cobertura na área de São Gonçalo." },
    caxias: { lat: -22.7856, lng: -43.3117, info: "Serviços disponíveis em Duque de Caxias." },
    novaiguacu: { lat: -22.7556, lng: -43.4603, info: "Atendimento estendido para Nova Iguaçu." },
    itaborai: { lat: -22.7443, lng: -42.8594, info: "Área atendida em Itaboraí." },
    mage: { lat: -22.6531, lng: -43.0318, info: "Cobertura em Magé." },
    belfordroxo: { lat: -22.764, lng: -43.3992, info: "Atendimento completo em Belford Roxo." },
    guapimirim: { lat: -22.5347, lng: -42.9895, info: "Serviços disponíveis em Guapimirim." },
    itaguai: { lat: -22.8522, lng: -43.7752, info: "Atendimento especializado em Itaguaí." },
    japeri: { lat: -22.6433, lng: -43.6602, info: "Cobertura na área de Japeri." },
    nilopolis: { lat: -22.8075, lng: -43.4233, info: "Atendimento completo em Nilópolis." },
    paracambi: { lat: -22.6075, lng: -43.7102, info: "Serviços disponíveis em Paracambi." },
    queimados: { lat: -22.7107, lng: -43.5518, info: "Atendimento estendido para Queimados." },
    saojoaodemeriti: { lat: -22.8057, lng: -43.3727, info: "Cobertura em São João de Meriti." },
    seropedica: { lat: -22.7526, lng: -43.7155, info: "Serviços disponíveis em Seropédica." },
    marica: { lat: -22.9194, lng: -42.8186, info: "Atendimento especializado em Maricá." },
    mesquita: { lat: -22.7805, lng: -43.4296, info: "Cobertura na área de Mesquita." },
    riobonito: { lat: -22.7181, lng: -42.6276, info: "Atendimento completo em Rio Bonito." },
    tangua: { lat: -22.7337, lng: -42.7208, info: "Serviços disponíveis em Tanguá." }
};

// Adicionar marcadores para cada cidade
var markers = {}; // Guardar referência para cada marcador

for (const city in cities) {
    const { lat, lng, info } = cities[city];
    
    const marker = L.marker([lat, lng]).addTo(map)
        .bindPopup(`<b>${city.charAt(0).toUpperCase() + city.slice(1)}</b><br>${info}`);
    
    // Salvar o marcador no objeto 'markers'
    markers[city] = marker;
    
    // Adicionar eventos de hover e click à lista
    const listItem = document.getElementById(city);
    if (listItem) {
        listItem.addEventListener('mouseover', () => {
            marker.openPopup(); // Abre o popup no hover
            map.setView([lat, lng], 12); // Centraliza o mapa na cidade
        });
        listItem.addEventListener('mouseout', () => {
            marker.closePopup(); // Fecha o popup ao sair do hover
        });
        listItem.addEventListener('click', () => {
            map.setView([lat, lng], 14); // Dá zoom ao clicar
        });
    }
}

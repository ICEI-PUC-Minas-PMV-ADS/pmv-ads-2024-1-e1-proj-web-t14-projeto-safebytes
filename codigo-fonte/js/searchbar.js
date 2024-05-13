// searchbar.js
document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    const cards = [
      { title: "Phishing", imageUrl: "../assets/phishing2222.webp", description: "Phishing" },
      { title: "Baixar Antivirus", imageUrl: "../assets/quizDesafioAntiVirus.png", description: "Desafio Antivírus" },
      { title: "Gmail Hackeado", imageUrl: "../assets/raskiado.jpeg", description: "Gmail Hackeado?" }
      
    ];
  
    function renderCards() {
      cardContainer.innerHTML = '';
      cards.forEach(card => {
        const cardHtml = `
          <div class="card">
            <img src="${card.imageUrl}" class="card-img-top" alt="${card.title}">
            <div class="card-body">
              <a href="#"><h6 class="card-title">${card.title}</h6></a>
            </div>
          </div>`;
        cardContainer.innerHTML += cardHtml;
      });
    }
  
    function filterCards(event) {
      const searchText = event.target.value.toLowerCase();
      const filteredCards = cards.filter(card => card.title.toLowerCase().includes(searchText));
      cardContainer.innerHTML = '';
      filteredCards.forEach(card => {
        const cardHtml = `
          <div class="card">
            <img src="${card.imageUrl}" class="card-img-top" alt="${card.title}">
            <div class="card-body">
              <a href="#"><h6 class="card-title">${card.title}</h6></a>
            </div>
          </div>`;
        cardContainer.innerHTML += cardHtml;
      });
    }
  
    document.getElementById('search-input').addEventListener('keyup', filterCards);
    renderCards();
  });
  
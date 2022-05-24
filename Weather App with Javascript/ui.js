class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Galati";
  }

  populateUI(data) {

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted font-weight-bold">Highs of : ${data.main.temp_max}℃ (Temperatura maxima).</h6>
                <h6 class="font-weight-bold"> Lows of : ${data.main.temp_min}℃ (Temperatura minima)</h6>
                <h6 class="card-text font-weight-bold" >Weather conditions are described as : ${data.weather[0].description} (Conditiile meteorologice aproximative)</h6>
            </div>
        </div>
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}

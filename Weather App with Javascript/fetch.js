class Fetch {
  async getCurrent(input) {
    const myKey = "4a20c27e48e47abc055aee5584851abc";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}

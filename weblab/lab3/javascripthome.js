function createCar(title, paragraph, img, link) {
    return {
      title: title,
      paragraph: paragraph,
      img: img,
      link: link,
    };
  }
  
  function createCarArray() {
    const cars = [
      createCar("NEW BMW IN STOCK", "Choose your BMW available from an official dealer in your city.", "https://www.bmw-kz.com/content/dam/bmw/marketB4R1/bmw_kz/publicPools/teaser-pool/indexteaser/1344x756%20cars%20on%20stock.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1632496416901.jpg", "To learn more"),
      createCar("BMW Lifestyle Online Store", "Be on style every day. A large selection of branded clothing and accessories.", "https://www.bmw-kz.com/content/dam/bmw/marketB4R1/bmw_kz/publicPools/teaser-pool/indexteaser/1344x756%20lifestyle.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1632497116885.jpg", "To learn more"),
      ];
  
    return cars;
  }
  
  const carList = document.getElementById('home-list');
  function displayCars(cars) {
      carList.innerHTML = '';
      cars.forEach((car) => {
          const carEl = document.createElement('div');
          carEl.classList.add('car');
          carEl.innerHTML = `
              <img src="${car.image}" alt="">
              <h3>${car.title}</h3>
              <p>${car.paragraph}</p>
              <p>${car.link}</p>
          `;
          carList.appendChild(carEl);
      });
  }

  const car1 = createCarArray()
  
  // Initial Display
  displayCars(car1);

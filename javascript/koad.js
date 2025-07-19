 const dishes = [
      {
        name: "Pasta",
        image: "download (3).jpg",
        price: "$5"
      },
      {
        name: "Pizza Pepperoni",
        image: "pizza1.jpg",
        price: "$10"
      },
      {
        name: "Pizza Kabab Stuffer",
        image: "download.jpg",
        price: "$10"
      },
      {
        name: "Pizza Cheese Filled",
        image: "download (2).jpg",
        price: "$10"
      },
      {
        name: "Pizza Chicken Tikka",
        image: "download (1).jpg",
        price: "$10"
      },
      {
        name: "Pizza Malai Boti",
        image: "free-photo-of-four-different-pizzas-on-the-table.jpg",
        price: "$10"
      }
    ];

  let container = document.getElementById("container");

for (let i = 0; i < dishes.length; i++) {
    let dish = dishes[i];

    container.innerHTML += `
        <div class="p-4 border text-center rounded-xl hover:scale-105 transition duration-300 relative top-10 shadow-md bg-white">
            <img src="${dish.image}" alt="${dish.name}" class="w-full h-48 object-contain rounded-md mb-2 bg-gray-100">
            <h3 class="text-xl font-bold">${dish.name}</h3>
            <p class="text-gray-600">${dish.price}</p>
        </div>
    `;
}

    
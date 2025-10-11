const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      size: [
        { id: 1, name: "Small" },
        { id: 2, name: "Medium" },
        { id: 3, name: "Large" },
      ],
      author: {
        name: "Pham Duc Thang",
        id: "GCS230575",
        mail: "pt4251c@greenwich.ac.uk",
        idUK: "001407356",
      },
    };
  },
});

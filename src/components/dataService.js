import Catalog from "./catalog";
var catalog = [
  {
    _id: "1234323",
    title: "Double Rich Chocolate Whey Protein Powder",
    img: "81Dcboeo4tL._AC_SS450_.jpg",
    price: 29.99,
    category: "Protein Powder",
  },
  {
    _id: "1234324",
    title: "JYM Rainbow Sherbert Pre Workout",
    img: "71uwfbcAkYL._AC_SX425_.jpg",
    price: 49.99,
    category: "Pre-Workout",
  },
  {
    _id: "1234325",
    title: "Bang Pre-Workout (Star Blast)",
    img: "5e3bc312-ee2f-4383-a5a9-e927d75cafdc_1.b38cb19cc27ea3e934e25cc211e554cf.jpg",
    price: 3.99,
    category: "Pre-Workout",
  },
  {
    _id: "1234328",
    title: "Vegan Protein Powder",
    img: "6bde50f0-d785-486a-8c8d-a0d78c09bcc5.673dde6fd7a3362e4d5e2ce3eba74e12.jpg",
    price: 39.99,
    category: "Protien Powder",
  },
];

class DataService {
  getCatalog() {
    //create http request
    //to retrieve data from the server

    //return mock data

    return catalog;
  }
  registerProduct() {}
}

export default DataService;

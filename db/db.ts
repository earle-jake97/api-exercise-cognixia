import Recipe from "../models/recipe";

const recipes: Recipe[] = [
      {
            id: 1,
            name: "Cheesecake",
            calories: 2000,
            prepTime: "1 hour",
            imgUrl: "https://www.onceuponachef.com/images/2017/12/cheesecake-1200x1393.jpg"
      },
      {
            id: 2,
            name: "Meatloaf",
            calories: 1000,
            prepTime: "50 minutes",
            imgUrl: "https://www.allrecipes.com/thmb/MCLR7ySK8QL0MpTN_m1fwMqN2Rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16354-easy-meatloaf-mfs-74-1x1-1-bc5f6aec17bb42b99d336843da2eb5d3.jpg"
      },
]

export default recipes;
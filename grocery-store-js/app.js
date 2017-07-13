var shopperProfile = {
    name: "Spencer Ford",
    gender: "male",
    age: 25,
    isMale: true,
    origin: "Utah",
    groceryCart: ["fruit", "meat", "cereal", "beer"],
    getIdentity: function () {
        console.log(shopperProfile.name + " Is Purchasing " + shopperProfile.groceryCart[0]);
    }
    
}

shopperProfile.getIdentity();

const app = angular.module(`myApp`, []);
app.controller(`MyController`, [
  `$http`,
  function ($http) {
    this.message = `MadShir's Wines & Spirits`;
    this.createdDrink = "";
    this.indexOfDrinksToShow = null;

    this.editDrink = (drink) => {
      $http({
        method: `PUT`,
        url: `/drinks/` + drink._id,
        data: {
          brand: this.updateBrand,
          type: this.updatedType,
          abv: this.updatedABV,
        },
      }).then(
        (res) => {
          console.log(this.res);
          this.getDrinks();
          this.indexOfDrinksToShow = null;
        },
        (err) => {
          console.log(err);
        }
      );
    };

    this.deleteDrink = (drink) => {
      $http({
        method: `DELETE`,
        url: `/drinks/` + drink._id,
      }).then(
        (res) => {
          console.log(res);
          this.getDrinks();
        },
        (err) => {
          console.log(err);
        }
      );
    };

    this.getDrinks = () => {
      $http({
        url: `/drinks`,
        method: `GET`,
      }).then(
        (response) => {
          this.drinks = response.data;
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    this.addNewDrink = () => {
      $http({
        url: `/drinks`,
        method: `POST`,
        data: {
          brand: this.brand,
          type: this.type,
          abv: this.abv,
        },
      }).then(
        (response) => {
          console.log(response);
          this.createdDrink = response.data;
          this.getDrinks();
        },
        (error) => {
          console.log(error);
        }
      );
    };
    this.getDrinks();
  },
]);

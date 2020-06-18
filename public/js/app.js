const app = angular.module(`myApp`, []);
app.controller(`MyController`, [
  `$http`,
  function ($http) {
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
        },
        (err) => {
          console.log(err);
        }
      );
    };

    this.getLiquors = () => {
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

    this.addNewLiquor = () => {
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
        },
        (error) => {
          console.log(error);
        }
      );
    };
    this.getLiquors();
  },
]);

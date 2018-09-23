const ItemController = (function() {

    const item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    const data = {
        meals: [
            {id: 0, name: 'Steak dinner', calories: 900}
        ],
        currentMeal: null,
        totalCalories: 0
    };

    return {
        getData: function() {
            return data;
        }
    };

})();


const UIController = (function() {

    const uiSelectors = {
        mealsList: '#meals-list'
    }

    const getDomElement = function(selector) {
        return document.querySelector(selector);
    }

    return {
        populateList: function(meals) {
            const list = getDomElement(uiSelectors.mealsList);

            meals.forEach(meal => {
                list.innerHTML += `
                    <li id="item-${meal.id}" class="collection-item">
                        <strong>${meal.name}: </strong> <em>${meal.calories} Calories</em> <a href="#" class="secondary-content"><i class="fa fa-pencil"></i></a>
                    </li>
                `;
            });
        }
    };
})();


const App = (function(ItemController) {
    return {
        init: function() {
            const {meals} = ItemController.getData();
            UIController.populateList(meals);
        }
    };

})(ItemController);


App.init();
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs textarea');
   const bestRestaurantParagraph = document.querySelector('#bestRestaurant p');
   const workersParagraph = document.querySelector('#workers p');

   function onClick() {
      let array = JSON.parse(input.value);

      let restaurants = {
         name: {
            workers: [],
            averageSalary: 0,
            bestSalary: 0
         }
      };

      array.forEach(line => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArray = tokens[1].split(', ');

         let workers = [];

         for (const worker of workersArray) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({ name: workerTokens[0], salary })
         }

         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }

         workers.sort((a, b) => b.salary - a.salary);
         const bestSalary = workers[0].salary;
         const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      });

      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary

            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }

      bestRestaurantParagraph.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      let workersResult = [];
      bestRestaurant.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });

      workersParagraph.textContent = workersResult.join(' ');
   }
}
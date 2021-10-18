class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [
            // {
            //     ownerName: '',
            //     pets: [
            //         {
            //             petName: '',
            //             procedures: []
            //         }
            //     ]
            // }
        ];
        this.totalProfit = 0;
        this.currentPets = 0;

    }

    newCustomer(ownerName, petName, kind, procedures) {
        // Ако клиниката е пълна
        if (this.capacity == this.currentPets) {
            throw new Error(`Sorry, we are not able to accept more patients!`);
        }
        const client = this.clients.find(x => x.ownerName == ownerName);

        // ако няма такъв клиент, създаваме нов клиент и ново животно
        if (!client) {
            const newClient = {
                ownerName: ownerName,
                pets: []
            };
            const newPet = {petName, kind, procedures: procedures};
            newClient.pets.push(newPet);
     

            this.clients.push(newClient);
            this.currentPets += 1;
            return `Welcome ${petName}!`;
        }

        const pet = client.pets.find(x => x.petName === petName);

        // ако има такъв клиент с такова животно и то ИМА процедури
        if (pet && pet.procedures.length > 0) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(', ')}.`);
        }

        // ако има такъв клиент с такова животно и то НЯМА процедури
        const newPet = {petName, kind, procedures: procedures};
        client.pets.push(newPet);
        this.currentPets += 1;
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        const client = this.clients.find(x => x.ownerName == ownerName);
        //ако няма такъв клиент
        if (!client){
            throw new Error(`Sorry, there is no such client!`);
        }

        const pet = client.pets.find(x => x.petName == petName);

        // ако има такъв клиент, но НЯМА такова животно
        if (!pet){
            throw new Error(`Sorry, there are no procedures for ${petName }!`);
        }
        
        // ако има такъв клиент, има такова животно, но то няма процедури
        if (pet && pet.procedures.length == 0){
            throw new Error(`Sorry, there are no procedures for ${petName }!`);
        }

        this.totalProfit += pet.procedures.length * 500;
        this.currentPets -= 1;
        pet.procedures.length = 0;

        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        const output = [];
        const percentage = (this.currentPets / this.capacity * 100).toFixed(0);
        output.push(`${this.clinicName} is ${percentage}% busy today!`);
        output.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);

        for (const client of this.clients.sort((a,b) => a.ownerName.localeCompare(b.ownerName))) {
           output.push(`${client.ownerName} with:`);
           for (const pet of client.pets.sort((a,b) => a.petName.localeCompare(b.petName))) {
               output.push(`---${pet.petName} - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`);
           } 
        }


        return output.join('\n');
    }
}
let clinic = new VeterinaryClinic('SoftCare', 10);
// console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
// console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
// console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
// console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', []));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
// console.log(clinic.toString());
// clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
// console.log(clinic.toString());

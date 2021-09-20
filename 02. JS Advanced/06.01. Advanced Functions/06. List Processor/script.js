function solution(input) {

    let object = {
        list: [],
        add(string) {
            this.list.push(string);
        },
        remove(string) {
            for (let el of this.list) {
                var index = this.list.indexOf(string);
                if (index !== -1) {
                    this.list.splice(index, 1);
                }
            }
        },
        print() {
            console.log(this.list.join(','));
        }
    };

    for (let str of input) {
        tokens = str.split(' ');

        if (tokens[0] === 'add') {
            object.add(tokens[1]);
        } else if (tokens[0] === 'remove') {
            object.remove(tokens[1]);
        } else if (tokens[0] === 'print') {
            object.print();
        }
    }
}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
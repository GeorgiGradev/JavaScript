(function solve() {
    String.prototype.ensureStart = function (str) {
        let firstLetter = this.slice(0, [str.length]);

        if (firstLetter !== str) {
            return str + this;
        } else {
            return this.toString();
        }
    }
    String.prototype.ensureEnd = function (str) {
        let lastLetter = this.slice(-[str.length]);
        if (lastLetter !== str) {
            return this + str;
        } else {
            return this.toString();
        }
    }
    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    };
    String.prototype.truncate = function (n) {
        if (n >= 4) {
            if (this.length <= n) {
                return this.toString();
            } else if (this.length > n) {
                if (this.includes(' ')) {
                    let index = this.lastIndexOf(' ');
                    let newStr = this.slice(0, index);
                    while (newStr.length > n - 3) {
                        index = newStr.lastIndexOf(' ');
                        newStr = this.slice(0, index);
                    }
                    return newStr + '...';
                } else {
                    return this.slice(0, n - 3) + '...';
                }
            }
        } else if (n < 4) {
            return '.'.repeat(n);
        }
    };
    String.format = function(string, ...params){
        let pattern = /{(\d)}/g;
        let match = pattern.exec(string);
        while(match){
            if (params[Number(match[1])] !== undefined) {
                string = string.replace(match[0],params[Number(match[1])]);
            }
            match = pattern.exec(string);
        }
        return string;
    }
})();
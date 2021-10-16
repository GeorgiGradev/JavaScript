class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        } else if (username === this.creator) {
            throw new Error(`You can't like your own story!`);
        } 
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        } else {
            let index = this._likes.indexOf(username);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`;
        }
    }
    comment(username, content, id) {
        if (id === undefined || this._comments.some(x => x.Id === id) === false) {
            let comment = {
                Id: this._comments.length + 1,
                Username: username,
                Content: content,
                Replies: []
            };
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        } else {
            let comment = this._comments.find(x => x.Id === id);
            let reply = {
                Id: comment.Replies.length + 1,
                Username: username,
                Content: content
            };
            comment.Replies.push(reply);
            return "You replied successfully";
        }
    }

    toString(sortingType){
        let output = '';
        output += `Title: ${this.title}\n`;
        output += `Creator: ${this.creator}\n`;
        output += `Likes: ${this._likes.length}\n`;
        output += 'Comments:';

        if (this._comments.length > 0){
            if (sortingType === 'asc'){
                for (const comment of this._comments.sort((a,b) => a.Id - b.Id)) {
                    output += `\n-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
                    for (const reply of comment.Replies.sort((a,b) => a.Id - b.Id)) {
                        output += `\n--- ${comment.Id}.${reply.Id}. ${reply.Username}: ${reply.Content}`;
                    }
                }
            } else if (sortingType === 'desc'){
                for (const comment of this._comments.sort((a,b) => b.Id - a.Id)) {
                    output += `\n-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
                    for (const reply of comment.Replies.sort((a,b) => b.Id - a.Id)) {
                        output += `\n--- ${comment.Id}.${reply.Id}. ${reply.Username}: ${reply.Content}`;
                    }
                }
            } else if (sortingType === 'username'){
                for (const comment of this._comments.sort((a,b) => a.Username.localeCompare(b.Username))) {
                    output += `\n-- ${comment.Id}. ${comment.Username}: ${comment.Content}`;
                    for (const reply of comment.Replies.sort((a,b) => a.Username.localeCompare(b.Username))) {
                        output += `\n--- ${comment.Id}.${reply.Id}. ${reply.Username}: ${reply.Content}`;
                    }
                }
            }
        }
        return output;
    }
}
let art = new Story("My Story", "Anny");
art.like("John");
art.like("Ivan");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
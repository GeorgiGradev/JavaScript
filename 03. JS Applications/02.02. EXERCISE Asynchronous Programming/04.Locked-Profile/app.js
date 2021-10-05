async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
   
    let profiles;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        profiles = await response.json();

    } catch (error) {
        alert(error.message);
    }

    let mainDiv = document.querySelector('#main');

    Object.values(profiles)
        .forEach(values => {
            mainDiv.appendChild(createProfile(values));
        });
    document.querySelectorAll('.profile')[0].remove();
}

function createProfile(profile) {
    const currentProfile = e('div', { className: 'profile' },
                                e('img', {src: './iconProfile2.png', className: 'userIcon'}),
                                e('label', {}, 'Lock'),
                                e('input', {type: 'radio', name: 'user1Locked', value: 'lock', checked: true}),
                                e('label', {}, ' Unlock'),
                                e('input', {type: 'radio', name: 'user1Locked', value: 'unlock'}),
                                e('br'),
                                e('hr'),
                                e('label', {}, 'Username'),
                                e('input', {type: 'text', name: "user1Username", value: profile.username, disabled: true, readonly: true }),
                                e('div', {id: 'user1HiddenFields'}, 
                                    e('hr'),
                                    e('label', {}, 'Email'),
                                    e('input', { type: 'email', name: 'userEmail', value: profile.email, disabled: true, readonly: true}),
                                    e('label', {}, 'Age'),
                                    e('input', { type: 'email', name: 'userAge', value: profile.age, disabled: true, readonly: true})),
                                e('button', {}, 'Show more')

    );
    currentProfile.querySelector('button').addEventListener('click', () => {
        showHideUserInfo(currentProfile);
    });

    return currentProfile;
}

function showHideUserInfo(element) {
    const hiddenElement = element.querySelector('#user1HiddenFields');
    const button = element.querySelector('button');

    if (element.querySelectorAll('input')[1].checked == true && button.textContent == 'Show more') {
        hiddenElement.style.display = 'block';
        button.textContent = 'Hide it';
    } else if (element.querySelectorAll('input')[1].checked == true && button.textContent == 'Hide it'){
        hiddenElement.style.display = 'none';
        button.textContent = 'Show more';
    }
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}
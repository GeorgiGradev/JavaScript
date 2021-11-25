import { html } from '../../node_modules/lit-html/lit-html.js';
import { login, register } from '../api/data.js';
                   
const loginTemplate = (onSubmit) => html`
<section id="login-page" class="content auth">
    <h1>Login</h1>

    <form @submit=${onSubmit} id="login" action="#" method="">
        <fieldset>
            <blockquote>Knowledge is like money: to be of value it must circulate, and in circulating it can
                increase in quantity and, hopefully, in value</blockquote>
            <p class="field email">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com">
            </p>
            <p class="field password">
                <label for="login-pass">Password:</label>
                <input type="password" id="login-pass" name="password">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Log in">
            </p>
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        await login(email, password);
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}
                       
const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
    <h1>Register</h1>

    <form @submit=${onSubmit} id="register" action="#" method="">
        <fieldset>
            <blockquote>Knowledge is not simply another commodity. On the contrary. Knowledge is never used up.
                It
                increases by diffusion and grows by dispersion.</blockquote>
            <p class="field email">
                <label for="register-email">Email:</label>
                <input type="email" id="register-email" name="email" placeholder="maria@email.com">
            </p>
            <p class="field password">
                <label for="register-pass">Password:</label>
                <input type="password" name="password" id="register-pass">
            </p>
            <p class="field password">
                <label for="register-rep-pass">Repeat password:</label>
                <input type="password" name="rep-pass" id="register-rep-pass">
            </p>
            <p class="field submit">
                <input class="btn submit" type="submit" value="Register">
            </p>
            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('rep-pass').trim();

        if (!email || !password || !repeatPass) {
            return alert('All fields are requirerd!');
        }
        if (password != repeatPass) {
            return alert('Password don\'t match!');
        }
        await register(email, password);
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}

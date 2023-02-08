function setTheme() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia(
        '(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
}

setTheme();

function setupToggleTheme() {
    let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia(
            '(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }
    let themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', function () {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
}

function showSubscribe(subscribe) {
    if (localStorage.getItem('subscribe') === 'true') {
        subscribe.style.display = 'none';
    } else {
        subscribe.style.display = 'block';
    }
}

function setupSubscribe(subscribe) {
    document.getElementById('subscribe-show').addEventListener('click', function () {
        subscribe.style.display = 'block';
        localStorage.setItem('subscribe', '')
    });
    document.getElementById('subscribe-close').addEventListener('click', function () {
        subscribe.style.display = 'none';
        localStorage.setItem('subscribe', 'true');
    });
    let form = subscribe.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let url = 'https://notifications.clearwind.ca/rss/subscribe/0d72687a-b7fd-4b84-84f9-d09b5b20bd33'
        let formData = new FormData();
        formData.append('email', form.querySelector('input').value);
        let options = {
            method: 'POST',
            mode: 'cors',
            body: formData,
        }
        fetch(url, options).then((response) => {
            console.log(response.ok);
            if (!response.ok) {
                form.querySelector('button').textContent = '😢 Something went wrong. Try again?';
            }
            else {
                form.querySelector('button').textContent = '✅ Done, thank you.';
                window.setTimeout(function () {
                    document.getElementById('subscribe-close').click();
                }, 2000);
            }
        })
    });

}

window.addEventListener("load", (event) => {
    setupToggleTheme();
    let subscribe = document.getElementById('subscribe')
    setupSubscribe(subscribe)
    showSubscribe(subscribe);
});

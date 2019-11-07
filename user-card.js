const user_card_html = `
<style>
    .github-user-card .p-3 {
        padding: 16px !important;
    }

    .github-user-card .m-0 {
        margin: 0 !important;
    }

    .github-user-card .ml-1 {
        margin-left: 4px !important;
    }

    .github-user-card .mr-1 {
        margin-right: 4px !important;
    }

    .github-user-card .mr-2 {
        margin-right: 8px !important;
    }

    .github-user-card .mt-1 {
        margin-top: 4px !important;
    }

    .github-user-card .mt-2 {
        margin-top: 8px !important;
    }

    .github-user-card .mb-2 {
        margin-bottom: 8px !important;
    }

    .github-user-card .mr-3 {
        margin-right: 16px !important;
    }

    .github-user-card .f4 {
        font-size: 16px !important;
    }

    .github-user-card .f5 {
        font-size: 14px !important;
    }

    .github-user-card .f6 {
        font-size: 12px !important;
    }

    .github-user-card .Box {
        background-color: #fff;
        border: 1px solid #d1d5da;
        border-radius: 3px;
    }

    .github-user-card .d-flex {
        display: flex !important;
    }

    .github-user-card .avatar {
        display: inline-block;
        overflow: hidden;
        line-height: 1;
        vertical-align: middle;
        border-radius: 3px;
    }

    .github-user-card .width-full {
        width: 100% !important;
    }

    .github-user-card .lh-condensed {
        line-height: 1.25 !important;
    }

    .github-user-card .no-underline {
        text-decoration: none !important;
    }

    .github-user-card .text-bold {
        font-weight: 600 !important;
    }

    .github-user-card .text-gray-dark:not(:hover) {
        color: #24292e !important;
    }

    .github-user-card .text-gray:not(:hover) {
        color: #586069 !important;
    }

    .github-user-card .link-gray-dark:not(:hover) {
        color: #24292e !important;
    }

    .github-user-card .link-gray:not(:hover) {
        color: #586069 !important;
    }

    .github-user-card .muted-link:not(:hover) {
        color: #586069 !important;
    }

    .github-user-card .dashboard-break-word {
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
    }
</style>
<div class="Box p-3 mt-2">
    <div class="d-flex">
        <a title="{login}" href="https://github.com/{login}"><img class="avatar mr-2" alt="{login}" src="{avatar_url}"
                width="40" height="40"></a>
        <div class="width-full ml-1">
            <span class="lh-condensed text-gray-dark">

                {name_html}

            </span>

            <div class="dashboard-break-word lh-condensed mb-2 mt-1 bio">
                <div>{bio}</div>
            </div>

            <p class="f6 text-gray m-0">
                <span class="mr-3">
                    <a class="muted-link" href="https://github.com/{login}?tab=repositories">{public_repos}
                        repositories</a>
                </span>
                <span>
                    <a class="muted-link" href="https://github.com/{login}?tab=followers">{followers} followers</a>
                </span>
            </p>
        </div>
    </div>
</div>`
const user_card_id_name_html = `
<span class="mr-1">
    <a class="f4 text-bold link-gray-dark no-underline" href="https://github.com/{login}">{name}</a>
    <a class="f5 link-gray no-underline" href="https://github.com/{login}">{login}</a>
</span>`
const user_card_id_name_html_no_name = `
<span class="mr-1">
    <a class="f4 text-bold link-gray-dark no-underline" href="https://github.com/{login}">{login}</a>
</span>`

function httpGet(url, response) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            response(xhr.responseText);
        }
    }
    xhr.open('GET', url, true);
    xhr.send(null);
}

for (const div of document.getElementsByClassName("github-user-card")) {

    const dataUser = div.getAttribute("data-user");

    httpGet("https://api.github.com/users/" + dataUser, json => {

        const data = JSON.parse(json);

        let html = user_card_html
            .replace("{name_html}", data.name ? user_card_id_name_html : user_card_id_name_html_no_name)

        for (const key in data) {
            html = html.replace(new RegExp(`{${key}}`, "g"), data[key] ? data[key] : "")
        }

        div.innerHTML = html;
    });
}

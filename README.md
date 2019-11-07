# github-components

### pinned-repos

#### Attributes

| Name | Default | Reference |
| :-- | :-- | :-- |
| data-repos | none | ```data-repos="user/repo_1, user/repo_2"``` |
| data-column-count | ```"1"``` | ```data-column-count="2"``` |
| data-column-count-min-width | none | ```data-column-count-min-width="2: 768px, 3: 992px"``` |

#### Examples

<div class="github-pinned-repos" data-column-count="2" data-repos="johnsoncodehk/github-components">
    <a href="https://johnsoncodehk.github.io/github-components/">Load</a>
</div>

```html
<div class="github-pinned-repos" data-column-count="2" data-repos="johnsoncodehk/github-components"></div>
<script src="https://johnsoncodehk.github.io/github-components/pinned-repos.js"></script>
```

<div class="github-pinned-repos" data-column-count="3" data-repos="johnsoncodehk/github-components,johnsoncodehk/github-components,johnsoncodehk/github-components,johnsoncodehk/github-components,johnsoncodehk/github-components">
    <a href="https://johnsoncodehk.github.io/github-components/">Load</a>
</div>

```html
<div class="github-pinned-repos" data-column-count="3" data-repos="johnsoncodehk/github-components,johnsoncodehk/github-components,johnsoncodehk/github-components,johnsoncodehk/github-components,johnsoncodehk/github-components"></div>
<script src="https://johnsoncodehk.github.io/github-components/pinned-repos.js"></script>
```

### user-card

#### Attributes

| Name | Default | Reference |
| :-- | :-- | :-- |
| data-user | none | ```data-user="user_name"``` |

#### Examples

<div class="github-user-card" style="width: 50%;" data-user="johnsoncodehk">
    <a href="https://johnsoncodehk.github.io/github-components/">Load</a>
</div>

```html
<div class="github-user-card" style="width: 50%;" data-user="johnsoncodehk"></div>
<script src="https://johnsoncodehk.github.io/github-components/user-card.js"></script>
```

### repo-card

#### Attributes

| Name | Default | Reference |
| :-- | :-- | :-- |
| data-repo | none | ```data-repo="user_name/repo_name"``` |

#### Examples

<div class="github-repo-card" style="width: 50%;" data-repo="johnsoncodehk/github-components">
    <a href="https://johnsoncodehk.github.io/github-components/">Load</a>
</div>

```html
<div class="github-repo-card" style="width: 50%;" data-repo="johnsoncodehk/github-components"></div>
<script src="https://johnsoncodehk.github.io/github-components/repo-card.js"></script>
```

### issue-card

(todo)

### pull-card

(todo)

<script src="https://johnsoncodehk.github.io/github-components/pinned-repos.js"></script>
<script src="https://johnsoncodehk.github.io/github-components/user-card.js"></script>
<script src="https://johnsoncodehk.github.io/github-components/repo-card.js"></script>

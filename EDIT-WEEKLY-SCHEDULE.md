# Edit the Isle CTE Weekly Schedule

You only need to edit one file each week:

**`js/schedule-data.js`**

## Weekly update

1. Open `js/schedule-data.js` in GitHub.
2. Click the pencil **Edit** button.
3. Change the `week` dates near the top.
4. Find each class and change the Monday-Friday activities.
5. Update `next` if you want students to see what is coming next.
6. Click **Commit changes**.

The homepage, This Week page, and individual class pages automatically use this schedule.

## Quarter classes

Each class has an `active` setting.

```js
active: true,
```

means the class is currently shown.

```js
active: false,
```

means the class is not currently in session.

For example, when Welding ends and Manufacturing begins, change Welding to `false` and Manufacturing to `true`.

## Important

Keep the quotation marks around schedule text, and do not change the labels `Monday`, `Tuesday`, `Wednesday`, `Thursday`, or `Friday`.

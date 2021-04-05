# 🚀  Github Comment to Discord - Action 

This is a customize action for an awesome university DevOps course with a goal to automate Profesors and Teaching Assistant work 💥
 
## Discord View 
 ![Disord view](/Screenshots/Discord.png)
## Github view 
 ![Github view](/Screenshots/Github.png)


## About
This automation is structured as 2 parts with goal of making it reusable for other users. [1st part](https://github.com/annsudo/discord-comments) is created an action that is useful for all github+discord lovers: it listens to messages on both PRs and Issues and sends them to Discord beautifully formated. [2nd part](https://github.com/annsudo/comment-to-Discord-action) AKA this repo  AKA Head project is corse-spesific where I show how to filter actors who can trigger this action and combine it with some fun gifs.



## 👩‍💻 Aiming for all 4 "Remarkable" grading criterias 



|                                             | Yes | No | Remarkable  |
|-------------------------------------------- | ----|----|-------------|
|The work is done before April 6, 2021 (in order to be useful for the course) | Yes | No | n-a|
|The automation task produces a PR status or issue / PR comment | Yes | No | ` ✔️ Points to a generated page with valuable additional information `|
|The automation task is reusable | Yes (next year for this course) | No | `✔️  In other courses than this one `|
|The task runs on a standard platform | Yes (Github action) | No |` ✔️  Other platforms (e.g. Moodle, Canvas)` |
|The task is praised by the other students of this course | Yes | No | n-a |
|The code for the task is available | Yes (public repo) | No | ` ✔️ Well documented repo `|



## Features
- ✅  Tracking comments on actions and PR 
- ✅  Chosing spesific user/ users to track from
- ✅  Posting customized-formed comments on discord
- ✅  Posting a notification message on Github to assure that everything worked as expected
- ✅  Adding a GIF to if ofcourse (using Tenor API)
- ✅  The Discord notification makes it easy to navigate to the issue (by simplly pushing on the "Go to github" higlighet text in message)


## Usage
### ✉️ Send message to Discord triggered on comment
```
name: OnComment
on: [issue_comment]
jobs: 
  test:
    runs-on: ubuntu-latest  
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Publish comment
        uses: ./ # Uses an action in the root directory
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          TENOR_TOKEN: ${{ secrets.TENOR_TOKEN }}
      - name: Post to Discord now
        uses: annsudo/discord-comments@master
        with:
           DISCORD_WEBHOOK_ID: ${{ secrets.DISCORD_WEBHOOK_ID }}
           DISCORD_WEBHOOK_TOKEN: ${{ secrets.DISCORD_WEBHOOK_TOKEN }}
```           

### 🚨 Security: Define actors on who's comments the action will be triggered
```
name: OnComment
on: [issue_comment]
jobs: 
  test:
    if: github.actor == 'annsudo' || github.actor == 'user2' 
    runs-on: ubuntu-latest  
    steps:
      - name: Checkout
     ... 
```
## Input variables
GITHUB_TOKEN --> your personal token. Already created if you are a github-user

TENOR_TOKEN --> token for GIFs. Picked up tree from [Tenor](https://tenor.com/)

DISCORD_WEBHOOK_ID --> webhook for discord id channel (can be created by adminof that channel)

DISCORD_WEBHOOK_TOKEN --> webhook token for discord channel (can be created by adminof that channel)


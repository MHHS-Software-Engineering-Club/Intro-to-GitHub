# Intro to GitHub
Welcome and thank you for your interest in our club! If you are not a student of MHHS, please disregard this rego, if
you are and are not a member of our Software Engineering Club, you should join!

## Info
This project is currently a basic 2048 game, nothing too fancy. I chose not to write it in normal html/css/js to make it
intentionally harder to browse and make edits to. I did this, not because I'm evil, but rather when working with a
majority of codebases, you will frequently have to read and write code you may not be familiar with.

## Cloning and Opening the Repo
### Signing into VSCode
As mentioned in the Google Classroom, VSCode will be the only IDE that tutorials will be written for. If you use
something different: like JetBrains IDEs and do not know how to do something, you are responsible for finding out how.
*Though, if you have a JetBrains question, you can ask Micah*

All VSCode tutorials should work identically in codespaces should you use those.

TODO: Port instructions of OS-specific git setup from google doc to here.

1. Click on the person-icon in the bottom right and authenticate your GitHub account.
![](./tutorial_imgs/Screenshot%202025-09-20%20215814.png)
2. Follow all necesarry sign-in steps to connect your GitHub account to VSCode.
3. Click on the 'Clone Git Repository' option on the main screen.
![](./tutorial_imgs/Screenshot%202025-09-20%20215321.png)
4. Search for `MHHS-Software-Engineering-Club/Intro-to-Github`
5. Select a location on your machine to store the repo.

## Create a Branch in GitHub
1. Click on the box where it says 'main' and create a new branch. Name it something like `your-names-first-changes`
![](./tutorial_imgs/Screenshot%202025-09-20%20221513.png)
2. Open the terminal in VSCode
3. run `git fetch origin` and `git checkout your-names-first-changes`

### Optional Challenges
Now's the time to edit the code as you want. If you want to do any of the following challenges go ahead and try!
* High Score
  * See if you can keep track of the user's highest score throughout their playthrough.
  * There already is an implementation of basic score.
* Add colors to different blocks
  * Make the game more similar to the real version by adding different colors to each block.
  * There are many different ways to do this logically, but remember, there is theoretically 52 possible unique blocks.
* Animations
  * Not something I would personally know how to do, but a very welcome challenge
  * Good if you're actually into web-design and UX

If you don't want to do those, try just screwing around with something: score multiplier, or even the readme file.

## Making and Pushing Changes
Once you have made the changes you want, its time to actually 'commit' the changes. A commit is what stores the data of
your changes: line insertion points, line removal points. Commits are what will tell GitHub where to place your code.
### Stage your Changes
1. Click on the Revision Control tab on the left (the lines and circles under the magnifying glass).
2. You will see a list of all the changes you made, right click on them and select 'stage'

A stage is priming your changes ready for commit, any unstaged changes will not commit. 

### Committing your changes
1. You **MUST** add a commit message describing what changes you made.
2. Once that is done, select the commit button below, this will **locally** store the change data on your device.

### Pushing Changes
To actually update GitHub with your changes, you need to push them.

In the terminal run `git push` this will update the branch you made on GitHub with your data!

### A Few Notes
* The use of GUI for git is fairly hotly debated:
  * Some say that it should only ever be done in the command line. 
  * While  Simultaneously applications like GitKraken for git have made waves among some.
  * How much you use the GUI vs. Command line is up to you, I personally use GUI for staging and making commits, but
  the command line for almost everything else.
* When it comes to commits, again there is fair debate here:
  * Some prefer smaller commits for each individual train of thought.
  * The other end of the spectrum is one commit for the entire issue.
  * Both are acceptable for this club, as long as comments and commit messages are detailed.
  * I would however always reccomend using interactive staging to verify your edits
  * For issues, each commit should start with the `branch-name-issue#:`.
  * To undo a local commit, `git reset --soft HEAD~1`
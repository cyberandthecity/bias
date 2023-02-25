# Bias & AI


Exhibit designed for the [Cyber and the City][exhibition] exhibition open until October 22nd, 2023.

> An interactive game that explores data bias and human responsibility in a playful and engaging manner.

https://user-images.githubusercontent.com/9963865/221350344-2bca20cd-a6dc-4347-bd6c-ed51702ed9ea.mp4

### 
> An online version of the game can be played [here][website]

## Description

> Please visit the [exhibition][exhibition] for a more comprehensive understanding, or refer to our midterm [report][report].

This repository contains the code for our interactive game, designed as an exhibit to demystify AI and deliver an intuitive understanding of bias and human responsibility. 
As an AI developer, the visitor explores how different choices of data influence the results of an AI algorithm. 
By constructing a dataset free of harmful bias, the visitor learns how bias is presented in data and that the responsibility lies with humans, not AI, to avoid harmful biases.
In this documentation, we provide more details about the exhibit and the code used to build it.

> There is also an [interview][interview] from the local news (in german language)

## Screens

The game is split into five different screens, each serving a specific purpose in the gameplay and narrative.

![Screens](https://user-images.githubusercontent.com/9963865/221353458-59fead98-76ef-465d-9903-8933fe343309.png)

The first screen is the **Entrance** screen, designed to lure the visitor into the game and give context about the gameplay. It introduces the game's premise, which is that an AI is failing to let students into the night club as a doorkeeper.
The second screen is the **Introduction** screen, which explains the situation in further detail and shows that the night club, called Clubhaus, is part of the Tübingen student nightlife. 
This screen also highlights the problem that the AI is not able to judge who is a student and, therefore, not able to determine who should enter the club. 
It asks the visitor for help to retrain the AI by building up a dataset. This screen sets the stage for the main game and introduces the visitor to the game mechanics.
The third screen is the main **Game** , where the visitor engages in a three-step decision process to rebuild the AI by finding datasets that are not discriminatory. 
In each round, the user selects one dataset, which the AI uses to improve its decision-making capabilities.
The **Evaluation** screen shows the solution of the game and embeds the entire game in a real-life perspective. 
It highlights the impact that biased AI can have on people's lives and encourages players to think critically about the issue.
The last screen, the **Explanation** screen, explains bias in AI in a more scientific manner and also briefly reminds the player who is responsible for bias in AI. 
This screen is designed to provide a more in-depth understanding of the topic and raise awareness about the importance of addressing bias in AI.

Overall, the game screens are carefully crafted to engage the visitor, introduce the game mechanics, and educate them about bias in AI. They are an essential part of the game's narrative and serve to reinforce its message.

## Content
Description of the components used in this React app and how they contribute to the game, its logic and visual design.

```
.
├── public
│   ├── datasets                # Dir of datasets of student images (not included)
│   ├── emojis                  # Dir of apple emojis as images
│   ├── fonts                   # Dir of fonts used manly Inter
│   ├── images                  # Dir of graphics such as images and svgs
│   └── videos                  # Dir of video files used
│
├── src
│   ├── components              # Dir of all react components
│   ├── data                    # Dir of all chat related texts
│   ├── pages                   # Dir of the main page hierachy 
│   ├── stores                  # Dir of stores with main game logic
│   ├── styles                  # Dir of global styles and animations
│   ├── utils                   # Dir of utility functionality
│   └── app.tsx                 # Starting point of game
│
├── ...                         # Craco, Typescript, Prettier, VSCode, Git and React setup
│
.
```

## Getting Started
This is a simple React app to run the project, you must have the following tools installed on your system: Node.JS, NPM and Yarn. 

Clone the repository:
```
git clone https://github.com/cyberandthecity/bias.git
```

Navigate into the project directory:
```
cd bias
```

Install the dependencies:
```
yarn
```

To run the development build, use the following command:
```
yarn dev 
```

This will start a local development server and open the application in your default browser.


## Process
In February 2023, the Stadtmuseum Tübingen will host the exhibition [Cyber and the City][exhibition] about artificial intelligence, curated by master students from the University of Tübingen. 
Our group dedicated 1 1/2 years to building an interactive game that explains data bias and human responsibility in AI in an engaging and playful manner. 
Check out some pictures of our creative process and journey to build this exhibit below.

![Process](https://user-images.githubusercontent.com/9963865/221367257-67508ea5-7900-4cab-98b8-47df02ac90c7.png)


## About 

This project was developed as part of an Artificial Intelligence seminar at the [Department of Theoretical Machine Learning][tml] at the [University of Tübingen][uni]. 
We would like to thank [Prof. Dr. Ulrike von Luxburg][ulrike] and [Prof. Dr. Thomas Thiemeyer][thomas] for their invaluable help and guidance throughout this project.
Participants of this project are [Julian Petruck][julian], [Vanessa Tsingunidis][vanessa], [Katja Körner][katja], [Moritz Kniebel][moritz] and [Jan-Niklas Dihlmann][jan]. 
We are proud to have worked on this project and hope that it will be useful and inspiring for others.

## Licensing

This is a non-commercial student project, released under the MIT License. 
You are free to fork the code and use it for any purpose, including commercial ones, as long as you comply with the terms of the license.
Please note that we cannot guarantee the functionality of the code, and we will not take any responsibility or liability for any issues or damages caused by its use.
The artwork used for the AI in this project is licensed under its own terms by [Gleb Kuznetsov][ai], and it is not covered by the MIT License.
Furthermore, the images created by the students who contributed to this project are not allowed to be shared in public or used in any other work without their explicit permission.
If you have any questions about the licensing of this project, please don't hesitate to contact us.


<!-- Markdown link & img dfn's -->
[exhibition]: https://www.tuebingen.de/stadtmuseum/38998.html
[uni]: https://uni-tuebingen.de/
[tml]: https://www.tml.cs.uni-tuebingen.de/index.php
[ulrike]: https://www.tml.cs.uni-tuebingen.de/team/luxburg/
[thomas]: https://uni-tuebingen.de/fakultaeten/wirtschafts-und-sozialwissenschaftliche-fakultaet/faecher/fachbereich-sozialwissenschaften/empirische-kulturwissenschaft/institut/personen/professorinnen/thomas-thiemeyer/
[julian]: https://twitter.com/JulianPetruc
[vanessa]: https://github.com/Vanessa-Ts
[katja]: https://github.com/KatjaClaire
[moritz]: https://github.com/moreezee
[jan]: https://twitter.com/JDihlmann
[ai]: https://dribbble.com/shots/16146992-Pryon-AI-reactions
[website]: https://bias.jdihlmann.com/
[report]: https://drive.google.com/file/d/1YWytgcnKQPUslxsXoayOHtmnnnQPQrRL/view?usp=sharing
[interview]: https://youtu.be/XLVPc-v1UIk?t=127

# Bias & AI


Exhibit designed for the [Cyber and the City][exhibition] exhibition in Tübingen

> A interactive game describing Bias and descrimenative aspects of it in playfull manner

https://user-images.githubusercontent.com/9963865/221350344-2bca20cd-a6dc-4347-bd6c-ed51702ed9ea.mp4


### Description

> This README focuses on how run the code for more detailed information please visit the [exhibition][report]

The overall goal of our exhibit is to demystify AI by giving an explanation and delivering an intuitive understanding of bias.  We build an interactive game that delivers an intuitive understanding of human responsibility for bias, by putting the visitor into the role of an AI developer, helping an AI to become free of harmful bias.
The interactive part of the exhibit deepens the understanding of data bias in AI, by letting the visitor interactively explore how different choices of data influence the results of an AI algorithm.
The visitor takes on the role of a developer and is guided through a demo to help to construct a dataset that is free of harmful bias. 
The goal of this object is to learn how bias is presented in data and more importantly that the responsibility lies with the humans developing the dataset and not the AI to avoid harmful biases.



### Screens
The game is split into five different screens, each serving a specific purpose in the gameplay and narrative.

![Screens](https://user-images.githubusercontent.com/9963865/221353458-59fead98-76ef-465d-9903-8933fe343309.png)

The first screen is the entrance screen, designed to lure the visitor into the game and give context about the gameplay. It introduces the game's premise, which is that an AI is failing to let students into the night club as a doorkeeper.

The second screen is the introduction screen, which explains the situation in further detail and shows that the night club, called Clubhaus, is part of the Tübingen student nightlife. 
This screen also highlights the problem that the AI is not able to judge who is a student and, therefore, not able to determine who should enter the club. 
It asks the visitor for help to retrain the AI by building up a dataset. This screen sets the stage for the main game and introduces the visitor to the game mechanics.

The third screen is the main game, where the visitor engages in a three-step decision process to rebuild the AI by finding datasets that are not discriminatory. 
In each round, the user selects one dataset, which the AI uses to improve its decision-making capabilities.

The evaluation screen shows the solution of the game and embeds the entire game in a real-life perspective. 
It highlights the impact that biased AI can have on people's lives and encourages players to think critically about the issue.

The last screen, the explanation screen, explains bias in AI in a more scientific manner and also briefly reminds the player who is responsible for bias in AI. 
This screen is designed to provide a more in-depth understanding of the topic and raise awareness about the importance of addressing bias in AI.

Overall, the game screens are carefully crafted to engage the visitor, introduce the game mechanics, and educate them about bias in AI. They are an essential part of the game's narrative and serve to reinforce its message.

### Content
Description of the importants components used in this react app and how they contribute to the game, its logic and visual design.

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

## HowTo Run
This is a simple React app in order to run it, you have to follow these steps. 

Clone the repository 
```
git clone https://github.com/cyberandthecity/bias.git
```
The game is split into five different screens. The first screen 
![Screens](https://user-images.githubusercontent.com/9963865/221351274-d529cd73-a74a-4d22-bcfc-a81b4f2e6a2a.png)


## Process



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

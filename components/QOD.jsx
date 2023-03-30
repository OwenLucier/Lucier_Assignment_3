// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function(){
  const surveyJson = {
    title: "Boat Safety Quiz",
    correctAnswerMode: "showCorrectAnswer",
    showCorrectAnswers: "always",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    questionTitleTemplate: "{title} <button onclick='this.question.showAnswer()'>Show Answer</button>",

    pages: [{

      elements: [{
        type: "html",
        html: "You are about to start a quiz on Boating Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
    }, {
        type: "text",
        name: "username",
        titleLocation: "hidden",
        isRequired: true
    }]
}, {

              elements: [{
                type: "radiogroup",
                name: "question1",
                title: "Which of the following is the most important safety device on board a boat?",
                choices: [
                    "A bucket",
                    "A life jacket",
                    "A beach umbrella"
                ],
                correctAnswer: "A life jacket",
                questionTitleTemplate: "{title} <button onclick='this.question.showAnswer()'>Show Answer</button>"
              }]
                    
                },{
                  elements: [{
                    type: "radiogroup",
                    name: "question2",
                    title: "What is the first thing you should do if someone falls overboard?",
                    choices: [
                        "Dive in and rescue them immediately",
                        "Turn the boat around and create a big wave to wash them back to the boat",
                        "Throw them a life buoy or flotation device"
                    ],
                    correctAnswer: "Throw them a life buoy or flotation device"
                  }]
                },{
                  elements: [{
                    type: "radiogroup",
                    name: "question3",
                    title: "What should you do if you smell gasoline fumes on board?",
                    choices: [
                        "Light a match to try and find the source of the leak",
                        "Turn off the engine and electrical devices, and investigate the source of the leak",
                        "Ignore it and hope it goes away"
                    ],
                    correctAnswer: "Turn off the engine and electrical devices, and investigate the source of the leak"

                  }]
                    
                },{

                  elements: [{
                    type: "radiogroup",
                    name: "question4",
                    title: "How should you properly secure a boat to a dock?",
                    choices: [
                        "Use a rope to tie the boat to the dock",
                        "Ram the boat into the dock and hope it stays put",
                        "Just leave the boat running while you go ashore"
                    ],
                    correctAnswer: "Use a rope to tie the boat to the dock"
                  }]
                    
                },{

                  elements: [{
                    type: "radiogroup",
                    name: "question5",
                    title: "What is the maximum capacity of passengers that a boat can carry safely?",
                    choices: [
                        "As many as you can fit on board",
                        "The number of life jackets on board",
                        "The recommended capacity by the boat manufacturer"
                    ],
                    correctAnswer: "The recommended capacity by the boat manufacturer"
                  }]
                   
                },{

                  elements: [{
                    type: "radiogroup",
                    name: "question6",
                    title: "What should you do if you hear a loud grinding noise coming from the engine?",
                    choices: [
                        "Immediately turn off the engine and investigate the source of the noise",
                        "Ignore it and hope the boat doesn't sink",
                        "Turn up the music to drown out the noise"
                    ],
                    correctAnswer: "Immediately turn off the engine and investigate the source of the noise"
                  }]
                    
                },{

                  elements: [{
                    type: "radiogroup",
                    name: "question7",
                    title: "Why is it important to have a fire extinguisher on board a boat?",
                    choices: [
                        "To use it as a flotation device in case of an emergency",
                        "To fight off sea monsters",
                        "To quickly put out a fire caused by a fuel leak or other hazard"
                    ],
                    correctAnswer: "To quickly put out a fire caused by a fuel leak or other hazard"
                  }]
                    
                },{

                  elements: [{
                    type: "radiogroup",
                    name: "question8",
                    title: "How often should you inspect and maintain your boat's safety equipment?",
                    choices: [
                        "Every 10 years",
                        "Every other leap year",
                        "Regularly to ensure it's in good working condition"
                    ],
                    correctAnswer: "Regularly to ensure it's in good working condition"
                  }]
                  
              },{

                elements: [{
                  type: "radiogroup",
                  name: "question9",
                  title: "What should you do if you encounter a thunderstorm while boating?",
                  choices: [
                      "Stay out on the water and hope for the best",
                      "Head for shore as quickly as possible",
                      "Put on some rubber boots and keep going"
                  ],
                  correctAnswer: "Head for shore as quickly as possible"
                }]
                  
              },{

                elements: [{
                  type: "radiogroup",
                  name: "question10",
                  title: "What is the best way to avoid a collision with another boat?",
                  choices: [
                      "Close your eyes and hope for the best",
                      "Keep your boat on a steady course and speed",
                      "Swerve and weave through the water to avoid the other boat"
                  ],
                  correctAnswer: "Keep your boat on a steady course and speed"
                }]
                  
        }],
completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
        completedHtmlOnCondition: [{
            expression: "{correctAnswers} == 0",
            html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
        }, {
            expression: "{correctAnswers} == {questionCount}",
            html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
        }]
    };

  const survey = new Model(surveyJson);
  return <Survey model={survey} />;
};
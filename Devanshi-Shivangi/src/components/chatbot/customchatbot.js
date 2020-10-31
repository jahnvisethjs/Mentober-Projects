import React from "react";
import Chatbot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
function chatBot(props){
    const theme = {
        background: '#14274e',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#000000',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#000000',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };
    const config = {
        width: "700px",
        height: "400px",
        floating: true
    };
    const steps=[
        {
            id: "greet",
            message:" Hello, Welcome to this chatbot. Congratulations for taking first step towards the mental health",
            trigger:"Ask Name"
        } ,
        {
            id: "Ask Name",
            message: "What should I call you?",
            trigger: "Waiting user input for name"
        },

        {
            id: "Waiting user input for name",
            user: true,
            trigger: "remark after name"
        },
        {
            id: "remark after name",
            message: "hello {previousValue}, I am delighted to meet you.",
            trigger: "Ask where from"
        },
        {
            id: "Ask where from",
            message: "Please tell me where you are from",
            trigger: "Waiting user input for place info"
        },
        {
            id: "Waiting user input for place info",
            user: true,
            trigger: "comment on place one"
        },
        {
            id: "comment on place one",
            message: "{previousValue}'s a good place, isn't it!!",
            trigger: "comment on place"
        },
        {
            id: "comment on place",
            message: "I really want to visit {previousValue}",
            trigger: "Asking mood"
        },
        {
            id: "Asking mood",
            message: "How you are doing today?",
            trigger: "Displaying mood"
        },
        {
            id: "Displaying mood",
            options: [
                {
                    value: "Sad",
                    label: "Sad",
                    trigger: "Sad"
                },
                {
                    value: "Happy",
                    label: "Happy",
                    trigger: "happy"
                },
                {
                    value: "Angry",
                    label: "Angry",
                    trigger: "Angry"
                },
                {
                    value: "Disappointed",
                    label: "Disappointed",
                    trigger: "Disappointed"
                }
            ]
        },
    {
        id: "Sad",
            options: [
        {
            value: true,
            label: "I am very sad",
            trigger: "very sad"
        },
        {
            value: false,
            label: "just a regular wave of sadness",
            trigger: "regular sadness"
        }
    ]
    },

    {
        id: "very sad",
            message: "I am so sorry to hear that",
        trigger: "done"
    },
        {
            id: "regular sadness",
            message: "Happens with me too, everything goes, this will go too.We must remember who we are and face who we are. It might always feel like it is always night and we will always be alone but remember it is the darkest before the first night of dawn.",
            trigger: "done"
        },
        {
            id: "Angry",
            options: [
                {
                    value: true,
                    label: "I am very angry",
                    trigger: "very angry"
                },
                {
                    value: false,
                    label: "Frustration",
                    trigger: "frustration"
                }
            ]
        },
        {
            id: "Disappointed",
            message: "Maybe you are disappointed because The standards you make for yourself are more strict.its time to forgive yourself. Your live is long, always trust yourself when in a maze and remember When winter passes, spring always comes",
            trigger: "done"
        },
        {
            id: "very angry",
            message: "Lets take a deep breathe, try to go for a walk. you might feel better :)",
            trigger: "done"
        },
        {
            id: "frustration",
            message: "We all get frustrated sometimes, when things dont go our way. We must remember who we are and face who we are. It might always feel like it is always night and we will always be alone but remember it is the darkest before the first night of dawn.",
            trigger: "done"
        },
        { id: "Angry",
        options: [
        {
            value: true,
            label: "I am very angry",
            trigger: "very angry"
        },
        {
            value: false,
            label: "Frustration",
            trigger: "frustration"
        }
    ]
},

{
    id: "very angry",
        message: "Lets take a deep breathe, try to go for a walk. you might feel better :)",
    trigger: "done"
},
{
    id: "frustration",
        message: "We all get frustrated sometimes, when things dont go our way. We must remember who we are and face who we are. It might always feel like it is always night and we will always be alone but remember it is the darkest before the first night of dawn.",
    trigger: "done"
},
        {
            id: "happy",
            options: [
                {
                    value: true,
                    label: "I am very happy",
                    trigger: "very happy"
                },
                {
                    value: false,
                    label: "content",
                    trigger: "content"
                }
            ]
        },


        {
            id: "very happy",
            message: "I am happpy to know, something good must have happnened right",
            trigger: "done"
        },
        {
            id: "content",
            message: "good we all should be content in our lives",
            trigger: "done"
        },
    // // {
    //     id: "Adding Tomatoes in Pizza",
    //         options: [
    //     {
    //         value: true,
    //         label: "Yes",
    //         trigger: "Asking for Mushroom in Pizza"
    //     },
    //     {
    //         value: "false",
    //         label: "No",
    //         trigger: "Asking for Mushroom in Pizza"
    //     }
    // ]
    // },
    //
    // {
    //     id: "Asking for Mushroom in Pizza",
    //         message: "Would you like to have mushroom in your pizza",
    //     trigger: "Adding Mushroom in Pizza"
    // },
    //
    // {
    //     id: "Adding Mushroom in Pizza",
    //         options: [
    //     {
    //         value: true,
    //         label: "Yes",
    //
    //         trigger: "Asking for Corn in Pizza"
    //     },
    //     {
    //         value: "false",
    //         label: "No",
    //         trigger: "Asking for Corn in Pizza"
    //     }
    // ]
    // },
    // {
    //     id: "Asking for Corn in Pizza",
    //         message: "Would you like to have corn in your pizza",
    //     trigger: "Adding Corn in Pizza"
    // },
    //
    // {
    //     id: "Adding Corn in Pizza",
    //         options: [
    //     {
    //         value: true,
    //         label: "Yes",
    //         trigger: "Asking for Veggies in Pizza"
    //     },
    //     {
    //         value: "false",
    //         label: "No",
    //         trigger: "Asking for Veggies in Pizza"
    //     }
    // ]
    // },
    //
    // {
    //     id: "Asking for Veggies in Pizza",
    //         message: "Would you like to have veggies in your pizza",
    //     trigger: "Adding Veggies in Pizza"
    // },
    //
    // {
    //     id: "Adding Veggies in Pizza",
    //         options: [
    //     {
    //         value: true,
    //         label: "Yes",
    //         trigger: "Done"
    //     },
    //     {
    //         value: "false",
    //         label: "No",
    //         trigger: "Done"
    //     }
    // ]
    // },
        {
            id: "done",
            message:" thanks for sharing ",
            end:true
        }
    ];
    return   <ThemeProvider theme={theme}>
        <Chatbot steps={steps} {...config}/>;
    </ThemeProvider>;
}
export default chatBot;
export const surveyFormat: any = {

    "elements": [
        {
            "type": "WhenIsNow",
            "id": "whenIsNow",
        },
        // {
        //     "id": "when.display",
        //     "type": "text",
        //     "prefix": "If this app is not working. Put finger on the screen here and pull down about half the screen. That will refresh the app. ",
        // },

        {
            "type": "Calendar",
            "id": "calendar",
        },

        {
            "type": "ShowBetweenHours",
            "id": "morning",
            "startHour": 5,
            "endHour": 17,
            "elements": [
                // {
                //     "type": "heading",
                //     "level": 1,
                //     "id": "walk heading",
                //     "content": "before you go on your walk"
                // },
                // {
                //     "type": "reminder",
                //     "id": "meals3",
                //     "content": `Eat 3 meals a day and less crunchies`
                // },

                // {
                //     "type": "todo",
                //     "id": "lidocainePatchRemove",
                //     "content": "First thing when you wake up. Remove your Lidocaine patch from last night",
                // },

                // {
                //     "type": "todo",
                //     "id": "bathroom",
                //     "content": "Use the restroom",
                // },
                {
                    "type": "range",
                    "id": "padFullness",
                    "title": "What was the fullest your pad was this morning?",
                    "length": 5,
                    "0": "dry",
                    "1": "dribble",
                    "2": "half full",
                    "3": "full",
                    "4": "overflowed",
                },
                // {
                //     "type": "todo",
                //     "id": "NotBeforeWalk",
                //     "content": "Go on your walk. Do not do anything else. Do NOT put on lotion until after your walk.",
                // },
                // {
                //     "type": "heading",
                //     "level": 1,
                //     "id": "afterWalkHeading",
                //     "content": "AFTER your walk"
                // },
                {
                    "type": "range",
                    "id": "morningAnkles",
                    "title": "How swolen were your ankles when you woke up?",
                    "length": 5,
                    "0": "none",
                    "4": "Dangerously swolen",
                },

                // {
                //     "type": "range",
                //     "id": "sleepQuality",
                //     "title": "How well did you sleep last night?",
                //     "length": 5,
                //     "0": "0 - Perfect",
                //     "2": "2 - Average",
                //     "4": "4 - No Sleep",
                // },
                // {
                //     "type": "heading",
                //     "level": 1,
                //     "id": "morning heading",
                //     "content": "After your walk"
                // },
                // {
                //     "type": "reminder",
                //     "id": "happyHome",
                //     "doneContent": `
                //     <a target="_blank" href="https://docs.google.com/document/d/18jUBmUHkGcMsaqP7mDtTXkRPzfTsvelNH0cBs3J1Lb4/edit">Happy Home Guide</a>
                //     -- <a target="_blank" href="https://airtable.com/appF0QFBllxKyqbrA/tblz2dYmjvcTY1mKV/viwqV9Dz3NhqUAd00?blocks=hide">Ben's tasks</a>
                //     -- <a href="https://docs.google.com/document/d/e/2PACX-1vQW7bUZNzJxoJlTagqDHHl6pmQWAXEzYNKlZru1pT-Wek6uWdNgxoEBJ18nfMGuxWqSFpUZhtPg9j8P/pub">Standard Operation Procedures (SOPs)</a>
                //     `,
                //     "content": `
                //     <ul>
                //     <li>Review your <a target="_blank" href="https://docs.google.com/document/d/18jUBmUHkGcMsaqP7mDtTXkRPzfTsvelNH0cBs3J1Lb4/edit">Happy Home Guide</a>.</li>
                //     <li>You can look at the <a target="_blank" href="https://airtable.com/appF0QFBllxKyqbrA/tblz2dYmjvcTY1mKV/viwqV9Dz3NhqUAd00?blocks=hide">tasks Ben is working on for you</a>.</li>
                //     <li>We have documented a lot of things you want to remember how to do in this <a href="https://docs.google.com/document/d/e/2PACX-1vQW7bUZNzJxoJlTagqDHHl6pmQWAXEzYNKlZru1pT-Wek6uWdNgxoEBJ18nfMGuxWqSFpUZhtPg9j8P/pub">Standard Operation Procedure (SOP) document</a>.</li>
                //     </ul>
                //     `
                // },
                {
                    "type": "reminder",
                    "id": "clothing",
                    "doneContent": "Reminder about Temperature and clothing",
                    "content": `
                    <b>Reminder: Clothing Tips</b>
                    <ul>
                        <li>The AC is set as good as it can be but you will get cold and hot throughout the day.</li>
                        <li>Always wear a t-shirt</li>
                        <li>When you get cold put on a blouse over your t-shirt</li>
                        <li>When you get hot take off your blouse and turn on the fan</li>
                        <li>Do not notify Ben unless it is extreamly hot or cold like the AC is broken.</li>
                    </ul>
                    `
                },
                // {
                //     "type": "reminder",
                //     "id": "benToDos",
                //     "content": `You can look at the <a target="_blank" href="https://airtable.com/appF0QFBllxKyqbrA/tblz2dYmjvcTY1mKV/viwqV9Dz3NhqUAd00?blocks=hide">tasks Ben is working on for you</a>.`
                // },
                // {
                //     "type": "reminder",
                //     "id": "Dishes",
                //     "content": "Reminder: When eating, put the lid on your tray so immediately when you are done you can cover up the stinky dish. When you get up, take off the lid and put it in the water in the turquoise tub. Put the pyrex dish in the tub on it's side to get the water in then tip it upright so it is submerged."
                // },
                // {
                //     "type": "reminder",
                //     "id": "textIfNeedGroceries",
                //     "content": "Reminder: If you need Groceries? Text Ben that you need help with groceries. Do not buy them by yourself"
                // },
                // {
                //     "type": "reminder",
                //     "id": "textquestionTimeReminder",
                //     "content": "Reminder: The questions above are just your morning list. other questions will automatically appear here after 5PM. Those should not be answered until then so don't worry about answering them until later."
                // },
            ],
        },
        {
            "type": "ShowBetweenHours",
            "id": "allDay",
            "startHour": 5,
            "endHour": 24,
            "elements": [
                // {
                //     "type": "heading",
                //     "level": 1,
                //     "id": "allDayHeading",
                //     "content": "All Day List"
                // },
                // {
                //     "type": "reminder",
                //     "id": "sop",
                //     "content": `We have documented a lot of things you want to remember how to do in this <a href="https://docs.google.com/document/d/e/2PACX-1vQW7bUZNzJxoJlTagqDHHl6pmQWAXEzYNKlZru1pT-Wek6uWdNgxoEBJ18nfMGuxWqSFpUZhtPg9j8P/pub">Standard Operation Procedure (SOP) document</a>.`
                // },
                // {
                //     "type": "reminder",
                //     "id": "eatingTime",
                //     "doneContent": "Eating Tips: Spices, Microwave",
                //     "content": `<b>Reminder: Eating Tips</b>
                //     <ul>
                //         <li> <b>DO NOT ADD SPICES until after you heat</b> your food!</li>
                //         <li> Microwave for only <b>1</> minute at a time for <b>3 times</b> and stir in-between.</li>
                //         <li> Use only the first spice in the conatiner.</li>
                //         <li> Use the 1/2 teaspoon measure <b>once</b>.</li>
                //         <li> Put the spice in back on the container</li>
                //     </ul>
                //     `
                // },
                {
                    "type": "todo",
                    "id": "waterBottlesStart",
                    "content": `
                    WATER:
                    <ol>
                    <li>You keep remembering the wrong thing so follow these instructions <b>EXACTLY<b>.</li>
                    <li>Get the <B>BLACK BOTTLE CARRIER</b></li>
                    <li>Put all 5 cups with lids in the <B>BLACK BOTTLE CARRIER</b></li>
                    <li>carry 5 cups with lids to the bathroom.</li>
                    <li>Fill them ALL and put the lids back on before carrying the back.</li>
                    </ol>`,
                },
                // {
                //     "type": "todo",
                //     "id": "weight",
                //     "content": "Weigh Yourself. It will save your readings to the computer so you don't need to write them down.",
                // },
                // {
                //     "type": "todo",
                //     "id": "ThighMassage",
                //     "content": "Use the deep masager on your thighs to loosen then up.",
                // },
                // {
                //     "type": "todo",
                //     "id": "vitamins",
                //     "content": "Have you taken your vitamins from the manual pill box.",
                // },
                // {
                //     // "type": "reminder",
                //     "type": "todo",
                //     "id": "ketoneDrink",
                //     "content": "Drink one of the little orange bottles of Ketone IQ.",
                //     // "content": "We are SKIPPING the little orange bottles of Ketone IQ this week",
                // },
                {
                    "type": "todo",
                    "id": "brushTeeth",
                    "content": "AFTER YOU HAVE EATEN: Did you brush your teeth",
                },
                // {
                //     "type": "todo",
                //     "id": "bloodpressure",
                //     "content": `Take your blood pressure. `,
                //     "instructions": `
                //         <ul>
                //             <li> Put on right arm with the button near our elbow</li>
                //             <li> Take 10 deep breaths</li>
                //             <li> Press the button, wait a second, then press it again</li>
                //         </ul>
                //         <iframe style="width:100%;aspect-ratio: 16 / 9; max-height:90vh; max-width:90vw" src="https://www.youtube.com/embed/e5Cem5oahho?start=53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                // },
                // {
                //     "type": "todo",
                //     "id": "exerciseShouldSqueeze",
                //     "content": `Physical Therapy: Shoulder Squeeze. `,
                //     "instructions": `
                //     <ol>
                //         <li>Stand up tall with your arms at your sides.Hands beside your shoulder</li>
                //         <li>Keep your shoulders relaxed and down, not shrugged.</li>
                //         <li>Squeeze your shoulder blades together.</li>
                //         <li>Hold for <b>10 seconds,</b> then relax.</li>
                //         <li>Repeat <b>10 times</b>.</li>
                //     </ol>
                //     <img src="https://drive.google.com/uc?id=1qaBlFzCw0gAMqITbPNgcOG_6ZqcAOS2w"/>`
                // },
                // {
                //     "type": "todo",
                //     "id": "exerciseWindshieldWipers",
                //     "content": `Physical Therapy: Windshield Wipers. `,
                //     "instructions": `
                //         <ul>
                //             <li>Lay on your back</li>
                //             <li>Bend knees</li>
                //             <li>Slowly make a windshield wiper move with your knees each way.</li>
                //             <li>lift hip to go further</li>
                //             <li>Don’t rush and do it slowly</li>
                //             <li>Repeat <b>20 times</b>.</li>
                //             </ul>
                //         <img class="img-fluid" src="https://drive.google.com/uc?id=1co8m8Yb4Zc0n0pTItNQPeBeWRx9aBfE9"/>
                //         `
                // },

                // {
                //     "type": "todo",
                //     "id": "exerciseBookStretch",
                //     "content": `Physical Therapy: Book Stretch`,
                //     "instructions": `
                //     <ol>
                //         <li>Lie on your side with your knees bent and your arms extended in front of you, palms together.</li>
                //         <li>Keeping your knees and hips stationary, open your top arm and rotate it all the way to the other side, trying to touch the floor if possible.</li>
                //         <li>Your head and eyes should follow your hand as it moves.</li>
                //         <li>Hold the stretch for a few seconds, then return to the starting position.</li>
                //         <li>Repeat <b>10 times</b> on each side.</li>
                //         </ol>
                //     <img class="img-fluid"  src="https://drive.google.com/uc?id=1Fxp2oY5oJtw3Tc4rCga5-ONQ7w9XWsVC"/>
                //     `
                // },

                // {
                //     "type": "todo",
                //     "id": "exerciseBridge",
                //     "content": `Physical Therapy: Bridge`,
                //     "instructions": `
                //     <ol>
                //         <li>Lie on your back.</li>
                //         <li>Rest your hands at your sides, bend your knees, and place your feet flat on the bed.</li>
                //         <li>Raise your hips as high as you can confortable.</li>
                //         <li>Hold for <b>10 seconds</b>.</li>
                //         <li>Lower the hips to return to the starting position.</li>
                //         <li>Repeat <b>10 times</b>.</li>
                //     </ol>
                //     <img class="img-fluid" src="https://drive.google.com/uc?id=1bjHFpq68FKb5yYMgr5oo9zMuQRuX4w43"/>
                //     `
                // },
                // {
                //     "type": "todo",
                //     "id": "floss",
                //     "content": "Floss Teeth. Use the colorful sandles towel hanging on the towl rack then hang it back up on the towel rack so it can dry.",
                // },
                // {
                //     "type": "todo",
                //     "content": "Pinkies:use massager all around the base of your pinkies <br> for 30 seconds each",
                //     "id": "handExercises",
                // },
            ],
        },
        // {
        //     "type": "heading",
        //     "level": 1,
        //     "id": "evening Heading",
        //     "content": "Evening List: available after 5 PM"
        // },
        // {
        //     "type": "ShowBetweenHours",
        //     "id": "evening",
        //     "startHour": 5,
        //     "endHour": 16,
        //     "elements": [
        //         {
        //             "type": "heading",
        //             "level": 3,
        //             "id": "evening",
        //             "content": "<br/>Your evening checklist will appear here after after 5 PM <br><br><br>"
        //         },
        //     ]
        // },
        // {
        //     "type": "ShowBetweenHours",
        //     "id": "evening show",
        //     "startHour": 17,
        //     "endHour": 24,
        //     "elements": [
        //         // {
        //         //     "type": "heading",
        //         //     "level": 2,
        //         //     "id": "h1Feel",
        //         //     "content": "How do you feel today?"
        //         // },
        //         // {
        //         //     "type": "range",
        //         //     "id": "feelToday",
        //         //     "0": "Great",
        //         //     "5": "OK",
        //         //     "10": "Worst Ever",
        //         // },
        //         // {
        //         //     "type": "heading",
        //         //     "level": 2,
        //         //     "id": "h1Pain",
        //         //     "content": "Pain"
        //         // },
        //         // {
        //         //     "type": "matrix",
        //         //     "id": "pain",
        //         //     "title": "",
        //         //     "verticalAlign": "top",
        //         //     "alternateRows": true,
        //         //     "columns": [
        //         //         {
        //         //             "value": "0",
        //         //             "text": "none"
        //         //         },
        //         //         {
        //         //             "value": "1",
        //         //             "text": "slight"
        //         //         },
        //         //         {
        //         //             "value": "2",
        //         //             "text": "some"
        //         //         },
        //         //         {
        //         //             "value": "3",
        //         //             "text": "painful"
        //         //         },
        //         //         {
        //         //             "value": "4",
        //         //             "text": "very"
        //         //         }
        //         //     ],
        //         //     "rows": [
        //         //         {
        //         //             "value": "chest",
        //         //             "text": "chest"
        //         //         },
        //         //         {
        //         //             "value": "upperBack",
        //         //             "text": "upper back"
        //         //         },
        //         //         {
        //         //             "value": "lowerBack",
        //         //             "text": "lower back"
        //         //         },
        //         //         "shoulders",
        //         //         "arms",
        //         //         "wrists",
        //         //         "hands",
        //         //         "thighs",
        //         //         "hip joints",
        //         //         "calves",
        //         //         "feet",
        //         //     ]
        //         // },
        //         // {
        //         //     "type": "heading",
        //         //     "level": 2,
        //         //     "id": "h1Other",
        //         //     "content": "Other"
        //         // },

        //         // {
        //         //     "length": 5,
        //         //     "0": "none",
        //         //     "4": "Dangerously swolen",
        //         //     "type": "singleSelect",
        //         //     "id": "temperature",
        //         //     "title": "How was you home temperature today?",
        //         //     "options": [
        //         //         {
        //         //             "text": "mostly OK",
        //         //             "value": "ok"
        //         //         },
        //         //         {
        //         //             "text": "Mostly too cold",
        //         //             "value": "cold"
        //         //         },
        //         //         {
        //         //             "text": "Mostly too hot",
        //         //             "value": "hot"
        //         //         },
        //         //         {
        //         //             "text": "Fluctuates uncomfortably",
        //         //             "value": "fluctuates"
        //         //         },
        //         //     ],

        //         // },

        //         // {
        //         //     "type": "range",
        //         //     "id": "eveningAnkles",
        //         //     "title": "How swolen are your ankles after 5 PM?",
        //         //     "length": 5,
        //         //     "0": "none",
        //         //     "4": "Dangerously swolen",
        //         // },


        //         // {
        //         //     "type": "range",
        //         //     "id": "fingerTingles",
        //         //     "title": "Finger tip pain or tingling?",
        //         //     "length": 5,
        //         //     "0": "none",
        //         //     "1": "tingling several times today",
        //         //     "2": "Tingling Most of the day",
        //         //     "3": "Painful several times today",
        //         //     "4": "Painful Most of the day",
        //         // },
        //         {
        //             "type": "singleSelect",
        //             "id": "bmToday",
        //             "title": "Did you have a BM today?",
        //             "options": [
        //                 {
        //                     "text": "yes",
        //                     "value": true
        //                 },
        //                 {
        //                     "text": "no",
        //                     "value": false
        //                 },
        //             ],
        //         },
        //         // {

        //         //     "type": "range",
        //         //     "id": "noisyNeighbor",
        //         //     "title": "How noisy were your neighbors today?",
        //         //     "0": "silent",
        //         //     "10": "worst",
        //         // },
        //         // {

        //         //     "type": "range",
        //         //     "id": "runnyNose",
        //         //     "title": "How runny was your nose today?",
        //         //     "0": "none",
        //         //     "10": "heavy dripping",
        //         // },
        //         // {

        //         //     "type": "range",
        //         //     "id": "teethPain",
        //         //     "title": "How painful were your teeth today?",
        //         //     "0": "none",
        //         //     "10": "constant strong pain",
        //         // },
        //         // {

        //         //     "type": "singleSelect",
        //         //     "id": "cramps",
        //         //     "title": "Did you have cramps or spasams anywhere in your body today?",
        //         //     "options": [
        //         //         {
        //         //             "text": "yes",
        //         //             "value": true
        //         //         },
        //         //         {
        //         //             "text": "no",
        //         //             "value": false
        //         //         },
        //         //     ]
        //         // },
        //         // {
        //         //     "type": "comment",
        //         //     "hide": "data.cramps!==true",
        //         //     "id": "crampLocations",
        //         //     "width": "full",
        //         //     "title": "Describe the cramps and their location",
        //         //     "minRows": 1,
        //         // },
        //         // {

        //         //     "type": "range",
        //         //     "id": "confusion",
        //         //     "title": "How confused did you feel today?",
        //         //     "0": "none",
        //         //     "5": "some",
        //         //     "10": "worst",
        //         // },
        //         // {

        //         //     "type": "range",
        //         //     "id": "dizzy",
        //         //     "title": "How dizzy did you feel today?",
        //         //     "0": "none",
        //         //     "5": "some",
        //         //     "10": "worst",
        //         // },
        //         // {
        //         //     "type": "matrix",
        //         //     "id": "other",
        //         //     "title": "",
        //         //     "alternateRows": true,
        //         //     "columns": [
        //         //         {
        //         //             "value": "0",
        //         //             "text": "none"
        //         //         },
        //         //         {
        //         //             "value": "1",
        //         //             "text": "little"
        //         //         },
        //         //         {
        //         //             "value": "2",
        //         //             "text": "some"
        //         //         },
        //         //         {
        //         //             "value": "3",
        //         //             "text": "often"
        //         //         },
        //         //         {
        //         //             "value": "4",
        //         //             "text": "bad"
        //         //         }
        //         //     ],
        //         //     "rows": [
        //         //         {
        //         //             "value": "forgetful",
        //         //             "text": "forgetful"
        //         //         },
        //         //         {
        //         //             "value": "bladder",
        //         //             "text": " bladder trouble"
        //         //         },
        //         //         {
        //         //             "value": "rashes",
        //         //             "text": "rashes"
        //         //         },
        //         //         {
        //         //             "value": "gutNoise",
        //         //             "text": "loud gut"
        //         //         },
        //         //         {
        //         //             "value": "spam",
        //         //             "text": "spam call ring"
        //         //         },
        //         //         {
        //         //             "value": "ringing",
        //         //             "text": "ringing noise"
        //         //         },
        //         //         {
        //         //             "value": "weirdNoises",
        //         //             "text": "chanting/ mumbling"
        //         //         }
        //         //     ]
        //         // },
        //         // {
        //         //     "type": "heading",
        //         //     "level": 2,
        //         //     "id": "beforeBed",
        //         //     "content": "Just Before Going to Bed"
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "bedTime",
        //         //     "content": `at 7:30 PM an alarm will go off. <br/><br/>
        //         //     <ul>
        //         //     <li> If you are watching something on your TV, pause it. You can leave it there until tomorrow.</li>
        //         //     <li> If you are hungry, eat some crunchies quickly just to get you to sleep.</li>
        //         //     <li> If you are in the middle of eating. Quickly finish or just stop around then. You don’t have to eat all of a meal.</li>
        //         //     <li> Text Ben that you are getting ready for bed.</li>
        //         //     <li> Start getting ready for bed!</li>
        //         //     </ul>`,
        //         //     "doneContent": "Started getting ready for bed",
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "waterBottlesEnd",
        //         //     "content": "Did you drink all 4 water bottles?",
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "lidocanePatch",
        //         //     "content": "Put on your lidocane patch",
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "walkClothes",
        //         //     "content": "Put on the clothes you will walk in for tomorrow.",
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "walkWater",
        //         //     "content": "Fill up the small bottle of water for you to take on your walk tomorrow.",
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "startReading",
        //         //     "content": `at 8:30 PM Get into bed and start reading<br/><br/>
        //         //     <ul>
        //         //         <li> Text Ben that you started reading.</li>
        //         //     </ul>`,
        //         //     "doneContent": "Started Reading",
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "lightsOut",
        //         //     "content": `at 9:30 PM text Ben that you are turining out your lights<br/><br/>
        //         //     <ul>
        //         //         <li> Turn off your light.</li>
        //         //     </ul>`,
        //         //     "doneContent": "Lights out",
        //         // },
        //     ],
        // },
        // {
        //     "type": "heading",
        //     "level": 1,
        //     "id": "h1General",
        //     "content": "General"
        // },
        // {
        //     "type": "heading",
        //     "level": 2,
        //     "id": "h1Notes",
        //     "content": "Notes"
        // },





        // {
        //     "type": "ShowBetweenHours",
        //     "id": "testBetweenHours",
        //     "startHour": 10,
        //     "endHour": 15,
        //     "elements": []
        // },


        // {
        //     "type": "Weather",
        //     "id": "weather",
        // },

        { // Add BM
            "type": "events",
            "id": "bMs",
            "addButtonTitle": "Add a BM",
            "summary": [
                {
                    "id": "when.display",
                    "type": "text",
                    "prefix": "BM: ",
                }
            ],
            "elements": [
                {
                    "type": "time",
                    "id": "when",
                    "default": "now",
                    "recent": true,
                    "title": "When did this happen?"
                },
                {
                    "type": "singleSelect",
                    "id": "thickness",
                    "title": "Thickness",
                    "options": [
                        {
                            "text": "Diarrhea",
                            "value": "-2"
                        },
                        {
                            "text": "loose",
                            "value": "-1"
                        },
                        {
                            "text": "Just Right; toothpaste",
                            "value": "0"
                        },
                        {
                            "text": "Too hard",
                            "value": "1"
                        },
                        {
                            "text": "Painful",
                            "value": "2"
                        },
                    ],
                },
                {
                    "id": "size",
                    "type": "singleSelect",
                    "title": "Size",
                    "options": [
                        {
                            "text": "Tablespoon",
                            "value": "-2"
                        },
                        {
                            "text": "1 Cup",
                            "value": "-1"
                        },
                        {
                            "text": "2 Cups - Just right",
                            "value": "0"
                        },
                        {
                            "text": "3 Cups",
                            "value": "1"
                        },
                        {
                            "text": "Massive",
                            "value": "2"
                        },
                    ],
                },
                {
                    "type": "comment",
                    "id": "bmNotes",
                    "width": "full",
                    "title": "BM Notes",
                    "minRows": 1,
                }
            ]
        },

        { // Add pain
            "type": "events",
            "id": "painEvents",
            "addButtonTitle": "Report a Pain",
            "summary": [
                {
                    "type": "text",
                    "id": "sensation",
                },
                {
                    "type": "text",
                    "prefix": " ",
                    "id": "side",
                },
                {
                    "type": "text",
                    "prefix": " ",
                    "id": "location",
                },

                {
                    "type": "counter",
                    "title": " | times:",
                    "id": "times",
                },
            ],
            "elements": [
                {
                    "type": "time",
                    "id": "when",
                    "default": "now",
                    "revent": true,
                    "title": "When did this first happen?"
                },
                {
                    "type": "singleSelect",
                    "id": "location",
                    "title": "Pain Location",
                    "options": [
                        {
                            "text": "head",
                            "value": "head"
                        },
                        {
                            "text": "neck",
                            "value": "neck"
                        },
                        {
                            "text": "shoulder",
                            "value": "shoulder"
                        },
                        {
                            "text": "chest",
                            "value": "chest"
                        },
                        {
                            "text": "upper back",
                            "value": "upperBack"
                        },
                        {
                            "text": "middle back",
                            "value": "middleBack"
                        },
                        {
                            "text": "lower back",
                            "value": "lowerBack",
                        },
                        {
                            "text": "upper arm",
                            "value": "upper arm"
                        },
                        {
                            "text": "elbow",
                            "value": "elbow"
                        },
                        {
                            "text": "wrist",
                            "value": "wrist"
                        },
                        {
                            "text": "hand",
                            "value": "hand"
                        },
                        {
                            "text": "finger",
                            "value": "finger"
                        },
                        {
                            "text": "gut",
                            "value": "gut"
                        },
                        {
                            "text": "hip joint",
                            "value": "hip joint"
                        },
                        {
                            "text": "thigh",
                            "value": "thigh"
                        },
                        {
                            "text": "knee",
                            "value": "knee"
                        },
                        {
                            "text": "ankle",
                            "value": "ankle"
                        },
                        {
                            "text": "ball of foot",
                            "value": "ball of foot"
                        },
                        {
                            "text": "toe",
                            "value": "toe"
                        },
                    ],
                },
                {
                    "type": "singleSelect",
                    "id": "side",
                    "title": "Pain side",
                    "options": [
                        {
                            "text": "left",
                            "value": "left"
                        },
                        {
                            "text": "right",
                            "value": "right"
                        },
                        {
                            "text": "both",
                            "value": "both"
                        },
                    ],
                },
                {
                    "type": "singleSelect",
                    "id": "severity",
                    "title": "Severity",
                    "options": [
                        {
                            "text": "0",
                            "value": "0"
                        },
                        {
                            "text": "1",
                            "value": "1"
                        },
                        {
                            "text": "2",
                            "value": "2"
                        },
                        {
                            "text": "3",
                            "value": "3"
                        },
                        {
                            "text": "4",
                            "value": "4"
                        },
                        {
                            "text": "5",
                            "value": "5"
                        },
                        {
                            "text": "6",
                            "value": "6"
                        },
                        {
                            "text": "7",
                            "value": "7"
                        },
                        {
                            "text": "8",
                            "value": "8"
                        },
                        {
                            "text": "9",
                            "value": "9"
                        },
                        {
                            "text": "10",
                            "value": "10"
                        },
                    ],
                },
                {
                    "type": "counter",
                    "title": "How many times today?",
                    "id": "times",
                },
                {
                    "type": "multiSelect",
                    "id": "sensation",
                    "title": "Sensations (Choose many):",
                    "width": "full",
                    "options": [
                        {
                            "text": "spasm",
                            "value": "spasm"
                        },
                        {
                            "text": "shooting",
                            "value": "shooting"
                        },
                        {
                            "text": "sharp",
                            "value": "sharp"
                        },
                        {
                            "text": "dull",
                            "value": "dull"
                        },
                        {
                            "text": "tingling",
                            "value": "tingling"
                        },
                        {
                            "text": "aching",
                            "value": "aching"
                        },
                        {
                            "text": "joint",
                            "value": "joint"
                        },
                        {
                            "text": "muscle",
                            "value": "muscle"
                        },
                        {
                            "text": "skin",
                            "value": "skin"
                        },
                        {
                            "text": "itchy",
                            "value": "itchy"
                        },
                        {
                            "text": "stings",
                            "value": "stings"
                        },
                        {
                            "text": "bleeding",
                            "value": "bleeding"
                        },
                        {
                            "text": "burning",
                            "value": "burning"
                        },
                        {
                            "text": "throbbing",
                            "value": "throbbing"
                        },
                    ],
                },
                {
                    "type": "multiSelect",
                    "id": "triggers",
                    "width": "full",
                    "title": "Triggers:",
                    "options": [
                        {
                            "text": "morning",
                            "value": "morning"
                        },
                        {
                            "text": "evening",
                            "value": "evening"
                        },
                        {
                            "text": "eating",
                            "value": "eating"
                        },
                        {
                            "text": "walking",
                            "value": "walking"
                        },
                        {
                            "text": "chores",
                            "value": "chores"
                        },
                        {
                            "text": "bending over",
                            "value": "bending over"
                        },
                        {
                            "text": "lying down",
                            "value": "lying down"
                        },
                        {
                            "text": "standing",
                            "value": "standing"
                        },
                        {
                            "text": "sitting",
                            "value": "sitting"
                        },
                        {
                            "text": "gripping",
                            "value": "gripping"
                        },
                    ],
                },
                {
                    "type": "comment",
                    "id": "cause",
                    "width": "full",
                    "title": "Did an event cause this pain? like a fall, accident. Please describe or put \"unknown\"",
                    "minRows": 1,
                },
                {
                    "type": "comment",
                    "id": "notes",
                    "width": "full",
                    "title": "Pain Notes",
                    "minRows": 1,
                },
            ]
        },
        {
            "type": "History",
            "id": "history",
        },
        // {
        //     "type": "comment",
        //     "id": "notes",
        //     "title": "Notes:"
        // },
    ]
}

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
            "type": "Html",
            "id": "tv",
            "content": `
                <div class="list-item">
                <h1>-  TV and Entertainment</h1>
                <br>
                <a href="" onclick="
                    window.goToRandomUrl([
'931c1642087957c4a7c38fa6973298f6',
'511352cef97f53acbf234a8d9aff57ac',
'59b2e23af93a5c0288ce8d869fdcf30f',
'4eae4b80a8c75e319dc6e97494f51064',
'0fcc9950725656488d9803245ac30e9e',
'645638367ba75206a4e18ddadf02d82f',
'9e049900b17e51debd0de48ed879c337',
'262967c323705135b70972074482bc8f',
'138f71b0d9585f9cb7699d3d9d17272c',
'85fde678ed0b5b94922437450f72e0d0',
'cd9c2d4d3c965e8a8527ecf44e1af5ec',
'f3a79222c20a5883ab8da1656b8c449f',
'aa69918ef2765b459437aee6f0f7c254',
'282afd13cf0858a2b9179a376b3f3d8c',
'54c62e18e6a75f88b9dbf8b35896725f',
'687e13a3a8da5eba9ab6821820ab3dd1',
'7c6900a2b88455db98b782c0e226b88b',
'36eb4556c90c5d6081dab035ff0c7657',
'ea311ed6534c5d26a767c4c7e908979d',
'9a86846f43f55d6b97b34bce67f8462c',
'882ee0c646d15394bd30a1288d4dcd6e',
'5becc038c2fa5c7d807c5b19504097a4',
'3c360ec5375c56ae844ba4ea7437dfbb',
'1874986ca8805ebc9629a3c8a012d544',
'9b7905a2a1c659ed97845f8dc6d0cdc9',
'3032d6e3b59c5018bf1808eead96c524',
'82dba2408d035678bfc820eaf453ac40',
'6f8da4a824c05423a366780cb283b08d',
'90ccbb5993f7535287b7baa308f2f38e',
'015a7a5cdfa0503787633433c0a2e7ad',
'75b096ea0bd8578f82cc35bddbc9b53d',
'3ca7cf08e09358089ac6aa7b64740427',
'6b8f4d0991e6587d842070caec0518a7',
'48904fced3ec565fa51a3d61a57a1a14',
'7e7f181b15cf596b813f916816c789d1',
'f0d048e4f40d578b96e1243f56d7677a',
'87888607964b56e7b350ad770526f0d3',
'ada74f7c28e45f139a74c49c686ef0d5',
'0ebfb60743a65d73ad84d208c858cf6a',
'49f9caf4e81c5374b70e82e321d22eeb',
'9aec1ad8e7e95a8396ded26f0f51d96a',
'c9d07ced2d3657599b687e5d81147f4f',
'283f933c360a5f29ad5e73b816fe2b97',
'fed334f74c0356c8bf80603ca16f02b9',
'0385dbf2b79e59a9901e88acd45aa638',
'5f6f7d7704155b3ebe7ef92fab0d94ca',
'b26b6ff276235dae8ac14f9c4c86532a',
'73c6bb4cfe4257cb9f982f16a0413536',
'73dd8ff3e62557fc977c6ad5600a4614',
'd45ee7e401155c8ba6b8154a80c80d60',
'47a534e489c8545eb0e6fa645945b016',
'a2555d21bdbf50fd9a5954bf2092a1d5',
'51287608173456ae925ff92774752866',
'd7609b92e963553dafbe95d7083995b5',
'93d27acd8c485fdeaa3580217a83a1e5',
'4c6994eb33065f14bf83b1a703d85a11',
'36c6d05f7053584d8989ab6a38c701f4',
'4d6b9118a45c58c583f76f26a1587c26',
'32a811bce0645407ac37d073628394fc',
'575dc5904208571bbb79fd0157310b60',
'4ca0ca335f765d209e928b89738d3338',
'6cd2ab0de3b055e48dee7b96206dd514',
'385ce55c72d65ab79489d6994a5c5689',
'80cf6ef858b054ea9f9fabc3f085c96c',
'a9287c967e3857308c68d173a1ff54c3',
'58e7dcfb8d3551658005a560f602a784',
'8e33d077249d51658d62c654039aa15f',
'3ba38b010b6857bebcb2d4eccf114fad',
'1177f9643b4c51c8831ad068308babe9',
'e661404a0ff55f178d22a048c797824d',
'c0e1e4334bd155799b08c586a698c799',
'c87b99e5d2e854f495434d72f2d26631',
'2c54b327387c517da8a821505d93962b',
'441698f8a3c65c24bd1632582fba9b03',
'3684d83e14c75e24b42d9406df1265f3',
'd50a9fdf4c59545f92da393ec99e140d',
'3edea442c6d95057a9a426ff94d1e2ba',
'71f676717e545a8e9861c67e2c3f9ab9',
'8986b31fd0dd546bb1fe1a19c33f2bfe',
'68a5e0aa5a2a598085f6c877370cfa9b',
'7a5fe8dbe8d4584da982a4e6c30f5dc8',
'd1cc446f97b65b5397ea24d251a19ca4',
'7a013f5906f4587b993d39ca3e3de464',
'60544910a50155a39fc344f0fa7edfb4',
'2eb12db123df52fbad9c275bc0fbca2b',
'fd2b63bee3635a4989ec6aa32bf00308',
'43388c5213765f2cb771f3acc819724d',
'82b0fa74f21d5833ab72b8540b552a9f',
'7670ac1454725fce85f1bc3c6843f463',
'4f979a6941e156ebb8bd3cfafdfc281e',
'131bcb1502455fce869334ed16846449',
'c1576aa63b7f5b4bbecc8bfdf72468d1',
'20db42f968595798b39d31db85718941',
'70915a39a8f152d0a02ca1c1e7e0bfa3',
'a7839738771e5b02bbbea94df17e6889',
'f5f1efab112555e48746b820f9668743',
'40755350e2eb597fbc04eb08718691bd',
'39625ca1d3f35d4eb228ca9624c741ee',
'e73a5608aa9250d4b827a8891549d6f1',
'4cb81c0e4be653f5ac1e04bcee995537',
'4d4b3a0ce08c5fc38e608d599989d7a6',
'5e1560d8da9e565e9c9b4df8ef3b7916',
'f14a24193d495356966f2948060cc87e',
'1144b04b890259cea670acfdc091c2db',
'0d094f3d337e538a8def6bdb946ca2b9',
'2b76baf631735a2f83843447c8fe4298',
'3fa9582f475758bbb7d96fca61e4bff0',
'095a20e0f6e35814b68c40f388aaa54c',
'0b0ac1e55e3d52db9c21cbd20cd11faf',
'af488115c4b25c63ad26da9dd87beebf',
'169d43dd8513529fac1893ba747e0da5',
'8a987bdfd8a8575d9df7164a994ba4ee',
'2ba7ef76356c5016891689b040f20e4a',
'8ff30c54ae8b5575b770813fa2e9908b',
'62c4ff4c9844517ebfea1bd43ad9b69f',
'bb0343e4a6f957bcb4c1e649299535cb',
'9e7c5b8b524d5c6bb26cfde31c3474a8',
'f5b945c9279352138f161dd32c503e93',
'a1ca12eb88a05354b32d63dbcbb33b4f',
'59b89680dec85938b5909e08de478373',
'c51db44307be5001b4733e72a975d092',
'eea896e0ab715d2b9a2f347c35a1f117',
'b0aaca1c874950c89854624f40bccd26',
'400fd4fb88d651a9a1b106bcd0cbd8af',
'd2eeab53dafd557e9c0794b84d91743b',
'68d9faef3dd55f77b9f94ceaa367b4d2',
'dca7f2dda5cf57ccb308f7e11fa904c8',
'516d3cf28d5c5275a2fc0bf69675d40f',
'ea8ebc97a7195884add551379bfed4d7',
'28162d08c5165cc087df0b86d3abe5ae',
'564a32df0c88582c8c9bb17c69cc1073',
'01967ab655ac5fb6a334b23c248ad316',
'e0c5193ffa9e511f8cc0c5b8a84ccef8',
'd8f3a82761a258dba08d40c49b3597a2',
'2eafac52fa0c543abc2dd8268cbafbc0',
'f39264e0a2675878926b794dad5f19e9',
'ce8d5563fc3a5975ae8bdfa6e8df93f3',
'52cc7c1ad2a859038e064ae1235c036c',
'fd2cb52739ee558f8de45aeb81739a3f',
'e3a66bd616815652a160709c28b57130',
'da56a5df1605ed1dca00c2a86460f5a8',
                    ],'https://therokuchannel.roku.com/watch/*', event);
                ">Midsummer Murders</a>
                </div>
            `,
        },

        // {
        //     "type": "ShowBetweenHours",
        //     "id": "morning",
        //     "startHour": 5,
        //     "endHour": 17,
        //     "elements": [
        //         // {
        //         //     "type": "heading",
        //         //     "level": 1,
        //         //     "id": "walk heading",
        //         //     "content": "before you go on your walk"
        //         // },
        //         // {
        //         //     "type": "reminder",
        //         //     "id": "meals3",
        //         //     "content": `Eat 3 meals a day and less crunchies`
        //         // },

        //         // {
        //         //     "type": "todo",
        //         //     "id": "lidocainePatchRemove",
        //         //     "content": "First thing when you wake up. Remove your Lidocaine patch from last night",
        //         // },

        //         // {
        //         //     "type": "todo",
        //         //     "id": "bathroom",
        //         //     "content": "Use the restroom",
        //         // },
        //         {
        //             "type": "range",
        //             "id": "padFullness",
        //             "title": "What was the fullest your pad was this morning?",
        //             "length": 5,
        //             "0": "dry",
        //             "1": "dribble",
        //             "2": "half full",
        //             "3": "full",
        //             "4": "overflowed",
        //         },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "NotBeforeWalk",
        //         //     "content": "Go on your walk. Do not do anything else. Do NOT put on lotion until after your walk.",
        //         // },
        //         // {
        //         //     "type": "heading",
        //         //     "level": 1,
        //         //     "id": "afterWalkHeading",
        //         //     "content": "AFTER your walk"
        //         // },
        //         {
        //             "type": "range",
        //             "id": "morningAnkles",
        //             "title": "How swolen were your ankles when you woke up?",
        //             "length": 5,
        //             "0": "none",
        //             "4": "Dangerously swolen",
        //         },

        //         // {
        //         //     "type": "range",
        //         //     "id": "sleepQuality",
        //         //     "title": "How well did you sleep last night?",
        //         //     "length": 5,
        //         //     "0": "0 - Perfect",
        //         //     "2": "2 - Average",
        //         //     "4": "4 - No Sleep",
        //         // },
        //         // {
        //         //     "type": "heading",
        //         //     "level": 1,
        //         //     "id": "morning heading",
        //         //     "content": "After your walk"
        //         // },
        //         // {
        //         //     "type": "reminder",
        //         //     "id": "happyHome",
        //         //     "doneContent": `
        //         //     <a target="_blank" href="https://docs.google.com/document/d/18jUBmUHkGcMsaqP7mDtTXkRPzfTsvelNH0cBs3J1Lb4/edit">Happy Home Guide</a>
        //         //     -- <a target="_blank" href="https://airtable.com/appF0QFBllxKyqbrA/tblz2dYmjvcTY1mKV/viwqV9Dz3NhqUAd00?blocks=hide">Ben's tasks</a>
        //         //     -- <a href="https://docs.google.com/document/d/e/2PACX-1vQW7bUZNzJxoJlTagqDHHl6pmQWAXEzYNKlZru1pT-Wek6uWdNgxoEBJ18nfMGuxWqSFpUZhtPg9j8P/pub">Standard Operation Procedures (SOPs)</a>
        //         //     `,
        //         //     "content": `
        //         //     <ul>
        //         //     <li>Review your <a target="_blank" href="https://docs.google.com/document/d/18jUBmUHkGcMsaqP7mDtTXkRPzfTsvelNH0cBs3J1Lb4/edit">Happy Home Guide</a>.</li>
        //         //     <li>You can look at the <a target="_blank" href="https://airtable.com/appF0QFBllxKyqbrA/tblz2dYmjvcTY1mKV/viwqV9Dz3NhqUAd00?blocks=hide">tasks Ben is working on for you</a>.</li>
        //         //     <li>We have documented a lot of things you want to remember how to do in this <a href="https://docs.google.com/document/d/e/2PACX-1vQW7bUZNzJxoJlTagqDHHl6pmQWAXEzYNKlZru1pT-Wek6uWdNgxoEBJ18nfMGuxWqSFpUZhtPg9j8P/pub">Standard Operation Procedure (SOP) document</a>.</li>
        //         //     </ul>
        //         //     `
        //         // },
        //         {
        //             "type": "reminder",
        //             "id": "clothing",
        //             "doneContent": "Reminder about Temperature and clothing",
        //             "content": `
        //             <b>Reminder: Clothing Tips</b>
        //             <ul>
        //                 <li>The AC is set as good as it can be but you will get cold and hot throughout the day.</li>
        //                 <li>Always wear a t-shirt</li>
        //                 <li>When you get cold put on a blouse over your t-shirt</li>
        //                 <li>When you get hot take off your blouse and turn on the fan</li>
        //                 <li>Do not notify Ben unless it is extreamly hot or cold like the AC is broken.</li>
        //             </ul>
        //             `
        //         },
        //         // {
        //         //     "type": "reminder",
        //         //     "id": "benToDos",
        //         //     "content": `You can look at the <a target="_blank" href="https://airtable.com/appF0QFBllxKyqbrA/tblz2dYmjvcTY1mKV/viwqV9Dz3NhqUAd00?blocks=hide">tasks Ben is working on for you</a>.`
        //         // },
        //         // {
        //         //     "type": "reminder",
        //         //     "id": "Dishes",
        //         //     "content": "Reminder: When eating, put the lid on your tray so immediately when you are done you can cover up the stinky dish. When you get up, take off the lid and put it in the water in the turquoise tub. Put the pyrex dish in the tub on it's side to get the water in then tip it upright so it is submerged."
        //         // },
        //         // {
        //         //     "type": "reminder",
        //         //     "id": "textIfNeedGroceries",
        //         //     "content": "Reminder: If you need Groceries? Text Ben that you need help with groceries. Do not buy them by yourself"
        //         // },
        //         // {
        //         //     "type": "reminder",
        //         //     "id": "textquestionTimeReminder",
        //         //     "content": "Reminder: The questions above are just your morning list. other questions will automatically appear here after 5PM. Those should not be answered until then so don't worry about answering them until later."
        //         // },
        //     ],
        // },

        // {
        //     "type": "ShowBetweenHours",
        //     "id": "allDay",
        //     "startHour": 5,
        //     "endHour": 24,
        //     "elements": [
        //         // {
        //         //     "type": "heading",
        //         //     "level": 1,
        //         //     "id": "allDayHeading",
        //         //     "content": "All Day List"
        //         // },
        //         // {
        //         //     "type": "reminder",
        //         //     "id": "sop",
        //         //     "content": `We have documented a lot of things you want to remember how to do in this <a href="https://docs.google.com/document/d/e/2PACX-1vQW7bUZNzJxoJlTagqDHHl6pmQWAXEzYNKlZru1pT-Wek6uWdNgxoEBJ18nfMGuxWqSFpUZhtPg9j8P/pub">Standard Operation Procedure (SOP) document</a>.`
        //         // },
        //         // {
        //         //     "type": "reminder",
        //         //     "id": "eatingTime",
        //         //     "doneContent": "Eating Tips: Spices, Microwave",
        //         //     "content": `<b>Reminder: Eating Tips</b>
        //         //     <ul>
        //         //         <li> <b>DO NOT ADD SPICES until after you heat</b> your food!</li>
        //         //         <li> Microwave for only <b>1</> minute at a time for <b>3 times</b> and stir in-between.</li>
        //         //         <li> Use only the first spice in the conatiner.</li>
        //         //         <li> Use the 1/2 teaspoon measure <b>once</b>.</li>
        //         //         <li> Put the spice in back on the container</li>
        //         //     </ul>
        //         //     `
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "waterBottlesStart",
        //         //     "content": `
        //         //     WATER:
        //         //     <ol>
        //         //     <li>You keep remembering the wrong thing so follow these instructions <b>EXACTLY<b>.</li>
        //         //     <li>Get the <B>BLACK BOTTLE CARRIER</b></li>
        //         //     <li>Put all 5 cups with lids in the <B>BLACK BOTTLE CARRIER</b></li>
        //         //     <li>carry 5 cups with lids to the bathroom.</li>
        //         //     <li>Fill them ALL and put the lids back on before carrying the back.</li>
        //         //     </ol>`,
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "weight",
        //         //     "content": "Weigh Yourself. It will save your readings to the computer so you don't need to write them down.",
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "ThighMassage",
        //         //     "content": "Use the deep masager on your thighs to loosen then up.",
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "vitamins",
        //         //     "content": "Have you taken your vitamins from the manual pill box.",
        //         // },
        //         // {
        //         //     // "type": "reminder",
        //         //     "type": "todo",
        //         //     "id": "ketoneDrink",
        //         //     "content": "Drink one of the little orange bottles of Ketone IQ.",
        //         //     // "content": "We are SKIPPING the little orange bottles of Ketone IQ this week",
        //         // },
        //         {
        //             "type": "todo",
        //             "id": "brushTeeth",
        //             "content": "AFTER YOU HAVE EATEN: Did you brush your teeth",
        //         },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "bloodpressure",
        //         //     "content": `Take your blood pressure. `,
        //         //     "instructions": `
        //         //         <ul>
        //         //             <li> Put on right arm with the button near our elbow</li>
        //         //             <li> Take 10 deep breaths</li>
        //         //             <li> Press the button, wait a second, then press it again</li>
        //         //         </ul>
        //         //         <iframe style="width:100%;aspect-ratio: 16 / 9; max-height:90vh; max-width:90vw" src="https://www.youtube.com/embed/e5Cem5oahho?start=53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "exerciseShouldSqueeze",
        //         //     "content": `Physical Therapy: Shoulder Squeeze. `,
        //         //     "instructions": `
        //         //     <ol>
        //         //         <li>Stand up tall with your arms at your sides.Hands beside your shoulder</li>
        //         //         <li>Keep your shoulders relaxed and down, not shrugged.</li>
        //         //         <li>Squeeze your shoulder blades together.</li>
        //         //         <li>Hold for <b>10 seconds,</b> then relax.</li>
        //         //         <li>Repeat <b>10 times</b>.</li>
        //         //     </ol>
        //         //     <img src="https://drive.google.com/uc?id=1qaBlFzCw0gAMqITbPNgcOG_6ZqcAOS2w"/>`
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "exerciseWindshieldWipers",
        //         //     "content": `Physical Therapy: Windshield Wipers. `,
        //         //     "instructions": `
        //         //         <ul>
        //         //             <li>Lay on your back</li>
        //         //             <li>Bend knees</li>
        //         //             <li>Slowly make a windshield wiper move with your knees each way.</li>
        //         //             <li>lift hip to go further</li>
        //         //             <li>Don’t rush and do it slowly</li>
        //         //             <li>Repeat <b>20 times</b>.</li>
        //         //             </ul>
        //         //         <img class="img-fluid" src="https://drive.google.com/uc?id=1co8m8Yb4Zc0n0pTItNQPeBeWRx9aBfE9"/>
        //         //         `
        //         // },

        //         // {
        //         //     "type": "todo",
        //         //     "id": "exerciseBookStretch",
        //         //     "content": `Physical Therapy: Book Stretch`,
        //         //     "instructions": `
        //         //     <ol>
        //         //         <li>Lie on your side with your knees bent and your arms extended in front of you, palms together.</li>
        //         //         <li>Keeping your knees and hips stationary, open your top arm and rotate it all the way to the other side, trying to touch the floor if possible.</li>
        //         //         <li>Your head and eyes should follow your hand as it moves.</li>
        //         //         <li>Hold the stretch for a few seconds, then return to the starting position.</li>
        //         //         <li>Repeat <b>10 times</b> on each side.</li>
        //         //         </ol>
        //         //     <img class="img-fluid"  src="https://drive.google.com/uc?id=1Fxp2oY5oJtw3Tc4rCga5-ONQ7w9XWsVC"/>
        //         //     `
        //         // },

        //         // {
        //         //     "type": "todo",
        //         //     "id": "exerciseBridge",
        //         //     "content": `Physical Therapy: Bridge`,
        //         //     "instructions": `
        //         //     <ol>
        //         //         <li>Lie on your back.</li>
        //         //         <li>Rest your hands at your sides, bend your knees, and place your feet flat on the bed.</li>
        //         //         <li>Raise your hips as high as you can confortable.</li>
        //         //         <li>Hold for <b>10 seconds</b>.</li>
        //         //         <li>Lower the hips to return to the starting position.</li>
        //         //         <li>Repeat <b>10 times</b>.</li>
        //         //     </ol>
        //         //     <img class="img-fluid" src="https://drive.google.com/uc?id=1bjHFpq68FKb5yYMgr5oo9zMuQRuX4w43"/>
        //         //     `
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "id": "floss",
        //         //     "content": "Floss Teeth. Use the colorful sandles towel hanging on the towl rack then hang it back up on the towel rack so it can dry.",
        //         // },
        //         // {
        //         //     "type": "todo",
        //         //     "content": "Pinkies:use massager all around the base of your pinkies <br> for 30 seconds each",
        //         //     "id": "handExercises",
        //         // },
        //     ],
        // },

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

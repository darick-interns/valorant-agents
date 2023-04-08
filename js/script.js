const tableBody = document.getElementById('table-content');
const tableButtons = document.querySelectorAll("th button");

const agentName = document.getElementById('agent-name');
const agentType = document.getElementById('agent-type');
const agentDescription = document.getElementById('agent-description');
let abilityDescription = document.getElementById('ability-description');
let abilityName = document.getElementById('ability-name');

let Qskill = document.getElementById('Qskill')
const skill1 = document.getElementById('skill1');
let Eskill = document.getElementById('Eskill')
const skill2 = document.getElementById('skill2');
let Cskill = document.getElementById('Cskill')
const skill3 = document.getElementById('skill3');
let Xskill = document.getElementById('Xskill')
const skill4 = document.getElementById('skill4');

//Agent type image
const typeLogo = document.getElementById('type-img');
//Agent picture
const AgentLogo = document.getElementById('agent-img');

    // Inserting agents to table
    // agent is looped
    agents.forEach(function(agent) {
        let row = document.createElement('tr');
        const numberCell = document.createElement('td');
            numberCell.style.textAlign = 'center';
            numberCell.textContent = agent.number; // insert agent number

            const agentCell = document.createElement('td'); 
            const agentIcon = document.createElement('img'); 
            agentIcon.src = agent.icon;
            agentCell.appendChild(agentIcon); //insert icon
    
            const nameList = document.createElement('a');
            nameList.textContent = agent.name;
            agentCell.appendChild(nameList); //insert aget name

        const typeCell = document.createElement('td');
            typeCell.textContent = agent.type; // insert agent type

        row.appendChild(numberCell);
        row.appendChild(agentCell);
        row.appendChild(typeCell);
        tableBody.appendChild(row);

        //Table buttons
        agentCell.addEventListener('click', showInfo)
        numberCell.addEventListener('click', showInfo)
        typeCell.addEventListener('click', showInfo)
        // Show infos when clicked in loop  
        function showInfo(){
        agentName.textContent = agent.name;
        agentType.textContent = agent.type;
        agentDescription.textContent = agent.Agentdescription; 

        typeLogo.src = agent.typeImg
        AgentLogo.src = agent.agentImg
        console.log(agent.typeImg)

        //Skill description default
        abilityName.textContent = agent.Abilities[0].skill
        abilityDescription.textContent = agent.Abilities[0].description

        //SHOWS SKILL BUTTON WHEN AGENTS IS CLICKED 
            /// Changes the skill description when abilities are clicked
                //Q Button with logo
                    skill1.src = agent.Abilities[0].img
                    function showQ(showInfo){
                        abilityName.textContent = agent.Abilities[0].skill
                        abilityDescription.textContent = agent.Abilities[0].description
                    }
                        Qskill.addEventListener('click', showQ)
                    //E button
                    skill2.src = agent.Abilities[1].img
                    function showE(showInfo){
                        abilityName.textContent = agent.Abilities[1].skill
                        abilityDescription.textContent = agent.Abilities[1].description
                    }
                        Eskill.addEventListener('click', showE)
                    // C button
                    skill3.src = agent.Abilities[2].img
                    function showC(showInfo){
                        abilityName.textContent = agent.Abilities[2].skill
                        abilityDescription.textContent = agent.Abilities[2].description
                    }
                        Cskill.addEventListener('click', showC)
                    // X button
                    skill4.src = agent.Abilities[3].img
                    function showX(showInfo){
                        abilityName.textContent = agent.Abilities[3].skill
                        abilityDescription.textContent = agent.Abilities[3].description
                    }
                        Xskill.addEventListener('click', showX)
       
            }   
            return row;
            }
        );   
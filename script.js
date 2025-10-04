document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("commandInput");
    const output = document.getElementById("output");
    const terminal = document.getElementById("terminal-container");
    const hint = document.getElementById("autocompleteHint");
    const mirror = document.getElementById("inputMirror");

    let commandHistory = [];
    let historyIndex = -1;

    const helpMessage = `
    <b>🌟 SOMAPURAM UDAY Portfolio v1.0</b><br>
    Welcome! This is an interactive portfolio. Explore by typing commands below or using the buttons on the right.<br>
    For a detailed view, download my <b>Resume</b> (choose domain via the terminal), check projects on <a href="https://github.com/udaycodespace" target="_blank">GitHub</a>, 
    connect on <a href="https://www.linkedin.com/in/somapuram-uday/" target="_blank">LinkedIn</a>, or drop a mail at 
    <a href="mailto:udaysomapuram@gmail.com">udaysomapuram@gmail.com</a>.<br><br>
    <b>💻 System Commands:</b><br>
    help - Show available commands<br>
    clear - Clear the terminal<br>
    <br>
    <b>👤 Personal Info:</b><br>
    whoami - Identity<br>
    status - Current status<br>
    experience - Internship/Work Experience<br>
    projects - Projects<br>
    skills - Skills<br>
    certifications - Certifications<br>
    others - Extracurriculars / Leadership / Open Source<br>
    resume - Download Resume<br>
    github - GitHub Portfolio<br>
    linkedin - LinkedIn Profile<br>
    `;

    const commands = {

        whoami: `<a href="https://www.linkedin.com/in/somapuram-uday/" target="_blank" class="custom-link">SOMAPURAM UDAY</a> | AI/ML, Data Science & Analytics Enthusiast, 4th Year CST Student`,

        status: `- Final Year (7th Sem CS Student @ GPREC)<br>
- Working on Final Year Project: Blockchain Cred System (Team: Shashi & Varshith)<br>
- Preparing for college placements<br>
- Interest/Core Domain: AI/ML, Data Science, Data Analytics`,

        experience: () => {
            const type = prompt("Select domain: (1) AI/ML | (2) Data Science | (3) Data Analytics");
            if(type==="1") return `
<b>AI/ML Internships:</b><br>
- AI + Azure Intern — Edunet Foundation — May–Jun 2025<br>
- AI & Deep Learning Intern — GENZ Educatewing — May–Jun 2025<br>
- AI/ML Intern — The Web Blinders — May 2025`;
            else if(type==="2") return `
<b>Data Science Internship:</b><br>
- Data Science Master Virtual Internship — Apr–Jun 2024`;
            else if(type==="3") return `
<b>Data Analytics Internships:</b><br>
- Data Analytics Intern — SmartInternz — May–Jun 2025`;
            else return "❌ Invalid option. Select 1, 2, or 3.";
        },

        projects: () => {
            const type = prompt("Select domain: (1) AI/ML | (2) Data Science | (3) Data Analytics");
            if(type==="1") return `
<b>AI/ML Projects:</b><br>
- Anime Recommendation System — Python, scikit-learn — May 2025<br>
- YOLOv8 Object Detection Pipeline — Python, TensorFlow/Keras, OpenCV — Jun 2025<br>
- Sentiment Analysis CNN — Python, TensorFlow/Keras — May–Jun 2025`;
            else if(type==="2") return `
<b>Data Science Projects:</b><br>
- Cosmetic Insights Dashboard — Python, Pandas, Tableau — May–Jul 2025<br>
- Mobile Device Usage Analysis — Python, Matplotlib, Seaborn — Jun 2025<br>
- Advanced Sales Forecasting — Python, Prophet + ARIMA — Sep 2025`;
            else if(type==="3") return `
<b>Data Analytics Projects:</b><br>
- Cosmetic Insights Dashboard — Tableau, Python, SQL — May–Jul 2025<br>
- Mobile Device Usage Analysis — Python, Matplotlib, Seaborn — Jun 2025`;
            else return "❌ Invalid option. Select 1, 2, or 3.";
        },

        skills: () => {
            const type = prompt("Select domain: (1) AI/ML | (2) Data Science | (3) Data Analytics");
            if(type==="1") return `Python, TensorFlow, Keras, PyTorch, CNN, NLP, YOLOv8, OpenCV, Clustering, Modular Pipelines`;
            else if(type==="2") return `Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, Tableau, Power BI, Regression, Classification, Generative AI, Dashboard Storytelling`;
            else if(type==="3") return `Python (Pandas, NumPy), SQL, Tableau, Power BI, Excel, EDA, Feature Engineering, KPI Analysis`;
            else return "❌ Invalid option. Select 1, 2, or 3.";
        },

        certifications: () => {
            const type = prompt("Select domain: (1) AI/ML | (2) Data Science | (3) Data Analytics");
            if(type==="1") return `Machine Learning for All — University of London (Aug 2025)<br>Google AI/ML Virtual Internship — EduSkills Foundation (Jan–Mar 2025)<br>Microsoft AI-900 — Microsoft / AICTE Edunet (Jun 2025)<br>Smart Coder Certification — Smart Interviews (Jul 2025)`;
            else if(type==="2") return `Data Science Foundations — University of London (Sep 2025)<br>Google Advanced Data Analytics — Google (Sep 2025)<br>Machine Learning for All — University of London (Aug 2025)`;
            else if(type==="3") return `Google Advanced Data Analytics — Google (Sep 2025)<br>Excel Basics for Data Analysis — SkillUp (Sep 2023)<br>Microsoft Excel Basics — Coursera (Aug 2024)`;
            else return "❌ Invalid option. Select 1, 2, or 3.";
        },

        others: `<b>Extracurriculars / Leadership:</b><br>
- Student Coordinator — CSI Chapter @ GPREC — Feb 2023–Present<br>
- Intensive Training Program — Smart Interviews / GPREC — Aug 2024–Jul 2025<br>
- Google Code-in 2018 — Open Source Contribution<br>
<b>Other Certifications / Skills:</b><br>
Infosys Springboard, EduSkills Academy, EduSkills Foundation, NPTEL, edX, Coursera, HKUST, UC Irvine`,

        resume: () => {
            const type = prompt("Select Resume: (1) AI/ML | (2) Data Science | (3) Data Analytics");
            let file = "";
            if(type==="1") file="resumes/resume_ai_ml.pdf";
            else if(type==="2") file="resumes/resume_datascience.pdf";
            else if(type==="3") file="resumes/resume_dataanalytics.pdf";
            else return "❌ Invalid selection!";

            const link = document.createElement("a");
            link.href = file;
            link.download = `SOMAPURAM_UDAY_Resume.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return "✅ Resume download initiated...";
        },

        github: () => { window.open("https://github.com/udaycodespace", "_blank"); return `Opening GitHub Portfolio...`; },
        linkedin: () => { window.open("https://www.linkedin.com/in/somapuram-uday/", "_blank"); return `Opening LinkedIn Profile...`; },
        help: helpMessage,
        clear: () => resetTerminal(),
    };

    const aliases = { h: "help", cls: "clear", r: "resume", gh: "github", ln: "linkedin" };
    const commandList = Object.keys(commands).concat(Object.keys(aliases));

    function processCommand(cmd){
        cmd = cmd.toLowerCase().trim();
        if(!cmd){ output.scrollTop = output.scrollHeight; return; }
        commandHistory.push(cmd);
        historyIndex = commandHistory.length;
        if(aliases[cmd]) cmd = aliases[cmd];
        let response = typeof commands[cmd] === "function" ? commands[cmd]() : commands[cmd] || `❌ Command not found: ${cmd}`;
        appendCommand(cmd, response);
    }

    function resetTerminal(){
        output.innerHTML = `
            <div class="help-message">
                Explore using the buttons below or type 'help' for commands.
            </div>
        `;
        input.value = "";
        hint.textContent = "";
    }

    function appendCommand(cmd, res){
        const line = document.createElement("div");
        line.classList.add("command-line");
        line.innerHTML = `<span class="prompt">λ</span> ${cmd}`;
        output.appendChild(line);
        const result = document.createElement("div");
        result.classList.add("command-result");
        result.innerHTML = res;
        output.appendChild(result);
        terminal.scrollTop = terminal.scrollHeight;
    }

    function updateAutocompleteHint(){
        const val = input.value;
        if(!val){ hint.textContent=""; return; }
        const match = commandList.find(c => c.startsWith(val));
        if(match){ hint.textContent = match.slice(val.length); mirror.textContent = val; hint.style.left = mirror.offsetWidth+"px"; }
        else hint.textContent="";
    }

    function autocompleteCommand(){
        const val = input.value;
        if(!val) return;
        const match = commandList.find(c => c.startsWith(val));
        if(match) input.value = match;
        hint.textContent="";
    }

    function createCommandBar(){
        const bar = document.getElementById("command-bar");
        const btnOrder = ["whoami","status","experience","projects","skills","certifications","others","resume","github","linkedin","help","clear"];
        btnOrder.forEach(cmd=>{
            const button = document.createElement("button");
            button.textContent = cmd;
            button.dataset.cmd = cmd;
            button.style.fontSize = "12px";
            button.addEventListener("click",()=>processCommand(cmd));
            bar.appendChild(button);
        });
    }

    input.addEventListener("keydown", function(e){
        if(e.key==="Enter"){ e.preventDefault(); processCommand(input.value.trim()); input.value=""; hint.textContent=""; }
        else if(e.key==="ArrowRight" || e.key==="Tab"){ e.preventDefault(); autocompleteCommand(); }
        else if(e.key==="ArrowUp"){ e.preventDefault(); if(historyIndex>0) input.value=commandHistory[--historyIndex]; }
        else if(e.key==="ArrowDown"){ e.preventDefault(); if(historyIndex<commandHistory.length-1) input.value=commandHistory[++historyIndex] || ""; else{ historyIndex = commandHistory.length; input.value=""; } }
    });

    input.addEventListener("input", updateAutocompleteHint);
    terminal.addEventListener("click", ()=>input.focus());

    resetTerminal();
    createCommandBar();
});

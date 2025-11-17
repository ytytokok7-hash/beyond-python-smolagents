// المواد والمعاملات حسب المستوى والشعبة
const data = {
    "2AS": {
        "آداب وفلسفة":[
            {name:"اللغة العربية",coef:6},
            {name:"الفلسفة",coef:6},
            {name:"الاجتماعيات",coef:4},
            {name:"اللغة الفرنسية",coef:3},
            {name:"اللغة الإنجليزية",coef:3},
            {name:"الرياضيات",coef:2},
            {name:"العلوم الشرعية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "علوم تجريبية":[
            {name:"العلوم الفيزيائية",coef:4},
            {name:"العلوم الطبيعية",coef:5},
            {name:"الرياضيات",coef:5},
            {name:"اللغة العربية",coef:2},
            {name:"اللغة الفرنسية",coef:2},
            {name:"اللغة الإنجليزية",coef:2},
            {name:"التربية الإسلامية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "رياضيات":[
            {name:"الرياضيات المتقدمة",coef:6},
            {name:"الفيزياء",coef:5},
            {name:"اللغة العربية",coef:2},
            {name:"اللغة الفرنسية",coef:2},
            {name:"اللغة الإنجليزية",coef:2},
            {name:"التربية الإسلامية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "الهندسة الميكانيكية":[
            {name:"الرياضيات التقنية",coef:5},
            {name:"الميكانيك",coef:6},
            {name:"الفيزياء التطبيقية",coef:4},
            {name:"اللغة العربية",coef:2},
            {name:"اللغة الفرنسية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "تسيير واقتصاد":[
            {name:"المحاسبة",coef:6},
            {name:"المالية والتمويل",coef:5},
            {name:"الرياضيات",coef:4},
            {name:"اللغة العربية",coef:2},
            {name:"اللغة الفرنسية",coef:2},
            {name:"اللغة الإنجليزية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "اللغات الأجنبية":[
            {name:"اللغة الإنجليزية",coef:6},
            {name:"اللغة الفرنسية",coef:6},
            {name:"اللغة العربية",coef:3},
            {name:"الرياضيات",coef:2},
            {name:"التربية البدنية",coef:1}
        ]
    },
    "Bac": {
        "آداب وفلسفة":[
            {name:"اللغة العربية",coef:6},
            {name:"الفلسفة",coef:6},
            {name:"الاجتماعيات",coef:4},
            {name:"اللغة الفرنسية",coef:3},
            {name:"اللغة الإنجليزية",coef:3},
            {name:"الرياضيات",coef:2},
            {name:"العلوم الشرعية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "علوم تجريبية":[
            {name:"العلوم الفيزيائية",coef:4},
            {name:"العلوم الطبيعية",coef:5},
            {name:"الرياضيات",coef:5},
            {name:"اللغة العربية",coef:2},
            {name:"اللغة الفرنسية",coef:2},
            {name:"اللغة الإنجليزية",coef:2},
            {name:"التربية الإسلامية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "رياضيات":[
            {name:"الرياضيات المتقدمة",coef:6},
            {name:"الفيزياء",coef:5},
            {name:"اللغة العربية",coef:2},
            {name:"اللغة الفرنسية",coef:2},
            {name:"اللغة الإنجليزية",coef:2},
            {name:"التربية الإسلامية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "الهندسة الميكانيكية":[
            {name:"الرياضيات التقنية",coef:5},
            {name:"الميكانيك",coef:6},
            {name:"الفيزياء التطبيقية",coef:4},
            {name:"اللغة العربية",coef:2},
            {name:"اللغة الفرنسية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "تسيير واقتصاد":[
            {name:"المحاسبة",coef:6},
            {name:"المالية والتمويل",coef:5},
            {name:"الرياضيات",coef:4},
            {name:"اللغة العربية",coef:2},
            {name:"اللغة الفرنسية",coef:2},
            {name:"اللغة الإنجليزية",coef:2},
            {name:"التربية البدنية",coef:1}
        ],
        "اللغات الأجنبية":[
            {name:"اللغة الإنجليزية",coef:6},
            {name:"اللغة الفرنسية",coef:6},
            {name:"اللغة العربية",coef:3},
            {name:"الرياضيات",coef:2},
            {name:"التربية البدنية",coef:1}
        ]
    }
};

// تحديث قائمة الشعب حسب المستوى
function updateBranches() {
    const level = document.getElementById("studentLevel").value;
    const branchSelect = document.getElementById("studentBranch");
    branchSelect.innerHTML = "<option value=''>-- اختر الشعبة --</option>";
    if(!level) return;

    Object.keys(data[level]).forEach(branch=>{
        const opt = document.createElement("option");
        opt.value = branch;
        opt.textContent = branch;
        branchSelect.appendChild(opt);
    });

    document.getElementById("subjectsContainer").innerHTML = "";
}

// إنشاء فورم المواد حسب الشعبة
function generateSubjects() {
    const level = document.getElementById("studentLevel").value;
    const branch = document.getElementById("studentBranch").value;
    const container = document.getElementById("subjectsContainer");
    container.innerHTML = "";

    if(!level || !branch) return;

    data[level][branch].forEach(subj=>{
        const row = document.createElement("div");
        row.className = "subject-row";

        const label = document.createElement("label");
        label.textContent = `${subj.name} (المعامل: ${subj.coef})`;

        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = "أدخل النقاط";
        input.dataset.coef = subj.coef;

        row.appendChild(label);
        row.appendChild(input);
        container.appendChild(row);
    });
}

// حساب المجموع والمعدل والتقدير
function calculate() {
    const name = document.getElementById("studentName").value.trim();
    const level = document.getElementById("studentLevel").value;
    const branch = document.getElementById("studentBranch").value;

    if(!name || !level || !branch) {
        alert("الرجاء إدخال الاسم، المستوى والشعبة!");
        return;
    }

    const inputs = Array.from(document.querySelectorAll("#subjectsContainer input"));
    let total = 0;
    let coefSum = 0;
    let subjectsPoints = [];

    inputs.forEach(input=>{
        const point = parseFloat(input.value) || 0;
        const coef = parseFloat(input.dataset.coef);
        total += point * coef;
        coefSum += coef;
        subjectsPoints.push(`${input.previousSibling.textContent}: ${point}`);
    });

    const average = (total/coefSum).toFixed(2);
    const grade = getGrade(average);

    document.getElementById("rName").textContent = name;
    document.getElementById("rLevel").textContent = level;
    document.getElementById("rBranch").textContent = branch;
    document.getElementById("rSubjects").textContent = subjectsPoints.join(", ");
    document.getElementById("rTotal").textContent = total;
    document.getElementById("rAverage").textContent = average;
    document.getElementById("rGrade").textContent = grade;

    document.getElementById("resultCard").style.display = "block";
}

function getGrade(avg) {
    if(avg >= 16) return "A";
    if(avg >= 14) return "B";
    if(avg >= 12) return "C";
    if(avg >= 10) return "D";
    return "F";
}

function printCard() {
    const cardContent = document.getElementById("resultCard").innerHTML;
    const newWin = window.open("", "", "width=600,height=600");
    newWin.document.write("<html><head><title>بطاقة الطالب</title></head><body style='font-family:Cairo;padding:20px;'>");
    newWin.document.write(cardContent);
    newWin.document.write("</body></html>");
    newWin.print();
    newWin.close();
}


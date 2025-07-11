// 1. Change Text
document.getElementById("changeTextBtn").onclick = () => {
    document.getElementById("textDisplay").textContent = "Hello, JavaScript!";
};

// 2. Toggle CSS Class
document.getElementById("toggleHighlightBtn").onclick = () => {
    document.querySelector(".box").classList.toggle("highlight");
};

// 3. Add List Item
document.getElementById("addItemBtn").onclick = () => {
    const input = document.getElementById("itemInput");
    const val = input.value.trim();
    if (val) {
        const li = document.createElement("li");
        li.textContent = val;
        document.getElementById("itemList").appendChild(li);
        input.value = "";
    }
    input.focus();
};

// 4. Remove Element
document.addEventListener("click", e => {
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
    }
});

// 5. Change Image
document.getElementById("changeImageBtn").onclick = () => {
    document.getElementById("mainImage").src = "1.jpg";
};

// 6. Alert Input
document.getElementById("submitUsername").onclick = () => {
    const val = document.getElementById("usernameInput").value;
    alert("Username: " + val);
    document.getElementById("usernameInput").value = "";
};


// 7. Alert Button Text
document.querySelectorAll(".colorBtn").forEach(btn => {
    btn.onclick = () => alert(btn.textContent);
});

// 8. Hover Background
const hoverBox = document.querySelector(".hoverBox");
hoverBox.onmouseenter = () => hoverBox.style.background = "lightblue";
hoverBox.onmouseleave = () => hoverBox.style.background = "";

// 9. Live Clock
setInterval(() => {
    const now = new Date();
    document.getElementById("clockDisplay").textContent = now.toLocaleTimeString();
}, 1000);

// 10. Email Validation
document.getElementById("validateBtn").onclick = () => {
    const email = document.getElementById("emailInput").value;
    const valid = /^\S+@\S+\.\S+$/.test(email);
    document.getElementById("errorMessage").textContent = valid ? "" : "Invalid email address.";
};

// 11. Hide Paragraph
document.getElementById("hideParaBtn").onclick = () => {
    document.getElementById("infoPara").style.display = "none";
};

// 12. Greeting
const hour = new Date().getHours();
const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
document.getElementById("greetingText").textContent = greeting;

// 13. Border on Error
document.getElementById("formSubmit").onclick = () => {
    const input = document.getElementById("nameInput");
    const error = document.getElementById("nameError");
    if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        error.textContent = "Name is required!";
    } else {
        input.style.border = "";
        error.textContent = "";
    }
};

// 14. Disable Button
document.getElementById("onceBtn").onclick = function () {
    this.disabled = true;
};

// 15. Character Count
document.getElementById("bioInput").oninput = function () {
    const remaining = 200 - this.value.length;
    document.getElementById("charCount").textContent = `Characters left: ${remaining}`;
};

// 16. Add Colored Box
document.getElementById("addBoxBtn").onclick = () => {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.display = "inline-block";
    box.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.margin = "5px";
    box.style.borderRadius = "6px";
    document.getElementById("boxContainer").appendChild(box);
};

// 17. Strike-through on Click
document.getElementById("todoList").onclick = e => {
    if (e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through";
    }
};

// 18. Show/Hide Password
document.getElementById("togglePassword").onchange = function () {
    const input = document.getElementById("passwordInput");
    input.type = this.checked ? "text" : "password";
};

// 19. Count Checked
document.querySelectorAll(".optionBox").forEach(box => {
    box.onchange = () => {
        const count = document.querySelectorAll(".optionBox:checked").length;
        document.getElementById("checkedCount").textContent = `Checked: ${count}`;
    };
});

// 20. Image Gallery
document.querySelectorAll(".thumbnail").forEach(img => {
    img.onclick = () => {
        document.getElementById("mainPhoto").src = img.src;
    };
});

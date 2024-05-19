const tabsContainer = document.querySelector(".tabs_container");
const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tabs_panels > section");

tabButtons.forEach((tab, index) => {
    if (index > 0) {
        tabPanels[index].setAttribute("hidden", "");
    }
});

tabsContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("a");
    if (!clickedTab) return;
    e.preventDefault();

    switchTab(clickedTab);
});

function switchTab(clickedTab) {
    const activePanelId = clickedTab.getAttribute("href");
    const activePanel = tabsContainer.querySelector(activePanelId);
    
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    activePanel.removeAttribute("hidden");
}

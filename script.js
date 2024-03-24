const tableContainer = document.getElementById('table');

const teams = [
    {
        img: "./images/logo-tpc.png",
        teamName: "TPC",
        gold: 0,
        silver: 0,
        bronze: 1
    },
    {
        img: "./images/logo-primos.jpeg",
        teamName: "PRIMOS",
        gold: 1,
        silver: 1,
        bronze: 2
    },
    {
        img: "./images/lanche.jpeg",
        teamName: "Clube do Lanche",
        gold: 1,
        silver: 1,
        bronze: 0
    },
    {
        img: "./images/hpa.jpeg",
        teamName: "Hope's Peak",
        gold: 0,
        silver: 0,
        bronze: 0
    }, 
    {
        img: "./images/dtroup.jpeg",
        teamName: "D-TROUP",
        gold: 2,
        silver: 2,
        bronze: 1
    }
];

const calculateTotalPoints = ({ gold, silver, bronze }) => gold * 3 + silver * 2 + bronze;

const sortedTeams = teams.map(team => ({
    ...team,
    total: calculateTotalPoints(team),
})).sort((a, b) => b.total - a.total);

const generateTable = (tableData) => {
    tableContainer.innerHTML = tableData.map((team, index) => `
        <div class="team">
            <p class="position">${index + 1}</p>
            <img src="${team.img}" alt="Logo ${team.teamName}" class="logo">
            <p>${team.teamName}</p>
            <div class="medals">
                <div class="medal gold">${team.gold}</div>
                <div class="medal silver">${team.silver}</div>
                <div class="medal bronze">${team.bronze}</div>
                <div class="medal all">${team.total}</div>
            </div>
        </div>
    `).join('');
};

generateTable(sortedTeams);

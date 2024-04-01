const tableContainer = document.getElementById('table');

const teams = [
    {
        img: "./images/logo-tpc.png",
        teamName: "TPC",
        gold: 4,
        silver: 7,
        bronze: 3
    },
    {
        img: "./images/logo-primos.jpeg",
        teamName: "PRIMOS",
        gold: 7,
        silver: 5,
        bronze: 7
    },
    {
        img: "./images/lanche.jpeg",
        teamName: "Clube do Lanche",
        gold: 1,
        silver: 2,
        bronze: 0
    },
    {
        img: "./images/hpa.jpeg",
        teamName: "Hope's Peak",
        gold: 0,
        silver: 0,
        bronze: 1
    }, 
    {
        img: "./images/dtroup.jpeg",
        teamName: "D-TROUP",
        gold: 5,
        silver: 3,
        bronze: 2
    }
];

const calculateTotalPoints = ({ gold, silver, bronze }) => gold * 3 + silver * 2 + bronze;

const sortedTeams = teams.map(team => ({
    ...team,
    total: calculateTotalPoints(team),
})).sort((a, b) => {
    if (b.total - a.total === 0) {
        if (b.gold - a.gold === 0) {
            if (b.silver - a.silver === 0) {
                return b.bronze - a.bronze;
            }
            return b.silver - a.silver;
        }
        return b.gold - a.gold;
    }
    return b.total - a.total;
});

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

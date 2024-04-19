const topCard = document.getElementById('top-card');
const midCard = document.getElementById('mid-card');
const botCard = document.getElementById('bottom-card');

const cards = [topCard, midCard, botCard];

const travellersBtn = document.getElementById('travellers-btn');
const travelorgsBtn = document.getElementById('travelOrgs-btn');
const employeesBtn = document.getElementById('employees-btn');

const btns = [travellersBtn, travelorgsBtn, employeesBtn];

travellersBtn.onclick = () => changeCard(travellersBtn, topCard)

travelorgsBtn.onclick = () => changeCard(travelorgsBtn, midCard);

employeesBtn.onclick = () => changeCard(employeesBtn, botCard);

const changeCard = (btn, card) => {
    cards.forEach(card => {
        card.classList.replace('targets__card_active', 'targets__card_inactive');
    })
    card.classList.replace('targets__card_inactive', 'targets__card_active');
    btns.forEach(btn => {
        btn.classList.remove('targets__tabs__btn_active');
    })
    btn.classList.add('targets__tabs__btn_active');
}
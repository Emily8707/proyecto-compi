document.addEventListener('DOMContentLoaded', function() {
    
    // 1. CARGAR ESTADÍSTICAS
    if (document.getElementById('statEvents')) {
        document.getElementById('statEvents').textContent = sportFestData.stats.events;
        document.getElementById('statSports').textContent = sportFestData.stats.sports;
        document.getElementById('statResults').textContent = sportFestData.stats.results;
    }

    // 2. CARGAR INAUGURACIÓN - PROTOCOLO
    const protocolContainer = document.getElementById('inaugurationProtocol');
    if (protocolContainer) {
        protocolContainer.innerHTML = sportFestData.inauguration.protocol.map(item => `
            <div class="timeline-item">
                <div class="time"><span class="time-icon">🕐</span> ${item.time}</div>
                <div class="activity">${item.activity}</div>
            </div>
        `).join('');
    }

    // 3. CARGAR INAUGURACIÓN - VALORES CON ICONOS
    const valuesContainer = document.getElementById('inaugurationValues');
    if (valuesContainer) {
        valuesContainer.innerHTML = sportFestData.inauguration.values.map(value => `
            <div class="value-item">
                <span class="value-icon">${value.icon}</span>
                ${value.label}
            </div>
        `).join('');
    }

    // 4. CARGAR REGLAS DE INAUGURACIÓN
    const rulesContainer = document.getElementById('inaugurationRules');
    if (rulesContainer) {
        rulesContainer.innerHTML = sportFestData.inauguration.rules.map((rule, index) => `
            <div class="rule-item type-${rule.type}">
                <span class="rule-icon">${rule.icon}</span>
                <span class="rule-text">${rule.text}</span>
            </div>
        `).join('');
    }

    // 5. CARGAR PISCINA
    const poolBible = document.getElementById('poolBible');
    if (poolBible) {
        poolBible.innerHTML = `<span class="bible-icon">📖</span> ${sportFestData.pool.bible}`;
    }

    const poolWomen = document.getElementById('poolWomen');
    if (poolWomen) {
        poolWomen.innerHTML = `
            <div class="dress-box-allowed">
                <div class="section-label">✅ Permitido:</div>
                ${sportFestData.pool.women.allowed.map(item => `
                    <div class="dress-item">
                        <span class="icon">${item.split(' ')[0]}</span>
                        <span class="dress-text">${item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="dress-box-notallowed">
                <div class="section-label">❌ No Permitido:</div>
                ${sportFestData.pool.women.notAllowed.map(item => `
                    <div class="dress-item">
                        <span class="icon">${item.split(' ')[0]}</span>
                        <span class="dress-text">${item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const poolMen = document.getElementById('poolMen');
    if (poolMen) {
        poolMen.innerHTML = `
            <div class="dress-box-allowed">
                <div class="section-label">✅ Permitido:</div>
                ${sportFestData.pool.men.allowed.map(item => `
                    <div class="dress-item">
                        <span class="icon">${item.split(' ')[0]}</span>
                        <span class="dress-text">${item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="dress-box-notallowed">
                <div class="section-label">❌ No Permitido:</div>
                ${sportFestData.pool.men.notAllowed.map(item => `
                    <div class="dress-item">
                        <span class="icon">${item.split(' ')[0]}</span>
                        <span class="dress-text">${item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const poolRules = document.getElementById('poolRules');
    if (poolRules) {
        poolRules.innerHTML = sportFestData.pool.rules.map(rule => `
            <div class="rule-item">
                <span class="rule-icon">${rule.icon}</span>
                <span class="rule-text">${rule.text}</span>
            </div>
        `).join('');
    }

    // 6. CARGAR ATLETISMO
    const athleticsBible = document.getElementById('athleticsBible');
    if (athleticsBible) {
        athleticsBible.innerHTML = `<span class="bible-icon">📖</span> ${sportFestData.athletics.bible}`;
    }

    const athleticsPrinciples = document.getElementById('athleticsPrinciples');
    if (athleticsPrinciples) {
        athleticsPrinciples.innerHTML = sportFestData.athletics.principles.map(item => `
            <div class="rule-item type-info">
                <span class="rule-icon">${item.split(' ')[0]}</span>
                <span class="rule-text">${item.substring(item.indexOf(' ') + 1)}</span>
            </div>
        `).join('');
    }

    const athleticsWomen = document.getElementById('athleticsWomen');
    if (athleticsWomen) {
        athleticsWomen.innerHTML = `
            <div class="dress-box-allowed">
                <div class="section-label">✅ Permitido:</div>
                ${sportFestData.athletics.women.allowed.map(item => `
                    <div class="dress-item">
                        <span class="icon">${item.split(' ')[0]}</span>
                        <span class="dress-text">${item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="dress-box-notallowed">
                <div class="section-label">❌ No Permitido:</div>
                ${sportFestData.athletics.women.notAllowed.map(item => `
                    <div class="dress-item">
                        <span class="icon">${item.split(' ')[0]}</span>
                        <span class="dress-text">${item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const athleticsMen = document.getElementById('athleticsMen');
    if (athleticsMen) {
        athleticsMen.innerHTML = `
            <div class="dress-box-allowed">
                <div class="section-label">✅ Permitido:</div>
                ${sportFestData.athletics.men.allowed.map(item => `
                    <div class="dress-item">
                        <span class="icon">${item.split(' ')[0]}</span>
                        <span class="dress-text">${item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="dress-box-notallowed">
                <div class="section-label">❌ No Permitido:</div>
                ${sportFestData.athletics.men.notAllowed.map(item => `
                    <div class="dress-item">
                        <span class="icon">${item.split(' ')[0]}</span>
                        <span class="dress-text">${item.substring(item.indexOf(' ') + 1)}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    const athleticsAdditional = document.getElementById('athleticsAdditional');
    if (athleticsAdditional) {
        athleticsAdditional.innerHTML = sportFestData.athletics.additional.map(item => `
            <div class="rule-item">
                <span class="rule-icon">${item.split(' ')[0]}</span>
                <span class="rule-text">${item.substring(item.indexOf(' ') + 1)}</span>
            </div>
        `).join('');
    }

    // 7. CARGAR CRONOGRAMA
    const scheduleContainer = document.getElementById('scheduleContainer');
    if (scheduleContainer) {
        const allEvents = [];
        
        function addEvents(category, events) {
            events.forEach(event => {
                allEvents.push({
                    ...event,
                    category: category,
                    categoryLabel: getCategoryLabel(category),
                    categoryIcon: getCategoryIcon(category)
                });
            });
        }

        function getCategoryLabel(cat) {
            const labels = {
                'inauguration': 'Inauguración',
                'football': 'Fútbol',
                'athletics': 'Atletismo',
                'basketball': 'Básquetbol',
                'swimming': 'Natación',
                'chess': 'Ajedrez',
                'awards': 'Premiación'
            };
            return labels[cat] || cat;
        }

        function getCategoryIcon(cat) {
            const icons = {
                'inauguration': '🎤',
                'football': '⚽',
                'athletics': '🏃',
                'basketball': '🏀',
                'swimming': '🏊',
                'chess': '♟',
                'awards': '🏆'
            };
            return icons[cat] || '📌';
        }

        addEvents('inauguration', sportFestData.schedule.inauguration);
        addEvents('football', sportFestData.schedule.football);
        addEvents('athletics', sportFestData.schedule.athletics);
        addEvents('basketball', sportFestData.schedule.basketball);
        addEvents('swimming', sportFestData.schedule.swimming);
        addEvents('chess', sportFestData.schedule.chess);
        addEvents('awards', sportFestData.schedule.awards);

        allEvents.sort((a, b) => a.time.localeCompare(b.time));

        scheduleContainer.innerHTML = allEvents.map(event => `
            <div class="schedule-item" data-category="${event.category}">
                <div class="time">${event.time}</div>
                <div class="activity">
                    ${event.activity}
                    <span class="sport-badge badge-${event.category}">${event.categoryIcon} ${event.categoryLabel}</span>
                </div>
                <div class="venue">${event.venue}</div>
            </div>
        `).join('');
    }

    // 8. FILTROS
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            const items = document.querySelectorAll('.schedule-item');

            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'grid';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 9. PREMIACIONES - ESTILO VERTICAL COMO EN LA IMAGEN
const awardsContainer = document.getElementById('awardsSchedule');
if (awardsContainer) {
    awardsContainer.innerHTML = sportFestData.schedule.awards.map(item => `
        <div class="award-item-vertical">
            <div class="award-time-vertical">${item.time}</div>
            <div class="award-activity-vertical">${item.activity}</div>
            <div class="award-venue-vertical">${item.venue}</div>
        </div>
    `).join('');
}
});
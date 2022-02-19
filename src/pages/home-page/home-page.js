import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Відкритий світ'],
        price: 2343,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "На вас чекає нескінченний калейдоскоп пригод Horizon! Здійснюйте захоплюючі поїздки неймовірно красивим і самобутнім світом Мексики за кермом найбільших автомобілів в історії. Почніть свою пригоду Horizon вже сьогодні, додавши гру до свого списку бажань!",
    },
    {
        image: '/game-covers/sims_4.jpeg',
        title: 'Sims 4',
        genres: ['Симулятор життя', 'Симулятор навчання'],
        price: 750,
        video: 'https://www.youtube.com/embed/z00mK3Pxc8w',
        id: 2,
        description: "Дайте волю своїй уяві та створіть світ з унікальними сімами! Вибирайте та змінюйте будь-які деталі як симів, так і їхніх будинків. І це ще не все! Вибирайте зовнішність, характер та вбрання для своїх симів та вирішуйте, як вони будуть проводити свої дні.\n" +
            "\n" +
            "Проектуйте та будуйте чудові будинки для кожної сім'ї та вибирайте меблі та декор. Подорожуйте різними містами, зустрічайте інших симів і знайомтеся з їхнім життям.\n" +
            "\n" +
            "Відкрийте для себе чудові місця з унікальними краєвидами та знаходите захоплюючі пригоди. Слідкуйте за повсякденним життям симів та обігруйте реалістичні чи фантастичні сценарії! Розповідайте свої історії, а також будуйте стосунки, займайтеся кар'єрою, досягайте життєвих цілей — пориньте в незвичайну гру, в якій ваші можливості безмежні.",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Екшн', 'Шутер', 'Війна'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 2433,
        id: 3,
        description: 'Battlefield™ 2042 – це шутер від першої особи, в якому серія повертається до легендарних масштабних битв. У майбутньому, де панує хаос, адаптуйтеся і процвітайте на полях бою, що постійно змінюються, завдяки своєму загону та арсеналу новітніх технологій.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глибокий сюжет', 'Протагоністка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 3021,
        id: 4,
        description: 'Алекс Чень від усіх приховує своє «прокляття» — надприродну здатність зчитувати сильні емоції інших та впливати на них. Але коли її брат гине — нібито внаслідок нещасного випадку, Алекс використовує її, щоб дізнатися правду.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Відкритий світ', 'Екшн'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 789,
        id: 5,
        description: 'Grand Theft Auto V для PC дозволяє гравцям досліджувати знаменитий світ Лос-Сантоса та округу Блейн у роздільній здатності до 4k і вище з частотою 60 кадрів на секунду.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 982,
        id: 6,
        description: 'Tom Clancy\'s Rainbow Six Осада – це продовження гучного шутера від першої особи, розробленої студією Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Відкритий світ'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2863,
        id: 7,
        description: 'Assassin\'s Creed Valhalla – мультиплатформенна комп\'ютерна гра у жанрі action/RPG, розроблена студією Ubisoft Montreal під видавництвом компанії Ubisoft. Є дванадцятою грою у серії ігор Assassin Creed.'
    },
    {
        image: '/game-covers/baldurs.jpg',
        title: 'Baldur`s gate III',
        genres: ['РПГ', 'Квест', 'Стратегічна гра'],
        video: 'https://www.youtube.com/embed/t9yyRvAiXvc',
        price: 10000,
        id: 8,
        description: 'Baldur Gate III – це третина знаменитої рольової серії, яка відійшла від BioWare до Larian. Гра будується на пятій версії правил Dungeons and Dragons, а також розповідає нову історію. У центрі уваги - раптова атака іллітідів, свіжів розуму, які нападають на міста та селища з метою викрадення людей. Головний герой та його потенційні компаньйони – одні з викрадених людей, яким іллітиди вживили в голову своїх личинок. Героям належить знайти спосіб позбутися їх доти, як завершиться цереброморфирование. Третя частина серії заснована на пятій редакції правил D&D, тому багато речей, знайомих фанатам оригінальної дилогії змінилися. Наприклад, бойова система в BG3 - покрокова, а чи не RTWP, одночасно групи може бути трохи більше чотирьох компаньйонів тощо'
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
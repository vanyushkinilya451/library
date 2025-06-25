import { CONSTANTS } from 'shared/lib';

const DATE_RANGE = '[2000 TO *]';

const getApi = (subject: string) => {
  return `${CONSTANTS.OL_SEARCH_BOOKS}?q=subject:${subject} AND first_publish_year:${DATE_RANGE}&sort=editions`;
};

export const shelvesConfig = [
  {
    title: 'Фэнтези',
    api: getApi('fantasy'),
  },
  {
    title: 'Детективы',
    api: getApi('mystery'),
  },
  {
    title: 'Романы',
    api: getApi('romance'),
  },
  {
    title: 'Триллеры',
    api: getApi('thriller'),
  },
  {
    title: 'Историческая литература',
    api: getApi('historical fiction'),
  },
  {
    title: 'Биографии',
    api: getApi('biography'),
  },
  {
    title: 'Научная литература',
    api: getApi('science'),
  },
  {
    title: 'Психология',
    api: getApi('psychology'),
  },
  {
    title: 'Поэзия',
    api: getApi('poetry'),
  },
  {
    title: 'Драма',
    api: getApi('drama'),
  },
  {
    title: 'Ужасы',
    api: getApi('horror'),
  },
  {
    title: 'Приключения',
    api: getApi('adventure'),
  },
  {
    title: 'Комиксы и графические романы',
    api: getApi('graphic novels'),
  },
  {
    title: 'Детская литература',
    api: getApi("children's literature"),
  },
  {
    title: 'Философия',
    api: getApi('philosophy'),
  },
  {
    title: 'Экономика',
    api: getApi('economics'),
  },
  {
    title: 'Политика',
    api: getApi('politics'),
  },
  {
    title: 'Технологии',
    api: getApi('technology'),
  },
  {
    title: 'Искусство',
    api: getApi('art'),
  },
  {
    title: 'Путешествия',
    api: getApi('travel'),
  },
  {
    title: 'Научная фантастика',
    api: getApi('science fiction'),
  },
  {
    title: 'Классическая литература',
    api: getApi('classic literature'),
  },
  {
    title: 'Современная литература',
    api: getApi('contemporary literature'),
  },
  {
    title: 'Военная литература',
    api: getApi('military fiction'),
  },
  {
    title: 'Западная литература',
    api: getApi('western fiction'),
  },
  {
    title: 'Криминальная литература',
    api: getApi('crime fiction'),
  },
  {
    title: 'Политический триллер',
    api: getApi('political thriller'),
  },
  {
    title: 'Медицинский триллер',
    api: getApi('medical thriller'),
  },
  {
    title: 'Юридический триллер',
    api: getApi('legal thriller'),
  },
  {
    title: 'Психологический триллер',
    api: getApi('psychological thriller'),
  },
  {
    title: 'Любовный роман',
    api: getApi('romance novel'),
  },
  {
    title: 'Исторический роман',
    api: getApi('historical romance'),
  },
  {
    title: 'Современный роман',
    api: getApi('contemporary romance'),
  },
  {
    title: 'Паранормальный роман',
    api: getApi('paranormal romance'),
  },
  {
    title: 'Молодежная литература',
    api: getApi('young adult'),
  },
  {
    title: 'Подростковая литература',
    api: getApi('teen fiction'),
  },
  {
    title: 'Детские сказки',
    api: getApi('fairy tales'),
  },
  {
    title: 'Детские стихи',
    api: getApi('children poetry'),
  },
  {
    title: 'Образовательная литература',
    api: getApi('educational'),
  },
  {
    title: 'Учебная литература',
    api: getApi('textbook'),
  },
  {
    title: 'Словари',
    api: getApi('dictionary'),
  },
  {
    title: 'Энциклопедии',
    api: getApi('encyclopedia'),
  },
  {
    title: 'Справочники',
    api: getApi('reference'),
  },
  {
    title: 'Кулинария',
    api: getApi('cooking'),
  },
  {
    title: 'Диеты и питание',
    api: getApi('nutrition'),
  },
  {
    title: 'Здоровье и медицина',
    api: getApi('health'),
  },
  {
    title: 'Фитнес и спорт',
    api: getApi('fitness'),
  },
  {
    title: 'Йога',
    api: getApi('yoga'),
  },
  {
    title: 'Медитация',
    api: getApi('meditation'),
  },
  {
    title: 'Саморазвитие',
    api: getApi('self-help'),
  },
  {
    title: 'Мотивация',
    api: getApi('motivation'),
  },
  {
    title: 'Бизнес',
    api: getApi('business'),
  },
  {
    title: 'Менеджмент',
    api: getApi('management'),
  },
  {
    title: 'Маркетинг',
    api: getApi('marketing'),
  },
  {
    title: 'Предпринимательство',
    api: getApi('entrepreneurship'),
  },
  {
    title: 'Финансы',
    api: getApi('finance'),
  },
  {
    title: 'Инвестиции',
    api: getApi('investing'),
  },
  {
    title: 'Бухгалтерия',
    api: getApi('accounting'),
  },
  {
    title: 'Право',
    api: getApi('law'),
  },
  {
    title: 'Конституционное право',
    api: getApi('constitutional law'),
  },
  {
    title: 'Уголовное право',
    api: getApi('criminal law'),
  },
  {
    title: 'Гражданское право',
    api: getApi('civil law'),
  },
  {
    title: 'Международное право',
    api: getApi('international law'),
  },
  {
    title: 'Социология',
    api: getApi('sociology'),
  },
  {
    title: 'Антропология',
    api: getApi('anthropology'),
  },
  {
    title: 'Археология',
    api: getApi('archaeology'),
  },
  {
    title: 'История',
    api: getApi('history'),
  },
  {
    title: 'Древняя история',
    api: getApi('ancient history'),
  },
  {
    title: 'Средневековая история',
    api: getApi('medieval history'),
  },
  {
    title: 'Новая история',
    api: getApi('modern history'),
  },
  {
    title: 'Всемирная история',
    api: getApi('world history'),
  },
  {
    title: 'География',
    api: getApi('geography'),
  },
  {
    title: 'Климатология',
    api: getApi('climatology'),
  },
  {
    title: 'Экология',
    api: getApi('ecology'),
  },
  {
    title: 'Охрана окружающей среды',
    api: getApi('environmental protection'),
  },
  {
    title: 'Биология',
    api: getApi('biology'),
  },
  {
    title: 'Генетика',
    api: getApi('genetics'),
  },
  {
    title: 'Микробиология',
    api: getApi('microbiology'),
  },
  {
    title: 'Ботаника',
    api: getApi('botany'),
  },
  {
    title: 'Зоология',
    api: getApi('zoology'),
  },
  {
    title: 'Химия',
    api: getApi('chemistry'),
  },
  {
    title: 'Органическая химия',
    api: getApi('organic chemistry'),
  },
  {
    title: 'Неорганическая химия',
    api: getApi('inorganic chemistry'),
  },
  {
    title: 'Физика',
    api: getApi('physics'),
  },
  {
    title: 'Квантовая физика',
    api: getApi('quantum physics'),
  },
  {
    title: 'Астрофизика',
    api: getApi('astrophysics'),
  },
  {
    title: 'Астрономия',
    api: getApi('astronomy'),
  },
  {
    title: 'Космология',
    api: getApi('cosmology'),
  },
  {
    title: 'Математика',
    api: getApi('mathematics'),
  },
  {
    title: 'Алгебра',
    api: getApi('algebra'),
  },
  {
    title: 'Геометрия',
    api: getApi('geometry'),
  },
  {
    title: 'Тригонометрия',
    api: getApi('trigonometry'),
  },
  {
    title: 'Исчисление',
    api: getApi('calculus'),
  },
  {
    title: 'Статистика',
    api: getApi('statistics'),
  },
  {
    title: 'Теория вероятностей',
    api: getApi('probability theory'),
  },
  {
    title: 'Информатика',
    api: getApi('computer science'),
  },
  {
    title: 'Программирование',
    api: getApi('programming'),
  },
  {
    title: 'Искусственный интеллект',
    api: getApi('artificial intelligence'),
  },
  {
    title: 'Машинное обучение',
    api: getApi('machine learning'),
  },
  {
    title: 'Кибербезопасность',
    api: getApi('cybersecurity'),
  },
  {
    title: 'Веб-разработка',
    api: getApi('web development'),
  },
  {
    title: 'Мобильная разработка',
    api: getApi('mobile development'),
  },
  {
    title: 'Базы данных',
    api: getApi('databases'),
  },
  {
    title: 'Сетевая безопасность',
    api: getApi('network security'),
  },
  {
    title: 'Операционные системы',
    api: getApi('operating systems'),
  },
  {
    title: 'Архитектура программного обеспечения',
    api: getApi('software architecture'),
  },
  {
    title: 'Дизайн пользовательского интерфейса',
    api: getApi('user interface design'),
  },
  {
    title: 'UX дизайн',
    api: getApi('user experience design'),
  },
  {
    title: 'Графический дизайн',
    api: getApi('graphic design'),
  },
  {
    title: 'Веб-дизайн',
    api: getApi('web design'),
  },
  {
    title: 'Типографика',
    api: getApi('typography'),
  },
  {
    title: 'Фотография',
    api: getApi('photography'),
  },
  {
    title: 'Кинематограф',
    api: getApi('cinematography'),
  },
  {
    title: 'Музыка',
    api: getApi('music'),
  },
  {
    title: 'Теория музыки',
    api: getApi('music theory'),
  },
  {
    title: 'Композиция',
    api: getApi('composition'),
  },
  {
    title: 'Театр',
    api: getApi('theater'),
  },
  {
    title: 'Актерское мастерство',
    api: getApi('acting'),
  },
  {
    title: 'Режиссура',
    api: getApi('directing'),
  },
  {
    title: 'Скульптура',
    api: getApi('sculpture'),
  },
  {
    title: 'Живопись',
    api: getApi('painting'),
  },
  {
    title: 'Архитектура',
    api: getApi('architecture'),
  },
  {
    title: 'Интерьерный дизайн',
    api: getApi('interior design'),
  },
  {
    title: 'Ландшафтный дизайн',
    api: getApi('landscape design'),
  },
  {
    title: 'Мода',
    api: getApi('fashion'),
  },
  {
    title: 'Стиль и красота',
    api: getApi('beauty'),
  },
  {
    title: 'Косметология',
    api: getApi('cosmetology'),
  },
  {
    title: 'Парикмахерское искусство',
    api: getApi('hairdressing'),
  },
  {
    title: 'Спорт',
    api: getApi('sports'),
  },
  {
    title: 'Футбол',
    api: getApi('football'),
  },
  {
    title: 'Баскетбол',
    api: getApi('basketball'),
  },
  {
    title: 'Теннис',
    api: getApi('tennis'),
  },
  {
    title: 'Бокс',
    api: getApi('boxing'),
  },
  {
    title: 'Борьба',
    api: getApi('wrestling'),
  },
  {
    title: 'Плавание',
    api: getApi('swimming'),
  },
  {
    title: 'Легкая атлетика',
    api: getApi('athletics'),
  },
  {
    title: 'Гимнастика',
    api: getApi('gymnastics'),
  },
  {
    title: 'Лыжный спорт',
    api: getApi('skiing'),
  },
  {
    title: 'Сноуборд',
    api: getApi('snowboarding'),
  },
  {
    title: 'Серфинг',
    api: getApi('surfing'),
  },
  {
    title: 'Альпинизм',
    api: getApi('mountaineering'),
  },
  {
    title: 'Туризм',
    api: getApi('tourism'),
  },
  {
    title: 'Экотуризм',
    api: getApi('ecotourism'),
  },
  {
    title: 'Гастрономический туризм',
    api: getApi('culinary tourism'),
  },
  {
    title: 'Культурный туризм',
    api: getApi('cultural tourism'),
  },
  {
    title: 'Религия',
    api: getApi('religion'),
  },
  {
    title: 'Христианство',
    api: getApi('christianity'),
  },
  {
    title: 'Ислам',
    api: getApi('islam'),
  },
  {
    title: 'Буддизм',
    api: getApi('buddhism'),
  },
  {
    title: 'Иудаизм',
    api: getApi('judaism'),
  },
  {
    title: 'Индуизм',
    api: getApi('hinduism'),
  },
  {
    title: 'Мифология',
    api: getApi('mythology'),
  },
  {
    title: 'Эзотерика',
    api: getApi('esotericism'),
  },
  {
    title: 'Астрология',
    api: getApi('astrology'),
  },
  {
    title: 'Нумерология',
    api: getApi('numerology'),
  },
  {
    title: 'Таро',
    api: getApi('tarot'),
  },
  {
    title: 'Языкознание',
    api: getApi('linguistics'),
  },
  {
    title: 'Английский язык',
    api: getApi('english language'),
  },
  {
    title: 'Русский язык',
    api: getApi('russian language'),
  },
  {
    title: 'Испанский язык',
    api: getApi('spanish language'),
  },
  {
    title: 'Французский язык',
    api: getApi('french language'),
  },
  {
    title: 'Немецкий язык',
    api: getApi('german language'),
  },
  {
    title: 'Китайский язык',
    api: getApi('chinese language'),
  },
  {
    title: 'Японский язык',
    api: getApi('japanese language'),
  },
  {
    title: 'Арабский язык',
    api: getApi('arabic language'),
  },
  {
    title: 'Итальянский язык',
    api: getApi('italian language'),
  },
  {
    title: 'Португальский язык',
    api: getApi('portuguese language'),
  },
  {
    title: 'Корейский язык',
    api: getApi('korean language'),
  },
  {
    title: 'Хинди',
    api: getApi('hindi'),
  },
  {
    title: 'Перевод',
    api: getApi('translation'),
  },
  {
    title: 'Лексикография',
    api: getApi('lexicography'),
  },
  {
    title: 'Фонетика',
    api: getApi('phonetics'),
  },
  {
    title: 'Морфология',
    api: getApi('morphology'),
  },
  {
    title: 'Синтаксис',
    api: getApi('syntax'),
  },
  {
    title: 'Семантика',
    api: getApi('semantics'),
  },
  {
    title: 'Прагматика',
    api: getApi('pragmatics'),
  },
  {
    title: 'Педагогика',
    api: getApi('pedagogy'),
  },
];

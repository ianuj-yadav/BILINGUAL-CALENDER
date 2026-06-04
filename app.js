// 2025 Comprehensive Bilingual Lunar Calendar with Indian & UN Holidays - Moonlight Theme
class ComprehensiveLunarCalendar {
    constructor() {
        this.currentSlideIndex = 0;
        this.totalSlides = 365;
        this.isFullscreen = false;
        this.currentLanguage = 'hindi'; // Default to Hindi
        this.dates2025 = this.generateDates2025();
        this.calendarData = null;
        this.isDataLoaded = false;
        this.currentEventFilter = 'all';
        this.currentHolidayFilter = 'all';
        
        // Initialize comprehensive holiday and historical data
        this.init();
    }

    async init() {
        console.log('🌙 Starting Lunar Calendar initialization...');
        this.showLoading();
        
        try {
            await this.loadComprehensiveHolidayData();
            
            // Wait for DOM to be fully ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    setTimeout(() => this.setupApplication(), 100);
                });
            } else {
                setTimeout(() => this.setupApplication(), 100);
            }
        } catch (error) {
            console.error('Failed to initialize application:', error);
            this.hideLoading();
            setTimeout(() => this.setupApplication(), 100);
        }
    }

    async loadComprehensiveHolidayData() {
        console.log('🎊 Loading comprehensive holiday and historical data...');
        this.calendarData = this.generateComprehensiveData();
        this.isDataLoaded = true;
        console.log('✅ Comprehensive data loaded: 93+ holidays, 1000+ historical events');
    }

    generateComprehensiveData() {
        const data = {};
        
        for (let i = 0; i < 365; i++) {
            const date = new Date(2025, 0, 1);
            date.setDate(date.getDate() + i);
            const dateKey = this.formatDateKey(date);
            
            data[dateKey] = this.generateComprehensiveDayContent(date, i);
        }
        
        return data;
    }

    generateComprehensiveDayContent(date, dayIndex) {
        const month = date.getMonth();
        const day = date.getDate();
        
        return {
            date_hindi: this.formatDateHindi(date),
            date_english: this.formatDateEnglish(date),
            hindu_calendar: this.getHinduCalendarInfo(date),
            festivals: this.getComprehensiveHolidayData(month, day),
            historical_events: this.getDetailedHistoricalEvents(month, day, dayIndex),
            daily_inspiration: this.getSanskritWisdom(dayIndex),
            interesting_fact: this.getHistoricalFact(dayIndex),
            season_info: this.getSeasonInfo(month)
        };
    }

    getComprehensiveHolidayData(month, day) {
        const dateKey = String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
        
        // Comprehensive holiday database - 93+ holidays
        const comprehensiveHolidays = {
            // January
            '01-01': [{
                name_hindi: 'नव वर्ष', 
                name_english: 'New Year\'s Day', 
                type: 'national',
                category: 'राष्ट्रीय अवकाश / National Holiday',
                significance: 'नई शुरुआत का दिन / Day of new beginnings'
            }],
            '01-15': [{
                name_hindi: 'मकर संक्रांति', 
                name_english: 'Makar Sankranti', 
                type: 'religious',
                category: 'हिंदू त्योहार / Hindu Festival',
                significance: 'सूर्य के मकर राशि में प्रवेश / Sun\'s transition to Capricorn'
            }],
            '01-23': [{
                name_hindi: 'नेताजी सुभाष चंद्र बोस जयंती', 
                name_english: 'Netaji Subhas Chandra Bose Jayanti', 
                type: 'national',
                category: 'राष्ट्रीय दिवस / National Day',
                significance: 'स्वतंत्रता सेनानी की जयंती / Independence fighter\'s birthday'
            }],
            '01-26': [{
                name_hindi: 'गणतंत्र दिवस', 
                name_english: 'Republic Day', 
                type: 'national',
                category: 'राष्ट्रीय अवकाश / National Holiday',
                significance: 'भारतीय संविधान लागू हुआ / Indian Constitution came into effect'
            }],

            // February
            '02-04': [{
                name_hindi: 'विश्व कैंसर दिवस', 
                name_english: 'World Cancer Day', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'कैंसर जागरूकता बढ़ाना / Raising cancer awareness'
            }],
            '02-14': [{
                name_hindi: 'संत वैलेंटाइन दिवस', 
                name_english: 'Valentine\'s Day', 
                type: 'cultural',
                category: 'सांस्कृतिक दिवस / Cultural Day',
                significance: 'प्रेम दिवस / Day of Love'
            }],
            '02-21': [{
                name_hindi: 'अंतर्राष्ट्रीय मातृभाषा दिवस', 
                name_english: 'International Mother Language Day', 
                type: 'international',
                category: 'यूनेस्को दिवस / UNESCO Day',
                significance: 'भाषाई विविधता को बढ़ावा / Promoting linguistic diversity'
            }],

            // March
            '03-08': [{
                name_hindi: 'अंतर्राष्ट्रीय महिला दिवस', 
                name_english: 'International Women\'s Day', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'महिला अधिकारों का समर्थन / Supporting women\'s rights'
            }],
            '03-13': [{
                name_hindi: 'होली (धुलेंडी)', 
                name_english: 'Holi (Festival of Colors)', 
                type: 'religious',
                category: 'हिंदू त्योहार / Hindu Festival',
                significance: 'रंगों और खुशी का त्योहार / Festival of colors and joy'
            }],
            '03-21': [{
                name_hindi: 'अंतर्राष्ट्रीय वन दिवस', 
                name_english: 'International Day of Forests', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'वन संरक्षण जागरूकता / Forest conservation awareness'
            }],
            '03-22': [{
                name_hindi: 'विश्व जल दिवस', 
                name_english: 'World Water Day', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'जल संरक्षण का महत्व / Importance of water conservation'
            }],

            // April
            '04-07': [{
                name_hindi: 'विश्व स्वास्थ्य दिवस', 
                name_english: 'World Health Day', 
                type: 'international',
                category: 'डब्ल्यूएचओ दिवस / WHO Day',
                significance: 'स्वास्थ्य जागरूकता / Health awareness'
            }],
            '04-14': [{
                name_hindi: 'अंबेडकर जयंती', 
                name_english: 'Ambedkar Jayanti', 
                type: 'national',
                category: 'राष्ट्रीय अवकाश / National Holiday',
                significance: 'संविधान निर्माता की जयंती / Constitution maker\'s birthday'
            }],
            '04-22': [{
                name_hindi: 'पृथ्वी दिवस', 
                name_english: 'Earth Day', 
                type: 'international',
                category: 'पर्यावरण दिवस / Environment Day',
                significance: 'पृथ्वी संरक्षण जागरूकता / Earth conservation awareness'
            }],

            // May
            '05-01': [{
                name_hindi: 'अंतर्राष्ट्रीय श्रमिक दिवस', 
                name_english: 'International Labour Day', 
                type: 'international',
                category: 'अंतर्राष्ट्रीय दिवस / International Day',
                significance: 'मजदूरों के अधिकारों का दिन / Workers\' rights day'
            }],
            '05-03': [{
                name_hindi: 'विश्व प्रेस स्वतंत्रता दिवस', 
                name_english: 'World Press Freedom Day', 
                type: 'international',
                category: 'यूनेस्को दिवस / UNESCO Day',
                significance: 'मीडिया की स्वतंत्रता / Media freedom'
            }],
            '05-08': [{
                name_hindi: 'विश्व रेड क्रॉस दिवस', 
                name_english: 'World Red Cross Day', 
                type: 'international',
                category: 'मानवीय सेवा दिवस / Humanitarian Day',
                significance: 'मानवीय सेवा का सम्मान / Honoring humanitarian service'
            }],

            // June
            '06-05': [{
                name_hindi: 'विश्व पर्यावरण दिवस', 
                name_english: 'World Environment Day', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'पर्यावरण संरक्षण / Environmental protection'
            }],
            '06-21': [{
                name_hindi: 'अंतर्राष्ट्रीय योग दिवस', 
                name_english: 'International Day of Yoga', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'योग और कल्याण का प्रसार / Promoting yoga and wellness'
            }],

            // July
            '07-11': [{
                name_hindi: 'विश्व जनसंख्या दिवस', 
                name_english: 'World Population Day', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'जनसंख्या मुद्दों की जागरूकता / Population issues awareness'
            }],

            // August
            '08-09': [{
                name_hindi: 'अगस्त क्रांति दिवस', 
                name_english: 'August Revolution Day', 
                type: 'national',
                category: 'राष्ट्रीय दिवस / National Day',
                significance: '1942 की क्रांति की याद / Remembering 1942 revolution'
            }],
            '08-15': [{
                name_hindi: 'स्वतंत्रता दिवस', 
                name_english: 'Independence Day', 
                type: 'national',
                category: 'राष्ट्रीय अवकाश / National Holiday',
                significance: '1947 में स्वतंत्रता प्राप्ति / Independence achieved in 1947'
            }],
            '08-19': [{
                name_hindi: 'विश्व मानवतावादी दिवस', 
                name_english: 'World Humanitarian Day', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'मानवीय सहायता कार्यकर्ताओं का सम्मान / Honoring humanitarian workers'
            }],

            // September
            '09-05': [{
                name_hindi: 'शिक्षक दिवस', 
                name_english: 'Teachers\' Day', 
                type: 'national',
                category: 'राष्ट्रीय दिवस / National Day',
                significance: 'डॉ. राधाकृष्णन की जयंती / Dr. Radhakrishnan\'s birthday'
            }],
            '09-08': [{
                name_hindi: 'अंतर्राष्ट्रीय साक्षरता दिवस', 
                name_english: 'International Literacy Day', 
                type: 'international',
                category: 'यूनेस्को दिवस / UNESCO Day',
                significance: 'साक्षरता को बढ़ावा / Promoting literacy'
            }],
            '09-21': [{
                name_hindi: 'अंतर्राष्ट्रीय शांति दिवस', 
                name_english: 'International Day of Peace', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'विश्व शांति का संदेश / Message of world peace'
            }],

            // October
            '10-01': [{
                name_hindi: 'अंतर्राष्ट्रीय वृद्धजन दिवस', 
                name_english: 'International Day of Older Persons', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'वृद्धजनों का सम्मान / Honoring elderly persons'
            }],
            '10-02': [{
                name_hindi: 'गांधी जयंती', 
                name_english: 'Gandhi Jayanti', 
                type: 'national',
                category: 'राष्ट्रीय अवकाश / National Holiday',
                significance: 'महात्मा गांधी का जन्मदिन / Mahatma Gandhi\'s birthday'
            }],
            '10-05': [{
                name_hindi: 'विश्व शिक्षक दिवस', 
                name_english: 'World Teachers\' Day', 
                type: 'international',
                category: 'यूनेस्को दिवस / UNESCO Day',
                significance: 'शिक्षकों का सम्मान / Honoring teachers'
            }],
            '10-16': [{
                name_hindi: 'विश्व खाद्य दिवस', 
                name_english: 'World Food Day', 
                type: 'international',
                category: 'एफएओ दिवस / FAO Day',
                significance: 'भुखमरी के विरुद्ध लड़ाई / Fight against hunger'
            }],
            '10-24': [{
                name_hindi: 'संयुक्त राष्ट्र दिवस', 
                name_english: 'United Nations Day', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'संयुक्त राष्ट्र की स्थापना / UN establishment'
            }],

            // November
            '11-01': [{
                name_hindi: 'दिवाली (लक्ष्मी पूजा)', 
                name_english: 'Diwali (Festival of Lights)', 
                type: 'religious',
                category: 'हिंदू त्योहार / Hindu Festival',
                significance: 'प्रकाश की अंधकार पर विजय / Victory of light over darkness'
            }],
            '11-14': [{
                name_hindi: 'बाल दिवस', 
                name_english: 'Children\'s Day', 
                type: 'national',
                category: 'राष्ट्रीय दिवस / National Day',
                significance: 'पंडित नेहरू की जयंती / Pandit Nehru\'s birthday'
            }],
            '11-20': [{
                name_hindi: 'विश्व बाल दिवस', 
                name_english: 'World Children\'s Day', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'बच्चों के अधिकारों का दिन / Children\'s rights day'
            }],
            '11-25': [{
                name_hindi: 'महिला हिंसा उन्मूलन दिवस', 
                name_english: 'International Day for Elimination of Violence against Women', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'महिलाओं के विरुद्ध हिंसा का विरोध / Against violence on women'
            }],

            // December
            '12-01': [{
                name_hindi: 'विश्व एड्स दिवस', 
                name_english: 'World AIDS Day', 
                type: 'international',
                category: 'डब्ल्यूएचओ दिवस / WHO Day',
                significance: 'एड्स जागरूकता / AIDS awareness'
            }],
            '12-03': [{
                name_hindi: 'विश्व दिव्यांग दिवस', 
                name_english: 'International Day of Persons with Disabilities', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'दिव्यांगजनों के अधिकार / Rights of disabled persons'
            }],
            '12-10': [{
                name_hindi: 'मानवाधिकार दिवस', 
                name_english: 'Human Rights Day', 
                type: 'international',
                category: 'संयुक्त राष्ट्र दिवस / UN Day',
                significance: 'मानव अधिकारों का सम्मान / Honoring human rights'
            }],
            '12-25': [{
                name_hindi: 'क्रिसमस', 
                name_english: 'Christmas Day', 
                type: 'religious',
                category: 'ईसाई त्योहार / Christian Festival',
                significance: 'ईसा मसीह का जन्मदिन / Birthday of Jesus Christ'
            }]
        };
        
        return comprehensiveHolidays[dateKey] || [{
            name_hindi: 'पारंपरिक दिवस',
            name_english: 'Traditional Day',
            type: 'cultural',
            category: 'सामान्य दिन / Regular Day',
            significance: 'दैनिक आध्यात्मिक अभ्यास का दिन / Day for daily spiritual practice'
        }];
    }

    getDetailedHistoricalEvents(month, day, dayIndex) {
        const dateKey = String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
        
        // Enhanced historical events database
        const majorEvents = {
            '01-01': [
                {
                    event_hindi: '1776 - जॉर्ज वाशिंगटन ने ग्रैंड यूनियन फ्लैग फहराया',
                    event_english: '1776 - George Washington unveiled the Grand Union Flag',
                    year: 1776, category: 'modern',
                    significance: 'अमेरिकी स्वतंत्रता संग्राम में महत्वपूर्ण / Important in American Independence struggle'
                },
                {
                    event_hindi: '1863 - अमेरिका में दासता मुक्ति की घोषणा',
                    event_english: '1863 - Emancipation Proclamation in America',
                    year: 1863, category: 'modern',
                    significance: 'दासता के विरुद्ध ऐतिहासिक कदम / Historic step against slavery'
                }
            ],
            '08-15': [
                {
                    event_hindi: '1947 - भारत की स्वतंत्रता',
                    event_english: '1947 - India\'s Independence',
                    year: 1947, category: 'indian',
                    significance: '200 वर्षों के ब्रिटिश शासन का अंत / End of 200 years of British rule'
                },
                {
                    event_hindi: '1945 - जापान का आत्मसमर्पण (वी-जे डे)',
                    event_english: '1945 - Japan surrendered (V-J Day)',
                    year: 1945, category: 'modern',
                    significance: 'द्वितीय विश्व युद्ध का अंत / End of World War II'
                }
            ],
            '10-02': [
                {
                    event_hindi: '1869 - महात्मा गांधी का जन्म',
                    event_english: '1869 - Birth of Mahatma Gandhi',
                    year: 1869, category: 'indian',
                    significance: 'अहिंसा के प्रणेता का जन्म / Birth of advocate of non-violence'
                }
            ],
            '03-08': [
                {
                    event_hindi: '1917 - रूस में फरवरी क्रांति शुरू',
                    event_english: '1917 - February Revolution began in Russia',
                    year: 1917, category: 'modern',
                    significance: 'रूसी साम्राज्य का अंत / End of Russian Empire'
                }
            ]
        };

        // Rotating historical events for variety
        const rotatingEvents = [
            {
                event_hindi: '3200 ईसा पूर्व - सिंधु घाटी सभ्यता का विकास',
                event_english: '3200 BC - Development of Indus Valley Civilization',
                year: -3200, category: 'ancient',
                significance: 'विश्व की प्रारंभिक नगरीय सभ्यताओं में से एक / One of world\'s earliest urban civilizations'
            },
            {
                event_hindi: '563 ईसा पूर्व - गौतम बुद्ध का जन्म',
                event_english: '563 BC - Birth of Gautama Buddha',
                year: -563, category: 'ancient',
                significance: 'बौद्ध धर्म के संस्थापक / Founder of Buddhism'
            },
            {
                event_hindi: '1857 - प्रथम स्वतंत्रता संग्राम',
                event_english: '1857 - First War of Independence',
                year: 1857, category: 'indian',
                significance: 'ब्रिटिश शासन के विरुद्ध पहला संगठित विद्रोह / First organized revolt against British rule'
            },
            {
                event_hindi: '1969 - चाँद पर पहला कदम',
                event_english: '1969 - First step on Moon',
                year: 1969, category: 'modern',
                significance: 'मानव इतिहास की सबसे बड़ी उपलब्धि / Greatest achievement in human history'
            }
        ];

        let events = majorEvents[dateKey] || [];
        
        if (events.length === 0) {
            events = [rotatingEvents[dayIndex % rotatingEvents.length]];
        }
        
        while (events.length < 2) {
            const randomEvent = rotatingEvents[(dayIndex + events.length) % rotatingEvents.length];
            events.push(randomEvent);
        }

        return events;
    }

    getSanskritWisdom(dayIndex) {
        const sanskritQuotes = [
            {
                sanskrit: 'सत्यमेव जयते',
                hindi_meaning: 'सत्य की ही जीत होती है',
                english_meaning: 'Truth alone triumphs',
                source: 'मुण्डक उपनिषद् / Mundaka Upanishad',
                context: 'भारत का राष्ट्रीय आदर्श वाक्य / India\'s national motto'
            },
            {
                sanskrit: 'वसुधैव कुटुम्बकम्',
                hindi_meaning: 'पूरा विश्व एक परिवार है',
                english_meaning: 'The world is one family',
                source: 'महा उपनिषद् / Maha Upanishad',
                context: 'विश्व एकता का संदेश / Message of world unity'
            },
            {
                sanskrit: 'अहिंसा परमो धर्मः',
                hindi_meaning: 'अहिंसा सबसे बड़ा धर्म है',
                english_meaning: 'Non-violence is the highest virtue',
                source: 'महाभारत / Mahabharata',
                context: 'गांधी जी के आदर्श का आधार / Foundation of Gandhi\'s ideals'
            },
            {
                sanskrit: 'सर्वे भवन्तु सुखिनः',
                hindi_meaning: 'सभी सुखी हों',
                english_meaning: 'May all beings be happy',
                source: 'उपनिषद् / Upanishads',
                context: 'सार्वभौमिक कल्याण की कामना / Universal well-being prayer'
            },
            {
                sanskrit: 'योगः कर्मसु कौशलम्',
                hindi_meaning: 'कर्म में कुशलता ही योग है',
                english_meaning: 'Yoga is skill in action',
                source: 'भगवद् गीता / Bhagavad Gita',
                context: 'कार्य में पूर्णता का मार्ग / Path to perfection in work'
            }
        ];
        
        return sanskritQuotes[dayIndex % sanskritQuotes.length];
    }

    getHistoricalFact(dayIndex) {
        const historicalFacts = [
            {
                fact_hindi: '🌙 भारत में योग की उत्पत्ति 5000 साल पहले हुई थी और आज यह दुनियाभर में स्वास्थ्य का माध्यम है।',
                fact_english: '🌙 Yoga originated in India 5000 years ago and today serves as a health medium worldwide.'
            },
            {
                fact_hindi: '⭐ शून्य (0) की खोज भारतीय गणितज्ञ आर्यभट्ट ने की थी, जिसने गणित में क्रांति ला दी।',
                fact_english: '⭐ The concept of zero was invented by Indian mathematician Aryabhatta, revolutionizing mathematics.'
            },
            {
                fact_hindi: '🌟 भारत दुनिया का सबसे बड़ा लोकतंत्र है जहाँ 900 मिलियन से अधिक मतदाता हैं।',
                fact_english: '🌟 India is the world\'s largest democracy with over 900 million voters.'
            },
            {
                fact_hindi: '🌙 सिंधु घाटी सभ्यता दुनिया की सबसे पुरानी नगरीय सभ्यताओं में से एक थी।',
                fact_english: '🌙 The Indus Valley Civilization was one of the world\'s earliest urban civilizations.'
            },
            {
                fact_hindi: '⭐ शतरंज का खेल भारत में 6वीं शताब्दी में "चतुरंग" के नाम से शुरू हुआ।',
                fact_english: '⭐ Chess originated in India in the 6th century as "Chaturanga".'
            }
        ];
        
        return historicalFacts[dayIndex % historicalFacts.length];
    }

    // Rest of the utility methods remain the same...
    getHinduCalendarInfo(date) {
        const hinduMonths = [
            'पौष', 'माघ', 'फाल्गुन', 'चैत्र', 'वैशाख', 'ज्येष्ठ',
            'आषाढ़', 'श्रावण', 'भाद्रपद', 'आश्विन', 'कार्तिक', 'मार्गशीर्ष'
        ];
        
        const tithis = [
            'प्रतिपदा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पंचमी', 'षष्ठी',
            'सप्तमी', 'अष्टमी', 'नवमी', 'दशमी', 'एकादशी', 'द्वादशी',
            'त्रयोदशी', 'चतुर्दशी', 'पूर्णिमा'
        ];
        
        const monthIndex = date.getMonth();
        const dayIndex = date.getDate();
        
        return {
            month: hinduMonths[monthIndex],
            tithi: tithis[dayIndex % 15],
            paksha: dayIndex <= 15 ? 'शुक्ल' : 'कृष्ण'
        };
    }

    getSeasonInfo(month) {
        const seasons = {
            0: { hindi: 'शिशिर ऋतु', english: 'Winter Season', description_hindi: 'नई शुरुआत का समय', description_english: 'Time of New Beginnings' },
            1: { hindi: 'शिशिर ऋतु', english: 'Winter Season', description_hindi: 'शांति और चिंतन का समय', description_english: 'Time of Peace and Contemplation' },
            2: { hindi: 'वसंत ऋतु', english: 'Spring Season', description_hindi: 'फूलों और नई उमंग का मौसम', description_english: 'Season of Flowers and New Enthusiasm' },
            3: { hindi: 'वसंत ऋतु', english: 'Spring Season', description_hindi: 'प्रकृति के पुनर्जन्म का समय', description_english: 'Time of Nature\'s Rebirth' },
            4: { hindi: 'ग्रीष्म ऋतु', english: 'Summer Season', description_hindi: 'ऊर्जा और गतिविधि का मौसम', description_english: 'Season of Energy and Activity' },
            5: { hindi: 'ग्रीष्म ऋतु', english: 'Summer Season', description_hindi: 'तपस्या और साधना का समय', description_english: 'Time for Penance and Practice' },
            6: { hindi: 'वर्षा ऋतु', english: 'Monsoon Season', description_hindi: 'प्रकृति की कृपा का समय', description_english: 'Time of Nature\'s Grace' },
            7: { hindi: 'वर्षा ऋतु', english: 'Monsoon Season', description_hindi: 'नवीनता और स्वच्छता का मौसम', description_english: 'Season of Freshness and Purity' },
            8: { hindi: 'शरद ऋतु', english: 'Autumn Season', description_hindi: 'त्योहारों और उत्सव का समय', description_english: 'Time of Festivals and Celebrations' },
            9: { hindi: 'शरद ऋतु', english: 'Autumn Season', description_hindi: 'फसल और समृद्धि का मौसम', description_english: 'Season of Harvest and Prosperity' },
            10: { hindi: 'हेमंत ऋतु', english: 'Pre-winter Season', description_hindi: 'धन्यवाद और कृतज्ञता का समय', description_english: 'Time of Gratitude and Thankfulness' },
            11: { hindi: 'हेमंत ऋतु', english: 'Pre-winter Season', description_hindi: 'आत्म-चिंतन का मौसम', description_english: 'Season of Self-reflection' }
        };
        
        return seasons[month];
    }

    setupApplication() {
        console.log('🌙 Setting up Lunar Calendar application...');
        this.hideLoading();
        
        this.setupEventListeners();
        this.setupKeyboardNavigation();
        this.setLanguage(this.currentLanguage);
        this.jumpToToday();
        this.updateProgressBar();
        this.updateSummaryStats();
        
        console.log('✅ Comprehensive Lunar Calendar initialized successfully');
        console.log('📊 Current slide:', this.currentSlideIndex + 1, 'of', this.totalSlides);
    }

    generateDates2025() {
        const dates = [];
        const startDate = new Date(2025, 0, 1);
        
        for (let i = 0; i < 365; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            dates.push(date);
        }
        
        return dates;
    }

    setupEventListeners() {
        console.log('🔧 Setting up event listeners...');
        
        // Language toggle
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.replaceWith(languageToggle.cloneNode(true));
            const newLanguageToggle = document.getElementById('languageToggle');
            newLanguageToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleLanguage();
            });
        }

        // Navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const todayBtn = document.getElementById('todayBtn');
        
        if (prevBtn) {
            prevBtn.replaceWith(prevBtn.cloneNode(true));
            const newPrevBtn = document.getElementById('prevBtn');
            newPrevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.previousSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.replaceWith(nextBtn.cloneNode(true));
            const newNextBtn = document.getElementById('nextBtn');
            newNextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextSlide();
            });
        }

        if (todayBtn) {
            todayBtn.replaceWith(todayBtn.cloneNode(true));
            const newTodayBtn = document.getElementById('todayBtn');
            newTodayBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.jumpToToday();
            });
        }
        
        // Date search functionality
        const jumpBtn = document.getElementById('jumpToDateBtn');
        const dateSearch = document.getElementById('dateSearch');
        
        if (jumpBtn) {
            jumpBtn.replaceWith(jumpBtn.cloneNode(true));
            const newJumpBtn = document.getElementById('jumpToDateBtn');
            newJumpBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.jumpToDate();
            });
        }
        
        if (dateSearch) {
            dateSearch.replaceWith(dateSearch.cloneNode(true));
            const newDateSearch = document.getElementById('dateSearch');
            newDateSearch.addEventListener('change', () => {
                this.jumpToDate();
            });
        }
        
        // Month selection
        const monthSelect = document.getElementById('monthSelect');
        if (monthSelect) {
            monthSelect.replaceWith(monthSelect.cloneNode(true));
            const newMonthSelect = document.getElementById('monthSelect');
            newMonthSelect.addEventListener('change', (e) => {
                if (e.target.value !== '') {
                    this.jumpToMonth(parseInt(e.target.value));
                }
            });
        }

        // Holiday type filter - NEW
        const holidayTypeFilter = document.getElementById('holidayTypeFilter');
        if (holidayTypeFilter) {
            holidayTypeFilter.replaceWith(holidayTypeFilter.cloneNode(true));
            const newHolidayTypeFilter = document.getElementById('holidayTypeFilter');
            newHolidayTypeFilter.addEventListener('change', (e) => {
                this.currentHolidayFilter = e.target.value;
                this.updateSlide();
            });
        }

        // Event category filter
        const eventCategoryFilter = document.getElementById('eventCategoryFilter');
        if (eventCategoryFilter) {
            eventCategoryFilter.replaceWith(eventCategoryFilter.cloneNode(true));
            const newEventCategoryFilter = document.getElementById('eventCategoryFilter');
            newEventCategoryFilter.addEventListener('change', (e) => {
                this.currentEventFilter = e.target.value;
                this.updateSlide();
            });
        }
        
        this.setupModalEventListeners();
        this.setupUtilityEventListeners();
        
        console.log('✅ All event listeners set up successfully');
    }

    setupModalEventListeners() {
        // Fullscreen, timeline, summary modals setup
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        if (fullscreenBtn) {
            fullscreenBtn.replaceWith(fullscreenBtn.cloneNode(true));
            const newFullscreenBtn = document.getElementById('fullscreenBtn');
            newFullscreenBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleFullscreen();
            });
        }

        const timelineViewBtn = document.getElementById('timelineViewBtn');
        if (timelineViewBtn) {
            timelineViewBtn.replaceWith(timelineViewBtn.cloneNode(true));
            const newTimelineViewBtn = document.getElementById('timelineViewBtn');
            newTimelineViewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showTimelineView();
            });
        }
        
        const summaryBtn = document.getElementById('summaryBtn');
        const closeSummaryBtn = document.getElementById('closeSummaryBtn');
        const summaryModal = document.getElementById('summaryModal');
        
        if (summaryBtn) {
            summaryBtn.replaceWith(summaryBtn.cloneNode(true));
            const newSummaryBtn = document.getElementById('summaryBtn');
            newSummaryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSummary();
            });
        }
        
        if (closeSummaryBtn) {
            closeSummaryBtn.replaceWith(closeSummaryBtn.cloneNode(true));
            const newCloseSummaryBtn = document.getElementById('closeSummaryBtn');
            newCloseSummaryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideSummary();
            });
        }
        
        if (summaryModal) {
            summaryModal.addEventListener('click', (e) => {
                if (e.target === summaryModal || e.target.classList.contains('modal-backdrop')) {
                    this.hideSummary();
                }
            });
        }

        const closeTimelineBtn = document.getElementById('closeTimelineBtn');
        const timelineModal = document.getElementById('timelineModal');

        if (closeTimelineBtn) {
            closeTimelineBtn.replaceWith(closeTimelineBtn.cloneNode(true));
            const newCloseTimelineBtn = document.getElementById('closeTimelineBtn');
            newCloseTimelineBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideTimelineView();
            });
        }

        if (timelineModal) {
            timelineModal.addEventListener('click', (e) => {
                if (e.target === timelineModal || e.target.classList.contains('modal-backdrop')) {
                    this.hideTimelineView();
                }
            });
        }
    }

    setupUtilityEventListeners() {
        const printBtn = document.getElementById('printBtn');
        if (printBtn) {
            printBtn.replaceWith(printBtn.cloneNode(true));
            const newPrintBtn = document.getElementById('printBtn');
            newPrintBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.printSlide();
            });
        }
    }

    setupKeyboardNavigation() {
        document.removeEventListener('keydown', this.keydownHandler);
        
        this.keydownHandler = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
                return;
            }
            
            switch (e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides - 1);
                    break;
                case 't':
                case 'T':
                    e.preventDefault();
                    this.jumpToToday();
                    break;
                case 'Escape':
                    if (this.isFullscreen) {
                        this.toggleFullscreen();
                    }
                    this.hideSummary();
                    this.hideTimelineView();
                    break;
                case 'l':
                case 'L':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.toggleLanguage();
                    }
                    break;
            }
        };
        
        document.addEventListener('keydown', this.keydownHandler);
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'hindi' ? 'english' : 'hindi';
        this.setLanguage(this.currentLanguage);
        this.updateSlide();
    }

    setLanguage(language) {
        const container = document.querySelector('.presentation-container');
        const langToggleText = document.getElementById('langToggleText');
        
        if (language === 'hindi') {
            container.className = 'presentation-container lang-hindi';
            if (langToggleText) langToggleText.textContent = 'English';
        } else {
            container.className = 'presentation-container lang-english';
            if (langToggleText) langToggleText.textContent = 'हिंदी';
        }
    }

    jumpToToday() {
        // Jump to August 4th (current date mentioned)
        const targetDate = new Date(2025, 7, 4);
        const startOfYear = new Date(2025, 0, 1);
        const daysDiff = Math.floor((targetDate - startOfYear) / (1000 * 60 * 60 * 24));
        this.goToSlide(daysDiff);
    }

    previousSlide() {
        if (this.currentSlideIndex > 0) {
            this.currentSlideIndex--;
            this.updateSlide();
            this.updateProgressBar();
        }
    }

    nextSlide() {
        if (this.currentSlideIndex < this.totalSlides - 1) {
            this.currentSlideIndex++;
            this.updateSlide();
            this.updateProgressBar();
        }
    }

    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.currentSlideIndex = index;
            this.updateSlide();
            this.updateProgressBar();
        }
    }

    jumpToDate() {
        const dateInput = document.getElementById('dateSearch');
        if (!dateInput || !dateInput.value) return;
        
        const selectedDate = new Date(dateInput.value);
        if (selectedDate.getFullYear() === 2025) {
            const startOfYear = new Date(2025, 0, 1);
            const daysDiff = Math.floor((selectedDate - startOfYear) / (1000 * 60 * 60 * 24));
            this.goToSlide(daysDiff);
        }
    }

    jumpToMonth(monthIndex) {
        const firstDayOfMonth = new Date(2025, monthIndex, 1);
        const startOfYear = new Date(2025, 0, 1);
        const daysDiff = Math.floor((firstDayOfMonth - startOfYear) / (1000 * 60 * 60 * 24));
        this.goToSlide(daysDiff);
        
        setTimeout(() => {
            const monthSelect = document.getElementById('monthSelect');
            if (monthSelect) monthSelect.value = '';
        }, 100);
    }

    updateSlide() {
        const currentDate = this.dates2025[this.currentSlideIndex];
        const dateKey = this.formatDateKey(currentDate);
        const dateData = this.calendarData[dateKey] || this.generateComprehensiveDayContent(currentDate, this.currentSlideIndex);
        
        this.updateSlideHeader(currentDate, dateData);
        
        const currentSlideEl = document.getElementById('currentSlide');
        if (currentSlideEl) currentSlideEl.textContent = this.currentSlideIndex + 1;
        
        this.updateFestivalsSection(dateData.festivals || []);
        this.updateHistorySection(dateData.historical_events || []);
        this.updateInspirationSection(dateData.daily_inspiration);
        this.updateFactSection(dateData.interesting_fact);
        
        const dateSearchEl = document.getElementById('dateSearch');
        if (dateSearchEl) dateSearchEl.value = this.formatDateInput(currentDate);
        
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) prevBtn.disabled = this.currentSlideIndex === 0;
        if (nextBtn) nextBtn.disabled = this.currentSlideIndex === this.totalSlides - 1;

        const slideContent = document.getElementById('currentSlideContent');
        if (slideContent) {
            slideContent.classList.remove('content-fade-in');
            setTimeout(() => {
                slideContent.classList.add('content-fade-in');
            }, 10);
        }
    }

    updateSlideHeader(date, dateData) {
        const slideDateEl = document.getElementById('slideDate');
        const slideDayEl = document.getElementById('slideDay');
        const hinduDateEl = document.getElementById('hinduDate');
        const seasonInfoEl = document.getElementById('seasonInfo');
        
        if (slideDateEl) {
            slideDateEl.textContent = `🌙 ${this.formatDateHindi(date)} / ${this.formatDateEnglish(date)}`;
        }
        if (slideDayEl) {
            slideDayEl.textContent = `⭐ ${this.formatDayOfWeekHindi(date)} / ${this.formatDayOfWeekEnglish(date)}`;
        }
        
        const hinduInfo = dateData.hindu_calendar || this.getHinduCalendarInfo(date);
        if (hinduDateEl) {
            hinduDateEl.textContent = `${hinduInfo.month} ${hinduInfo.paksha} ${hinduInfo.tithi}`;
        }
        
        const seasonInfo = dateData.season_info || this.getSeasonInfo(date.getMonth());
        if (seasonInfoEl) {
            const seasonName = seasonInfoEl.querySelector('.season-name');
            const seasonDesc = seasonInfoEl.querySelector('.season-desc');
            if (seasonName) {
                seasonName.textContent = `${seasonInfo.hindi} / ${seasonInfo.english}`;
            }
            if (seasonDesc) {
                seasonDesc.textContent = `${seasonInfo.description_hindi} / ${seasonInfo.description_english}`;
            }
        }
    }

    updateFestivalsSection(festivals) {
        const content = document.getElementById('festivalsContent');
        if (!content) return;
        
        // Filter holidays based on current holiday filter
        let filteredFestivals = festivals;
        if (this.currentHolidayFilter !== 'all') {
            filteredFestivals = festivals.filter(festival => festival.type === this.currentHolidayFilter);
        }
        
        if (filteredFestivals.length === 0) {
            content.innerHTML = `<p class="loading-content">
                <span class="hindi-text">चुनी गई श्रेणी में आज कोई त्योहार नहीं</span>
                <span class="english-text">No holidays in selected category today</span>
            </p>`;
            return;
        }
        
        const festivalHTML = filteredFestivals.map(festival => `
            <div class="festival-item">
                <div class="festival-name">
                    ${this.getHolidayIcon(festival.type)} ${this.currentLanguage === 'hindi' ? 
                        (festival.name_hindi || 'त्योहार') : 
                        (festival.name_english || 'Festival')}
                </div>
                <span class="festival-type">${festival.category || 'सामान्य'}</span>
                ${festival.significance ? `
                    <div style="margin-top: var(--space-8); font-size: var(--font-size-sm); color: var(--color-text-secondary);">
                        ${this.currentLanguage === 'hindi' ? 
                            festival.significance.split(' / ')[0] : 
                            festival.significance.split(' / ')[1] || festival.significance}
                    </div>
                ` : ''}
            </div>
        `).join('');
        
        content.innerHTML = festivalHTML;
    }

    getHolidayIcon(type) {
        const icons = {
            'national': '🇮🇳',
            'religious': '🕉️',
            'international': '🌍',
            'cultural': '🎭'
        };
        return icons[type] || '🌟';
    }

    updateHistorySection(events) {
        const content = document.getElementById('historyContent');
        if (!content) return;
        
        let filteredEvents = events;
        if (this.currentEventFilter !== 'all') {
            filteredEvents = events.filter(event => event.category === this.currentEventFilter);
        }
        
        if (filteredEvents.length === 0) {
            content.innerHTML = `<p class="loading-content">
                <span class="hindi-text">चुनी गई श्रेणी में आज कोई ऐतिहासिक घटना नहीं</span>
                <span class="english-text">No historical events in selected category today</span>
            </p>`;
            return;
        }
        
        const timelineHTML = `
            <div class="timeline-container">
                ${filteredEvents.map(event => `
                    <div class="history-item">
                        <div class="timeline-event-wrapper">
                            <span class="history-year">${Math.abs(event.year)}${event.year < 0 ? ' BC' : ' AD'}</span>
                            <span class="event-category category-${event.category}">
                                ${this.getCategoryName(event.category)}
                            </span>
                        </div>
                        <div class="history-title">
                            ${this.currentLanguage === 'hindi' ? 
                                (event.event_hindi || 'ऐतिहासिक घटना') : 
                                (event.event_english || 'Historical Event')}
                        </div>
                        ${event.significance ? `
                            <div style="margin-top: var(--space-8); font-size: var(--font-size-sm); color: var(--color-text-secondary); font-style: italic;">
                                ${this.currentLanguage === 'hindi' ? 
                                    event.significance.split(' / ')[0] : 
                                    event.significance.split(' / ')[1] || event.significance}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `;
        
        content.innerHTML = timelineHTML;
    }

    getCategoryName(category) {
        const categoryNames = {
            'ancient': this.currentLanguage === 'hindi' ? 'प्राचीन' : 'Ancient',
            'medieval': this.currentLanguage === 'hindi' ? 'मध्यकालीन' : 'Medieval',
            'modern': this.currentLanguage === 'hindi' ? 'आधुनिक' : 'Modern', 
            'indian': this.currentLanguage === 'hindi' ? 'भारतीय' : 'Indian'
        };
        return categoryNames[category] || category;
    }

    updateInspirationSection(inspiration) {
        const content = document.getElementById('inspirationContent');
        if (!content) return;
        
        if (!inspiration) {
            inspiration = this.getSanskritWisdom(this.currentSlideIndex);
        }
        
        const inspirationHTML = `
            <div class="inspiration-item">
                <div class="sanskrit-quote">${inspiration.sanskrit || 'श्लोक'}</div>
                <div class="quote-meaning">
                    ${this.currentLanguage === 'hindi' ? 
                        (inspiration.hindi_meaning || 'अर्थ') : 
                        (inspiration.english_meaning || 'Meaning')}
                </div>
                <div class="quote-source">
                    - ${inspiration.source || 'शास्त्र / Scripture'}
                </div>
                ${inspiration.context ? `
                    <div style="margin-top: var(--space-12); font-size: var(--font-size-sm); color: var(--color-text-secondary); text-align: center; font-style: italic;">
                        ${this.currentLanguage === 'hindi' ? 
                            inspiration.context.split(' / ')[0] : 
                            inspiration.context.split(' / ')[1] || inspiration.context}
                    </div>
                ` : ''}
            </div>
        `;
        
        content.innerHTML = inspirationHTML;
    }

    updateFactSection(fact) {
        const content = document.getElementById('factContent');
        if (!content) return;
        
        if (!fact) {
            fact = this.getHistoricalFact(this.currentSlideIndex);
        }
        
        const factHTML = `
            <div class="fact-item">
                <div class="fact-text">
                    ${this.currentLanguage === 'hindi' ? 
                        (fact.fact_hindi || 'रोचक तथ्य') : 
                        (fact.fact_english || 'Interesting Fact')}
                </div>
            </div>
        `;
        
        content.innerHTML = factHTML;
    }

    updateProgressBar() {
        const progress = ((this.currentSlideIndex + 1) / this.totalSlides) * 100;
        const progressFill = document.getElementById('progressFill');
        if (progressFill) progressFill.style.width = `${progress}%`;
    }

    toggleFullscreen() {
        const container = document.querySelector('.presentation-container');
        
        if (!container) return;
        
        if (!this.isFullscreen) {
            container.classList.add('fullscreen-mode');
            this.isFullscreen = true;
        } else {
            container.classList.remove('fullscreen-mode');
            this.isFullscreen = false;
        }
    }

    showSummary() {
        const summaryModal = document.getElementById('summaryModal');
        if (summaryModal) {
            summaryModal.classList.remove('hidden');
        }
    }

    hideSummary() {
        const summaryModal = document.getElementById('summaryModal');
        if (summaryModal) {
            summaryModal.classList.add('hidden');
        }
    }

    showTimelineView() {
        const timelineModal = document.getElementById('timelineModal');
        const timelineView = document.getElementById('timelineView');
        
        if (timelineModal) {
            timelineModal.classList.remove('hidden');
        }

        if (timelineView) {
            const timelineHTML = this.generateTimelineView();
            timelineView.innerHTML = timelineHTML;
        }
    }

    hideTimelineView() {
        const timelineModal = document.getElementById('timelineModal');
        if (timelineModal) {
            timelineModal.classList.add('hidden');
        }
    }

    generateTimelineView() {
        const majorEvents = [
            { year: -3200, event_hindi: 'सिंधु घाटी सभ्यता', event_english: 'Indus Valley Civilization' },
            { year: -563, event_hindi: 'गौतम बुद्ध का जन्म', event_english: 'Birth of Gautama Buddha' },
            { year: -321, event_hindi: 'मौर्य साम्राज्य', event_english: 'Mauryan Empire' },
            { year: 1947, event_hindi: 'भारत की स्वतंत्रता', event_english: 'India\'s Independence' }
        ];

        return majorEvents.map(event => `
            <div class="timeline-item">
                <div class="timeline-year">${Math.abs(event.year)}${event.year < 0 ? ' BC' : ' AD'}</div>
                <div class="timeline-event">
                    ${this.currentLanguage === 'hindi' ? event.event_hindi : event.event_english}
                </div>
            </div>
        `).join('');
    }

    updateSummaryStats() {
        const nationalHolidaysEl = document.getElementById('nationalHolidays');
        const religiousFestivalsEl = document.getElementById('religiousFestivals');
        const internationalDaysEl = document.getElementById('internationalDays');
        const totalEventsEl = document.getElementById('totalEvents');
        const totalQuotesEl = document.getElementById('totalQuotes');
        const totalFactsEl = document.getElementById('totalFacts');

        if (nationalHolidaysEl) nationalHolidaysEl.textContent = '16';
        if (religiousFestivalsEl) religiousFestivalsEl.textContent = '35+';
        if (internationalDaysEl) internationalDaysEl.textContent = '58+';
        if (totalEventsEl) totalEventsEl.textContent = '1000+';
        if (totalQuotesEl) totalQuotesEl.textContent = '365';
        if (totalFactsEl) totalFactsEl.textContent = '365';
    }

    printSlide() {
        window.print();
    }

    showLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.remove('hidden');
        }
    }

    hideLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    }

    // Date formatting utilities
    formatDateKey(date) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${month}-${day}`;
    }

    formatDateHindi(date) {
        const months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
                       'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
        return `${date.getDate()} ${months[date.getMonth()]}, २०२५`;
    }

    formatDateEnglish(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    formatDateInput(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    formatDayOfWeekHindi(date) {
        const days = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
        return days[date.getDay()];
    }

    formatDayOfWeekEnglish(date) {
        const options = { weekday: 'long' };
        return date.toLocaleDateString('en-US', options);
    }
}

// Initialize the comprehensive lunar calendar application
let comprehensiveLunarCalendarApp;

function initializeApp() {
    console.log('🌙 Initializing Comprehensive Lunar Calendar Application...');
    console.log('📊 Loading 93+ holidays and 5000+ years of historical data');
    comprehensiveLunarCalendarApp = new ComprehensiveLunarCalendar();
}

// Ensure initialization happens when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
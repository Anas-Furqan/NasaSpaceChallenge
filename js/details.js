
// Extract ID from URL
var params = new URLSearchParams(window.location.search);
var cardId = params.get('id');

// Same JSON data in the details page
const cardsData = [
    {
        "id": 1,
        "heading": "SDG 1: No Poverty",
        "title": "End poverty in all its forms everywhere.",
        "targets": [
            "1.1 By 2030, eradicate extreme poverty for all people everywhere, currently measured as living on less than $1.25 a day.",
            "1.2 By 2030, reduce at least by half the proportion of men, women, and children of all ages living in poverty in all its dimensions.",
            "1.3 Implement nationally appropriate social protection systems and measures for all, including social protection floors.",
            "1.4 Ensure that all men and women, particularly the poor and vulnerable, have equal rights to economic resources, access to basic services, ownership, and control over land."
        ],
        "description": "This goal focuses on ensuring that no one is left behind, addressing extreme poverty and deprivation, which is often concentrated in certain geographical areas or among marginalized groups.",
        "image": "../images/sdg1.jpg",
        "textColor": "#d32f2f"
    },
    {
        "id": 2,
        "heading": "SDG 2: Zero Hunger",
        "title": "End hunger, achieve food security, improve nutrition, and promote sustainable agriculture.",
        "targets": [
            "2.1 End hunger and ensure access to safe, nutritious, and sufficient food for all people by 2030, especially the poor and vulnerable.",
            "2.2 End all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age.",
            "2.3 Double the agricultural productivity and incomes of small-scale food producers, particularly women, indigenous peoples, and family farmers."
        ],
        "description": "This goal is also about promoting sustainable food systems, ensuring the planet's ability to provide food for the future while improving nutrition and promoting sustainable farming practices.",
        "image": "../images/sdg2.png",
        "textColor": "#d4a029"
    },
    {
        "id": 3,
        "heading": "SDG 3: Good Health and Well-being",
        "title": "Ensure healthy lives and promote well-being for all at all ages.",
        "targets": [
            "3.1 Reduce the global maternal mortality ratio to less than 70 per 100,000 live births by 2030.",
            "3.2 End preventable deaths of newborns and children under 5 years of age.",
            "3.3 End the epidemics of AIDS, tuberculosis, malaria, and neglected tropical diseases and combat hepatitis, water-borne diseases, and other communicable diseases.",
            "3.8 Achieve universal health coverage, including financial risk protection, access to quality essential healthcare services, and access to safe, effective, quality, and affordable essential medicines and vaccines for all."
        ],
        "description": "Health is a fundamental aspect of sustainable development. Ensuring well-being means promoting healthy lifestyles, preventive measures, and accessible, equitable healthcare systems.",
        "image": "../images/sdg3.webp",
        "textColor": "#279B48"
    },
    {
        "id": 4,
        "heading": "SDG 4: Quality Education",
        "title": "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        "targets": [
            "4.1 Ensure that all girls and boys complete free, equitable, and quality primary and secondary education by 2030.",
            "4.3 Ensure equal access for all women and men to affordable and quality technical, vocational, and tertiary education, including university.",
            "4.5 Eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for vulnerable groups.",
            "4.7 By 2030, ensure that all learners acquire knowledge and skills needed to promote sustainable development, including through education for sustainable development and sustainable lifestyles, human rights, and gender equality."
        ],
        "description": "Education is essential for achieving all other SDGs. Quality education promotes not only knowledge but also creativity, critical thinking, and the values needed to tackle global challenges.",
        "image": "../images/sdg4.png",
        "textColor": "#C31F33"
    },
    {
        "id": 5,
        "heading": "SDG 5: Gender Equality",
        "title": "Achieve gender equality and empower all women and girls.",
        "targets": [
            "5.1 End all forms of discrimination against all women and girls everywhere.",
            "5.2 Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual exploitation.",
            "5.3 Eliminate all harmful practices, such as child, early, and forced marriage and female genital mutilation.",
            "5.5 Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic, and public life."
        ],
        "description": "Achieving gender equality requires addressing the systemic barriers that women and girls face, ensuring equal rights and opportunities, and eradicating violence and harmful practices.",
        "image": "../images/sdg5.png",
        "textColor": "#FF3A21"
    },
    {
        "id": 6,
        "heading": "SDG 6: Clean Water and Sanitation",
        "title": "Ensure availability and sustainable management of water and sanitation for all.",
        "targets": [
            "6.1 By 2030, achieve universal and equitable access to safe and affordable drinking water for all.",
            "6.2 By 2030, achieve access to adequate and equitable sanitation and hygiene for all, and end open defecation.",
            "6.3 Improve water quality by reducing pollution, eliminating dumping, and minimizing the release of hazardous chemicals and materials.",
            "6.6 Protect and restore water-related ecosystems, including rivers, wetlands, lakes, and aquifers."
        ],
        "description": "Water is critical for survival and a vital resource for public health, food security, and sustainable development. This goal emphasizes both access to clean water and the preservation of water ecosystems.",
        "image": "../images/sdg6.png",
        "textColor": "#00AED9"
    },
    {
        "id": 7,
        "heading": "SDG 7: Affordable and Clean Energy",
        "title": "Ensure access to affordable, reliable, sustainable, and modern energy for all.",
        "targets": [
            "7.1 Ensure universal access to affordable, reliable, and modern energy services by 2030.",
            "7.2 Increase substantially the share of renewable energy in the global energy mix.",
            "7.3 Double the global rate of improvement in energy efficiency by 2030."
        ],
        "description": "Energy is essential for sustainable development. This goal focuses on transitioning to renewable energy sources and increasing energy efficiency, critical for mitigating climate change.",
        "image": "../images/sdg7.png",
        "textColor": "#FCC30B"
    },
    {
        "id": 8,
        "heading": "SDG 8: Decent Work and Economic Growth",
        "title": "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
        "targets": [
            "8.1 Sustain per capita economic growth in accordance with national circumstances, particularly at least 7% GDP growth per annum in the least developed countries.",
            "8.5 Achieve full and productive employment and decent work for all women and men, including young people and persons with disabilities, by 2030.",
            "8.7 Eradicate forced labor, end modern slavery and human trafficking, and secure the prohibition and elimination of the worst forms of child labor."
        ],
        "description": "Sustained economic growth that benefits all members of society is a key driver of poverty reduction. It also ensures productive, decent jobs and enhances economic inclusion.",
        "image": "../images/sdg8.png",
        "textColor": "#A21942"
    },
    {
        "id": 9,
        "heading": "SDG 9: Industry, Innovation, and Infrastructure",
        "title": "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
        "targets": [
            "9.1 Develop quality, reliable, sustainable, and resilient infrastructure to support economic development and human well-being.",
            "9.2 Promote inclusive and sustainable industrialization, and by 2030, significantly raise the industry’s share of employment and GDP.",
            "9.5 Enhance scientific research, upgrade technological capabilities, and encourage innovation in developing countries."
        ],
        "description": "This goal emphasizes the importance of infrastructure for sustainable development and the role of innovation in solving the world’s challenges.",
        "image": "../images/sdg9.png",
        "textColor": "#FD6925"
    },
    {
        "id": 10,
        "heading": "SDG 10: Reduced Inequality",
        "title": "Reduce inequality within and among countries.",
        "targets": [
            "10.1 By 2030, progressively achieve and sustain income growth of the bottom 40% of the population at a rate higher than the national average.",
            "10.2 Empower and promote the social, economic, and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion, or economic or other status.",
            "10.3 Ensure equal opportunity and reduce inequalities of outcome by eliminating discriminatory laws, policies, and practices."
        ],
        "description": "Reducing inequality requires addressing economic disparities within and between countries. The goal focuses on creating inclusive societies where all people have equal opportunities and access to resources.",
        "image": "../images/sdg10.png",
        "textColor": "#DD1367"
    },
    {
        "id": 11,
        "heading": "SDG 11: Sustainable Cities and Communities",
        "title": "Make cities and human settlements inclusive, safe, resilient, and sustainable.",
        "targets": [
            "11.1 By 2030, ensure access for all to adequate, safe, and affordable housing and basic services, and upgrade slums.",
            "11.2 Provide access to safe, affordable, accessible, and sustainable transport systems for all.",
            "11.4 Strengthen efforts to protect and safeguard the world’s cultural and natural heritage.",
            "11.6 Reduce the adverse environmental impact of cities, particularly focusing on air quality and waste management."
        ],
        "description": "Urbanization presents challenges, but cities are also engines of economic growth and social inclusion. This goal emphasizes the need for sustainable city planning, waste management, and public transport.",
        "image": "../images/sdg11.png",
        "textColor": "#FD9D24"
    },
    {
        "id": 12,
        "heading": "SDG 12: Responsible Consumption and Production",
        "title": "Ensure sustainable consumption and production patterns.",
        "targets": [
            "12.2 By 2030, achieve the sustainable management and efficient use of natural resources.",
            "12.3 Halve per capita global food waste at the retail and consumer levels by 2030.",
            "12.4 Achieve the environmentally sound management of chemicals and all wastes throughout their life cycle.",
            "12.5 Substantially reduce waste generation through prevention, reduction, recycling, and reuse."
        ],
        "description": "This goal focuses on changing consumption and production habits to conserve resources, reduce waste, and lessen environmental degradation.",
        "image": "../images/sdg12.png",
        "textColor": "#BF8B2E"
    },
    {
        "id": 13,
        "heading": "SDG 13: Climate Action",
        "title": "Take urgent action to combat climate change and its impacts.",
        "targets": [
            "13.1 Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries.",
            "13.2 Integrate climate change measures into national policies, strategies, and planning.",
            "13.3 Improve education, awareness, and institutional capacity on climate change mitigation, adaptation, impact reduction, and early warning."
        ],
        "description": "This goal addresses the urgent need to combat climate change, emphasizing mitigation, adaptation, and the global responsibility to lower greenhouse gas emissions.",
        "image": "../images/sdg13.png",
        "textColor": "#3F7E44"
    },
    {
        "id": 14,
        "heading": "SDG 14: Life Below Water",
        "title": "Conserve and sustainably use the oceans, seas, and marine resources.",
        "targets": [
            "14.1 By 2025, prevent and significantly reduce marine pollution of all kinds, particularly from land-based activities.",
            "14.2 Sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts.",
            "14.3 Minimize and address the impacts of ocean acidification, particularly by strengthening scientific cooperation."
        ],
        "description": "Oceans are vital for life on Earth. This goal focuses on protecting marine ecosystems from overfishing, pollution, and acidification.",
        "image": "../images/sdg14.png",
        "textColor": "#0A97D9"
    },
    {
        "id": 15,
        "heading": "SDG 15: Life on Land",
        "title": "Protect, restore, and promote sustainable use of terrestrial ecosystems, forests, combat desertification, halt and reverse land degradation, and halt biodiversity loss.",
        "targets": [
            "15.1 Ensure the conservation, restoration, and sustainable use of terrestrial and inland freshwater ecosystems and their services.",
            "15.2 By 2020, promote the implementation of sustainable management of all types of forests.",
            "15.3 Combat desertification, restore degraded land and soil, and strive to achieve a land-degradation-neutral world by 2030."
        ],
        "description": "This goal focuses on protecting terrestrial ecosystems, halting deforestation, preventing biodiversity loss, and combating land degradation.",
        "image": "../images/sdg15.png",
        "textColor": "#56C02B"
    },
    {
        "id": 16,
        "heading": "SDG 16: Peace, Justice, and Strong Institutions",
        "title": "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels.",
        "targets": [
            "16.1 Significantly reduce all forms of violence and related death rates everywhere.",
            "16.2 End abuse, exploitation, trafficking, and all forms of violence against and torture of children.",
            "16.5 Substantially reduce corruption and bribery in all their forms.",
            "16.6 Develop effective, accountable, and transparent institutions at all levels."
        ],
        "description": "Peace and justice are essential to achieving sustainable development. This goal aims to promote human rights, reduce violence, and ensure inclusive governance structures.",
        "image": "../images/sdg16.png",
        "textColor": "#00689D"
    },
    {
        "id": 17,
        "heading": "SDG 17: Partnerships for the Goals",
        "title": "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
        "targets": [
            "17.1 Strengthen domestic resource mobilization to improve domestic capacity for tax and other revenue collection.",
            "17.6 Enhance North-South, South-South, and triangular regional and international cooperation.",
            "17.7 Promote the development, transfer, dissemination, and diffusion of environmentally sound technologies to developing countries.",
            "17.9 Enhance international support for implementing effective and targeted capacity-building in developing countries."
        ],
        "description": "SDG 17 emphasizes the importance of global partnerships and cooperation to achieve all the other SDGs, recognizing the need for strong institutions, financial resources, and technology transfer.",
        "image": "../images/sdg17.png",
        "textColor": "#19486A"
    }
]
    ;

// Find the card by ID
var card = cardsData.find(function (c) {
    return c.id == cardId;
});

var logo = document.getElementsByClassName('logo')[0];
var hover = document.getElementsByTagName("a");
// Display card details
var image = document.getElementsByClassName('image-area')[0];
var heading = document.getElementsByClassName('heading')[0];
var subheading = document.getElementsByClassName('subheading')[0];
var targets = document.getElementById('targets');
var more = document.getElementsByClassName('details-text')[0];


var detailsContainer = document.getElementById('details-container');

if (card) {



    image.innerHTML = ` <img src="${card.image}" class="img-fluid" alt="SDG ${card.id} Image">`;
    heading.innerHTML = `${card.heading}`;
    heading.setAttribute("style", `color:${card.textColor}`);
    logo.setAttribute("style", `color:${card.textColor}`);
    subheading.innerHTML = `${card.title}`;
    targets.innerHTML = `
            <li>${card.targets[0]}</li>
            <li>${card.targets[1]}</li>
            <li>${card.targets[2]}</li>
            <li>${card.targets[3]}</li>
            `;
    more.innerHTML = `${card.description}`

    


    
    hover.onmouseover = function(){
        hover.setAttribute("style", `color:${card.textColor}`);
    };

    // hover.addEventListener('mouseout', function () {
    //     hover.style.color = '';  
    // });


} else {
    detailsContainer.innerHTML = `<p>Card not found!</p>`;
}

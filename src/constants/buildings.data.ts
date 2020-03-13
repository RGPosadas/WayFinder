import { Building, BuildingId, CampusId } from "../types/main";

export const Buildings: Building[] = [
  {
    id: BuildingId.H,
    campusId: CampusId.SGW,
    displayName: "Henry F. Hall Building",
    address: "1455 De Maisonneuve Blvd O., Montreal, QC, H3G 1M8",
    departments: [
      {
        id: 1,
        title: "Geography, Planning and Environment",
        link:
          "http://www.concordia.ca/artsci/geography-planning-environment.html"
      },
      {
        id: 2,
        title: "Political Science, Sociology and Anthropology, Economics",
        link: "http://www.concordia.ca/artsci/academics/departments.html"
      },
      {
        id: 3,
        title: "School of Irish Studies",
        link: "http://www.concordia.ca/artsci/irish-studies.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Welcome Crew Office",
        link: "http://www.concordia.ca/students/success/mentoring.html"
      },
      {
        id: 2,
        title: "DB CLarke Theatre",
        link: "http://www.concordia.ca/arts/venues/db-clarke-theatre.html"
      },
      {
        id: 3,
        title: "Dean of Students",
        link: "http://www.concordia.ca/offices/dean-students.html"
      },
      {
        id: 4,
        title: "Aboriginal Student Resource Centre",
        link: "http://www.concordia.ca/students/aboriginal.html"
      },
      {
        id: 5,
        title: "Concordia Student Union",
        link: "https://www.csu.qc.ca/"
      },
      {
        id: 6,
        title: "IT Service Desk",
        link: "http://www.concordia.ca/it.html"
      },
      {
        id: 7,
        title: "Security Office",
        link: "http://www.concordia.ca/campus-life/security.html"
      },
      {
        id: 8,
        title: "Student Success Centre",
        link:
          "http://www.concordia.ca/students/success.html?utm_source=redirect&utm_campaign=offices-ssc"
      },
      {
        id: 9,
        title: "Mail Services",
        link: "http://www.concordia.ca/offices/facilities.html"
      },
      {
        id: 10,
        title: "Archives",
        link: "http://www.concordia.ca/offices/archives.html"
      },
      {
        id: 11,
        title: "Career and PLanning Services",
        link:
          "http://www.concordia.ca/students/success/career-planning-services.html"
      },
      {
        id: 12,
        title: "Sexual Assault Resource Centre (SARC)",
        link: "http://www.concordia.ca/conduct/sexual-assault.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49682818364492, longitude: -73.57884845912251 },
      { latitude: 45.497163503733475, longitude: -73.57954223351966 },
      { latitude: 45.497708183281496, longitude: -73.5790334123961 },
      { latitude: 45.4973720615268, longitude: -73.57833870872308 }
    ]
  },
  {
    id: BuildingId.GM,
    campusId: CampusId.SGW,
<<<<<<< HEAD
    displayName: "Guy-De Mainsonneuve Building",
    address: "1550 De Maisonneuve W, Montreal, Quebec H3G 1N1",
    departments: [
      {
        id: 1,
        title: "Contemporary Dance",
        link: "http://www.concordia.ca/finearts/dance.html"
      },
      {
        id: 2,
        title: "Music",
        link: "http://www.concordia.ca/finearts/music.html"
      },
      {
        id: 3,
        title: "Theatre",
        link: "http://www.concordia.ca/finearts/theatre.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Access Centre for Students with Disabilities",
        link: "http://www.concordia.ca/students/accessibility.html"
      },
      {
        id: 2,
        title: "Environmental Health and Safety",
        link: "http://www.concordia.ca/campus-life/safety.html"
      },
      {
        id: 3,
        title: "Facilities Management",
        link: "http://www.concordia.ca/offices/facilities.html"
      },
      {
        id: 4,
        title: "Financial Aid & Awards Office",
        link: "http://www.concordia.ca/offices/faao.html"
      },
      {
        id: 5,
        title: "Financial Services",
        link: "http://www.concordia.ca/financial-services.html"
      },
      {
        id: 6,
        title: "Graduate Studies",
        link: "http://www.concordia.ca/sgs.html"
      },
      {
        id: 7,
        title: "Health Services",
        link: "http://www.concordia.ca/students/health.html"
      },
      {
        id: 8,
        title: "Institute for Co-operative Education",
        link: "http://www.concordia.ca/academics/co-op.html"
      },
      {
        id: 9,
        title: "International Students Office",
        link: "http://www.concordia.ca/students/international.html"
      },
      {
        id: 10,
        title: "Office of Rights & Responsibilities",
        link:
          "http://www.concordia.ca/conduct/behavioural-integrity/rights-responsibilities.html"
      },
      {
        id: 11,
        title: "Office of Sustainability",
        link: "http://www.concordia.ca/about/sustainability.html"
      },
      {
        id: 12,
        title: "Office of the Chief Communications Officer",
        link:
          "http://www.concordia.ca/about/administration-governance/office-vp-research-graduate-studies.html"
      },
      {
        id: 13,
        title: "Office of the President",
        link:
          "http://www.concordia.ca/about/administration-governance/president.html"
      },
      {
        id: 14,
        title: "Office of the Provost & VP, Academic",
        link: "http://www.concordia.ca/provost.html"
      },
      {
        id: 15,
        title:
          "Office of the VP, Institutional Relations and Secretary General",
        link:
          "http://www.concordia.ca/about/administration-governance/office-vp-advancement.html"
      },
      {
        id: 16,
        title: "Office of the VP, Research & Graduate Studies",
        link:
          "http://www.concordia.ca/about/administration-governance/office-vp-research-graduate-studies.html"
      },
      {
        id: 17,
        title: "Ombuds Office",
        link: "http://www.concordia.ca/offices/ombuds.html"
      },
      {
        id: 18,
        title: "University Communcations Services",
        link:
          "http://www.concordia.ca/about/administration-governance/office-chief-communications-officer.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
=======
>>>>>>> 0a2e880... Fix sliding panel styling
    boundingBox: [
      { latitude: 45.49577848635891, longitude: -73.57908877836617 },
      { latitude: 45.49576250528483, longitude: -73.5791078891054 },
      { latitude: 45.49577966143771, longitude: -73.57914544003161 },
      { latitude: 45.49612802025848, longitude: -73.57880671544032 },
      { latitude: 45.4961101591686, longitude: -73.5787664823051 },
      { latitude: 45.496108044039154, longitude: -73.57876815868573 },
      { latitude: 45.495944, longitude: -73.578434 },
      { latitude: 45.495617, longitude: -73.578747 }
    ]
  },
  {
    id: BuildingId.LB,
    campusId: CampusId.SGW,
    displayName: "JW McConnell Building",
    address: "1400 De Maisonneuve Blvd. O. Montreal, QC, H3G 1M8",
    departments: [
      {
        id: 1,
        title: "English",
        link: "http://www.concordia.ca/artsci/english.html"
      },
      {
        id: 2,
        title: "History",
        link: "http://www.concordia.ca/artsci/history.html"
      },
      {
        id: 3,
        title: "Etudes francaises",
        link: "http://www.concordia.ca/artsci/francais.html"
      },
      {
        id: 4,
        title: "Mathematics and Statistics",
        link: "http://mypage.concordia.ca/mathstat/"
      },
      {
        id: 5,
        title: "Education",
        link: "http://www.concordia.ca/artsci/education.html"
      },
      {
        id: 6,
        title:
          "Centre for Interdisciplinary Studies in Society and Culture (CISSC)",
        link: "http://www.concordia.ca/artsci/cissc.html"
      },
      {
        id: 7,
        title: "Centre for the Study of Learning and Performance",
        link: "http://www.concordia.ca/research/learning-performance.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "R. Howard Webster Library",
        link: "https://library.concordia.ca/"
      },
      {
        id: 2,
        title: "Welcome Centre",
        link:
          "http://www.concordia.ca/admissions/undergraduate/welcometours.html"
      },
      {
        id: 3,
        title: "Leonard and Bina Ellen Art Gallery",
        link: "http://ellengallery.concordia.ca/"
      },
      {
        id: 4,
        title: "J.A De Seve Cinema",
        link: "http://www.concordia.ca/it/services/cinemas.html"
      },
      {
        id: 5,
        title: "Birks Student Service Centre",
        link: "http://www.concordia.ca/students/birks.html"
      },
      {
        id: 6,
        title: "Campus Stores",
        link: "https://stores.concordia.ca/"
      },
      {
        id: 7,
        title: "Instructional & Information Technology Services (IITS)",
        link: "http://www.concordia.ca/it.html"
      },
      {
        id: 8,
        title: "4TH SPACE",
        link: "http://www.concordia.ca/next-gen/4th-space.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49672776379525, longitude: -73.57857786622326 },
      { latitude: 45.496704732634115, longitude: -73.57852925118486 },
      { latitude: 45.496667365730175, longitude: -73.57856613155882 },
      { latitude: 45.49625564751439, longitude: -73.57769860505215 },
      { latitude: 45.49649527284175, longitude: -73.57746436939486 },
      { latitude: 45.49658675639552, longitude: -73.57764999039873 },
      { latitude: 45.49663507112262, longitude: -73.57760084433879 },
      { latitude: 45.496615330095416, longitude: -73.57755591733779 },
      { latitude: 45.49688977757426, longitude: -73.57729239901107 },
      { latitude: 45.497015559948174, longitude: -73.57753665173557 },
      { latitude: 45.49698312847616, longitude: -73.57756380910185 },
      { latitude: 45.49700216434244, longitude: -73.5776094066551 },
      { latitude: 45.496993938968906, longitude: -73.57761845911052 },
      { latitude: 45.49699722911846, longitude: -73.57763086432722 },
      { latitude: 45.4970397660347, longitude: -73.5775869431546 },
      { latitude: 45.49712058607023, longitude: -73.5777461957665 },
      { latitude: 45.497077109173674, longitude: -73.57779179331975 },
      { latitude: 45.49708227940097, longitude: -73.57780688074546 },
      { latitude: 45.49708768463809, longitude: -73.57779816356616 },
      { latitude: 45.49711212570382, longitude: -73.57784644332843 },
      { latitude: 45.49714079694045, longitude: -73.57781693902926 },
      { latitude: 45.49726403029928, longitude: -73.5780559473552 },
      { latitude: 45.49701657683179, longitude: -73.57829458296627 },
      { latitude: 45.497000126087705, longitude: -73.57825770259231 },
      { latitude: 45.49696355463932, longitude: -73.57829394459444 },
      { latitude: 45.49693687901673, longitude: -73.5782460001083 },
      { latitude: 45.49689575208939, longitude: -73.57828891545253 },
      { latitude: 45.49691196785291, longitude: -73.578327136931 },
      { latitude: 45.496872485985776, longitude: -73.57836938172298 },
      { latitude: 45.496889907674564, longitude: -73.57841469347477 }
    ]
  },
  {
    id: BuildingId.GN,
    campusId: CampusId.SGW,
    displayName: "Grey Nuns Building",
    address: "1190 Guy St, Montreal, Quebec H3H 2L4",
    departments: [],
    services: [
      {
        id: 1,
        title: "Residences",
        link:
          "http://www.concordia.ca/students/housing/test/benefits/grey-nuns.html"
      },
      {
        id: 2,
        title: "Grey Nuns Library (Reading Room and Group Study Rooms)",
        link: "http://www.concordia.ca/maps/buildings/gn.html"
      },
      {
        id: 3,
        title: "Daycare Centre",
        link: "http://www.concordia.ca/campus-life/daycares.html"
      },
      {
        id: 4,
        title: "Summer Accommodation",
        link:
          "http://www.concordia.ca/summer/accommodations.html/greynunsresidence/"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.492593, longitude: -73.576535 },
      { latitude: 45.492731, longitude: -73.576392 },
      { latitude: 45.492901, longitude: -73.576745 },
      { latitude: 45.492922, longitude: -73.576739 },
      { latitude: 45.492921, longitude: -73.576741 },
      { latitude: 45.492948, longitude: -73.576789 },
      { latitude: 45.492939, longitude: -73.576832 },
      { latitude: 45.493025, longitude: -73.577005 },
      { latitude: 45.493363, longitude: -73.576673 },
      { latitude: 45.493341, longitude: -73.576625 },
      { latitude: 45.493471, longitude: -73.576497 },
      { latitude: 45.493491, longitude: -73.576543 },
      { latitude: 45.493792, longitude: -73.576245 },
      { latitude: 45.493568, longitude: -73.575783 },
      { latitude: 45.493711, longitude: -73.575641 },
      { latitude: 45.493932, longitude: -73.576094 },
      { latitude: 45.494034, longitude: -73.575996 },
      { latitude: 45.49412, longitude: -73.576178 },
      { latitude: 45.49401, longitude: -73.576283 },
      { latitude: 45.49439, longitude: -73.577057 },
      { latitude: 45.494093, longitude: -73.577348 },
      { latitude: 45.494123, longitude: -73.577412 },
      { latitude: 45.493974, longitude: -73.57756 },
      { latitude: 45.493868, longitude: -73.577339 },
      { latitude: 45.494191, longitude: -73.57702 },
      { latitude: 45.493895, longitude: -73.576409 },
      { latitude: 45.49355, longitude: -73.576748 },
      { latitude: 45.493611, longitude: -73.576875 },
      { latitude: 45.493667, longitude: -73.576822 },
      { latitude: 45.493724, longitude: -73.576944 },
      { latitude: 45.493673, longitude: -73.576999 },
      { latitude: 45.493746, longitude: -73.577156 },
      { latitude: 45.493633, longitude: -73.577267 },
      { latitude: 45.493582, longitude: -73.577153 },
      { latitude: 45.493601, longitude: -73.577132 },
      { latitude: 45.493573, longitude: -73.577082 },
      { latitude: 45.493525, longitude: -73.577128 },
      { latitude: 45.493451, longitude: -73.576963 },
      { latitude: 45.493475, longitude: -73.576935 },
      { latitude: 45.493433, longitude: -73.576853 },
      { latitude: 45.493352, longitude: -73.576938 },
      { latitude: 45.493363, longitude: -73.57696 },
      { latitude: 45.493104, longitude: -73.577212 },
      { latitude: 45.493201, longitude: -73.577402 },
      { latitude: 45.493089, longitude: -73.57751 },
      { latitude: 45.492994, longitude: -73.577314 },
      { latitude: 45.492927, longitude: -73.577379 },
      { latitude: 45.49284, longitude: -73.577198 },
      { latitude: 45.492894, longitude: -73.577141 },
      { latitude: 45.49281, longitude: -73.576963 },
      { latitude: 45.49279, longitude: -73.576977 },
      { latitude: 45.49277, longitude: -73.576972 },
      { latitude: 45.492712, longitude: -73.577032 },
      { latitude: 45.492675, longitude: -73.576965 },
      { latitude: 45.492676, longitude: -73.576923 },
      { latitude: 45.492725, longitude: -73.57687 },
      { latitude: 45.492751, longitude: -73.576862 },
      { latitude: 45.492612, longitude: -73.576583 },
      { latitude: 45.49261, longitude: -73.576578 }
    ]
  },
  {
    id: BuildingId.EV,
    campusId: CampusId.SGW,
    displayName: "Engineering, CS and VA Integrated Complex",
    address: "1493-1515 Saint-Catherine St W, Montreal, Quebec H3G 2W1",
    departments: [
      {
        id: 1,
        title: "Gina Cody School of Engineering and Computer Science",
        link: "http://www.concordia.ca/ginacody.html"
      },
      {
        id: 2,
        title: "Electrical and Computer Engineering",
        link: "http://www.concordia.ca/ginacody/electrical-computer-eng.html"
      },
      {
        id: 3,
        title: "Building, Civil and Environmental Engineering",
        link:
          "http://www.concordia.ca/ginacody/building-civil-environmental-eng.html"
      },
      {
        id: 4,
        title: "Computer Science and Software Engineering",
        link:
          "http://www.concordia.ca/ginacody/computer-science-software-eng.html"
      },
      {
        id: 5,
        title: "Mechanical, Industrial and Aerospace",
        link:
          "http://www.concordia.ca/ginacody/mechanical-industrial-aerospace-eng.html"
      },
      {
        id: 6,
        title: "Design and Computation Arts",
        link: "http://www.concordia.ca/finearts/design.html"
      },
      {
        id: 7,
        title: "Faculty of Fine Arts",
        link: "http://www.concordia.ca/finearts.html"
      },
      {
        id: 8,
        title: "Studio Arts",
        link: "http://www.concordia.ca/finearts/studio-arts.html"
      },
      {
        id: 9,
        title: "Art Education",
        link: "http://www.concordia.ca/finearts/art-education.html"
      },
      {
        id: 10,
        title: "Art History",
        link: "http://www.concordia.ca/finearts/art-history.html"
      },
      {
        id: 11,
        title: "Comtemporary Dance",
        link: "http://www.concordia.ca/finearts/dance.html"
      },
      {
        id: 12,
        title: "Recreation and Athletics",
        link: "http://www.concordia.ca/campus-life/recreation.html"
      },
      {
        id: 13,
        title: "Zero Energy Building Studies, Centre",
        link: "http://www.concordia.ca/research/zero-energy-building.html"
      },
      {
        id: 14,
        title:
          "Centre for Pattern Recognition and Machine Intelligence (CENPARMI)",
        link: "http://www.concordia.ca/research/cenparmi.html"
      },
      {
        id: 15,
        title: "Center for Composites (CONCOM)",
        link: "http://www.concordia.ca/research/composites.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "LeGym",
        link:
          "http://www.concordia.ca/campus-life/recreation/facilities/le-gym.html"
      },
      {
        id: 2,
        title: "FOFA Gallery",
        link: "http://www.concordia.ca/finearts/facilities/fofa-gallery.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.495445036068375, longitude: -73.5776085991036 },
      { latitude: 45.495354319373966, longitude: -73.57769711200109 },
      { latitude: 45.49535243923368, longitude: -73.57774203900209 },
      { latitude: 45.495237750557266, longitude: -73.57787682000509 },
      { latitude: 45.4952325801606, longitude: -73.57791370037904 },
      { latitude: 45.495246373096826, longitude: -73.5779107120624 },
      { latitude: 45.4952644694786, longitude: -73.5780005660644 },
      { latitude: 45.495246373096826, longitude: -73.57801967680363 },
      { latitude: 45.49559413704084, longitude: -73.57876257226673 },
      { latitude: 45.495863, longitude: -73.578494 }
    ]
  },
  {
    id: BuildingId.MB,
    campusId: CampusId.SGW,
    displayName: "John Molson School of Buisness",
    address: "1450 Guy St, Montreal, Quebec H3H 0A1",
    departments: [
      {
        id: 1,
        title: "Accountancy",
        link: "http://www.concordia.ca/jmsb/about/departments/accountancy.html"
      },
      {
        id: 2,
        title: "Supply Chain & Business Technology Management",
        link:
          "http://www.concordia.ca/jmsb/about/departments/supply-chain-business-technology-management.html"
      },
      {
        id: 3,
        title: "Finance",
        link: "http://www.concordia.ca/jmsb/about/departments/finance.html"
      },
      {
        id: 4,
        title: "Management",
        link: "http://www.concordia.ca/jmsb/about/departments/management.html"
      },
      {
        id: 5,
        title: "Marketing",
        link: "http://www.concordia.ca/jmsb/about/departments/marketing.html"
      },
      {
        id: 6,
        title: "Goodman Institute of Investment Management",
        link: "http://www.concordia.ca/jmsb/mba-cfa.html"
      },
      {
        id: 7,
        title: "Executive MBA Program",
        link: "http://www.concordia.ca/jmsb/emba.html"
      },
      {
        id: 8,
        title: "Music",
        link: "http://www.concordia.ca/finearts/music.html"
      },
      {
        id: 9,
        title: "Theatre",
        link: "http://www.concordia.ca/finearts/theatre.html"
      },
      {
        id: 10,
        title: "Contemporary Dance",
        link: "http://www.concordia.ca/finearts/dance.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Career Management Services",
        link: "http://www.concordia.ca/jmsb/career.html"
      },
      {
        id: 2,
        title: "John Molson Executive Centre",
        link: "http://www.concordia.ca/jmsb/executive-education.html"
      },
      {
        id: 3,
        title: "Performing Arts Facilities",
        link: "http://www.concordia.ca/finearts/facilities/performing-arts.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49518543255166, longitude: -73.57852445432236 },
      { latitude: 45.495004111766896, longitude: -73.5787366533723 },
      { latitude: 45.495037014416425, longitude: -73.5787902975526 },
      { latitude: 45.49500505184288, longitude: -73.57882348988916 },
      { latitude: 45.495165745745325, longitude: -73.57917085290943 },
      { latitude: 45.49521983908429, longitude: -73.57911278758203 },
      { latitude: 45.49535696496049, longitude: -73.579366419574 },
      { latitude: 45.495517667631276, longitude: -73.5791999682051 },
      { latitude: 45.495438071102875, longitude: -73.57896105061232 }
    ]
  },
  {
    id: BuildingId.FG,
    campusId: CampusId.SGW,
    displayName: "Faubourg Sainte-Catherine Building",
    address: "1616 Saint-Catherine St W, Montreal, Quebec H3H 1L7",
    departments: [
      {
        id: 1,
        title: "Education",
        link: "http://www.concordia.ca/artsci/education.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Classrooms",
        link: ""
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49445147189703, longitude: -73.57761729432568 },
      { latitude: 45.49438746461633, longitude: -73.57769189706683 },
      { latitude: 45.494427653290025, longitude: -73.57776196977734 },
      { latitude: 45.49439757054283, longitude: -73.57779717377066 },
      { latitude: 45.49437124812586, longitude: -73.57776733419537 },
      { latitude: 45.49418641968824, longitude: -73.5779873490252 },
      { latitude: 45.49420240120961, longitude: -73.57801718860048 },
      { latitude: 45.49411713751262, longitude: -73.57812082534356 },
      { latitude: 45.4941030361491, longitude: -73.57811411982102 },
      { latitude: 45.49391167176194, longitude: -73.57834263339927 },
      { latitude: 45.493923422938344, longitude: -73.57836308524301 },
      { latitude: 45.493897570346974, longitude: -73.57839258954218 },
      { latitude: 45.493882058786475, longitude: -73.57838353708675 },
      { latitude: 45.493835054031535, longitude: -73.57844053402832 },
      { latitude: 45.49384868541449, longitude: -73.57846500918558 },
      { latitude: 45.49362560858833, longitude: -73.57872769750199 },
      { latitude: 45.49382287086169, longitude: -73.57906808191478 },
      { latitude: 45.494297759443036, longitude: -73.57851747635026 },
      { latitude: 45.494304340057006, longitude: -73.57852351132054 },
      { latitude: 45.49437884195458, longitude: -73.57844203922171 },
      { latitude: 45.494371556284385, longitude: -73.57843030455727 },
      { latitude: 45.494911936630785, longitude: -73.57778660158661 },
      { latitude: 45.49486963312675, longitude: -73.5777128408387 },
      { latitude: 45.49487668371297, longitude: -73.57770479421166 },
      { latitude: 45.49483626034004, longitude: -73.57763405094889 },
      { latitude: 45.494842605871426, longitude: -73.57762533376959 },
      { latitude: 45.49479818713667, longitude: -73.57755023191717 },
      { latitude: 45.49480688287058, longitude: -73.57754084418562 },
      { latitude: 45.49476481430762, longitude: -73.57746562876993 },
      { latitude: 45.494774215106524, longitude: -73.57745255300098 },
      { latitude: 45.49469242810337, longitude: -73.57730786167745 },
      { latitude: 45.4947006538131, longitude: -73.57729947977428 },
      { latitude: 45.49465465014242, longitude: -73.57721893102357 },
      { latitude: 45.49439700602644, longitude: -73.57752035386464 }
    ]
  },
  {
    id: BuildingId.GS,
    campusId: CampusId.SGW,
    displayName: "GS Building",
    address: "1538 Sherbrooke St W, Montreal, Quebec H3G 1L5",
    departments: [],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49657694046067, longitude: -73.58143535844584 },
      { latitude: 45.49662535300043, longitude: -73.58145279280444 },
      { latitude: 45.49678460001528, longitude: -73.58130030988744 },
      { latitude: 45.49671016803877, longitude: -73.5811287437217 },
      { latitude: 45.49665205603663, longitude: -73.58117062809069 },
      { latitude: 45.49651742476055, longitude: -73.58080300057769 },
      { latitude: 45.496475592488274, longitude: -73.58084423954129 },
      { latitude: 45.49648640307848, longitude: -73.5808730732882 },
      { latitude: 45.49641517082438, longitude: -73.58094149396186 }
    ]
  },
  {
    id: BuildingId.LD,
    campusId: CampusId.SGW,
    displayName: "LD Building",
    address: "2050 Mackay, 2070 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "CSU Daycare & Nursery",
        link: "https://www.csudaycarenursery.com/"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49678990248897, longitude: -73.57957951011035 },
      { latitude: 45.49680212308779, longitude: -73.5796063322005 },
      { latitude: 45.496676626812274, longitude: -73.57973306657645 },
      { latitude: 45.496699187961056, longitude: -73.57978268744323 },
      { latitude: 45.496931697682655, longitude: -73.5795523199451 },
      { latitude: 45.4968912757849, longitude: -73.57947017729401 }
    ]
  },
  {
    id: BuildingId.TD,
    campusId: CampusId.SGW,
    displayName: "Toronto-Dominion Building",
    address: "2050 Mackay, 2070 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "CUSP",
        link: "http://www.concordia.ca/students/parenthood.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.495057, longitude: -73.57828 },
      { latitude: 45.494978, longitude: -73.578139 },
      { latitude: 45.494943, longitude: -73.578176 },
      { latitude: 45.495023, longitude: -73.578332 }
    ]
  },
  {
    id: BuildingId.VA,
    campusId: CampusId.SGW,
    displayName: "Visual Arts Building",
    address: "1395 René-Lévesque Blvd W, Montreal, QC H3G 2M5",
    departments: [
      {
        id: 1,
        title: "Studio Arts",
        link: "http://www.concordia.ca/finearts/studio-arts.html"
      },
      {
        id: 2,
        title: "Art History",
        link: "http://www.concordia.ca/finearts/art-history.html"
      },
      {
        id: 3,
        title: "Art Education",
        link: "http://www.concordia.ca/finearts/art-education.html"
      },
      {
        id: 4,
        title: "Creative Arts Therapies",
        link: "http://www.concordia.ca/finearts/creative-arts-therapies.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "VAV Art Gallery",
        link: "http://vavgallery.concordia.ca/"
      },
      {
        id: 2,
        title: "Art Supply Store",
        link:
          "http://www.concordia.ca/finearts/facilities/art-supply-store.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.496192, longitude: -73.573781 },
      { latitude: 45.495667, longitude: -73.574304 },
      { latitude: 45.49541, longitude: -73.573748 },
      { latitude: 45.495665, longitude: -73.573482 },
      { latitude: 45.495813, longitude: -73.573807 },
      { latitude: 45.496079, longitude: -73.573544 }
    ]
  },
  {
    id: BuildingId.SB,
    campusId: CampusId.SGW,
    displayName: "Samuel Bronfman Building",
    address: "1590 Docteur Penfield, Montreal, QC",
    departments: [],
    services: [
      {
        id: 1,
        title: "Arts and Science Research Groups",
        link: "http://www.concordia.ca/artsci/research/centres.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.496436802590246, longitude: -73.58620662612847 },
      { latitude: 45.49650134091714, longitude: -73.58620724019713 },
      { latitude: 45.49650604117184, longitude: -73.5861358263821 },
      { latitude: 45.496520376946314, longitude: -73.58613482055372 },
      { latitude: 45.49651826183226, longitude: -73.58616667178578 },
      { latitude: 45.496537062843124, longitude: -73.5862105929584 },
      { latitude: 45.49668170582831, longitude: -73.58608596656673 },
      { latitude: 45.49665232932157, longitude: -73.58601421747558 },
      { latitude: 45.496657969612045, longitude: -73.58600717667692 },
      { latitude: 45.496582295667686, longitude: -73.58582780394904 },
      { latitude: 45.49657313018306, longitude: -73.58583551529996 },
      { latitude: 45.496553998818726, longitude: -73.58579253193895 },
      { latitude: 45.4965100514593, longitude: -73.58579253193895 },
      { latitude: 45.49650981644659, longitude: -73.58577912089387 },
      { latitude: 45.4964919554778, longitude: -73.58573922303478 },
      { latitude: 45.496466339078445, longitude: -73.58573654082576 }
    ]
  },
  {
    id: BuildingId.Q,
    campusId: CampusId.SGW,
    displayName: "Q annex",
    address: "2012 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49655514271302, longitude: -73.57912355345123 },
      { latitude: 45.49658616435723, longitude: -73.5791832326018 },
      { latitude: 45.496682989379224, longitude: -73.57908130865924 },
      { latitude: 45.49665102773989, longitude: -73.57902162950866 }
    ]
  },
  {
    id: BuildingId.P,
    campusId: CampusId.SGW,
    displayName: "P annex",
    address: "2020 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49668439945111, longitude: -73.57908130865924 },
      { latitude: 45.49658804445633, longitude: -73.57918390315406 },
      { latitude: 45.49662987664503, longitude: -73.5792730866038 },
      { latitude: 45.49673093180422, longitude: -73.5791718332135 }
    ]
  },
  {
    id: BuildingId.T,
    campusId: CampusId.SGW,
    displayName: "T annex",
    address: "2030 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "Graduate Students Association",
        link: "https://gsaconcordia.ca/"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49671824116626, longitude: -73.57918725591533 },
      { latitude: 45.496633636840265, longitude: -73.57927107494704 },
      { latitude: 45.496667948610025, longitude: -73.57934617679946 },
      { latitude: 45.49675678309487, longitude: -73.57925967555873 }
    ]
  },
  {
    id: BuildingId.RR,
    campusId: CampusId.SGW,
    displayName: "RR annex",
    address: "2040 Mackay St, Montreal, QC H3G 2J1",
    departments: [
      {
        id: 1,
        title: "Liberal Arts College",
        link: "http://www.concordia.ca/artsci/liberal-arts-college.html"
      }
    ],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.496756323648604, longitude: -73.57925709579087 },
      { latitude: 45.496759848823714, longitude: -73.57925307247734 },
      { latitude: 45.49680614610299, longitude: -73.57933186236716 },
      { latitude: 45.49665120661304, longitude: -73.57948126357395 },
      { latitude: 45.4966126646122, longitude: -73.57940012675125 }
    ]
  },
  {
    id: BuildingId.R,
    campusId: CampusId.SGW,
    displayName: "R annex",
    address: "2050 Mackay St, Montreal, QC H3G 2J1",
    departments: [
      {
        id: 1,
        title: "Religion and Cultures",
        link: "http://www.concordia.ca/artsci/religions-cultures.html"
      }
    ],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.496713758698185, longitude: -73.57942461253974 },
      { latitude: 45.496804943225605, longitude: -73.5793280530152 },
      { latitude: 45.4968463052306, longitude: -73.57939980210635 },
      { latitude: 45.49674337018465, longitude: -73.5794903266606 }
    ]
  },
  {
    id: BuildingId.FA,
    campusId: CampusId.SGW,
    displayName: "FA annex",
    address: "2060 Mackay St, Montreal, QC H3G 2J1",
    departments: [
      {
        id: 1,
        title: "Religion and Cultures",
        link: "http://www.concordia.ca/artsci/religions-cultures.html"
      }
    ],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.4968712164235, longitude: -73.57948362113807 },
      { latitude: 45.49683831484563, longitude: -73.57940717818114 },
      { latitude: 45.496734909761514, longitude: -73.57950105549666 },
      { latitude: 45.49677674184114, longitude: -73.57958554508063 }
    ]
  },
  {
    id: BuildingId.X,
    campusId: CampusId.SGW,
    displayName: "X annex",
    address: "2080 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "Concordia International",
        link: "http://www.concordia.ca/offices/ci.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.496906, longitude: -73.579579 },
      { latitude: 45.496812, longitude: -73.579672 },
      { latitude: 45.496855, longitude: -73.579756 },
      { latitude: 45.496949, longitude: -73.579667 }
    ]
  },
  {
    id: BuildingId.Z,
    campusId: CampusId.SGW,
    displayName: "Z annex",
    address: "2090 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "Multi-Faith and Spirituality Centre",
        link: "http://www.concordia.ca/students/spirituality.html"
      },

      {
        id: 2,
        title: "Sustainable Concordia",
        link: "http://sustainableconcordia.ca/"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.496851, longitude: -73.57976 },
      { latitude: 45.496889, longitude: -73.579836 },
      { latitude: 45.496985, longitude: -73.579742 },
      { latitude: 45.496948, longitude: -73.579671 }
    ]
  },
  {
    id: BuildingId.V,
    campusId: CampusId.SGW,
    displayName: "V annex",
    address: "2100 Mackay St, Montreal, QC H3G 2J1",
    departments: [],
    services: [
      {
        id: 1,
        title: "Centre 2110",
        link: "https://genderadvocacy.org/"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.496944, longitude: -73.579942 },
      { latitude: 45.496984, longitude: -73.580025 },
      { latitude: 45.49709, longitude: -73.579924 },
      { latitude: 45.497049, longitude: -73.579838 }
    ]
  },
  {
    id: BuildingId.S,
    campusId: CampusId.SGW,
    displayName: "S annex",
    address: "2145 Mackay St, Montreal, QC H3G 2J1",
    departments: [
      {
        id: 1,
        title: "Department of Philosophy",
        link: "http://www.concordia.ca/artsci/philosophy.html"
      }
    ],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.497291, longitude: -73.579791 },
      { latitude: 45.497406, longitude: -73.580035 },
      { latitude: 45.497584, longitude: -73.57985 },
      { latitude: 45.497546, longitude: -73.579773 },
      { latitude: 45.497492, longitude: -73.579826 },
      { latitude: 45.49746, longitude: -73.579759 },
      { latitude: 45.497433, longitude: -73.579779 },
      { latitude: 45.497385, longitude: -73.579692 }
    ]
  },
  {
    id: BuildingId.MI,
    campusId: CampusId.SGW,
    displayName: "MI Annex",
    address: "2130 Bishop St, Montreal, Quebec H3G 1M8",
    departments: [],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49764671893396, longitude: -73.57940390361952 },
      { latitude: 45.49762227810028, longitude: -73.57935696496176 },
      { latitude: 45.49769372050734, longitude: -73.57928588642287 },
      { latitude: 45.49768338016457, longitude: -73.57925906433272 },
      { latitude: 45.497782553373945, longitude: -73.57916585756945 },
      { latitude: 45.49781968453063, longitude: -73.57923626555609 }
    ]
  },
  {
    id: BuildingId.MU,
    campusId: CampusId.SGW,
    displayName: "MU Annex",
    address: "2170 Bishop St, Montreal, QC H3G 2E9 ",
    departments: [],
    services: [
      {
        id: 1,
        title: "Simone de Beauvoir Institute",
        link: "http://www.concordia.ca/artsci/sdbi.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49792714005294, longitude: -73.57946173647333 },
      { latitude: 45.497750414665965, longitude: -73.5796347389548 },
      { latitude: 45.497786135799544, longitude: -73.57970447638918 },
      { latitude: 45.49796944126014, longitude: -73.579537508878 }
    ]
  },
  {
    id: BuildingId.D,
    campusId: CampusId.SGW,
    displayName: "D annex",
    address: "2140 Bishop St, Montreal, QC H3G 2E9",
    departments: [
      {
        id: 1,
        title: "Department of Theological Studies",
        link: "http://www.concordia.ca/artsci/theology.html"
      }
    ],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.49771163062695, longitude: -73.57934759842982 },
      { latitude: 45.4977431216492, longitude: -73.57941465365519 },
      { latitude: 45.49785498513797, longitude: -73.57931205916037 },
      { latitude: 45.49781832401905, longitude: -73.57923561620345 }
    ]
  },
  {
    id: BuildingId.B,
    campusId: CampusId.SGW,
    displayName: "B annex",
    address: "2160 Bishop St, Montreal, QC H3G 2E9",
    services: [
      {
        id: 1,
        title: "Engineering and Computer Science Association",
        link: "https://ecaconcordia.ca/"
      }
    ],
    departments: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
<<<<<<< HEAD
      { latitude: 45.49770829098716, longitude: -73.57956349505591 },
      { latitude: 45.497741192056665, longitude: -73.57963725580382 },
      { latitude: 45.49792778775876, longitude: -73.57946090056109 },
      { latitude: 45.497890186659454, longitude: -73.57938579870867 }
=======
      { latitude: 45.497704233816215, longitude: -73.57955830679413 },
      { latitude: 45.49773971997152, longitude: -73.57963474975105 },
      { latitude: 45.49791974255139, longitude: -73.57946039608761 },
      { latitude: 45.49788190643975, longitude: -73.57938495895907 }
>>>>>>> 0a2e880... Fix sliding panel styling
    ]
  },
  {
    id: BuildingId.LS,
    campusId: CampusId.SGW,
    displayName: "Learning Square Building",
    address: "1535 Boulevard de Maisonneuve O, Montréal, QC H3G 1M9",
    services: [
      {
        id: 1,
        title: "IT Services - 1st floor",
        link:
          "http://www.concordia.ca/it/services/classroom-support/sir-george-williamscampus/SGW-LS-1.html"
      },

      {
        id: 2,
        title: "IT Services - 2nd floor",
        link:
          "http://www.concordia.ca/it/services/classroom-support/sir-george-williamscampus/SGW-LS-2.html"
      }
    ],
    departments: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.496114, longitude: -73.579481 },
      { latitude: 45.495955, longitude: -73.579624 },
      { latitude: 45.496056, longitude: -73.579864 },
      { latitude: 45.496191, longitude: -73.579744 },
      { latitude: 45.496157, longitude: -73.579667 },
      { latitude: 45.496184, longitude: -73.579642 },
      { latitude: 45.496113, longitude: -73.579483 }
    ]
  },
  {
    id: BuildingId.SP,
    campusId: CampusId.Loyola,
    displayName: "Richard J. Renaud Science Complex",
    address: "3475 Rue West Broadway, Montreal, QC H4B 2A7",
    departments: [
      {
        id: 1,
        title: "Biology",
        link: "http://www.concordia.ca/artsci/biology.html"
      },
      {
        id: 2,
        title: "Chemistry and Biochemistry",
        link: "http://www.concordia.ca/artsci/chemistry.html"
      },
      {
        id: 3,
        title: "Health, Kinesiology & Applied Physiology",
        link:
          "http://www.concordia.ca/artsci/health-kinesiology-physiology.html"
      },
      {
        id: 4,
        title: "Physics",
        link: "http://www.concordia.ca/artsci/physics.html"
      },
      {
        id: 5,
        title: "Psychology",
        link: "https://www.concordia.ca/artsci/psychology.html"
      },
      {
        id: 6,
        title: "Centre for Biological Applications of Mass Spectrometry",
        link: "http://www.concordia.ca/research/mass-spec.html"
      },
      {
        id: 7,
        title: "Centre for NanoScience Research",
        link: "http://www.concordia.ca/research/nanoscience.html"
      },
      {
        id: 8,
        title: "Center for Studies in Behavioral Neurobiology",
        link: "http://www.concordia.ca/research/neuroscience.html"
      },
      {
        id: 9,
        title: "Centre for Research in Molecular Modeling",
        link: "http://www.concordia.ca/research/molecular-modeling.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Science College",
        link: "http://www.concordia.ca/artsci/science-college.html"
      },
      {
        id: 2,
        title: "Science Technical Centre",
        link: "http://www.concordia.ca/artsci/students/technical-centre.html"
      },
      {
        id: 3,
        title: "Animal Care Facilities",
        link: ""
      },
      {
        id: 4,
        title: "Security Office",
        link: ""
      },
      {
        id: 5,
        title: "Cafe",
        link: ""
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45698150789547, longitude: -73.64083076197447 },
      { latitude: 45.45702101772243, longitude: -73.64093536812605 },
      { latitude: 45.45699561855114, longitude: -73.64096084911169 },
      { latitude: 45.457017106984964, longitude: -73.64101283910982 },
      { latitude: 45.45704062472758, longitude: -73.64099473419897 },
      { latitude: 45.4571582132936, longitude: -73.64129547688476 },
      { latitude: 45.45714810068656, longitude: -73.64130318823568 },
      { latitude: 45.45717796814861, longitude: -73.64138231340162 },
      { latitude: 45.457167461781054, longitude: -73.64139135814725 },
      { latitude: 45.457184093157494, longitude: -73.64143316415664 },
      { latitude: 45.45720808118384, longitude: -73.6414164003503 },
      { latitude: 45.457439297925404, longitude: -73.64200335335009 },
      { latitude: 45.45763930760126, longitude: -73.64184844591702 },
      { latitude: 45.45767270242441, longitude: -73.64192622997845 },
      { latitude: 45.45832463847229, longitude: -73.64141451278216 },
      { latitude: 45.45827478198157, longitude: -73.64128308454043 },
      { latitude: 45.458208124668005, longitude: -73.64133647470348 },
      { latitude: 45.45817990396, longitude: -73.64126271395557 },
      { latitude: 45.45825612773927, longitude: -73.64120078449221 },
      { latitude: 45.458194347307135, longitude: -73.64103850023358 },
      { latitude: 45.458339448593314, longitude: -73.6409214888653 },
      { latitude: 45.458316166564465, longitude: -73.64086080388634 },
      { latitude: 45.45799822317311, longitude: -73.64111356299453 },
      { latitude: 45.4579773269101, longitude: -73.6410636201382 },
      { latitude: 45.45789266439714, longitude: -73.64113168119195 },
      { latitude: 45.45790653965101, longitude: -73.64116889684203 },
      { latitude: 45.45752432666299, longitude: -73.64147029091669 },
      { latitude: 45.45724875063997, longitude: -73.64076394112611 },
      { latitude: 45.45724592852179, longitude: -73.640766288059 },
      { latitude: 45.4572014801418, longitude: -73.64065497638488 }
    ]
  },
  {
    id: BuildingId.TA,
    campusId: CampusId.Loyola,
    displayName: "Terrebonne Building",
    address: "7079 Terrebonne, Montreal, QC H4B 1E1",
    departments: [],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.460082, longitude: -73.640892 },
      { latitude: 45.459977, longitude: -73.640967 },
      { latitude: 45.45994, longitude: -73.640865 },
      { latitude: 45.460041, longitude: -73.640774 }
    ]
  },
  {
    id: BuildingId.CJ,
    campusId: CampusId.Loyola,
    displayName: "Communications & Journalism Building",
    address: "Notre-Dame-de-Grâce, Montreal, QC H4B 1R6",
    departments: [
      {
        id: 1,
        title: "Communcation Studies",
        link: "http://www.concordia.ca/artsci/coms.html"
      },
      {
        id: 2,
        title: "Journalism",
        link: "https://www.concordia.ca/artsci/journalism.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Campus Retail Stores",
        link: "https://stores.concordia.ca/"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45717459096273, longitude: -73.64039358679253 },
      { latitude: 45.4574064756653, longitude: -73.6402075067537 },
      { latitude: 45.45735944047541, longitude: -73.64007607851197 },
      { latitude: 45.457310523836306, longitude: -73.64005193863083 },
      { latitude: 45.457305820311056, longitude: -73.64007607851197 },
      { latitude: 45.45720986831077, longitude: -73.64001438770462 },
      { latitude: 45.45720986831077, longitude: -73.63998622450997 },
      { latitude: 45.45722209749637, longitude: -73.63991246376206 },
      { latitude: 45.45722776405839, longitude: -73.6398788088492 },
      { latitude: 45.457259142029194, longitude: -73.63982504197308 },
      { latitude: 45.457278722377346, longitude: -73.63980158559434 },
      { latitude: 45.45732928527728, longitude: -73.63977006963842 },
      { latitude: 45.45738971207491, longitude: -73.63976202780387 },
      { latitude: 45.45742954201785, longitude: -73.6397710802593 },
      { latitude: 45.457480339958074, longitude: -73.63982036584994 },
      { latitude: 45.4574631721408, longitude: -73.63995414102456 },
      { latitude: 45.45744647466967, longitude: -73.63994645137119 },
      { latitude: 45.457435891762884, longitude: -73.64002758819389 },
      { latitude: 45.45748461055312, longitude: -73.64014947789609 },
      { latitude: 45.45762207844032, longitude: -73.64004506080833 },
      { latitude: 45.45772555532435, longitude: -73.6403142875382 },
      { latitude: 45.457754481782935, longitude: -73.64029148876158 },
      { latitude: 45.457830619270254, longitude: -73.6404852780335 },
      { latitude: 45.457649993955485, longitude: -73.64063207330305 },
      { latitude: 45.45759613889239, longitude: -73.64050232144196 },
      { latitude: 45.457333342167544, longitude: -73.64071711930137 },
      { latitude: 45.45730300443521, longitude: -73.64064000579219 },
      { latitude: 45.457278844731654, longitude: -73.64065825111975 }
    ]
  },
  {
    id: BuildingId.CC,
    campusId: CampusId.Loyola,
    displayName: "Central Building",
    address: "7141 Rue Sherbrooke O, Montréal, QC H4B 2B5",
    departments: [],
    services: [
      {
        id: 1,
        title: "Concordia Student Union",
        link: "https://www.csu.qc.ca/"
      },
      {
        id: 2,
        title: "Loyola College for Diversity and Sustainability and Loyola",
        link:
          "http://www.concordia.ca/artsci/loyola-college-diversity-sustainability.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.4582210090064, longitude: -73.63990409634714 },
      { latitude: 45.45808098839002, longitude: -73.6400138501139 },
      { latitude: 45.45817243893954, longitude: -73.64025568407473 },
      { latitude: 45.45816726514086, longitude: -73.64026071321663 },
      { latitude: 45.458281794118896, longitude: -73.64056346755919 },
      { latitude: 45.45829137006854, longitude: -73.64056578314565 },
      { latitude: 45.45837979473164, longitude: -73.64079433737375 },
      { latitude: 45.458439459415736, longitude: -73.6407563432626 },
      { latitude: 45.458525060994866, longitude: -73.64068592872893 },
      { latitude: 45.45843851793193, longitude: -73.64045123544012 },
      { latitude: 45.458444162048806, longitude: -73.64044452991759 },
      { latitude: 45.45832970732531, longitude: -73.64014322207142 },
      { latitude: 45.45832124113266, longitude: -73.64014154569078 },
      { latitude: 45.45831700803585, longitude: -73.6401304815786 },
      { latitude: 45.45830995287378, longitude: -73.64011572942901 },
      { latitude: 45.45829819426839, longitude: -73.6400855545776 },
      { latitude: 45.45829490185843, longitude: -73.64007348463703 },
      { latitude: 45.458288081865796, longitude: -73.64005739138294 },
      { latitude: 45.45828220256112, longitude: -73.64004465089012 },
      { latitude: 45.45828079152792, longitude: -73.64003392205406 },
      { latitude: 45.45827256050015, longitude: -73.64001749352384 },
      { latitude: 45.458268562571924, longitude: -73.64000777051616 },
      { latitude: 45.45826527016024, longitude: -73.63999402419496 },
      { latitude: 45.45825774464711, longitude: -73.63997893676925 },
      { latitude: 45.45825304120092, longitude: -73.63996720210481 },
      { latitude: 45.45824998396066, longitude: -73.63995513216425 },
      { latitude: 45.45824316396258, longitude: -73.63993870363403 },
      { latitude: 45.458228583274256, longitude: -73.63989914105106 }
    ]
  },
  {
    id: BuildingId.AD,
    campusId: CampusId.Loyola,
    displayName: "Administration Building",
    address: "7141 Rue Sherbrooke O, Montréal, QC H4B 2B5",
    departments: [
      {
        id: 1,
        title: "Faculty of Arts & Science",
        link: "http://www.concordia.ca/artsci.html"
      }
    ],
    services: [
      {
        id: 1,
        title: "Welcome Crew Office",
        link:
          "http://www.concordia.ca/content/concordia/en/students/success/mentoring.html"
      },
      {
        id: 2,
        title: "Centre for Teaching & Learning",
        link: "http://www.concordia.ca/content/concordia/en/offices/ctl.html"
      },
      {
        id: 3,
        title: "Loyola International College",
        link:
          "http://www.concordia.ca/content/concordia/en/artsci/loyola-college-diversity-sustainability.html"
      },
      {
        id: 4,
        title: "Provost and VP, Academic",
        link: "http://www.concordia.ca/content/concordia/en/provost.html"
      },
      {
        id: 5,
        title: "Dean of Students",
        link:
          "http://www.concordia.ca/content/concordia/en/offices/dean-students.html"
      },
      {
        id: 6,
        title: "Concordia Multi-Faith and Spirituality Centre",
        link:
          "http://www.concordia.ca/content/concordia/en/students/spirituality"
      },
      {
        id: 7,
        title: "Advocacy & Support Services",
        link:
          "http://www.concordia.ca/content/concordia/en/offices/advocacy.html"
      },
      {
        id: 8,
        title: "Access Centre for Students with Disabilities",
        link: "http://www.concordia.ca/content/concordia/en/offices/acsd.html"
      },
      {
        id: 9,
        title: "Counselling and Development",
        link: "http://www.concordia.ca/content/concordia/en/offices/cdev.html"
      },
      {
        id: 10,
        title: "Health Services",
        link:
          "http://www.concordia.ca/content/concordia/en/students/health.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.457798967810064, longitude: -73.63982640602099 },
      { latitude: 45.45782083900776, longitude: -73.63980930693852 },
      { latitude: 45.45782342592305, longitude: -73.6397965664457 },
      { latitude: 45.45784953024349, longitude: -73.63977577932583 },
      { latitude: 45.457861524116396, longitude: -73.6397791320871 },
      { latitude: 45.45787539937795, longitude: -73.63976739742266 },
      { latitude: 45.45790134433533, longitude: -73.6398090390331 },
      { latitude: 45.45790604781092, longitude: -73.63980434516732 },
      { latitude: 45.45792415618814, longitude: -73.63982882032458 },
      { latitude: 45.45802285781523, longitude: -73.63975364056668 },
      { latitude: 45.458022387468645, longitude: -73.63974291173062 },
      { latitude: 45.45800051634914, longitude: -73.63968256202779 },
      { latitude: 45.45800310325619, longitude: -73.63967987981877 },
      { latitude: 45.45798287834333, longitude: -73.63962355342946 },
      { latitude: 45.45804016157582, longitude: -73.63958072648335 },
      { latitude: 45.45806273819933, longitude: -73.63963403538752 },
      { latitude: 45.45809390818967, longitude: -73.63968929552539 },
      { latitude: 45.458106607529366, longitude: -73.63968963080151 },
      { latitude: 45.458202321048105, longitude: -73.6396151166356 },
      { latitude: 45.45819032724769, longitude: -73.63958125374678 },
      { latitude: 45.45820043966783, longitude: -73.63957387767199 },
      { latitude: 45.458183507242374, longitude: -73.63952593318585 },
      { latitude: 45.45820890587862, longitude: -73.63950682244662 },
      { latitude: 45.45821078725862, longitude: -73.63949374667767 },
      { latitude: 45.4582373617445, longitude: -73.63947396538619 },
      { latitude: 45.458247920754154, longitude: -73.63947657124241 },
      { latitude: 45.45825826833626, longitude: -73.63946785406311 },
      { latitude: 45.45827096763896, longitude: -73.63946852461537 },
      { latitude: 45.458382504321506, longitude: -73.63976605715463 },
      { latitude: 45.45831853756086, longitude: -73.6398156780214 },
      { latitude: 45.458309365850276, longitude: -73.63982204826782 },
      { latitude: 45.45829807758903, longitude: -73.63982338937232 },
      { latitude: 45.458278793470846, longitude: -73.63977276267717 },
      { latitude: 45.458165675522814, longitude: -73.6398606050224 },
      { latitude: 45.45816732173157, longitude: -73.63986898692558 },
      { latitude: 45.45815062446898, longitude: -73.63988407435129 },
      { latitude: 45.45811111543349, longitude: -73.63991357865045 },
      { latitude: 45.458102884380956, longitude: -73.63992028417299 },
      { latitude: 45.458089714694374, longitude: -73.63991994889686 },
      { latitude: 45.45797471497923, longitude: -73.64000712068984 },
      { latitude: 45.45799705645555, longitude: -73.64006814094493 },
      { latitude: 45.45793732238327, longitude: -73.64011474432657 },
      { latitude: 45.45793426512592, longitude: -73.6401164207072 },
      { latitude: 45.457923447136956, longitude: -73.64012346150587 },
      { latitude: 45.45791121810349, longitude: -73.64012413205812 }
    ]
  },
  {
    id: BuildingId.PS,
    campusId: CampusId.Loyola,
    displayName: "Physical Services building",
    address: "7141 Rue Sherbrooke O, Montréal, QC H4B 2B5",
    departments: [],
    services: [
      {
        id: 1,
        title: "Environmental Health and Safety",
        link: "http://www.concordia.ca/content/concordia/en/campus-life/safety"
      },
      {
        id: 2,
        title: "Facilities Management",
        link: "http://www.concordia.ca/content/concordia/en/offices/facilities"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.459286134448504, longitude: -73.63945527416735 },
      { latitude: 45.45957970516812, longitude: -73.63922716977262 },
      { latitude: 45.45962720883916, longitude: -73.63934317531252 },
      { latitude: 45.45966788337612, longitude: -73.63931581811165 },
      { latitude: 45.45998667713779, longitude: -73.64013478615315 },
      { latitude: 45.45986392082716, longitude: -73.64022832819255 },
      { latitude: 45.45985286804278, longitude: -73.64020284720691 },
      { latitude: 45.45970601643625, longitude: -73.64031341350746 },
      { latitude: 45.45963837834531, longitude: -73.64013914619532 },
      { latitude: 45.45960823874637, longitude: -73.64015853764441 },
      { latitude: 45.45941306539998, longitude: -73.63965570433571 },
      { latitude: 45.45944363716442, longitude: -73.63963089390232 },
      { latitude: 45.45940443495661, longitude: -73.63952956323371 },
      { latitude: 45.4593331791535, longitude: -73.63957985465274 }
    ]
  },
  {
    id: BuildingId.RA,
    campusId: CampusId.Loyola,
    displayName: "Recreation and Athletic Complex",
    address: "7200 Sherbrooke St W, Montreal, QC, H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Ed Meagher Arena",
        link:
          "http://www.concordia.ca/content/concordia/en/campus-life/recreation/facilities/arena.html"
      },
      {
        id: 2,
        title: "Gymnasium",
        link:
          "http://www.concordia.ca/content/concordia/en/campus-life/recreation/facilities/athletic-complex.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45672955099704, longitude: -73.63710111804322 },
      { latitude: 45.457032460316356, longitude: -73.6378709120305 },
      { latitude: 45.45696661060274, longitude: -73.6379258973153 },
      { latitude: 45.45701082399037, longitude: -73.63805598445252 },
      { latitude: 45.45684714021175, longitude: -73.63818875379876 },
      { latitude: 45.456793519560236, longitude: -73.63806671328858 },
      { latitude: 45.456692863111876, longitude: -73.6381431562455 },
      { latitude: 45.45638995196833, longitude: -73.6373666567357 }
    ]
  },
  {
    id: BuildingId.PC,
    campusId: CampusId.Loyola,
    displayName: "PERFORM Centre",
    address: "7200 Sherbrooke St W Montreal, QC H4B 1R2",
    departments: [],
    services: [
      {
        id: 1,
        title: "PERFORM Centre",
        link:
          "http://www.concordia.ca/content/concordia/en/research/perform.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45668234663006, longitude: -73.63698552999276 },
      { latitude: 45.45702100318805, longitude: -73.637839813564 },
      { latitude: 45.457286530811096, longitude: -73.63762780116437 },
      { latitude: 45.45694975726986, longitude: -73.63677754090665 }
    ]
  },
  {
    id: BuildingId.GE,
    campusId: CampusId.Loyola,
    displayName: "Centre for Structural and Functional Genomics",
    address: "7141 Rue Sherbrooke Ouest, Montréal, H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Centre for Structural and Functional Genomics",
        link: "http://www.concordia.ca/content/concordia/en/research/genomics"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45687108538196, longitude: -73.64062720780782 },
      { latitude: 45.45689366247353, longitude: -73.64060977344923 },
      { latitude: 45.45679770977193, longitude: -73.64034825807028 },
      { latitude: 45.457039950976636, longitude: -73.64016422424295 },
      { latitude: 45.457142017867206, longitude: -73.64044204482308 },
      { latitude: 45.45713072937225, longitude: -73.64045143255463 },
      { latitude: 45.457174001923924, longitude: -73.64056978502741 },
      { latitude: 45.456945143117935, longitude: -73.64074044057598 },
      { latitude: 45.45691762731151, longitude: -73.64067103841772 },
      { latitude: 45.45689246327163, longitude: -73.64068813750019 }
    ]
  },
  {
    id: BuildingId.VL,
    campusId: CampusId.Loyola,
    displayName: "Vanier Library Building",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Library",
        link: "https://library.concordia.ca/"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.459105293193936, longitude: -73.63784475202735 },
      { latitude: 45.45907352552345, longitude: -73.63786745678321 },
      { latitude: 45.459080110252216, longitude: -73.63788690279857 },
      { latitude: 45.45905070642392, longitude: -73.63791118855119 },
      { latitude: 45.459037066620645, longitude: -73.63789341891646 },
      { latitude: 45.45890012398125, longitude: -73.638000539474 },
      { latitude: 45.45890906042617, longitude: -73.6380253499074 },
      { latitude: 45.45888272142654, longitude: -73.63804747813177 },
      { latitude: 45.45889965364199, longitude: -73.63809844010305 },
      { latitude: 45.45886908158261, longitude: -73.63812459164095 },
      { latitude: 45.458883662105315, longitude: -73.63817421250772 },
      { latitude: 45.458852149357966, longitude: -73.63820036404562 },
      { latitude: 45.45886296716874, longitude: -73.63823590331506 },
      { latitude: 45.45870297087386, longitude: -73.63836273547967 },
      { latitude: 45.458715670076415, longitude: -73.63839827474912 },
      { latitude: 45.458630067989084, longitude: -73.638466671079 },
      { latitude: 45.45882814715482, longitude: -73.63898232682858 },
      { latitude: 45.458838877229255, longitude: -73.63898025848826 },
      { latitude: 45.45885345775975, longitude: -73.63902049162348 },
      { latitude: 45.45905124551588, longitude: -73.63887095684129 },
      { latitude: 45.459089813217304, longitude: -73.63897086912709 },
      { latitude: 45.45920013698472, longitude: -73.6388905277967 },
      { latitude: 45.45916584385225, longitude: -73.63878600346904 },
      { latitude: 45.45922040292101, longitude: -73.63892681944232 },
      { latitude: 45.45915432059392, longitude: -73.63898046362262 },
      { latitude: 45.45913597744311, longitude: -73.63895095932345 },
      { latitude: 45.459077697356015, longitude: -73.63899642213094 },
      { latitude: 45.45909462951291, longitude: -73.63904000802744 },
      { latitude: 45.45899107064134, longitude: -73.63912461808137 },
      { latitude: 45.45910821250236, longitude: -73.63941912732896 },
      { latitude: 45.45921497901556, longitude: -73.63933799050626 },
      { latitude: 45.45923285180418, longitude: -73.63938291750726 },
      { latitude: 45.45931016376581, longitude: -73.63932567799975 },
      { latitude: 45.45927112587896, longitude: -73.63922207767655 },
      { latitude: 45.459319294715414, longitude: -73.63918210664568 },
      { latitude: 45.459334110289504, longitude: -73.6392209986764 },
      { latitude: 45.459352688543575, longitude: -73.6392136226016 },
      { latitude: 45.459360449078275, longitude: -73.63923206278858 },
      { latitude: 45.459489709039026, longitude: -73.63913564222342 },
      { latitude: 45.459139918726656, longitude: -73.6381965146999 },
      { latitude: 45.459219640833055, longitude: -73.63813113585516 },
      { latitude: 45.459143563206176, longitude: -73.63793809836548 },
      { latitude: 45.45913580264163, longitude: -73.63793943946999 },
      { latitude: 45.459129217919354, longitude: -73.63792066400688 },
      { latitude: 45.459134391629796, longitude: -73.6379146290366 }
    ]
  },
  {
    id: BuildingId.BH,
    campusId: CampusId.Loyola,
    displayName: "BH Annex",
    address: "3500 Avenue BelmoreMontréal, QC H4B 2B9",
    departments: [],
    services: [
      {
        id: 1,
        title: "CPE Les P'tits Profs Daycare",
        link: "https://lesptitsprofs.wordpress.com/"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45982068669079, longitude: -73.63916645247663 },
      { latitude: 45.459758628539575, longitude: -73.6390162122033 },
      { latitude: 45.459664091711765, longitude: -73.63909064350347 },
      { latitude: 45.45972382395475, longitude: -73.63924419996957 }
    ]
  },
  {
    id: BuildingId.BB,
    campusId: CampusId.Loyola,
    displayName: "BB Annex",
    address: "3502 Avenue BelmoreMontréal, QC H4B 2B9",
    departments: [],
    services: [
      {
        id: 1,
        title: "CPE Les P'tits Profs Daycare",
        link: "https://lesptitsprofs.wordpress.com/"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.459847629799036, longitude: -73.63923764922974 },
      { latitude: 45.45975826677363, longitude: -73.63931878605244 },
      { latitude: 45.45981611759046, longitude: -73.63945624926446 },
      { latitude: 45.45990030688451, longitude: -73.63937578299401 }
    ]
  },
  {
    id: BuildingId.FC,
    campusId: CampusId.Loyola,
    displayName: "F.C Smith Building",
    address:
      "7141 Sherbrooke St. West F.C. Smith Building, Montréal, QC H4B 2B5",
    departments: [],
    services: [
      {
        id: 1,
        title: "F.C. Smith Auditorium",
        link: "http://www.concordia.ca/arts/venues/fc-smith-auditorium.html"
      },
      {
        id: 2,
        title: "Cazalet Theatre",
        link: "http://www.concordia.ca/arts/venues/cazalet.html"
      },
      {
        id: 3,
        title: "Concordia Multi-Faith and Spirituality Centre",
        link: "http://www.concordia.ca/students/spirituality.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45838194827393, longitude: -73.6390384691037 },
      { latitude: 45.45839251355503, longitude: -73.63907076867876 },
      { latitude: 45.45841485486578, longitude: -73.63905534597693 },
      { latitude: 45.45842708379005, longitude: -73.6390861913806 },
      { latitude: 45.45841085694768, longitude: -73.63910060825405 },
      { latitude: 45.45843061136385, longitude: -73.6391549229866 },
      { latitude: 45.45842520241727, longitude: -73.63916028740464 },
      { latitude: 45.45843155205017, longitude: -73.6391810745245 },
      { latitude: 45.45841838244038, longitude: -73.63919180336056 },
      { latitude: 45.45844284028471, longitude: -73.63925517054854 },
      { latitude: 45.45845671540321, longitude: -73.63924779447375 },
      { latitude: 45.45847247188957, longitude: -73.63928869816122 },
      { latitude: 45.458469179489796, longitude: -73.63929171564637 },
      { latitude: 45.458474588432175, longitude: -73.63930445613919 },
      { latitude: 45.45847835117441, longitude: -73.63930244448242 },
      { latitude: 45.45849645936782, longitude: -73.6393507242447 },
      { latitude: 45.45849340214078, longitude: -73.63935374172983 },
      { latitude: 45.45849740005303, longitude: -73.63936514111815 },
      { latitude: 45.458501397965016, longitude: -73.63936279418526 },
      { latitude: 45.458518095123765, longitude: -73.63940604480563 },
      { latitude: 45.458510569644375, longitude: -73.6394107386714 },
      { latitude: 45.45851409721296, longitude: -73.63942213805971 },
      { latitude: 45.458486582172135, longitude: -73.63944225462733 },
      { latitude: 45.45849951659471, longitude: -73.63947980555353 },
      { latitude: 45.45849763522433, longitude: -73.63948215248642 },
      { latitude: 45.45851154981018, longitude: -73.63951942442304 },
      { latitude: 45.45852189734389, longitude: -73.63951808331853 },
      { latitude: 45.458526835938876, longitude: -73.63951372472889 },
      { latitude: 45.458535302100664, longitude: -73.63953954099065 },
      { latitude: 45.45852989316411, longitude: -73.63956066338665 },
      { latitude: 45.45853906483884, longitude: -73.63958647964841 },
      { latitude: 45.45855717301275, longitude: -73.6395938557232 },
      { latitude: 45.45858186596782, longitude: -73.63957843302137 },
      { latitude: 45.458588921095874, longitude: -73.63959586737997 },
      { latitude: 45.45860020929888, longitude: -73.63959318517095 },
      { latitude: 45.458626709299864, longitude: -73.63966482833277 },
      { latitude: 45.45866433660923, longitude: -73.63968192741524 },
      { latitude: 45.45874717642955, longitude: -73.63962358936917 },
      { latitude: 45.45875728874981, longitude: -73.63956960991274 },
      { latitude: 45.45872977382764, longitude: -73.6394955138887 },
      { latitude: 45.45873565308567, longitude: -73.63948947891842 },
      { latitude: 45.458740826832184, longitude: -73.63948411450039 },
      { latitude: 45.45871683945788, longitude: -73.63941986960529 },
      { latitude: 45.45872554076151, longitude: -73.63941148770212 },
      { latitude: 45.45871354707237, longitude: -73.63936890763401 },
      { latitude: 45.458724129739394, longitude: -73.63935918462633 },
      { latitude: 45.458722953887595, longitude: -73.63935080272316 },
      { latitude: 45.458745364360475, longitude: -73.63933364375971 },
      { latitude: 45.45872937278005, longitude: -73.63929441645287 },
      { latitude: 45.458707031593875, longitude: -73.63931084498309 },
      { latitude: 45.45870397437825, longitude: -73.63930413946055 },
      { latitude: 45.45869809511695, longitude: -73.63930246307991 },
      { latitude: 45.458688923468074, longitude: -73.6393098391547 },
      { latitude: 45.45867951664718, longitude: -73.6392897225871 },
      { latitude: 45.45866987465414, longitude: -73.63928871675871 },
      { latitude: 45.458667522948296, longitude: -73.63929072841547 },
      { latitude: 45.45860932668896, longitude: -73.63913580321548 },
      { latitude: 45.45861920386316, longitude: -73.63912708603618 },
      { latitude: 45.45862508313269, longitude: -73.63909523480413 },
      { latitude: 45.45861285425136, longitude: -73.63906640105722 },
      { latitude: 45.45859051301906, longitude: -73.6390573486018 },
      { latitude: 45.45858204686556, longitude: -73.63905801915405 },
      { latitude: 45.45857616759153, longitude: -73.63904896669862 },
      { latitude: 45.45856887729091, longitude: -73.6390486314225 },
      { latitude: 45.45856064630518, longitude: -73.63905433111665 },
      { latitude: 45.45854042159232, longitude: -73.63900269859312 },
      { latitude: 45.458536894025386, longitude: -73.63900169276474 },
      { latitude: 45.4585220782418, longitude: -73.63901342742918 },
      { latitude: 45.45850927765965, longitude: -73.63898268782555 },
      { latitude: 45.45852973755486, longitude: -73.63896491819082 },
      { latitude: 45.45851844933774, longitude: -73.6389347433394 }
    ]
  },
  {
    id: BuildingId.RF,
    campusId: CampusId.Loyola,
    displayName: "Loyola Jesuit Hall and Conference Centre",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Loyola Jesuit Hall and Conference Centre",
        link:
          "http://www.concordia.ca/hospitality/hospitality-venues/loyola-jesuit-hall-conference-centre.html"
      },
      {
        id: 2,
        title: "Conference services",
        link: "http://www.concordia.ca/hospitality.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45851577362767, longitude: -73.64077321086462 },
      { latitude: 45.45841441473864, longitude: -73.64085300658282 },
      { latitude: 45.45847273727709, longitude: -73.64100656304892 },
      { latitude: 45.45838219621374, longitude: -73.64107831214007 },
      { latitude: 45.45842828986416, longitude: -73.64119943031822 },
      { latitude: 45.45851154054546, longitude: -73.64114075699602 },
      { latitude: 45.4585461107075, longitude: -73.64122926989351 },
      { latitude: 45.45852541564707, longitude: -73.64124603369986 },
      { latitude: 45.45853646869166, longitude: -73.6412765438274 },
      { latitude: 45.45848473101745, longitude: -73.6413164416865 },
      { latitude: 45.458508248147965, longitude: -73.64137444445645 },
      { latitude: 45.45864148218068, longitude: -73.64127095796422 },
      { latitude: 45.458646420765184, longitude: -73.64128336318092 },
      { latitude: 45.45880838047977, longitude: -73.64115888621542 },
      { latitude: 45.45880414741952, longitude: -73.6411448046181 },
      { latitude: 45.45882296101818, longitude: -73.64112804081175 },
      { latitude: 45.4587867448352, longitude: -73.6410338282201 },
      { latitude: 45.458765814692896, longitude: -73.6410475745413 },
      { latitude: 45.45873497138751, longitude: -73.64096703127777 },
      { latitude: 45.45873967479353, longitude: -73.64096133158361 },
      { latitude: 45.458728170087646, longitude: -73.64093074512922 },
      { latitude: 45.458719939125146, longitude: -73.64090157610619 },
      { latitude: 45.458706769582726, longitude: -73.64087408346379 },
      { latitude: 45.45869994963988, longitude: -73.6408543021723 },
      { latitude: 45.458703006855735, longitude: -73.64085128468716 },
      { latitude: 45.45868348770552, longitude: -73.64080501658165 },
      { latitude: 45.458591300784214, longitude: -73.6408767656728 },
      { latitude: 45.45853875633943, longitude: -73.64075525128395 },
      { latitude: 45.45849125175137, longitude: -73.64079380803854 },
      { latitude: 45.45846350152795, longitude: -73.64081358933002 },
      { latitude: 45.4584430416087, longitude: -73.64083001786024 }
    ]
  },
  {
    id: BuildingId.PY,
    campusId: CampusId.Loyola,
    displayName: "Psychology Building",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [
      {
        id: 1,
        title: "Psychology",
        link: "http://www.concordia.ca/artsci/psychology.html"
      },
      {
        id: 2,
        title: "Centre for Clinical Research in Health (CCRH)",
        link: "http://www.concordia.ca/research/clinical-research-health.html"
      }
    ],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45884699152768, longitude: -73.64083336928228 },
      { latitude: 45.45918093171645, longitude: -73.64057855942586 },
      { latitude: 45.459198931638056, longitude: -73.64062421143421 },
      { latitude: 45.45920951421393, longitude: -73.64062287032971 },
      { latitude: 45.459240936889756, longitude: -73.64060022602146 },
      { latitude: 45.4592685719661, longitude: -73.64057846579686 },
      { latitude: 45.45928479856165, longitude: -73.64056471947566 },
      { latitude: 45.45928973708979, longitude: -73.64055868450538 },
      { latitude: 45.45924223313443, longitude: -73.64043326276477 },
      { latitude: 45.459247406834464, longitude: -73.64042789834674 },
      { latitude: 45.45922530102183, longitude: -73.6403712366813 },
      { latitude: 45.459218951478306, longitude: -73.64037157195743 },
      { latitude: 45.45912653026379, longitude: -73.64013352590736 },
      { latitude: 45.459119710371716, longitude: -73.64013319063123 },
      { latitude: 45.4590961934962, longitude: -73.64015196609434 },
      { latitude: 45.45909243079524, longitude: -73.64014559584793 },
      { latitude: 45.459055038940505, longitude: -73.64017476487096 },
      { latitude: 45.459056920292284, longitude: -73.6401814703935 },
      { latitude: 45.45902493730357, longitude: -73.64020695137914 },
      { latitude: 45.45902964068539, longitude: -73.64022170352872 },
      { latitude: 45.459001792287836, longitude: -73.64024296107387 },
      { latitude: 45.45899168001142, longitude: -73.64022016229724 },
      { latitude: 45.45898486010305, longitude: -73.64021982702111 },
      { latitude: 45.458756852066955, longitude: -73.640396832665 },
      { latitude: 45.45876390717309, longitude: -73.640417955061 },
      { latitude: 45.45873027782589, longitude: -73.64044611825565 },
      { latitude: 45.45879800684033, longitude: -73.64062475766991 },
      { latitude: 45.45879636064996, longitude: -73.64062676932667 },
      { latitude: 45.458821994180084, longitude: -73.64069428769645 },
      { latitude: 45.45880059371079, longitude: -73.64071105150279 },
      { latitude: 45.45881776112088, longitude: -73.64075597850379 },
      { latitude: 45.45883657471496, longitude: -73.64080291716155 }
    ]
  },
  {
    id: BuildingId.HA,
    campusId: CampusId.Loyola,
    displayName: "Hingston Hall, wing HA",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Student Residence",
        link:
          "http://www.concordia.ca/students/housing/residences/hingston-hall-ha.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45936746176055, longitude: -73.64149555898814 },
      { latitude: 45.45955622623087, longitude: -73.64197768605857 },
      { latitude: 45.459525654527496, longitude: -73.6420018259397 },
      { latitude: 45.45950025648438, longitude: -73.64194482899813 },
      { latitude: 45.45935962637198, longitude: -73.64205748177676 },
      { latitude: 45.45936244838437, longitude: -73.64206821061282 },
      { latitude: 45.45934034261684, longitude: -73.64208832718043 },
      { latitude: 45.45935962637198, longitude: -73.64214331246524 },
      { latitude: 45.45916114447931, longitude: -73.64230089224486 },
      { latitude: 45.45913762762112, longitude: -73.64224657751231 },
      { latitude: 45.459103763328045, longitude: -73.64227205849795 },
      { latitude: 45.45896258468963, longitude: -73.64190649745953 },
      { latitude: 45.45899503805213, longitude: -73.64187900481713 },
      { latitude: 45.45896916943134, longitude: -73.64181060848725 },
      { latitude: 45.45918928749818, longitude: -73.64163425324452 }
    ]
  },
  {
    id: BuildingId.HC,
    campusId: CampusId.Loyola,
    displayName: "Hingston Hall, wing HC",
    address: "7141 Sherbrooke St W, Montreal, Quebec H4B 1R6",
    departments: [],
    services: [
      {
        id: 1,
        title: "Student Residence",
        link:
          "http://www.concordia.ca/students/housing/residences/hingston-hall-ha.html"
      }
    ],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.459523959498206, longitude: -73.64202462121388 },
      { latitude: 45.45970080481985, longitude: -73.64188246413609 },
      { latitude: 45.459717736789635, longitude: -73.64191465064427 },
      { latitude: 45.45982591314328, longitude: -73.6418301610603 },
      { latitude: 45.45989646282729, longitude: -73.64200584575077 },
      { latitude: 45.45978640528163, longitude: -73.6421010641708 },
      { latitude: 45.459796752581404, longitude: -73.64213325067898 },
      { latitude: 45.459619907560686, longitude: -73.64227406665226 }
    ]
  },
  {
    id: BuildingId.SI,
    campusId: CampusId.Loyola,
    displayName: "St. Ignatius of Loyola Church",
    address: "4455 Rue West Broadway, Montréal, QC H4B 2A7",
    departments: [],
    services: [],
    location: { latitude: 0, longitude: 0 },
    boundingBox: [
      { latitude: 45.45763260915711, longitude: -73.64256805241634 },
      { latitude: 45.45756817119544, longitude: -73.64239840269614 },
      { latitude: 45.45758651485625, longitude: -73.64238230944206 },
      { latitude: 45.45762837600859, longitude: -73.64235213459064 },
      { latitude: 45.45762179111031, longitude: -73.64233201802303 },
      { latitude: 45.45763825335463, longitude: -73.64231659532119 },
      { latitude: 45.457634020206555, longitude: -73.64229983151485 },
      { latitude: 45.45764389755158, longitude: -73.64228977323104 },
      { latitude: 45.45765424524451, longitude: -73.64229446709682 },
      { latitude: 45.45768764005881, longitude: -73.64226965666343 },
      { latitude: 45.457678233070844, longitude: -73.64224283457328 },
      { latitude: 45.457727619740005, longitude: -73.64220126033355 },
      { latitude: 45.45772009415512, longitude: -73.64217913210918 },
      { latitude: 45.457774103050504, longitude: -73.64213408931174 },
      { latitude: 45.45776469607702, longitude: -73.64210391446032 },
      { latitude: 45.45783007451046, longitude: -73.64204959972777 },
      { latitude: 45.45782160824277, longitude: -73.64202344818987 },
      { latitude: 45.45785688434973, longitude: -73.64199394389071 },
      { latitude: 45.45788134243762, longitude: -73.64204892917552 },
      { latitude: 45.45794154691643, longitude: -73.64200601383128 },
      { latitude: 45.457972589825694, longitude: -73.64207825398802 },
      { latitude: 45.458008336184896, longitude: -73.64210105276464 },
      { latitude: 45.45805725221865, longitude: -73.6422365043199 },
      { latitude: 45.45804549356056, longitude: -73.64226265585779 },
      { latitude: 45.45809911302153, longitude: -73.64241084790586 },
      { latitude: 45.45811839720116, longitude: -73.64240078962206 },
      { latitude: 45.45816890452182, longitude: -73.64252164363852 },
      { latitude: 45.457968537049666, longitude: -73.64267855286589 },
      { latitude: 45.457961952191084, longitude: -73.6426812350749 },
      { latitude: 45.45791585815945, longitude: -73.64255584180346 },
      { latitude: 45.45793937552724, longitude: -73.6425363957881 },
      { latitude: 45.45792996858129, longitude: -73.64251225590696 },
      { latitude: 45.45792573545511, longitude: -73.64251426756373 },
      { latitude: 45.457909743642205, longitude: -73.64247805774203 },
      { latitude: 45.45785518330525, longitude: -73.64251963198176 },
      { latitude: 45.45784389495309, longitude: -73.64249415099611 },
      { latitude: 45.45779356768883, longitude: -73.64253438413134 },
      { latitude: 45.45777898688428, longitude: -73.64250353872767 },
      { latitude: 45.457738066541616, longitude: -73.64253170192232 },
      { latitude: 45.45772818921305, longitude: -73.64251158535471 },
      { latitude: 45.45766139961276, longitude: -73.6425638884305 },
      { latitude: 45.45765622576718, longitude: -73.64256590008726 },
      { latitude: 45.457654344368684, longitude: -73.64255986511698 },
      { latitude: 45.45763317863112, longitude: -73.64257662892332 },
      { latitude: 45.45763035653218, longitude: -73.64257528781881 }
    ]
  }
];

export const getBuildingById = (id: BuildingId): Building => {
  return Buildings.filter(building => building.id === id)[0];
};

// src/i18n.js
import { FcHome } from 'oh-vue-icons/icons'
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
  khm: {
    Home: 'ទំព័រដើម',
    About: 'អំពីខ្ញុំ',
    Services: 'សេវាកម្ម',
    Contact: 'ទំនាក់ទំនង',
    Projects: 'គម្រោង',
    intro: 'សួស្តី! ខ្ញុំគឺ',
    fName: 'ប៊ុណ្ណា',
    lName: 'សីហា',
    message: 'សួស្តី! ខ្ញុំឈ្មោះ សីហា ខ្ញុំជា Full Stack Developer មានមូលដ្ឋាននៅទីក្រុងភ្នំពេញ',
    about: "ខ្ញុំស្រលាញ់ការរចនា UI/UX ដោយមានការយកចិត្តទុកដាក់យ៉ាងខ្លាំងលើការបង្កើតបទពិសោធន៍អ្នកប្រើប្រាស់ពិសេស។ ខ្ញុំ​រីក​ចម្រើន​លើ​ការ​បំប្លែង​គំនិត​ស្មុគ្រ​ស្មាញ​ទៅ​ជា​ការ​រចនា​ដែល​មាន​លក្ខណៈ​វិចារណញាណ​និង​ទាក់​ទាញ។ ដោយមានភ្នែកមុតស្រួចសម្រាប់ព័ត៌មានលម្អិត និងវិធីសាស្រ្តផ្តោតលើអ្នកប្រើប្រាស់។ ខ្ញុំខិតខំផ្តល់នូវដំណោះស្រាយប្រកបដោយប្រសិទ្ធភាព ដែលធ្វើអោយអ្នកប្រើប្រាស់រីករាយ។ សូមសហការគ្នាដើម្បីនាំយកផលិតផលឌីជីថលរបស់អ្នកមកកាន់ជីវិត!"
  },
  en: {
    FcHome: 'Home',
    About: 'About',
    Services: 'Services',
    Contact: 'Contact',
    Projects: 'Projects',
    intro: 'HLLO! MY NAME IS',
    fName: 'BUNN',
    lName: 'SEYHA',
    message: "Hi! My name is Seyha, I'm Full Stack Developer based in Phnom Penh",
    about: "I am passionate and dedicated UI/UX designer with a strong focus on creation exceptioonal user experience. I thrive on tranforming complex ideas into intuitive and visually appealing designs. With a keen eye for detail and a user-centered approach. I strive to deliver impactful solutions that engage and delight users.Let's collaborate to bring your digital products to life!"
  }
}

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n